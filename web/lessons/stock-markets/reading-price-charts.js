LESSON_REGISTRY["reading-price-charts"] = {
  id: "reading-price-charts",
  title: "Reading Price Charts",
  category: "technical-analysis",
  difficulty: "beginner",
  estimatedMinutes: 10,
  xpReward: 60,
  sections: [
    {
      type: "text",
      content: "<h3>Three Types of Price Charts</h3><p>Traders use charts to visualize price history and spot patterns. The three most common:</p><ol><li><strong>Line Chart</strong> — Connects closing prices. Simplest view, good for overall trend.</li><li><strong>Bar Chart (OHLC)</strong> — Each bar shows Open, High, Low, Close. More data than a line chart.</li><li><strong>Candlestick Chart</strong> — Like bar charts but with a filled/hollow body. The most popular choice among traders.</li></ol>"
    },
    {
      type: "text",
      content: "<h3>Anatomy of a Candlestick</h3><p>Each candlestick tells a story about the battle between buyers and sellers:</p><ul><li><strong>Body</strong> — The thick part. Shows the range between open and close.</li><li><strong>Wicks/Shadows</strong> — The thin lines above and below. Show the high and low.</li><li><strong>Green candle</strong> — Close > Open (buyers won)</li><li><strong>Red candle</strong> — Close < Open (sellers won)</li></ul><p>Long bodies = strong conviction. Long wicks = rejection at that price level.</p>"
    },
    {
      type: "interactive-chart",
      config: {
        ticker: "TSLA",
        title: "Tesla (TSLA) — Reading Candlesticks",
        description: "Notice the large green and red candles. Big green = strong buying pressure. Big red = strong selling. Long upper wicks mean sellers pushed price back down."
      }
    },
    {
      type: "key-concept",
      title: "Volume Confirms Price",
      content: "A price move on high volume is more significant than on low volume. If a stock breaks to a new high on 3x average volume, that is a strong signal. The same breakout on low volume is suspicious and may fail."
    },
    {
      type: "text",
      content: "<h3>Timeframes</h3><p>Charts can show different timeframes:</p><ul><li><strong>1-minute, 5-minute</strong> — Day traders</li><li><strong>1-hour, 4-hour</strong> — Swing traders</li><li><strong>Daily</strong> — Most common for analysis</li><li><strong>Weekly, Monthly</strong> — Long-term investors</li></ul><p>The same stock can look bullish on a daily chart and bearish on a 5-minute chart. Always consider the timeframe.</p>"
    }
  ],
  track: "stock-markets",
  order: 2,
  prerequisites: [
    "what-is-a-stock"
  ]
};
