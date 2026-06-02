LESSON_REGISTRY["moving-averages"] = {
  id: "moving-averages",
  title: "Moving Averages (SMA & EMA)",
  category: "technical-analysis",
  difficulty: "beginner",
  estimatedMinutes: 12,
  xpReward: 75,
  sections: [
    {
      type: "text",
      content: "<h3>Smoothing Out the Noise</h3><p>A moving average smooths price data by creating a constantly updated average. It helps you see the trend by filtering out day-to-day noise.</p><ul><li><strong>SMA (Simple Moving Average)</strong> — Equal weight to all periods. The 20-day SMA = average closing price of last 20 days.</li><li><strong>EMA (Exponential Moving Average)</strong> — More weight on recent prices. Reacts faster to new data.</li></ul>"
    },
    {
      type: "interactive-chart",
      config: {
        ticker: "AAPL",
        title: "Apple (AAPL) — Moving Averages",
        description: "Adjust the slider to change the SMA period. Shorter periods (10-20) hug price tightly. Longer periods (100-200) show broader trend.",
        indicators: [
          "sma"
        ],
        controls: [
          {
            type: "slider",
            label: "SMA Period",
            min: 5,
            max: 200,
            default: 20,
            id: "smaPeriod"
          }
        ]
      }
    },
    {
      type: "key-concept",
      title: "Golden Cross & Death Cross",
      content: "The <strong>Golden Cross</strong> occurs when the 50-day SMA crosses ABOVE the 200-day SMA — a bullish signal. The <strong>Death Cross</strong> is the opposite — the 50-day crosses BELOW the 200-day, signaling bearish momentum."
    },
    {
      type: "comparison-table",
      headers: [
        "Feature",
        "SMA",
        "EMA"
      ],
      rows: [
        [
          "Weight",
          "Equal weight to all periods",
          "More weight to recent prices"
        ],
        [
          "Lag",
          "More lag (slower)",
          "Less lag (faster)"
        ],
        [
          "False Signals",
          "Fewer",
          "More but catches turns faster"
        ],
        [
          "Best For",
          "Long-term trends",
          "Short-term signals"
        ],
        [
          "Popular Periods",
          "20, 50, 100, 200",
          "9, 12, 21, 26"
        ]
      ]
    },
    {
      type: "text",
      content: "<h3>MAs as Dynamic Support/Resistance</h3><p>In an uptrend, the 20-day or 50-day MA often acts as dynamic support — the stock pulls back to the MA and bounces. In a downtrend, the MA acts as resistance.</p><p><strong>Pro tip:</strong> Institutions watch the 200-day SMA closely. A stock trading above its 200-day is considered in a long-term uptrend.</p>"
    }
  ],
  track: "stock-markets",
  order: 5,
  prerequisites: [
    "support-resistance"
  ]
};
