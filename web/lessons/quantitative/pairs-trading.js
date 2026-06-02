LESSON_REGISTRY["pairs-trading"] = {
  id: "pairs-trading",
  title: "Pairs Trading",
  category: "quantitative-finance",
  difficulty: "intermediate",
  estimatedMinutes: 14,
  xpReward: 90,
  sections: [
    {
      type: "text",
      content: "<h3>What Is Pairs Trading?</h3><p>Pairs trading is a <strong>market-neutral strategy</strong> that profits from the relative performance of two historically correlated securities. Instead of betting on market direction, you simultaneously go <em>long</em> one security and <em>short</em> the other, profiting when their price relationship reverts to its historical norm.</p><p>The strategy was pioneered at Morgan Stanley in the mid-1980s and remains widely used by hedge funds and quantitative desks. Because the positions offset each other, the strategy has low exposure to broad market moves — the profit comes from the <em>spread</em> between the two securities, not from market beta.</p>"
    },
    {
      type: "text",
      content: "<h3>Cointegration: The Statistical Foundation</h3><p>Pairs trading requires more than simple correlation. Two stocks may be correlated over a short window but diverge permanently. The correct statistical concept is <strong>cointegration</strong>: two non-stationary price series are cointegrated if a linear combination of them produces a stationary series.</p><p>Formally, if <em>P<sub>1</sub></em> and <em>P<sub>2</sub></em> are both I(1) (integrated of order 1), they are cointegrated if there exists a coefficient <em>beta</em> such that:</p><ul><li><strong>Spread = P<sub>1</sub> - beta * P<sub>2</sub></strong></li><li>The spread is stationary (mean-reverting around a constant)</li></ul><p>The Engle-Granger two-step procedure or the Johansen test is used to test for cointegration. The hedge ratio <em>beta</em> is typically estimated via ordinary least squares (OLS) regression of P<sub>1</sub> on P<sub>2</sub>.</p>"
    },
    {
      type: "key-concept",
      title: "The Spread and Z-Score",
      content: "Once you have the cointegrated spread, you standardize it into a <strong>z-score</strong>: z = (Spread - Mean) / StdDev. Entry signals are generated when |z| exceeds a threshold (commonly 2.0). A z-score of +2 means the spread is two standard deviations above its mean — go <em>short</em> the spread (short P<sub>1</sub>, long P<sub>2</sub>). A z-score of -2 means go <em>long</em> the spread. Exit when z reverts to 0 (or a tighter band like 0.5)."
    },
    {
      type: "interactive-chart",
      config: {
        ticker: "SPY",
        title: "SPY vs QQQ — Spread Behavior",
        description: "Observe how the spread between two correlated ETFs oscillates around a mean. Extreme deviations tend to revert, which is the basis for pairs trade entry signals."
      }
    },
    {
      type: "text",
      content: "<h3>Bollinger Band Framework for Entry and Exit</h3><p>A practical implementation wraps Bollinger Bands around the spread series:</p><ul><li><strong>Upper Band</strong>: Mean + 2 * StdDev — enter short spread</li><li><strong>Lower Band</strong>: Mean - 2 * StdDev — enter long spread</li><li><strong>Middle Band</strong>: Mean — close all positions (take profit)</li><li><strong>Stop Loss</strong>: Mean ± 3 * StdDev — exit if spread continues to diverge</li></ul><p>Position sizing is typically based on <strong>dollar neutrality</strong> (equal dollar amounts on each leg) or <strong>beta neutrality</strong> (sizing to equalize beta exposure). Dollar neutrality is simpler; beta neutrality offers better market-neutrality.</p>"
    },
    {
      type: "comparison-table",
      headers: ["Aspect", "Distance-Based Pairs Trading", "Cointegration-Based Pairs Trading"],
      rows: [
        ["Selection Method", "Minimum sum-of-squared-differences in normalized prices", "Engle-Granger or Johansen cointegration test"],
        ["Hedge Ratio", "Fixed 1:1 (normalized prices)", "Dynamic OLS or Kalman filter estimate"],
        ["Statistical Rigor", "Lower — may select spuriously correlated pairs", "Higher — explicitly tests for mean reversion"],
        ["Computation", "Simple, scalable to thousands of pairs", "More intensive, requires rolling regressions"],
        ["Regime Sensitivity", "Breaks down quickly in structural breaks", "More robust if cointegration is re-tested periodically"],
        ["Common Use Case", "High-frequency and ETF pairs", "Equity pairs, futures spreads, FX carry trades"]
      ]
    }
  ],
  track: "quantitative",
  order: 36,
  prerequisites: []
};
