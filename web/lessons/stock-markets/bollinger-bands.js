LESSON_REGISTRY["bollinger-bands"] = {
  id: "bollinger-bands",
  title: "Bollinger Bands",
  category: "technical-analysis",
  difficulty: "intermediate",
  estimatedMinutes: 12,
  xpReward: 80,
  sections: [
    {
      type: "text",
      content: "<h3>Volatility Envelope</h3><p>Bollinger Bands consist of three lines plotted on a price chart:</p><ul><li><strong>Middle Band</strong> = 20-period SMA</li><li><strong>Upper Band</strong> = Middle + 2 standard deviations</li><li><strong>Lower Band</strong> = Middle - 2 standard deviations</li></ul><p>About 95% of price action falls within the bands. When bands are wide, volatility is high. When bands are narrow, volatility is low.</p>"
    },
    {
      type: "interactive-chart",
      config: {
        ticker: "SPY",
        title: "S&P 500 (SPY) — Bollinger Bands",
        description: "Watch for band squeezes (narrow bands) which often precede big moves. Price touching the upper band is not automatically a sell signal."
      }
    },
    {
      type: "key-concept",
      title: "The Bollinger Squeeze",
      content: "When the bands contract to their narrowest width in months, it signals a <strong>squeeze</strong> — a period of low volatility that typically precedes a large move. The direction of the breakout determines the trade. Combine with volume for confirmation."
    },
    {
      type: "text",
      content: "<h3>Trading with Bollinger Bands</h3><p><strong>Mean Reversion</strong>: In sideways markets, price tends to bounce between the bands. Buy near the lower band, sell near the upper band.</p><p><strong>Trend Following</strong>: In strong trends, price \"rides\" the upper band (uptrend) or lower band (downtrend). This is called a Bollinger Band walk and is NOT a reversal signal.</p><p><strong>%B Indicator</strong>: Measures where price is relative to the bands. %B = (Price - Lower Band) / (Upper - Lower). Above 1 = above upper band. Below 0 = below lower band.</p>"
    },
    {
      type: "text",
      content: "<h3>Common Mistakes with Bollinger Bands</h3><ul><li><strong>Selling every touch of the upper band</strong> — In a strong uptrend, price can \"walk\" along the upper band for weeks. Selling at the upper band in a trend means you are shorting a strong stock. Only use band touches as reversal signals in range-bound markets.</li><li><strong>Ignoring the bandwidth</strong> — The distance between the bands (bandwidth) tells you about volatility. Narrow bands mean low volatility and a big move is coming. Wide bands mean high volatility that may be peaking. Many traders watch for squeezes but forget to monitor when bands are abnormally wide, which often precedes a return to the mean.</li><li><strong>Using bands in isolation</strong> — A touch of the lower band is more significant if it occurs at a known support level and RSI is oversold. Without confirming signals, band touches alone have a poor win rate.</li></ul>"
    },
    {
      type: "key-concept",
      title: "Pro Tips for Bollinger Bands",
      content: "One of the most reliable Bollinger Band setups is the \"squeeze breakout.\" When the bands contract to their narrowest point in at least 6 months, mark the upper and lower bands. Place a buy-stop above the upper band and a sell-stop below the lower band, then let the market tell you the direction. Cancel the unfilled order once one side triggers. Combine this with volume — a squeeze breakout on high volume is much more trustworthy. Also experiment with different settings: 20-period / 2 standard deviations is the default, but some traders use 10-period / 1.5 deviations for shorter-term trading or 50-period / 2.5 deviations for a broader view."
    }
  ],
  track: "stock-markets",
  order: 8,
  prerequisites: [
    "macd-indicator"
  ]
};
