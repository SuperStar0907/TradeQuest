const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Helper: fetch a single ticker quote via v8 chart API (most reliable)
async function fetchTickerQuote(ticker) {
  try {
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(ticker)}?range=5d&interval=1d&includePrePost=false`;
    const resp = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)' }
    });
    if (!resp.ok) return null;
    const data = await resp.json();
    const result = data?.chart?.result?.[0];
    if (!result) return null;

    const meta = result.meta || {};
    const ts = result.timestamp || [];
    const quote = result.indicators?.quote?.[0] || {};
    const len = ts.length;
    if (len < 1) return null;

    const lastClose = quote.close?.[len - 1] ?? meta.regularMarketPrice ?? 0;
    const prevClose = len >= 2 ? (quote.close?.[len - 2] ?? meta.chartPreviousClose ?? lastClose) : (meta.chartPreviousClose ?? lastClose);
    const change = lastClose - prevClose;
    const changePct = prevClose > 0 ? (change / prevClose) * 100 : 0;

    return {
      price: +lastClose.toFixed(4),
      change: +change.toFixed(4),
      changePct: +changePct.toFixed(2),
      volume: quote.volume?.[len - 1] ?? 0,
      name: meta.shortName || meta.longName || meta.symbol || ticker,
      high: quote.high?.[len - 1] ?? lastClose,
      low: quote.low?.[len - 1] ?? lastClose,
      open: quote.open?.[len - 1] ?? lastClose,
      prevClose: +prevClose.toFixed(4),
    };
  } catch (e) {
    return null;
  }
}

// Yahoo Finance proxy — chart data
app.get('/api/chart/:ticker', async (req, res) => {
  try {
    const { ticker } = req.params;
    const range = req.query.range || '2y';
    const interval = req.query.interval || '1d';
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(ticker)}?range=${range}&interval=${interval}&includePrePost=false`;
    const response = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)' }
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Quote endpoint — fetches each ticker via chart API in parallel
app.get('/api/quote/:tickers', async (req, res) => {
  try {
    const symbols = req.params.tickers.split(',').map(s => s.trim()).filter(Boolean);
    const results = await Promise.all(symbols.map(s => fetchTickerQuote(s)));
    const quotes = {};
    symbols.forEach((sym, i) => {
      if (results[i]) quotes[sym] = results[i];
    });
    res.json(quotes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Ticker search
app.get('/api/search', async (req, res) => {
  try {
    const q = req.query.q || '';
    const url = `https://query1.finance.yahoo.com/v1/finance/search?q=${encodeURIComponent(q)}&quotesCount=8&newsCount=0`;
    const response = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)' }
    });
    const data = await response.json();
    const results = (data.quotes || []).map(r => ({
      symbol: r.symbol,
      name: r.shortname || r.longname || '',
      type: r.quoteType || '',
      exchange: r.exchange || '',
    }));
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '127.0.0.1', () => {
  console.log(`TradeQuest server running at http://localhost:${PORT}`);
});
