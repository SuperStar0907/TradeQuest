LESSON_REGISTRY["rsi-indicator"] = {
  id: "rsi-indicator",
  title: "RSI (Relative Strength Index)",
  category: "technical-analysis",
  difficulty: "intermediate",
  estimatedMinutes: 12,
  xpReward: 80,
  sections: [
    {
      type: "text",
      content: "<h3>Measuring Momentum</h3><p>The RSI is a momentum oscillator that measures the speed and magnitude of price movements on a scale from 0 to 100. Developed by J. Welles Wilder in 1978.</p><ul><li><strong>RSI > 70</strong> — Overbought (potentially due for a pullback)</li><li><strong>RSI < 30</strong> — Oversold (potentially due for a bounce)</li><li><strong>RSI = 50</strong> — Neutral</li></ul><p>The standard period is 14 days.</p>"
    },
    {
      type: "interactive-chart",
      config: {
        ticker: "TSLA",
        title: "Tesla (TSLA) — RSI Analysis",
        description: "The RSI subplot oscillates between 0-100. Shaded zones show overbought (>70) and oversold (<30) areas.",
        indicators: [
          "rsi"
        ],
        showRSI: true,
        controls: [
          {
            type: "slider",
            label: "RSI Period",
            min: 5,
            max: 30,
            default: 14,
            id: "rsiPeriod"
          }
        ]
      }
    },
    {
      type: "key-concept",
      title: "RSI Divergence",
      content: "<strong>Bullish divergence</strong>: Price makes a lower low, but RSI makes a higher low — momentum is shifting up. <strong>Bearish divergence</strong>: Price makes a higher high, but RSI makes a lower high — momentum is fading. Divergences are among the most reliable signals RSI produces."
    },
    {
      type: "text",
      content: "<h3>Common Mistakes with RSI</h3><ul><li><strong>Do not blindly buy at RSI 30</strong> — In a strong downtrend, RSI can stay oversold for weeks.</li><li><strong>Context matters</strong> — RSI 70 in a strong uptrend is normal, not necessarily a sell signal.</li><li><strong>Combine with price action</strong> — RSI works best when confirmed by candlestick patterns or S/R levels.</li></ul>"
    },
    {
      type: "text",
      content: "<h3>How a Real Trader Uses RSI</h3><p>Consider a scenario where TSLA has pulled back 15% over two weeks and RSI drops to 28. A beginner might rush to buy because \"it is oversold.\" An experienced trader would wait for confirmation. They look for RSI to start turning up from below 30 — not just touching it, but forming a higher low on the RSI itself. They then check the daily chart for a bullish candlestick pattern at a key support level.</p><p>If all three conditions align — RSI turning up from oversold, bullish candle pattern, and price at a known support zone — the trader enters with a stop below the recent low. This multi-factor approach dramatically improves the probability compared to trading RSI alone.</p><p>For swing traders, a useful RSI technique is the \"50-line bounce.\" In a strong uptrend, RSI rarely drops below 40-50. When it pulls back to the 40-50 zone and bounces, it signals the uptrend is intact and the pullback is a buying opportunity. If RSI breaks below 40 in what you thought was an uptrend, the trend may be weakening.</p>"
    },
    {
      type: "comparison-table",
      headers: [
        "RSI Reading",
        "Market Context",
        "Interpretation",
        "Action"
      ],
      rows: [
        [
          "Below 30",
          "Downtrend",
          "Can stay oversold for weeks; trend is strong to the downside",
          "Do not buy blindly; wait for trend reversal confirmation"
        ],
        [
          "Below 30",
          "Uptrend pullback",
          "Likely oversold bounce coming",
          "Look for bullish candle and support confluence to enter long"
        ],
        [
          "40-50",
          "Uptrend",
          "Healthy pullback; trend intact",
          "Buy the dip with stop below the swing low"
        ],
        [
          "Above 70",
          "Strong uptrend",
          "Momentum is strong; overbought is normal",
          "Hold positions; do not short just because RSI is high"
        ],
        [
          "Above 70",
          "Extended rally after long base",
          "Potential exhaustion",
          "Tighten stops and watch for bearish divergence"
        ]
      ]
    },
    {
      type: "key-concept",
      title: "Pro Tips for RSI",
      content: "Adjust RSI settings based on your trading timeframe. The default 14-period works well for daily charts. Shorter-term traders often use RSI(7) for more responsive signals, while position traders may prefer RSI(21) for smoother readings. Also consider using RSI on multiple timeframes simultaneously. If the weekly RSI is above 50 (bullish trend) and the daily RSI just bounced from 30, that is a much higher-probability long entry than a daily RSI bounce in a weekly downtrend."
    }
  ],
  track: "stock-markets",
  order: 6,
  prerequisites: [
    "moving-averages"
  ]
};
