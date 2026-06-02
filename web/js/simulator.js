// ============================================
// Paper Trading Simulator
// ============================================

const SimulatorModule = (() => {
  let portfolio = null;
  let currentTicker = 'AAPL';
  let dataIndex = 0;
  let playInterval = null;
  let simChart = null;
  let orderSide = 'buy';
  let initialized = false;
  let controller = null;

  const DEFAULT_PORTFOLIO = {
    cash: 100000,
    startingCash: 100000,
    holdings: {},
    trades: [],
    portfolioHistory: [],
  };

  function init() {
    portfolio = loadPortfolio();
    if (!initialized) {
      controller = new SectionController();
      setupEventListeners();
      initialized = true;
    }
    loadSimChart();
    updateUI();
  }

  function loadPortfolio() {
    try {
      const saved = JSON.parse(localStorage.getItem('tq_portfolio'));
      if (saved && saved.cash !== undefined) return saved;
    } catch (e) {}
    return { ...DEFAULT_PORTFOLIO };
  }

  function savePortfolio() {
    localStorage.setItem('tq_portfolio', JSON.stringify(portfolio));
  }

  function setupEventListeners() {
    // Ticker selection
    controller.on(document.getElementById('simTicker'), 'change', (e) => {
      currentTicker = e.target.value;
      loadSimChart();
    });

    // Order side tabs
    document.querySelectorAll('.sim-order-form .tab').forEach(tab => {
      controller.on(tab, 'click', () => {
        document.querySelectorAll('.sim-order-form .tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        orderSide = tab.dataset.type;
        updateOrderButton();
      });
    });

    // Order type
    controller.on(document.getElementById('simOrderType'), 'change', (e) => {
      document.getElementById('simLimitGroup').classList.toggle('hidden', e.target.value !== 'limit');
    });

    // Shares input
    controller.on(document.getElementById('simShares'), 'input', updateOrderSummary);

    // Execute order
    controller.on(document.getElementById('simExecuteOrder'), 'click', executeOrder);

    // Playback controls
    controller.on(document.getElementById('simPlayPause'), 'click', togglePlayback);
    controller.on(document.getElementById('simStepForward'), 'click', () => stepForward(1));
    controller.on(document.getElementById('simStepBack'), 'click', () => stepBack(1));

    // Speed
    controller.on(document.getElementById('simSpeed'), 'change', () => {
      if (playInterval) {
        stopPlayback();
        startPlayback();
      }
    });
  }

  function loadSimChart() {
    const data = DataModule.getStockData(currentTicker);
    // Start with first 100 candles visible, user can advance
    dataIndex = Math.min(100, data.length);
    const visibleData = data.slice(0, dataIndex);

    if (simChart) ChartEngine.destroyChart('simChart');
    simChart = ChartEngine.createCandlestickChart('simChart', visibleData, { height: 400 });
    updateOrderSummary();
  }

  function stepForward(count = 1) {
    const data = DataModule.getStockData(currentTicker);
    for (let i = 0; i < count; i++) {
      if (dataIndex >= data.length) break;
      dataIndex++;
    }
    updateChart();
    checkLimitOrders();
    recordPortfolioValue();
  }

  function stepBack(count = 1) {
    for (let i = 0; i < count; i++) {
      if (dataIndex <= 10) break;
      dataIndex--;
    }
    updateChart();
  }

  function updateChart() {
    const data = DataModule.getStockData(currentTicker);
    const visibleData = data.slice(0, dataIndex);
    if (simChart) {
      simChart.candleSeries.setData(visibleData);
      if (simChart.volumeSeries) {
        simChart.volumeSeries.setData(visibleData.map(d => ({
          time: d.time,
          value: d.volume,
          color: d.close >= d.open ? 'rgba(0, 230, 118, 0.3)' : 'rgba(255, 23, 68, 0.3)',
        })));
      }
    }
    updateOrderSummary();
  }

  function getCurrentPrice() {
    const data = DataModule.getStockData(currentTicker);
    if (dataIndex <= 0 || dataIndex > data.length) return 0;
    return data[dataIndex - 1].close;
  }

  function getCurrentDate() {
    const data = DataModule.getStockData(currentTicker);
    if (dataIndex <= 0) return '';
    return data[dataIndex - 1].time;
  }

  function togglePlayback() {
    if (playInterval) {
      stopPlayback();
    } else {
      startPlayback();
    }
  }

  function startPlayback() {
    const speed = parseInt(document.getElementById('simSpeed').value);
    const interval = Math.max(50, 1000 / speed);
    playInterval = setInterval(() => {
      const data = DataModule.getStockData(currentTicker);
      if (dataIndex >= data.length) {
        stopPlayback();
        return;
      }
      stepForward(1);
    }, interval);

    // Update button to pause icon
    document.getElementById('simPlayPause').innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16"><rect x="3" y="2" width="4" height="12" fill="currentColor"/><rect x="9" y="2" width="4" height="12" fill="currentColor"/></svg>';
  }

  function stopPlayback() {
    clearInterval(playInterval);
    playInterval = null;
    document.getElementById('simPlayPause').innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16"><path d="M4 2l10 6-10 6V2z" fill="currentColor"/></svg>';
  }

  function updateOrderSummary() {
    const price = getCurrentPrice();
    const shares = parseInt(document.getElementById('simShares').value) || 0;
    const cost = price * shares;

    document.getElementById('simEstCost').textContent = formatCurrency(cost);
    document.getElementById('simCashAvail').textContent = formatCurrency(portfolio.cash);
    updateOrderButton();
  }

  function updateOrderButton() {
    const shares = parseInt(document.getElementById('simShares').value) || 0;
    const btn = document.getElementById('simExecuteOrder');
    btn.textContent = `${orderSide === 'buy' ? 'Buy' : 'Sell'} ${shares} shares`;
    btn.className = `btn ${orderSide === 'buy' ? 'btn-buy' : 'btn-sell'}`;
  }

  function executeOrder() {
    const price = getCurrentPrice();
    const shares = parseInt(document.getElementById('simShares').value) || 0;
    const orderType = document.getElementById('simOrderType').value;

    if (shares <= 0) return;

    if (orderType === 'limit') {
      const limitPrice = parseFloat(document.getElementById('simLimitPrice').value);
      if (!limitPrice) return;
      // Store pending limit order
      if (!portfolio.pendingOrders) portfolio.pendingOrders = [];
      portfolio.pendingOrders.push({
        ticker: currentTicker, side: orderSide, shares, limitPrice, date: getCurrentDate()
      });
      savePortfolio();
      return;
    }

    let sellAvgCost = 0;
    if (orderSide === 'buy') {
      const cost = price * shares;
      if (cost > portfolio.cash) {
        alert('Insufficient funds');
        return;
      }
      portfolio.cash -= cost;
      if (!portfolio.holdings[currentTicker]) {
        portfolio.holdings[currentTicker] = { shares: 0, avgCost: 0 };
      }
      const h = portfolio.holdings[currentTicker];
      const totalCost = h.avgCost * h.shares + cost;
      h.shares += shares;
      h.avgCost = totalCost / h.shares;
    } else {
      const h = portfolio.holdings[currentTicker];
      if (!h || h.shares < shares) {
        alert('Insufficient shares');
        return;
      }
      const revenue = price * shares;
      const costBasis = h.avgCost * shares;
      sellAvgCost = h.avgCost;
      portfolio.cash += revenue;
      h.shares -= shares;
      if (h.shares === 0) delete portfolio.holdings[currentTicker];
    }

    const trade = {
      date: getCurrentDate(),
      side: orderSide,
      ticker: currentTicker,
      shares,
      price,
      total: price * shares,
      pl: orderSide === 'sell' ? (price - sellAvgCost) * shares : null,
    };

    portfolio.trades.unshift(trade);
    savePortfolio();
    updateUI();
    LessonsModule.addActivity(`${orderSide === 'buy' ? 'Bought' : 'Sold'} ${shares} ${currentTicker} @ $${price.toFixed(2)}`);
  }

  function checkLimitOrders() {
    if (!portfolio.pendingOrders?.length) return;
    const price = getCurrentPrice();
    const remaining = [];

    portfolio.pendingOrders.forEach(order => {
      if (order.ticker !== currentTicker) { remaining.push(order); return; }
      const filled = (order.side === 'buy' && price <= order.limitPrice) ||
                     (order.side === 'sell' && price >= order.limitPrice);
      if (filled) {
        // Execute at limit price
        if (order.side === 'buy') {
          const cost = order.limitPrice * order.shares;
          if (cost <= portfolio.cash) {
            portfolio.cash -= cost;
            if (!portfolio.holdings[order.ticker]) portfolio.holdings[order.ticker] = { shares: 0, avgCost: 0 };
            const h = portfolio.holdings[order.ticker];
            const totalCost = h.avgCost * h.shares + cost;
            h.shares += order.shares;
            h.avgCost = totalCost / h.shares;
            portfolio.trades.unshift({ date: getCurrentDate(), side: 'buy', ticker: order.ticker, shares: order.shares, price: order.limitPrice, total: cost });
          }
        }
      } else {
        remaining.push(order);
      }
    });

    portfolio.pendingOrders = remaining;
    savePortfolio();
    updateUI();
  }

  function recordPortfolioValue() {
    const totalValue = getPortfolioValue();
    portfolio.portfolioHistory.push({ date: getCurrentDate(), value: totalValue });
    if (portfolio.portfolioHistory.length > 1000) {
      portfolio.portfolioHistory = portfolio.portfolioHistory.slice(-500);
    }
  }

  function getPortfolioValue() {
    let total = portfolio.cash;
    for (const [ticker, holding] of Object.entries(portfolio.holdings)) {
      const data = DataModule.getStockData(ticker);
      const lastPrice = data[Math.min(dataIndex - 1, data.length - 1)]?.close || holding.avgCost;
      total += lastPrice * holding.shares;
    }
    return total;
  }

  function updateUI() {
    const totalValue = getPortfolioValue();
    const change = totalValue - portfolio.startingCash;
    const changePercent = (change / portfolio.startingCash) * 100;

    document.getElementById('simPortfolioValue').textContent = formatCurrency(totalValue);
    const changeEl = document.getElementById('simPortfolioChange');
    changeEl.textContent = `${change >= 0 ? '+' : ''}${formatCurrency(change)} (${changePercent.toFixed(2)}%)`;
    changeEl.style.color = change >= 0 ? 'var(--green)' : 'var(--red)';

    document.getElementById('simCashAvail').textContent = formatCurrency(portfolio.cash);

    // Holdings
    const holdingsList = document.getElementById('simHoldingsList');
    if (Object.keys(portfolio.holdings).length === 0) {
      holdingsList.innerHTML = '<div style="color: var(--text-muted); font-size: 12px; padding: 8px;">No positions</div>';
    } else {
      holdingsList.innerHTML = Object.entries(portfolio.holdings).map(([ticker, h]) => {
        const data = DataModule.getStockData(ticker);
        const currentPrice = data[Math.min(dataIndex - 1, data.length - 1)]?.close || h.avgCost;
        const pl = (currentPrice - h.avgCost) * h.shares;
        const plPercent = ((currentPrice - h.avgCost) / h.avgCost * 100).toFixed(1);
        return `
          <div class="holding-item">
            <div>
              <div class="holding-ticker">${ticker}</div>
              <div class="holding-shares">${h.shares} shares @ ${formatCurrency(h.avgCost)}</div>
            </div>
            <div class="holding-pl" style="color: ${pl >= 0 ? 'var(--green)' : 'var(--red)'}">
              ${pl >= 0 ? '+' : ''}${formatCurrency(pl)} (${plPercent}%)
            </div>
          </div>`;
      }).join('');
    }

    // Trade history
    const historyBody = document.getElementById('simTradeHistory');
    historyBody.innerHTML = portfolio.trades.slice(0, 20).map(t => `
      <tr>
        <td>${t.date}</td>
        <td style="color: ${t.side === 'buy' ? 'var(--green)' : 'var(--red)'}">${t.side.toUpperCase()}</td>
        <td>${t.ticker}</td>
        <td>${t.shares}</td>
        <td>${formatCurrency(t.price)}</td>
        <td>${formatCurrency(t.total)}</td>
        <td>${t.pl !== null ? (t.pl >= 0 ? '+' : '') + formatCurrency(t.pl) : '—'}</td>
      </tr>
    `).join('');

    updateOrderSummary();
  }

  function formatCurrency(n) {
    return '$' + Math.abs(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function cleanup() {
    stopPlayback();
    if (simChart) { ChartEngine.destroyChart('simChart'); simChart = null; }
    if (controller) { controller.destroy(); controller = null; }
    initialized = false;
  }

  return { init, cleanup, getPortfolioValue };
})();
