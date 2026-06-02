// ============================================
// Market Monitor — Extensive live dashboard
// ============================================

const MonitorModule = (() => {
  let refreshTimer = null;
  let initialized = false;
  let activeFilter = 'all';
  let activeRegion = 'all';
  let allQuotes = {};
  let controller = null;
  let fetchController = null;

  // Region tags: 'in' = India, 'global' = rest of world, 'both' = always show
  const TICKERS = {
    indices: [
      { symbol: '^NSEI', name: 'NIFTY 50', region: 'in' },
      { symbol: '^BSESN', name: 'BSE Sensex', region: 'in' },
      { symbol: '^NSEBANK', name: 'Bank NIFTY', region: 'in' },
      { symbol: '^GSPC', name: 'S&P 500', region: 'global' },
      { symbol: '^DJI', name: 'Dow Jones', region: 'global' },
      { symbol: '^IXIC', name: 'NASDAQ Comp.', region: 'global' },
      { symbol: '^RUT', name: 'Russell 2000', region: 'global' },
      { symbol: '^FTSE', name: 'FTSE 100', region: 'global' },
      { symbol: '^N225', name: 'Nikkei 225', region: 'global' },
      { symbol: '^HSI', name: 'Hang Seng', region: 'global' },
      { symbol: '^STOXX50E', name: 'Euro Stoxx 50', region: 'global' },
      { symbol: '^GDAXI', name: 'DAX', region: 'global' },
    ],
    stocks: [
      { symbol: 'RELIANCE.NS', name: 'Reliance', sector: 'Energy', region: 'in' },
      { symbol: 'TCS.NS', name: 'TCS', sector: 'IT', region: 'in' },
      { symbol: 'HDFCBANK.NS', name: 'HDFC Bank', sector: 'Finance', region: 'in' },
      { symbol: 'INFY.NS', name: 'Infosys', sector: 'IT', region: 'in' },
      { symbol: 'ICICIBANK.NS', name: 'ICICI Bank', sector: 'Finance', region: 'in' },
      { symbol: 'BHARTIARTL.NS', name: 'Bharti Airtel', sector: 'Telecom', region: 'in' },
      { symbol: 'SBIN.NS', name: 'SBI', sector: 'Finance', region: 'in' },
      { symbol: 'ITC.NS', name: 'ITC', sector: 'Consumer', region: 'in' },
      { symbol: 'KOTAKBANK.NS', name: 'Kotak Bank', sector: 'Finance', region: 'in' },
      { symbol: 'LT.NS', name: 'L&T', sector: 'Industrial', region: 'in' },
      { symbol: 'AAPL', name: 'Apple', sector: 'Tech', region: 'global' },
      { symbol: 'MSFT', name: 'Microsoft', sector: 'Tech', region: 'global' },
      { symbol: 'GOOG', name: 'Alphabet', sector: 'Tech', region: 'global' },
      { symbol: 'AMZN', name: 'Amazon', sector: 'Consumer', region: 'global' },
      { symbol: 'NVDA', name: 'NVIDIA', sector: 'Semis', region: 'global' },
      { symbol: 'META', name: 'Meta', sector: 'Tech', region: 'global' },
      { symbol: 'TSLA', name: 'Tesla', sector: 'Auto', region: 'global' },
      { symbol: 'ORCL', name: 'Oracle', sector: 'Tech', region: 'global' },
      { symbol: 'AVGO', name: 'Broadcom', sector: 'Semis', region: 'global' },
      { symbol: 'JPM', name: 'JPMorgan', sector: 'Finance', region: 'global' },
      { symbol: 'V', name: 'Visa', sector: 'Finance', region: 'global' },
      { symbol: 'UNH', name: 'UnitedHealth', sector: 'Health', region: 'global' },
      { symbol: 'JNJ', name: 'J&J', sector: 'Health', region: 'global' },
      { symbol: 'XOM', name: 'Exxon', sector: 'Energy', region: 'global' },
      { symbol: 'WMT', name: 'Walmart', sector: 'Consumer', region: 'global' },
      { symbol: 'NFLX', name: 'Netflix', sector: 'Media', region: 'global' },
      { symbol: 'AMD', name: 'AMD', sector: 'Semis', region: 'global' },
      { symbol: 'PLTR', name: 'Palantir', sector: 'Tech', region: 'global' },
    ],
    etfs: [
      { symbol: 'NIFTYBEES.NS', name: 'NIFTY BeES', region: 'in' },
      { symbol: 'BANKBEES.NS', name: 'Bank BeES', region: 'in' },
      { symbol: 'GOLDBEES.NS', name: 'Gold BeES', region: 'in' },
      { symbol: 'SPY', name: 'S&P 500 ETF', region: 'global' },
      { symbol: 'QQQ', name: 'NASDAQ 100 ETF', region: 'global' },
      { symbol: 'IWM', name: 'Russell 2000 ETF', region: 'global' },
      { symbol: 'DIA', name: 'Dow Jones ETF', region: 'global' },
      { symbol: 'XLF', name: 'Financials ETF', region: 'global' },
      { symbol: 'XLK', name: 'Technology ETF', region: 'global' },
      { symbol: 'XLE', name: 'Energy ETF', region: 'global' },
      { symbol: 'GLD', name: 'Gold ETF', region: 'global' },
      { symbol: 'TLT', name: '20+ Year Treasury ETF', region: 'global' },
    ],
    volatility: [
      { symbol: '^VIX', name: 'VIX (S&P 500 Vol)' },
      { symbol: '^VXN', name: 'VXN (NASDAQ Vol)' },
      { symbol: 'UVXY', name: 'Ultra VIX Short-Term' },
      { symbol: 'SVXY', name: 'Short VIX' },
    ],
    crypto: [
      { symbol: 'BTC-USD', name: 'Bitcoin' },
      { symbol: 'ETH-USD', name: 'Ethereum' },
      { symbol: 'SOL-USD', name: 'Solana' },
      { symbol: 'XRP-USD', name: 'XRP' },
      { symbol: 'DOGE-USD', name: 'Dogecoin' },
      { symbol: 'ADA-USD', name: 'Cardano' },
      { symbol: 'AVAX-USD', name: 'Avalanche' },
      { symbol: 'DOT-USD', name: 'Polkadot' },
      { symbol: 'MATIC-USD', name: 'Polygon' },
      { symbol: 'LINK-USD', name: 'Chainlink' },
    ],
    forex: [
      { symbol: 'INR=X', name: 'USD/INR', region: 'in' },
      { symbol: 'EURINR=X', name: 'EUR/INR', region: 'in' },
      { symbol: 'GBPINR=X', name: 'GBP/INR', region: 'in' },
      { symbol: 'EURUSD=X', name: 'EUR/USD', region: 'global' },
      { symbol: 'GBPUSD=X', name: 'GBP/USD', region: 'global' },
      { symbol: 'USDJPY=X', name: 'USD/JPY', region: 'global' },
      { symbol: 'USDCAD=X', name: 'USD/CAD', region: 'global' },
      { symbol: 'AUDUSD=X', name: 'AUD/USD', region: 'global' },
      { symbol: 'USDCHF=X', name: 'USD/CHF', region: 'global' },
      { symbol: 'USDCNY=X', name: 'USD/CNY', region: 'global' },
      { symbol: 'DX-Y.NYB', name: 'US Dollar Index', region: 'global' },
    ],
    commodities: [
      { symbol: 'GC=F', name: 'Gold' },
      { symbol: 'SI=F', name: 'Silver' },
      { symbol: 'CL=F', name: 'Crude Oil (WTI)' },
      { symbol: 'BZ=F', name: 'Brent Crude' },
      { symbol: 'NG=F', name: 'Natural Gas' },
      { symbol: 'HG=F', name: 'Copper' },
      { symbol: 'PL=F', name: 'Platinum' },
      { symbol: 'PA=F', name: 'Palladium' },
      { symbol: 'ZC=F', name: 'Corn' },
      { symbol: 'ZW=F', name: 'Wheat' },
      { symbol: 'ZS=F', name: 'Soybeans' },
      { symbol: 'KC=F', name: 'Coffee' },
    ],
    treasury: [
      { symbol: '^IRX', name: '3-Month Yield' },
      { symbol: '^FVX', name: '5-Year Yield' },
      { symbol: '^TNX', name: '10-Year Yield' },
      { symbol: '^TYX', name: '30-Year Yield' },
    ],
  };

  // Category -> card mapping for filtering
  const CATEGORY_CARDS = {
    all: ['heatmap', 'indices', 'movers', 'etfs', 'volatility', 'crypto', 'forex', 'commodities', 'treasury', 'stats'],
    stocks: ['heatmap', 'indices', 'movers', 'etfs', 'volatility', 'stats'],
    indices: ['heatmap', 'indices', 'etfs', 'stats'],
    crypto: ['heatmap', 'crypto', 'stats'],
    forex: ['heatmap', 'forex', 'stats'],
    commodities: ['heatmap', 'commodities', 'treasury', 'stats'],
  };

  // Heatmap section labels -> filter category mapping
  const HEATMAP_SECTIONS = {
    all: ['EQUITIES', 'INDICES', 'CRYPTO', 'FOREX', 'COMMODITIES', 'ETFs'],
    stocks: ['EQUITIES', 'ETFs'],
    indices: ['INDICES', 'ETFs'],
    crypto: ['CRYPTO'],
    forex: ['FOREX'],
    commodities: ['COMMODITIES'],
  };

  // Shared categories definition used by loadAllData, region toggle, and renderAllSections
  const CATEGORIES = [
    { tickers: TICKERS.indices, target: 'indicesBody', type: 'index' },
    { tickers: TICKERS.etfs, target: 'etfsBody', type: 'etf' },
    { tickers: TICKERS.volatility, target: 'volatilityBody', type: 'vix' },
    { tickers: TICKERS.crypto, target: 'cryptoBody', type: 'crypto' },
    { tickers: TICKERS.forex, target: 'forexBody', type: 'forex' },
    { tickers: TICKERS.commodities, target: 'commoditiesBody', type: 'commodity' },
    { tickers: TICKERS.treasury, target: 'treasuryBody', type: 'yield' },
  ];

  function renderAllSections(categories, quotes) {
    categories.forEach(cat => renderCategory(cat.tickers, cat.target, cat.type, quotes));
    renderHeatmap(quotes);
    renderTopMovers(quotes);
    renderStats(quotes);
    applyFilter();
  }

  function init() {
    controller = new SectionController();
    fetchController = new AbortController();

    // Re-attach listeners every time since cleanup() destroys the controller
    // which aborts all event listeners registered via controller.on()
    setupFilters();
    setupRegionToggle();
    initialized = true;

    activeFilter = 'all';
    activeRegion = 'all';
    document.querySelectorAll('.monitor-filter').forEach(b => {
      b.classList.toggle('active', b.dataset.filter === 'all');
    });
    const regionSelect = document.getElementById('monitorRegion');
    if (regionSelect) regionSelect.value = 'all';

    startClock();
    showShimmers();
    loadAllData();
  }

  function setupFilters() {
    document.querySelectorAll('.monitor-filter').forEach(btn => {
      controller.on(btn, 'click', () => {
        document.querySelectorAll('.monitor-filter').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeFilter = btn.dataset.filter;
        applyFilter();
      });
    });
  }

  function setupRegionToggle() {
    const select = document.getElementById('monitorRegion');
    if (!select) return;
    controller.on(select, 'change', () => {
      activeRegion = select.value;
      if (Object.keys(allQuotes).length > 0) {
        renderAllSections(CATEGORIES, allQuotes);
      }
    });
  }

  function filterByRegion(tickers) {
    if (activeRegion === 'all') return tickers;
    return tickers.filter(t => !t.region || t.region === activeRegion);
  }

  function applyFilter() {
    const visibleCards = CATEGORY_CARDS[activeFilter] || CATEGORY_CARDS.all;
    const cardMap = {
      heatmap: document.getElementById('monitorHeatmap'),
      indices: document.getElementById('monitorIndices'),
      movers: document.getElementById('monitorMovers'),
      etfs: document.getElementById('monitorETFs'),
      volatility: document.getElementById('monitorVolatility'),
      crypto: document.getElementById('monitorCrypto'),
      forex: document.getElementById('monitorForex'),
      commodities: document.getElementById('monitorCommodities'),
      treasury: document.getElementById('monitorTreasury'),
      stats: document.getElementById('monitorStats'),
    };

    for (const [key, el] of Object.entries(cardMap)) {
      if (!el) continue;
      el.style.display = visibleCards.includes(key) ? '' : 'none';
    }

    // Filter heatmap sections
    const visibleSections = HEATMAP_SECTIONS[activeFilter] || HEATMAP_SECTIONS.all;
    const heatmapGrid = document.getElementById('heatmapGrid');
    if (heatmapGrid) {
      heatmapGrid.querySelectorAll('.heatmap-section-label').forEach(label => {
        const sectionName = label.textContent.trim();
        const show = visibleSections.includes(sectionName);
        label.style.display = show ? '' : 'none';
        let sibling = label.nextElementSibling;
        while (sibling && !sibling.classList.contains('heatmap-section-label')) {
          sibling.style.display = show ? '' : 'none';
          sibling = sibling.nextElementSibling;
        }
      });
    }
  }

  function startClock() {
    function update() {
      const el = document.getElementById('monitorTime');
      if (!el) return;
      const now = new Date();
      const ist = now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
      const est = now.toLocaleString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', hour12: false });
      const isOpen = isMarketOpen(now);
      el.innerHTML = `${ist} IST / ${est} ET <span style="color:${isOpen ? 'var(--green-bright)' : 'var(--orange)'};margin-left:6px;">${isOpen ? 'MARKET OPEN' : 'MARKET CLOSED'}</span>`;
    }
    update();
    if (refreshTimer) clearInterval(refreshTimer);
    refreshTimer = setInterval(update, 1000);
    controller.addInterval(refreshTimer);
  }

  function isMarketOpen(now) {
    const et = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
    const day = et.getDay();
    if (day === 0 || day === 6) return false;
    const hours = et.getHours() * 60 + et.getMinutes();
    return hours >= 570 && hours < 960;
  }

  function showShimmers() {
    ['indicesBody', 'moversBody', 'etfsBody', 'volatilityBody', 'cryptoBody', 'forexBody', 'commoditiesBody', 'treasuryBody', 'statsBody'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = Array(6).fill('<div class="monitor-shimmer"></div>').join('');
    });
    const grid = document.getElementById('heatmapGrid');
    if (grid) grid.innerHTML = Array(28).fill('<div class="heatmap-cell" style="background:#1a1a1a;"><div class="monitor-shimmer" style="margin:0;"></div></div>').join('');
  }

  // ---- Parallel fetch with progressive rendering ----
  async function loadAllData() {
    const allSymbols = CATEGORIES.flatMap(c => c.tickers.map(t => t.symbol));
    const heatmapSymbols = TICKERS.stocks.map(t => t.symbol);
    allQuotes = {};

    const allToFetch = [...new Set([...allSymbols, ...heatmapSymbols])];
    const batches = [];
    for (let i = 0; i < allToFetch.length; i += 10) {
      batches.push(allToFetch.slice(i, i + 10));
    }

    await Promise.all(batches.map(async batch => {
      try {
        const resp = await fetch(`/api/quote/${batch.join(',')}`, { signal: fetchController.signal });
        if (resp.ok) {
          const data = await resp.json();
          Object.assign(allQuotes, data);
          renderAllSections(CATEGORIES, allQuotes);
        }
      } catch (e) { if (e.name !== 'AbortError') console.warn(e); }
    }));

    if (Object.keys(allQuotes).length === 0) {
      const errorHtml = '<div style="padding:24px;color:var(--text-muted);font-size:13px;text-align:center;line-height:1.8;">No live data available.<br>Start the server to fetch real-time market data:<br><code style="background:var(--bg-tertiary);padding:4px 10px;border-radius:4px;font-size:12px;">node server.js</code><br>Then visit <strong>http://localhost:8080</strong></div>';
      ['indicesBody', 'moversBody', 'etfsBody', 'volatilityBody', 'cryptoBody', 'forexBody', 'commoditiesBody', 'treasuryBody', 'statsBody'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = errorHtml;
      });
      const grid = document.getElementById('heatmapGrid');
      if (grid) grid.innerHTML = errorHtml;
      return;
    }

    // Final render to ensure everything is consistent
    renderAllSections(CATEGORIES, allQuotes);
  }

  function getCurrency(symbol) {
    if (symbol.endsWith('.NS') || symbol.endsWith('.BO')) return '₹';
    if (symbol === '^NSEI' || symbol === '^BSESN' || symbol === '^NSEBANK') return '₹';
    if (symbol.includes('INR')) return '₹';
    if (symbol.endsWith('=X') || symbol === 'DX-Y.NYB') return '';
    if (symbol.endsWith('=F')) return '$';
    return '$';
  }

  function formatPrice(price, symbol, type) {
    if (type === 'yield') return price.toFixed(3) + '%';
    if (type === 'forex') {
      const cur = symbol.includes('INR') ? '₹' : '';
      return cur + price.toFixed(4);
    }
    const cur = getCurrency(symbol);
    if (price > 10000) return cur + Math.round(price).toLocaleString('en-IN');
    if (price > 1000) return cur + price.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    return cur + price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function renderCategory(tickers, targetId, type, quotes) {
    const el = document.getElementById(targetId);
    if (!el) return;
    const filtered = filterByRegion(tickers);

    if (filtered.length === 0) {
      el.textContent = '';
      const msg = document.createElement('div');
      msg.style.cssText = 'padding:12px;color:var(--text-muted);font-size:12px;text-align:center;';
      msg.textContent = 'No tickers for selected region';
      el.appendChild(msg);
      return;
    }

    const frag = document.createDocumentFragment();
    filtered.forEach(t => {
      const q = quotes[t.symbol];
      const row = document.createElement('div');
      row.className = 'monitor-row';

      const label = document.createElement('span');
      label.className = 'mr-label';
      label.textContent = t.name;
      row.appendChild(label);

      if (!q || q.error) {
        const value = document.createElement('span');
        value.className = 'mr-value';
        value.style.color = 'var(--text-muted)';
        value.textContent = '--';
        row.appendChild(value);
      } else {
        const priceStr = formatPrice(q.price, t.symbol, type);
        const isUp = q.changePct >= 0;

        const value = document.createElement('span');
        value.className = 'mr-value';
        value.textContent = priceStr;
        row.appendChild(value);

        const change = document.createElement('span');
        change.className = 'mr-change ' + (isUp ? 'up' : 'down');
        change.textContent = (isUp ? '+' : '') + q.changePct.toFixed(2) + '%';
        row.appendChild(change);
      }

      frag.appendChild(row);
    });

    el.textContent = '';
    el.appendChild(frag);
  }

  function renderHeatmap(quotes) {
    const grid = document.getElementById('heatmapGrid');
    if (!grid) return;

    const sections = [
      { label: 'EQUITIES', items: filterByRegion(TICKERS.stocks) },
      { label: 'INDICES', items: filterByRegion(TICKERS.indices) },
      { label: 'CRYPTO', items: filterByRegion(TICKERS.crypto) },
      { label: 'FOREX', items: filterByRegion(TICKERS.forex) },
      { label: 'COMMODITIES', items: filterByRegion(TICKERS.commodities) },
      { label: 'ETFs', items: filterByRegion(TICKERS.etfs) },
    ];

    const frag = document.createDocumentFragment();
    for (const section of sections) {
      const sectionLabel = document.createElement('div');
      sectionLabel.className = 'heatmap-section-label';
      sectionLabel.textContent = section.label;
      frag.appendChild(sectionLabel);

      section.items.forEach(t => {
        const q = quotes[t.symbol];
        const cell = document.createElement('div');
        cell.className = 'heatmap-cell';

        if (!q || q.error) {
          cell.style.background = '#1a1a1a';
          const ticker = document.createElement('span');
          ticker.className = 'hm-ticker';
          ticker.textContent = t.symbol;
          const price = document.createElement('span');
          price.className = 'hm-price';
          price.textContent = '--';
          cell.appendChild(ticker);
          cell.appendChild(price);
        } else {
          const pct = q.changePct || 0;
          cell.style.background = getHeatColor(pct);

          const sectionType = section.label === 'FOREX' ? 'forex' : section.label === 'COMMODITIES' ? 'commodity' : 'stock';
          const priceStr = formatPrice(q.price, t.symbol, sectionType);
          cell.title = t.name + ': ' + priceStr + ' (' + (pct >= 0 ? '+' : '') + pct.toFixed(2) + '%)';

          const ticker = document.createElement('span');
          ticker.className = 'hm-ticker';
          ticker.textContent = t.symbol.replace('.NS','').replace('.BO','').replace('=X','').replace('-USD','').replace('^','');
          const price = document.createElement('span');
          price.className = 'hm-price';
          price.textContent = priceStr;
          const change = document.createElement('span');
          change.className = 'hm-change';
          change.textContent = (pct >= 0 ? '+' : '') + pct.toFixed(2) + '%';

          cell.appendChild(ticker);
          cell.appendChild(price);
          cell.appendChild(change);
        }

        frag.appendChild(cell);
      });
    }

    grid.textContent = '';
    grid.appendChild(frag);
  }

  function getHeatColor(pct) {
    const g = 'rgba(22, 163, 74,';
    const r = 'rgba(239, 68, 68,';
    if (pct >= 4) return g + '0.5)';
    if (pct >= 3) return g + '0.4)';
    if (pct >= 2) return g + '0.3)';
    if (pct >= 1) return g + '0.2)';
    if (pct >= 0.3) return g + '0.1)';
    if (pct >= -0.3) return 'rgba(85,85,85,0.1)';
    if (pct >= -1) return r + '0.1)';
    if (pct >= -2) return r + '0.2)';
    if (pct >= -3) return r + '0.3)';
    if (pct >= -4) return r + '0.4)';
    return r + '0.5)';
  }

  function renderTopMovers(quotes) {
    const el = document.getElementById('moversBody');
    if (!el) return;

    const movers = filterByRegion(TICKERS.stocks)
      .map(t => ({ ...t, ...(quotes[t.symbol] || {}) }))
      .filter(t => t.price && !t.error)
      .sort((a, b) => Math.abs(b.changePct || 0) - Math.abs(a.changePct || 0))
      .slice(0, 10);

    const frag = document.createDocumentFragment();
    movers.forEach(t => {
      const isUp = (t.changePct || 0) >= 0;
      const row = document.createElement('div');
      row.className = 'monitor-row';

      const label = document.createElement('span');
      label.className = 'mr-label';
      label.style.fontWeight = '600';
      label.style.color = 'var(--text-primary)';
      label.textContent = t.symbol;
      row.appendChild(label);

      const value = document.createElement('span');
      value.className = 'mr-value';
      value.textContent = '$' + t.price.toFixed(2);
      row.appendChild(value);

      const change = document.createElement('span');
      change.className = 'mr-change ' + (isUp ? 'up' : 'down');
      change.textContent = (isUp ? '\u25B2 +' : '\u25BC ') + t.changePct.toFixed(2) + '%';
      row.appendChild(change);

      frag.appendChild(row);
    });

    el.textContent = '';
    el.appendChild(frag);
  }

  function renderStats(quotes) {
    const el = document.getElementById('statsBody');
    if (!el) return;

    const nifty = quotes['^NSEI'];
    const sensex = quotes['^BSESN'];
    const vix = quotes['^VIX'];
    const sp = quotes['^GSPC'];
    const btc = quotes['BTC-USD'];
    const gold = quotes['GC=F'];
    const tenyr = quotes['^TNX'];
    const dxy = quotes['DX-Y.NYB'];
    const inr = quotes['INR=X'];

    const stats = [
      { label: 'NIFTY 50', value: nifty?.price ? nifty.price.toFixed(0) : '--', color: (nifty?.changePct || 0) >= 0 ? 'var(--green-bright)' : 'var(--red)', pct: 70 },
      { label: 'SENSEX', value: sensex?.price ? sensex.price.toFixed(0) : '--', color: (sensex?.changePct || 0) >= 0 ? 'var(--green-bright)' : 'var(--red)', pct: 68 },
      { label: 'USD/INR', value: inr?.price ? '₹' + inr.price.toFixed(2) : '--', color: (inr?.changePct || 0) <= 0 ? 'var(--green-bright)' : 'var(--red)', pct: 55 },
      { label: 'S&P 500', value: sp?.price ? '$' + sp.price.toFixed(0) : '--', color: (sp?.changePct || 0) >= 0 ? 'var(--green-bright)' : 'var(--red)', pct: 65 },
      { label: 'VIX', value: vix?.price?.toFixed(1) || '--', color: (vix?.price || 0) > 25 ? 'var(--red)' : (vix?.price || 0) > 18 ? 'var(--orange)' : 'var(--green-bright)', pct: Math.min(((vix?.price || 15) / 50) * 100, 100) },
      { label: 'BTC', value: btc?.price ? '$' + Math.round(btc.price).toLocaleString() : '--', color: (btc?.changePct || 0) >= 0 ? 'var(--green-bright)' : 'var(--red)', pct: 60 },
      { label: 'Gold', value: gold?.price ? '$' + gold.price.toFixed(0) : '--', color: (gold?.changePct || 0) >= 0 ? 'var(--green-bright)' : 'var(--red)', pct: 55 },
      { label: '10Y Yield', value: tenyr?.price ? tenyr.price.toFixed(3) + '%' : '--', color: (tenyr?.price || 0) > 4.5 ? 'var(--orange)' : 'var(--green-bright)', pct: Math.min(((tenyr?.price || 4) / 6) * 100, 100) },
      { label: 'USD Index', value: dxy?.price ? dxy.price.toFixed(2) : '--', color: (dxy?.changePct || 0) >= 0 ? 'var(--green-bright)' : 'var(--red)', pct: 50 },
    ];

    const frag = document.createDocumentFragment();
    stats.forEach(s => {
      const bar = document.createElement('div');
      bar.className = 'stat-bar';

      const label = document.createElement('span');
      label.className = 'stat-bar-label';
      label.textContent = s.label;
      bar.appendChild(label);

      const track = document.createElement('div');
      track.className = 'stat-bar-track';
      const fill = document.createElement('div');
      fill.className = 'stat-bar-fill';
      fill.style.width = s.pct + '%';
      fill.style.background = s.color;
      track.appendChild(fill);
      bar.appendChild(track);

      const value = document.createElement('span');
      value.className = 'stat-bar-value';
      value.style.color = s.color;
      value.textContent = s.value;
      bar.appendChild(value);

      frag.appendChild(bar);
    });

    el.textContent = '';
    el.appendChild(frag);
  }

  function cleanup() {
    if (fetchController) { fetchController.abort(); fetchController = null; }
    if (controller) { controller.destroy(); controller = null; }
    if (refreshTimer) { clearInterval(refreshTimer); refreshTimer = null; }
  }

  return { init, cleanup };
})();
