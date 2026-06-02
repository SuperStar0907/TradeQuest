LESSON_REGISTRY["mean-reversion"] = {
  id: "mean-reversion",
  title: "Mean Reversion Strategies",
  category: "quantitative-finance",
  difficulty: "intermediate",
  estimatedMinutes: 13,
  xpReward: 90,
  sections: [
    {
      type: "text",
      content: "<h3>The Mean Reversion Hypothesis</h3><p>Mean reversion is the empirical observation that asset prices, spreads, or returns tend to move back toward their historical average after extreme deviations. It contrasts with the <strong>random walk hypothesis</strong>, which holds that price changes are independent and identically distributed.</p><p>Evidence for mean reversion appears at multiple time scales:</p><ul><li><strong>Short-term (intraday to days)</strong>: Bid-ask bounce, order flow imbalance correction</li><li><strong>Medium-term (weeks to months)</strong>: Earnings surprises decay, volatility clustering unwinds</li><li><strong>Long-term (years)</strong>: Valuation ratios (P/E, P/B) revert toward historical norms</li></ul><p>Not all assets exhibit mean reversion equally. Rates and volatility are structurally mean-reverting; individual equities are weaker candidates unless filtered for cointegration or economic rationale.</p>"
    },
    {
      type: "key-concept",
      title: "The Ornstein-Uhlenbeck Process",
      content: "The <strong>Ornstein-Uhlenbeck (OU) process</strong> is the continuous-time stochastic model for mean reversion: dX = theta * (mu - X) * dt + sigma * dW. Here, <em>theta</em> is the <strong>speed of mean reversion</strong>, <em>mu</em> is the long-run mean, <em>sigma</em> is volatility, and <em>dW</em> is a Wiener process increment. A high theta means the process reverts quickly; theta = 0 is a random walk. The <strong>half-life</strong> of mean reversion is ln(2) / theta, which tells you how long it takes for half of a deviation to be corrected — a critical input for position sizing and holding period."
    },
    {
      type: "text",
      content: "<h3>Estimating the OU Parameters</h3><p>To fit an OU process to a spread series, use a discrete-time AR(1) regression:</p><ul><li>Regress X<sub>t</sub> on X<sub>t-1</sub>: X<sub>t</sub> = a + b * X<sub>t-1</sub> + epsilon<sub>t</sub></li><li><strong>theta</strong> (speed) = -ln(b) / dt</li><li><strong>mu</strong> (mean) = a / (1 - b)</li><li><strong>sigma</strong> (volatility) = std(epsilon) / sqrt((1 - b^2) / (2 * theta))</li><li><strong>Half-life</strong> = -ln(2) / ln(b)</li></ul><p>A half-life under 5 days may be too fast to trade after transaction costs. A half-life over 60 days ties up capital too long. The sweet spot for equity mean reversion is typically <strong>10-30 trading days</strong>.</p>"
    },
    {
      type: "text",
      content: "<h3>Z-Score Trading Signals</h3><p>Once you have the OU parameters, you can generate z-score signals for any spread or residual series:</p><ul><li><strong>Z-score</strong> = (X<sub>t</sub> - mu) / sigma_eq, where sigma_eq = sigma / sqrt(2 * theta) is the equilibrium standard deviation</li><li><strong>Long entry</strong>: Z &lt; -2.0 (spread is two standard deviations below the mean)</li><li><strong>Short entry</strong>: Z &gt; +2.0 (spread is two standard deviations above the mean)</li><li><strong>Close long</strong>: Z &gt; -0.5</li><li><strong>Close short</strong>: Z &lt; +0.5</li><li><strong>Stop loss</strong>: |Z| &gt; 3.0 (the spread has moved too far; the relationship may have broken)</li></ul><p>The thresholds (2.0, 0.5, 3.0) are tunable. Tighter entry thresholds increase trade frequency but reduce edge per trade. The stop loss is critical — without it, a regime change can produce catastrophic losses.</p>"
    },
    {
      type: "interactive-chart",
      config: {
        ticker: "GLD",
        title: "GLD — Rolling Z-Score of 20-Day Return",
        description: "Z-score oscillations show the rhythm of mean reversion in a commodity ETF. Notice that extreme readings above +2 or below -2 tend to be followed by reversion toward zero."
      }
    },
    {
      type: "comparison-table",
      headers: ["Parameter", "Typical Range", "Trading Implication"],
      rows: [
        ["Half-life", "5 to 30 days", "Determines holding period and capital commitment"],
        ["OU theta", "0.02 to 0.15 (daily)", "Higher theta = faster reversion = more frequent trades"],
        ["Entry z-score threshold", "1.5 to 2.5", "Higher threshold = fewer but higher-quality entries"],
        ["Exit z-score threshold", "0 to 0.75", "Closer to zero = takes full mean reversion; wider = faster exit"],
        ["Stop loss z-score", "2.5 to 4.0", "Must be wider than entry threshold; limits regime change losses"],
        ["Lookback for mu/sigma", "60 to 252 days", "Shorter = adaptive but noisy; longer = stable but slow to update"]
      ]
    }
  ],
  track: "quantitative",
  order: 37,
  prerequisites: ["pairs-trading"]
};
