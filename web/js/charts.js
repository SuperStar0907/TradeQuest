// ============================================
// Chart Engine — Lightweight Charts + Plotly
// ============================================

const ChartEngine = (() => {
  const activeCharts = new Map();

  const theme = {
    background: '#0d1117',
    grid: '#1c2333',
    text: '#8b949e',
    up: '#00e676',
    down: '#ff1744',
  };

  function createCandlestickChart(containerId, data, options = {}) {
    const container = document.getElementById(containerId);
    if (!container) return null;

    // Auto-destroy previous chart in same container
    destroyChart(containerId);
    container.innerHTML = '';

    const chart = LightweightCharts.createChart(container, {
      width: container.clientWidth,
      height: options.height || 400,
      layout: {
        background: { type: 'solid', color: theme.background },
        textColor: theme.text,
        fontFamily: "'Inter', sans-serif",
        fontSize: 12,
      },
      grid: {
        vertLines: { color: theme.grid },
        horzLines: { color: theme.grid },
      },
      crosshair: {
        mode: LightweightCharts.CrosshairMode.Normal,
        vertLine: { color: '#555e6c', width: 1, style: 2 },
        horzLine: { color: '#555e6c', width: 1, style: 2 },
      },
      rightPriceScale: {
        borderColor: theme.grid,
        scaleMargins: { top: 0.1, bottom: 0.2 },
      },
      timeScale: {
        borderColor: theme.grid,
        timeVisible: false,
        secondsVisible: false,
      },
    });

    const candleSeries = chart.addCandlestickSeries({
      upColor: theme.up,
      downColor: theme.down,
      borderDownColor: theme.down,
      borderUpColor: theme.up,
      wickDownColor: theme.down,
      wickUpColor: theme.up,
    });
    candleSeries.setData(data);

    const volumeSeries = chart.addHistogramSeries({
      priceFormat: { type: 'volume' },
      priceScaleId: 'volume',
    });
    chart.priceScale('volume').applyOptions({
      scaleMargins: { top: 0.8, bottom: 0 },
    });
    volumeSeries.setData(data.map(d => ({
      time: d.time,
      value: d.volume,
      color: d.close >= d.open ? 'rgba(0, 230, 118, 0.3)' : 'rgba(255, 23, 68, 0.3)',
    })));

    chart.timeScale().fitContent();

    // ResizeObserver wrapped in try/catch
    let resizeObserver = null;
    try {
      resizeObserver = new ResizeObserver(() => {
        try {
          chart.applyOptions({ width: container.clientWidth });
        } catch (e) { /* chart disposed */ }
      });
      resizeObserver.observe(container);
    } catch (e) { /* ResizeObserver not supported */ }

    const chartObj = {
      chart,
      candleSeries,
      volumeSeries,
      overlays: {},
      _resizeObserver: resizeObserver,
    };

    activeCharts.set(containerId, chartObj);
    return chartObj;
  }

  function createSparkline(containerId, data, options = {}) {
    const container = document.getElementById(containerId);
    if (!container) return null;

    destroyChart(containerId);
    container.innerHTML = '';

    const color = options.color || '#2196f3';
    const chart = LightweightCharts.createChart(container, {
      width: container.clientWidth,
      height: options.height || 40,
      layout: { background: { type: 'solid', color: 'transparent' }, textColor: 'transparent' },
      grid: { vertLines: { visible: false }, horzLines: { visible: false } },
      rightPriceScale: { visible: false },
      timeScale: { visible: false },
      crosshair: { vertLine: { visible: false }, horzLine: { visible: false } },
      handleScroll: false,
      handleScale: false,
    });

    const series = chart.addAreaSeries({
      lineColor: color,
      lineWidth: 1.5,
      topColor: color + '33',
      bottomColor: 'transparent',
      priceLineVisible: false,
      lastValueVisible: false,
      crosshairMarkerVisible: false,
    });

    const lineData = data.slice(-60).map(d => ({ time: d.time, value: d.close }));
    series.setData(lineData);
    chart.timeScale().fitContent();

    activeCharts.set(containerId, { chart, _resizeObserver: null, overlays: {} });
    return chart;
  }

  function addSMA(chartObj, data, period, color = '#2196f3') {
    const name = `sma-${period}`;
    if (chartObj.overlays[name]) {
      try { chartObj.chart.removeSeries(chartObj.overlays[name]); } catch (e) {}
    }
    const smaData = Indicators.sma(data, period);
    const series = chartObj.chart.addLineSeries({
      color,
      lineWidth: 2,
      priceLineVisible: false,
      lastValueVisible: false,
      crosshairMarkerVisible: false,
    });
    series.setData(smaData);
    chartObj.overlays[name] = series;
    return series;
  }

  function addEMA(chartObj, data, period, color = '#ff9800') {
    const name = `ema-${period}`;
    if (chartObj.overlays[name]) {
      try { chartObj.chart.removeSeries(chartObj.overlays[name]); } catch (e) {}
    }
    const emaData = Indicators.ema(data, period);
    const series = chartObj.chart.addLineSeries({
      color,
      lineWidth: 2,
      priceLineVisible: false,
      lastValueVisible: false,
      crosshairMarkerVisible: false,
    });
    series.setData(emaData);
    chartObj.overlays[name] = series;
    return series;
  }

  function addBollingerBands(chartObj, data, period = 20, stdDev = 2) {
    // Remove existing bollinger overlays
    ['bollinger-upper', 'bollinger-middle', 'bollinger-lower'].forEach(k => {
      if (chartObj.overlays[k]) {
        try { chartObj.chart.removeSeries(chartObj.overlays[k]); } catch (e) {}
        delete chartObj.overlays[k];
      }
    });

    const bb = Indicators.bollingerBands(data, period, stdDev);

    const middleSeries = chartObj.chart.addLineSeries({
      color: '#ab47bc', lineWidth: 1, priceLineVisible: false, lastValueVisible: false,
    });
    middleSeries.setData(bb.middle);

    const upperSeries = chartObj.chart.addLineSeries({
      color: 'rgba(171, 71, 188, 0.5)', lineWidth: 1, priceLineVisible: false, lastValueVisible: false,
    });
    upperSeries.setData(bb.upper);

    const lowerSeries = chartObj.chart.addLineSeries({
      color: 'rgba(171, 71, 188, 0.5)', lineWidth: 1, priceLineVisible: false, lastValueVisible: false,
    });
    lowerSeries.setData(bb.lower);

    chartObj.overlays['bollinger-upper'] = upperSeries;
    chartObj.overlays['bollinger-middle'] = middleSeries;
    chartObj.overlays['bollinger-lower'] = lowerSeries;
  }

  function removeOverlay(chartObj, name) {
    Object.keys(chartObj.overlays).forEach(k => {
      if (k.startsWith(name)) {
        try { chartObj.chart.removeSeries(chartObj.overlays[k]); } catch (e) {}
        delete chartObj.overlays[k];
      }
    });
  }

  function removeAllOverlays(chartObj) {
    Object.keys(chartObj.overlays).forEach(k => {
      try { chartObj.chart.removeSeries(chartObj.overlays[k]); } catch (e) {}
    });
    chartObj.overlays = {};
  }

  function createRSIChart(containerId, data, period = 14) {
    const container = document.getElementById(containerId);
    if (!container) return null;

    destroyChart(containerId);
    container.innerHTML = '';

    const chart = LightweightCharts.createChart(container, {
      width: container.clientWidth,
      height: 150,
      layout: {
        background: { type: 'solid', color: theme.background },
        textColor: theme.text,
        fontFamily: "'Inter', sans-serif",
        fontSize: 11,
      },
      grid: {
        vertLines: { color: theme.grid },
        horzLines: { color: theme.grid },
      },
      rightPriceScale: {
        borderColor: theme.grid,
        scaleMargins: { top: 0.05, bottom: 0.05 },
      },
      timeScale: { borderColor: theme.grid, visible: false },
    });

    const rsiData = Indicators.rsi(data, period);
    const rsiSeries = chart.addLineSeries({
      color: '#ab47bc', lineWidth: 2, priceLineVisible: false, lastValueVisible: true,
    });
    rsiSeries.setData(rsiData);

    // 70/30 horizontal lines
    const overbought = chart.addLineSeries({ color: 'rgba(255, 23, 68, 0.4)', lineWidth: 1, lineStyle: 2, priceLineVisible: false, lastValueVisible: false });
    const oversold = chart.addLineSeries({ color: 'rgba(0, 230, 118, 0.4)', lineWidth: 1, lineStyle: 2, priceLineVisible: false, lastValueVisible: false });

    const timeRange = rsiData.map(d => d.time);
    overbought.setData(timeRange.map(t => ({ time: t, value: 70 })));
    oversold.setData(timeRange.map(t => ({ time: t, value: 30 })));

    chart.timeScale().fitContent();

    let resizeObserver = null;
    try {
      resizeObserver = new ResizeObserver(() => {
        try { chart.applyOptions({ width: container.clientWidth }); } catch (e) {}
      });
      resizeObserver.observe(container);
    } catch (e) {}

    const chartObj = { chart, rsiSeries, overlays: {}, _resizeObserver: resizeObserver };
    activeCharts.set(containerId, chartObj);
    return chartObj;
  }

  function createMACDChart(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return null;

    destroyChart(containerId);
    container.innerHTML = '';

    const chart = LightweightCharts.createChart(container, {
      width: container.clientWidth,
      height: 150,
      layout: {
        background: { type: 'solid', color: theme.background },
        textColor: theme.text,
        fontFamily: "'Inter', sans-serif",
        fontSize: 11,
      },
      grid: {
        vertLines: { color: theme.grid },
        horzLines: { color: theme.grid },
      },
      rightPriceScale: { borderColor: theme.grid },
      timeScale: { borderColor: theme.grid, visible: false },
    });

    const macdData = Indicators.macd(data);

    // Histogram bars
    const histSeries = chart.addHistogramSeries({
      priceLineVisible: false,
      lastValueVisible: false,
    });
    histSeries.setData(macdData.histogram);

    // MACD line
    const macdSeries = chart.addLineSeries({
      color: '#2196f3', lineWidth: 2, priceLineVisible: false, lastValueVisible: false,
    });
    macdSeries.setData(macdData.macdLine);

    // Signal line
    const signalSeries = chart.addLineSeries({
      color: '#ff9800', lineWidth: 1, priceLineVisible: false, lastValueVisible: false,
    });
    signalSeries.setData(macdData.signalLine);

    chart.timeScale().fitContent();

    let resizeObserver = null;
    try {
      resizeObserver = new ResizeObserver(() => {
        try { chart.applyOptions({ width: container.clientWidth }); } catch (e) {}
      });
      resizeObserver.observe(container);
    } catch (e) {}

    const chartObj = { chart, overlays: {}, _resizeObserver: resizeObserver };
    activeCharts.set(containerId, chartObj);
    return chartObj;
  }

  async function createPayoffDiagram(containerId, strategies, currentPrice) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Lazy-load Plotly only when needed
    if (typeof Plotly === 'undefined') {
      container.innerHTML = '<div class="chart-loading">Loading diagram...</div>';
      await Loader.require('plotly');
    }

    const minPrice = currentPrice * 0.7;
    const maxPrice = currentPrice * 1.3;
    const prices = [];
    for (let p = minPrice; p <= maxPrice; p += 0.5) prices.push(Math.round(p * 100) / 100);

    const traces = [];
    const totalPayoff = prices.map(() => 0);

    strategies.forEach((strat) => {
      const payoff = prices.map(p => {
        let pl = 0;
        const multiplier = strat.type.startsWith('long') ? 1 : -1;
        const isCall = strat.type.includes('call');

        if (isCall) {
          pl = multiplier * (Math.max(p - strat.strike, 0) - strat.premium);
        } else {
          pl = multiplier * (Math.max(strat.strike - p, 0) - strat.premium);
        }
        return pl * 100; // per contract
      });

      payoff.forEach((v, i) => totalPayoff[i] += v);

      if (strategies.length > 1) {
        traces.push({
          x: prices, y: payoff, type: 'scatter', mode: 'lines',
          name: strat.type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()),
          line: { dash: 'dash', width: 1 },
          opacity: 0.5,
        });
      }
    });

    // Total P&L line
    traces.push({
      x: prices, y: totalPayoff, type: 'scatter', mode: 'lines',
      name: 'Total P&L',
      line: { color: '#2196f3', width: 3 },
    });

    // Zero line
    traces.push({
      x: [minPrice, maxPrice], y: [0, 0], type: 'scatter', mode: 'lines',
      name: 'Breakeven', line: { color: '#555e6c', width: 1, dash: 'dash' },
      showlegend: false,
    });

    // Shade profit/loss
    const profitX = [], profitY = [], lossX = [], lossY = [];
    prices.forEach((p, i) => {
      if (totalPayoff[i] >= 0) { profitX.push(p); profitY.push(totalPayoff[i]); }
      if (totalPayoff[i] <= 0) { lossX.push(p); lossY.push(totalPayoff[i]); }
    });
    traces.push({
      x: profitX, y: profitY, type: 'scatter', fill: 'tozeroy',
      fillcolor: 'rgba(0, 230, 118, 0.1)', line: { color: 'transparent' }, showlegend: false,
    });
    traces.push({
      x: lossX, y: lossY, type: 'scatter', fill: 'tozeroy',
      fillcolor: 'rgba(255, 23, 68, 0.1)', line: { color: 'transparent' }, showlegend: false,
    });

    // Find breakeven points
    const breakevens = [];
    for (let i = 1; i < totalPayoff.length; i++) {
      if ((totalPayoff[i - 1] < 0 && totalPayoff[i] >= 0) || (totalPayoff[i - 1] >= 0 && totalPayoff[i] < 0)) {
        breakevens.push(prices[i]);
      }
    }

    const annotations = breakevens.map(bp => ({
      x: bp, y: 0, text: `BE: $${bp.toFixed(0)}`, showarrow: true, arrowhead: 2, arrowcolor: theme.text,
      font: { color: '#e6edf3', size: 11 }, bgcolor: '#1c2333', bordercolor: '#2a3142',
    }));

    const layout = {
      paper_bgcolor: theme.background,
      plot_bgcolor: theme.background,
      font: { family: 'Inter, sans-serif', color: theme.text, size: 12 },
      margin: { t: 30, r: 30, b: 50, l: 60 },
      xaxis: { title: 'Stock Price at Expiration', gridcolor: theme.grid, zerolinecolor: '#2a3142' },
      yaxis: { title: 'Profit / Loss ($)', gridcolor: theme.grid, zerolinecolor: '#555e6c' },
      legend: { orientation: 'h', y: -0.15, font: { size: 11 } },
      annotations,
      showlegend: true,
    };

    Plotly.newPlot(containerId, traces, layout, { responsive: true, displayModeBar: false });
  }

  function destroyChart(containerId) {
    const existing = activeCharts.get(containerId);
    if (!existing) return;
    if (existing._resizeObserver) {
      try { existing._resizeObserver.disconnect(); } catch (e) {}
    }
    if (existing.chart) {
      try { existing.chart.remove(); } catch (e) {}
    }
    activeCharts.delete(containerId);
  }

  return {
    createCandlestickChart,
    createSparkline,
    addSMA,
    addEMA,
    addBollingerBands,
    removeOverlay,
    removeAllOverlays,
    createRSIChart,
    createMACDChart,
    createPayoffDiagram,
    destroyChart,
  };
})();
