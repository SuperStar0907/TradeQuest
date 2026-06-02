LESSON_REGISTRY["what-is-a-stock"] = {
  id: "what-is-a-stock",
  title: "What is a Stock?",
  category: "fundamentals",
  difficulty: "beginner",
  estimatedMinutes: 8,
  xpReward: 50,
  sections: [
    {
      type: "text",
      content: "<h3>Ownership in a Company</h3><p>A stock represents a fractional ownership stake in a company. When you buy a share of Apple (AAPL), you literally own a tiny piece of the company — its assets, its earnings, and its future growth.</p><p>Companies issue stock to raise capital. Instead of borrowing money (debt), they sell ownership stakes to investors. This happens first in an <strong>IPO (Initial Public Offering)</strong>, and then shares trade freely on exchanges.</p>"
    },
    {
      type: "text",
      content: "<h3>Stock Exchanges</h3><p>Stocks trade on exchanges — organized marketplaces where buyers and sellers meet electronically. The two biggest in the US:</p><ul><li><strong>NYSE (New York Stock Exchange)</strong> — The largest by market cap. Trading hours: 9:30 AM to 4:00 PM ET.</li><li><strong>NASDAQ</strong> — Tech-heavy, fully electronic. Home to AAPL, MSFT, AMZN, NVDA, TSLA.</li></ul><p>When you place a buy order, your broker routes it to the exchange. A market maker matches it with a sell order. This happens in milliseconds.</p>"
    },
    {
      type: "interactive-chart",
      config: {
        ticker: "AAPL",
        title: "Apple (AAPL) — Your First Chart",
        description: "This is a candlestick chart. Each candle represents one trading day. Hover over candles to see Open, High, Low, Close (OHLC) prices and volume."
      }
    },
    {
      type: "key-concept",
      title: "Bull vs Bear Markets",
      content: "A <strong>bull market</strong> is when prices rise 20%+ from a recent low. A <strong>bear market</strong> is when prices fall 20%+ from a recent high. These terms come from how each animal attacks — bulls thrust horns up, bears swipe paws down."
    },
    {
      type: "text",
      content: "<h3>Why Stock Prices Move</h3><p>A stock price reflects what buyers will pay and sellers will accept. Prices move based on:</p><ul><li><strong>Earnings</strong> — Did the company make more or less money than expected?</li><li><strong>News</strong> — Product launches, lawsuits, management changes</li><li><strong>Macro factors</strong> — Interest rates, inflation, GDP growth</li><li><strong>Sentiment</strong> — Fear and greed drive short-term swings</li></ul>"
    }
  ],
  track: "stock-markets",
  order: 1,
  prerequisites: []
};
