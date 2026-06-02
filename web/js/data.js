// ============================================
// Data Module — Central Data Orchestrator
// ============================================

const DataModule = (() => {
  const stockData = {};  // ticker -> [{time, open, high, low, close, volume}]
  let lessonsCache = null;

  // Parse Yahoo Finance JSON format into simple OHLCV array
  function parseYahooData(raw) {
    const result = raw.chart.result[0];
    const timestamps = result.timestamp;
    const quote = result.indicators.quote[0];
    return timestamps.map((t, i) => ({
      time: new Date(t * 1000).toISOString().split('T')[0],
      open: +(quote.open[i]?.toFixed(2)) || 0,
      high: +(quote.high[i]?.toFixed(2)) || 0,
      low: +(quote.low[i]?.toFixed(2)) || 0,
      close: +(quote.close[i]?.toFixed(2)) || 0,
      volume: quote.volume[i] || 0
    })).filter(d => d.open > 0);
  }

  // Load bundled JSON data
  async function loadStockData(ticker) {
    if (stockData[ticker]) return stockData[ticker];
    try {
      const resp = await fetch(`data/${ticker}.json`);
      const raw = await resp.json();
      stockData[ticker] = parseYahooData(raw);
      return stockData[ticker];
    } catch(e) {
      console.warn(`Failed to load ${ticker}:`, e);
      return [];
    }
  }

  // Load all available tickers
  async function init() {
    // Load LIVE_STOCK_DATA into stockData if available
    if (typeof LIVE_STOCK_DATA !== 'undefined') {
      for (const [ticker, entry] of Object.entries(LIVE_STOCK_DATA)) {
        if (entry && entry.data) {
          stockData[ticker] = entry.data;
        }
      }
    }

    const tickers = ['SPY', 'TSLA'];
    await Promise.all(tickers.map(t => loadStockData(t)));

    // Map QUIZ_DATA into QUIZ_REGISTRY if not already there
    if (typeof QUIZ_DATA !== 'undefined') {
      for (const [key, quiz] of Object.entries(QUIZ_DATA)) {
        QUIZ_REGISTRY[key] = quiz;
      }
    }

    // Build lesson lists per track from LESSON_REGISTRY
    buildLessonManifest();
  }

  function buildLessonManifest() {
    const registryLessons = Object.values(LESSON_REGISTRY);
    const source = registryLessons.length > 0
      ? registryLessons
      : (typeof LESSON_INDEX !== 'undefined' ? LESSON_INDEX : []);
    LESSON_MANIFEST.tracks.forEach(track => {
      track.lessons = source
        .filter(l => l.track === track.id)
        .sort((a, b) => (a.order || 0) - (b.order || 0))
        .map(l => l.id);
    });
  }

  function getStockData(ticker) {
    return stockData[ticker.toUpperCase()] || stockData['SPY'] || [];
  }

  function getAvailableTickers() {
    return Object.keys(stockData);
  }

  function getAllLessons() {
    const registryLessons = Object.values(LESSON_REGISTRY);
    if (registryLessons.length > 0) {
      if (!lessonsCache) {
        lessonsCache = registryLessons.sort((a, b) => (a.order || 0) - (b.order || 0));
      }
      return lessonsCache;
    }
    // LESSON_REGISTRY empty (content not yet loaded) — use LESSON_INDEX for sidebar/dashboard
    if (typeof LESSON_INDEX !== 'undefined' && LESSON_INDEX.length > 0) {
      return LESSON_INDEX.slice().sort((a, b) => (a.order || 0) - (b.order || 0));
    }
    return [];
  }

  function getLessonsByTrack(trackId) {
    return getAllLessons().filter(l => l.track === trackId);
  }

  function getLesson(id) {
    return LESSON_REGISTRY[id] || null;
  }

  // Reference data exposed as live getters (see return object below)
  const quizzes = QUIZ_REGISTRY;  // live reference

  // Live API helpers
  async function searchTicker(query) {
    try {
      const resp = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      return await resp.json();
    } catch { return []; }
  }

  async function fetchLiveChart(ticker) {
    const cacheKey = `chart:${ticker}`;
    const cached = ApiCache.get(cacheKey, 300000);
    if (cached) return cached;
    try {
      const resp = await fetch(`/api/chart/${encodeURIComponent(ticker)}`);
      const raw = await resp.json();
      const data = parseYahooData(raw);
      ApiCache.set(cacheKey, data);
      return data;
    } catch { return []; }
  }

  // ============ Backward-compatible properties for app.js ============
  const stockConfigs = {
    SPY: { name: 'SPDR S&P 500 ETF', sector: 'Index' },
    TSLA: { name: 'Tesla Inc.', sector: 'Automotive' },
  };

  let liveQuotes = {};
  let dataSource = 'baked';
  const liveCallbacks = [];

  // LIVE_STOCK_DATA removed — data/*.json files loaded on demand via loadStockData()

  function onLiveDataReady(cb) { liveCallbacks.push(cb); }
  function notifyLiveReady() {
    liveCallbacks.forEach(cb => { try { cb(); } catch(e) {} });
  }

  async function refreshAllData() {
    const tickers = Object.keys(stockConfigs);
    let success = 0;
    const results = await Promise.all(tickers.map(t => fetchLiveChart(t).catch(() => null)));
    results.forEach((result, i) => {
      if (result && result.length > 50) {
        stockData[tickers[i]] = result;
        success++;
      }
    });
    if (success > 0) { dataSource = 'live'; notifyLiveReady(); }
    return success;
  }

  async function refreshQuotes() {
    try {
      const tickers = Object.keys(stockConfigs);
      const cacheKey = `quotes:${tickers.join(',')}`;
      const cached = ApiCache.get(cacheKey, 60000);
      if (cached) {
        liveQuotes = cached;
        return cached;
      }
      const resp = await fetch(`/api/quote/${tickers.join(',')}`);
      if (!resp.ok) return null;
      const quotes = await resp.json();
      liveQuotes = quotes;
      ApiCache.set(cacheKey, quotes);
      for (const [ticker, q] of Object.entries(quotes)) {
        if (stockConfigs[ticker] && !q.error) {
          Object.assign(stockConfigs[ticker], q);
        }
      }
      dataSource = 'live';
      return quotes;
    } catch { return null; }
  }

  const tracks = LESSON_MANIFEST.tracks;

  const dailyTips = [
    { title: 'The Trend is Your Friend', text: 'Don\'t fight the trend. 70% of stocks follow the overall market direction.' },
    { title: 'Position Sizing: The 1% Rule', text: 'Never risk more than 1-2% of your total account on a single trade.' },
    { title: 'IV Rank vs IV Percentile', text: 'IV Rank > 50% = sell premium. < 50% = buy options.' },
    { title: 'The 20-Day EMA', text: 'The 20-day EMA is the most watched short-term MA. Great for timing pullback entries.' },
    { title: 'Volume Precedes Price', text: 'Smart money shows up in volume before price moves.' },
    { title: 'Theta Acceleration', text: 'Options lose 2/3 of time value in the last 1/3 of life. The last 30 days are critical.' },
    { title: 'Risk/Reward Ratio', text: 'Aim for 2:1 minimum. With 2:1 R:R, you only need 34% win rate to be profitable.' },
  ];

  // Auto-fetch live data when on a server
  if (typeof window !== 'undefined' && window.location && window.location.protocol !== 'file:') {
    (async () => {
      await refreshQuotes();
      notifyLiveReady();
      await refreshAllData();
    })();
  }

  return {
    init, loadStockData, getStockData, getAvailableTickers,
    getAllLessons, getLessonsByTrack, getLesson, buildLessonManifest,
    searchTicker, fetchLiveChart,
    get glossary() { return (typeof REFERENCE_DATA !== 'undefined') ? REFERENCE_DATA.glossary : []; },
    get formulas() { return (typeof REFERENCE_DATA !== 'undefined') ? REFERENCE_DATA.formulas : []; },
    get patterns() { return (typeof REFERENCE_DATA !== 'undefined') ? REFERENCE_DATA.patterns : []; },
    get strategies() { return (typeof REFERENCE_DATA !== 'undefined') ? REFERENCE_DATA.strategies : []; },
    quizzes,
    get QUIZ_REGISTRY() { return QUIZ_REGISTRY; },
    // Backward-compatible properties used by app.js
    stockData,
    stockConfigs,
    tracks,
    dailyTips,
    get stockLessons() { return getAllLessons().filter(l => l.track === 'stock-markets'); },
    get optionLessons() { return getAllLessons().filter(l => l.track === 'options'); },
    getTickers() {
      const tickers = new Set(Object.keys(stockConfigs));
      // Add tickers from bundled data files already loaded
      Object.keys(stockData).forEach(t => tickers.add(t));
      // Add tickers from LIVE_STOCK_DATA if available
      if (typeof LIVE_STOCK_DATA !== 'undefined') {
        Object.keys(LIVE_STOCK_DATA).forEach(t => tickers.add(t));
      }
      // Add known bundled data tickers (JSON files in data/ directory)
      ['SPY','TSLA','AAPL','AMZN','BTC-USD','GOOG','MSFT','NVDA','ORCL','^GSPC','INR=X'].forEach(t => tickers.add(t));
      return Array.from(tickers).sort();
    },
    getTickerInfo(ticker) {
      if (stockConfigs[ticker]) return stockConfigs[ticker];
      // Provide basic info for known tickers not in stockConfigs
      const knownTickers = {
        AAPL: { name: 'Apple Inc.', sector: 'Tech' },
        AMZN: { name: 'Amazon.com Inc.', sector: 'Consumer' },
        'BTC-USD': { name: 'Bitcoin USD', sector: 'Crypto' },
        GOOG: { name: 'Alphabet Inc.', sector: 'Tech' },
        MSFT: { name: 'Microsoft Corp.', sector: 'Tech' },
        NVDA: { name: 'NVIDIA Corp.', sector: 'Semis' },
        ORCL: { name: 'Oracle Corp.', sector: 'Tech' },
        '^GSPC': { name: 'S&P 500 Index', sector: 'Index' },
        'INR=X': { name: 'USD/INR', sector: 'Forex' },
      };
      return knownTickers[ticker] || null;
    },
    onLiveDataReady,
    refreshAllData,
    refreshQuotes,
    getDataSource() { return dataSource; },
    getLiveQuotes() { return liveQuotes; },
  };
})();
