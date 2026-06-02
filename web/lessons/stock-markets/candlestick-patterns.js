LESSON_REGISTRY["candlestick-patterns"] = {
  id: "candlestick-patterns",
  title: "Candlestick Patterns",
  category: "technical-analysis",
  difficulty: "intermediate",
  estimatedMinutes: 12,
  xpReward: 85,
  sections: [
    {
      type: "text",
      content: "<h3>Single-Candle Patterns</h3><ul><li><strong>Doji</strong> — Open and close are nearly equal (tiny body, long wicks). Signals indecision. At the end of a trend, it can signal reversal.</li><li><strong>Hammer</strong> — Small body at top, long lower wick (2x+ body length). Appears after a downtrend. Signals bullish reversal — sellers pushed price down but buyers fought back.</li><li><strong>Inverted Hammer</strong> — Small body at bottom, long upper wick. After a downtrend, signals potential bullish reversal.</li><li><strong>Shooting Star</strong> — Like an inverted hammer but after an uptrend. Long upper wick shows buyers tried to push higher but sellers took over. Bearish signal.</li></ul>"
    },
    {
      type: "text",
      content: "<h3>Multi-Candle Patterns</h3><ul><li><strong>Bullish Engulfing</strong> — Small red candle followed by a larger green candle that completely engulfs it. Strong bullish reversal signal after a downtrend.</li><li><strong>Bearish Engulfing</strong> — Small green candle followed by a larger red candle. Strong bearish reversal after an uptrend.</li><li><strong>Morning Star</strong> — Three candles: (1) large red, (2) small body (gap down), (3) large green closing above midpoint of candle 1. Bullish reversal.</li><li><strong>Evening Star</strong> — Opposite of morning star. Three candles signaling bearish reversal.</li><li><strong>Three White Soldiers</strong> — Three consecutive large green candles. Strong bullish signal.</li><li><strong>Three Black Crows</strong> — Three consecutive large red candles. Strong bearish signal.</li></ul>"
    },
    {
      type: "interactive-chart",
      config: {
        ticker: "TSLA",
        title: "Tesla (TSLA) — Candlestick Patterns",
        description: "Tesla is volatile enough to produce many candlestick patterns. Look for hammers at lows, shooting stars at highs, and engulfing patterns at turning points."
      }
    },
    {
      type: "key-concept",
      title: "Context is Everything",
      content: "A hammer at a key support level after a 10% decline is a strong buy signal. The same hammer in the middle of a range means nothing. Always evaluate candlestick patterns in context — where they appear on the chart matters more than the pattern itself."
    }
  ],
  track: "stock-markets",
  order: 11,
  prerequisites: [
    "chart-patterns"
  ]
};
