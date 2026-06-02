LESSON_REGISTRY["macd-indicator"] = {
  id: "macd-indicator",
  title: "MACD — Trend & Momentum",
  category: "technical-analysis",
  difficulty: "intermediate",
  estimatedMinutes: 12,
  xpReward: 80,
  sections: [
    {
      type: "text",
      content: "<h3>The MACD Explained</h3><p>MACD (Moving Average Convergence Divergence) is both a trend and momentum indicator. It shows the relationship between two EMAs.</p><ul><li><strong>MACD Line</strong> = 12-period EMA minus 26-period EMA</li><li><strong>Signal Line</strong> = 9-period EMA of the MACD Line</li><li><strong>Histogram</strong> = MACD Line minus Signal Line</li></ul>"
    },
    {
      type: "interactive-chart",
      config: {
        ticker: "AMZN",
        title: "Amazon (AMZN) — MACD Analysis",
        description: "MACD subplot: blue=MACD line, orange=signal, green/red bars=histogram. Crossovers generate signals.",
        indicators: [
          "macd"
        ],
        showMACD: true
      }
    },
    {
      type: "key-concept",
      title: "MACD Signals",
      content: "<strong>Bullish crossover</strong>: MACD crosses ABOVE signal line — buy signal. <strong>Bearish crossover</strong>: MACD crosses BELOW signal line — sell signal. <strong>Histogram growing</strong>: Momentum increasing. <strong>Histogram shrinking</strong>: Momentum fading (early warning)."
    },
    {
      type: "text",
      content: "<h3>MACD vs RSI</h3><p>RSI measures <em>how fast</em> price is moving. MACD measures <em>trend direction</em> and momentum. They complement each other. Use MACD for trend and crossover signals. Use RSI for overbought/oversold extremes. When both agree (MACD bullish cross + RSI bouncing from 30), the signal is stronger.</p>"
    },
    {
      type: "text",
      content: "<h3>Common Mistakes with MACD</h3><ul><li><strong>Trading every crossover</strong> — In choppy, sideways markets, MACD will produce numerous crossovers that lead to whipsaw losses. Only trade MACD crossovers when the stock is trending. If the MACD line is hovering near zero and crossing back and forth, the market is range-bound and MACD signals are unreliable.</li><li><strong>Ignoring the histogram</strong> — Many traders only watch for crossovers and miss the histogram, which is actually the earliest warning signal. When the histogram starts shrinking, momentum is fading even before the crossover happens. This gives you a head start on exits.</li><li><strong>Using default settings blindly</strong> — The standard 12/26/9 settings work well for daily charts, but they lag on shorter timeframes. Day traders sometimes use 3/10/16 for faster signals. Test different settings on your specific timeframe before committing real capital.</li></ul>"
    },
    {
      type: "comparison-table",
      headers: [
        "Indicator",
        "Type",
        "Best For",
        "Weakness"
      ],
      rows: [
        [
          "MACD",
          "Trend and momentum",
          "Identifying trend direction and crossover entries",
          "Lags in fast markets; generates false signals in ranges"
        ],
        [
          "RSI",
          "Momentum oscillator",
          "Identifying overbought/oversold extremes and divergences",
          "Can stay overbought/oversold for extended periods in strong trends"
        ],
        [
          "Bollinger Bands",
          "Volatility",
          "Identifying squeezes, mean reversion, and band walks",
          "Does not indicate direction; requires context for interpretation"
        ],
        [
          "Moving Averages",
          "Trend",
          "Defining trend direction and dynamic support/resistance",
          "Lagging indicator; slow to react to sudden reversals"
        ]
      ]
    },
    {
      type: "key-concept",
      title: "Pro Tips for MACD",
      content: "The most powerful MACD signal is divergence combined with a crossover. If the stock makes a new high but MACD makes a lower high (bearish divergence), and then MACD crosses below its signal line, that is a high-probability sell signal. The divergence shows weakening momentum and the crossover confirms the shift. Also look at where the crossover occurs relative to the zero line. A bullish crossover above zero is a continuation signal in an uptrend. A bullish crossover below zero is a potential trend reversal — higher reward but also higher risk."
    }
  ],
  track: "stock-markets",
  order: 7,
  prerequisites: [
    "rsi-indicator"
  ]
};
