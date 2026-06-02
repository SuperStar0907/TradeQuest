// ============================================
// Technical Indicators Module
// ============================================

const Indicators = (() => {

  function round(n, decimals = 2) {
    const factor = Math.pow(10, decimals);
    return Math.round(n * factor) / factor;
  }

  function sma(data, period) {
    const result = [];
    for (let i = 0; i < data.length; i++) {
      if (i < period - 1) continue;
      let sum = 0;
      for (let j = i - period + 1; j <= i; j++) {
        sum += data[j].close;
      }
      result.push({ time: data[i].time, value: round(sum / period) });
    }
    return result;
  }

  function ema(data, period) {
    const result = [];
    const k = 2 / (period + 1);
    let prevEma = null;

    for (let i = 0; i < data.length; i++) {
      if (i < period - 1) continue;
      if (prevEma === null) {
        let sum = 0;
        for (let j = i - period + 1; j <= i; j++) sum += data[j].close;
        prevEma = sum / period;
      } else {
        prevEma = data[i].close * k + prevEma * (1 - k);
      }
      result.push({ time: data[i].time, value: round(prevEma) });
    }
    return result;
  }

  function rsi(data, period = 14) {
    const result = [];
    const gains = [];
    const losses = [];

    for (let i = 1; i < data.length; i++) {
      const change = data[i].close - data[i - 1].close;
      gains.push(change > 0 ? change : 0);
      losses.push(change < 0 ? -change : 0);
    }

    let avgGain = 0, avgLoss = 0;
    for (let i = 0; i < period; i++) {
      avgGain += gains[i];
      avgLoss += losses[i];
    }
    avgGain /= period;
    avgLoss /= period;

    for (let i = period; i < gains.length; i++) {
      if (i === period) {
        const rs = avgLoss === 0 ? 100 : avgGain / avgLoss;
        const rsiVal = avgLoss === 0 ? 100 : 100 - (100 / (1 + rs));
        result.push({ time: data[i + 1].time, value: round(rsiVal) });
      }
      avgGain = (avgGain * (period - 1) + gains[i]) / period;
      avgLoss = (avgLoss * (period - 1) + losses[i]) / period;
      const rs = avgLoss === 0 ? 100 : avgGain / avgLoss;
      const rsiVal = avgLoss === 0 ? 100 : 100 - (100 / (1 + rs));
      result.push({ time: data[i + 1].time, value: round(rsiVal) });
    }
    return result;
  }

  function macd(data, fastPeriod = 12, slowPeriod = 26, signalPeriod = 9) {
    const fastEma = ema(data, fastPeriod);
    const slowEma = ema(data, slowPeriod);

    const fastByTime = new Map(fastEma.map(d => [d.time, d.value]));

    const macdLine = [];
    for (let i = 0; i < slowEma.length; i++) {
      const fastValue = fastByTime.get(slowEma[i].time);
      if (fastValue !== undefined) {
        macdLine.push({
          time: slowEma[i].time,
          close: round(fastValue - slowEma[i].value)
        });
      }
    }

    const signalLine = ema(macdLine, signalPeriod);
    const signalTimes = new Map(signalLine.map(d => [d.time, d.value]));

    const histogram = [];
    const macdResult = [];
    const signalResult = [];

    for (const point of macdLine) {
      const sig = signalTimes.get(point.time);
      if (sig !== undefined) {
        macdResult.push({ time: point.time, value: point.close });
        signalResult.push({ time: point.time, value: sig });
        histogram.push({
          time: point.time,
          value: round(point.close - sig),
          color: point.close - sig >= 0 ? '#26a69a' : '#ef5350'
        });
      }
    }

    return { macdLine: macdResult, signalLine: signalResult, histogram };
  }

  function bollingerBands(data, period = 20, stdDev = 2) {
    const middle = sma(data, period);
    const upper = [];
    const lower = [];

    const timeToIndex = new Map();
    for (let i = 0; i < data.length; i++) {
      timeToIndex.set(data[i].time, i);
    }

    for (let i = 0; i < middle.length; i++) {
      const mean = middle[i].value;
      const time = middle[i].time;
      const dataIdx = timeToIndex.get(time);
      if (dataIdx === undefined) continue;

      let sumSquares = 0;
      for (let j = dataIdx - period + 1; j <= dataIdx; j++) {
        sumSquares += Math.pow(data[j].close - mean, 2);
      }
      const sd = Math.sqrt(sumSquares / period);

      upper.push({ time, value: round(mean + stdDev * sd) });
      lower.push({ time, value: round(mean - stdDev * sd) });
    }

    return { upper, middle, lower };
  }

  function vwap(data) {
    const result = [];
    let cumulativeTPV = 0;
    let cumulativeVolume = 0;

    for (let i = 0; i < data.length; i++) {
      const typicalPrice = (data[i].high + data[i].low + data[i].close) / 3;
      cumulativeTPV += typicalPrice * data[i].volume;
      cumulativeVolume += data[i].volume;
      if (cumulativeVolume > 0) {
        result.push({ time: data[i].time, value: round(cumulativeTPV / cumulativeVolume) });
      }
    }
    return result;
  }

  // Black-Scholes helpers
  function normalCDF(x) {
    const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741;
    const a4 = -1.453152027, a5 = 1.061405429, p = 0.3275911;
    const sign = x < 0 ? -1 : 1;
    x = Math.abs(x) / Math.sqrt(2);
    const t = 1.0 / (1.0 + p * x);
    const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
    return 0.5 * (1.0 + sign * y);
  }

  function normalPDF(x) {
    return Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI);
  }

  function blackScholesCall(S, K, T, r, sigma) {
    if (T <= 0) return Math.max(S - K, 0);
    const d1 = (Math.log(S / K) + (r + sigma * sigma / 2) * T) / (sigma * Math.sqrt(T));
    const d2 = d1 - sigma * Math.sqrt(T);
    return S * normalCDF(d1) - K * Math.exp(-r * T) * normalCDF(d2);
  }

  function blackScholesPut(S, K, T, r, sigma) {
    if (T <= 0) return Math.max(K - S, 0);
    const d1 = (Math.log(S / K) + (r + sigma * sigma / 2) * T) / (sigma * Math.sqrt(T));
    const d2 = d1 - sigma * Math.sqrt(T);
    return K * Math.exp(-r * T) * normalCDF(-d2) - S * normalCDF(-d1);
  }

  function greeks(S, K, T, r, sigma) {
    if (T <= 0) {
      return { delta: S > K ? 1 : 0, gamma: 0, theta: 0, vega: 0, rho: 0 };
    }
    const d1 = (Math.log(S / K) + (r + sigma * sigma / 2) * T) / (sigma * Math.sqrt(T));
    const d2 = d1 - sigma * Math.sqrt(T);

    const delta = normalCDF(d1);
    const gamma = normalPDF(d1) / (S * sigma * Math.sqrt(T));
    const theta = (-S * normalPDF(d1) * sigma / (2 * Math.sqrt(T)) - r * K * Math.exp(-r * T) * normalCDF(d2)) / 365;
    const vega = S * normalPDF(d1) * Math.sqrt(T) / 100;
    const rho = K * T * Math.exp(-r * T) * normalCDF(d2) / 100;

    return {
      delta: round(delta, 4),
      gamma: round(gamma, 4),
      theta: round(theta, 4),
      vega: round(vega, 4),
      rho: round(rho, 4)
    };
  }

  return {
    sma, ema, rsi, macd, bollingerBands, vwap,
    blackScholesCall, blackScholesPut, greeks,
    normalCDF, normalPDF
  };
})();
