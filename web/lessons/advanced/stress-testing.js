LESSON_REGISTRY["stress-testing"] = {
  id: "stress-testing",
  title: "Stress Testing and Tail Risk",
  track: "advanced",
  category: "advanced-strategies",
  difficulty: "advanced",
  order: 57,
  estimatedMinutes: 13,
  xpReward: 90,
  prerequisites: ["macro-cycle-trading"],
  sections: [
    {
      type: "text",
      content: "<h3>Why Standard Risk Models Fail in Crises</h3><p>Most standard risk models (Value at Risk, standard deviation, Sharpe ratio) are built on the assumption that returns follow a normal (Gaussian) distribution and that correlations between assets are stable. Both assumptions fail catastrophically during market stress. Real return distributions have <em>fat tails</em> — extreme events occur far more frequently than the normal distribution predicts. And during crises, correlations between assets that normally diversify each other converge toward 1.0 as forced selling affects all assets simultaneously.</p><p>The consequence: a portfolio that appears well-diversified under normal conditions can suffer losses that a 99% VaR model said should occur once in 100 years — but actually occurs every 5-10 years. Stress testing is the discipline of explicitly modeling these tail scenarios to understand the true magnitude of risk a portfolio carries.</p>"
    },
    {
      type: "key-concept",
      title: "Historical Scenario Analysis",
      content: "Historical scenario analysis reprices a current portfolio using the actual return sequences from past crisis events. The methodology: obtain the daily returns for each asset class and position equivalent from a historical stress period, apply those returns to current notional exposures, and compute the hypothetical P&L. Key historical scenarios that every portfolio manager should run: the 1987 equity market crash (single-day -22% equity, +10% in bonds), the 1998 LTCM/Russia default crisis (credit spread blowout, currency crisis, liquidity freeze), the 2000-2002 tech crash (Nasdaq -78% from peak to trough), the 2007-2009 global financial crisis (credit, housing, equity, and liquidity collapse simultaneously), the 2020 COVID crash (fastest -34% equity decline on record, then sharp recovery), and the 2022 rate shock (simultaneous equity and bond decline — a 60/40 portfolio's worst year since 1931). Historical scenarios have the advantage of using real market data and correlations from actual crisis conditions, but the disadvantage of being backward-looking: the next crisis may not resemble any previous one."
    },
    {
      type: "text",
      content: "<h3>Monte Carlo Stress Testing</h3><p>Monte Carlo simulation generates thousands of hypothetical return scenarios by sampling from statistical distributions. Unlike historical scenarios, Monte Carlo can produce scenarios that have never occurred before. The key design choices determine the quality of the output:</p><ul><li><strong>Distribution assumptions:</strong> Using fat-tailed distributions (Student's t, stable distributions, or mixture-normal distributions) rather than Gaussian captures the excess kurtosis observed in real returns. A Student's t-distribution with 3-5 degrees of freedom roughly matches the tail behavior of daily equity returns.</li><li><strong>Correlation regimes:</strong> A two-regime model (normal correlations and stress correlations) better captures real portfolio behavior than a single stable correlation matrix. Markov-switching models can estimate when the portfolio is in each regime.</li><li><strong>Variance-covariance updating:</strong> Static covariance matrices miss the volatility clustering that amplifies stress scenarios. GARCH-based covariance models (DCC-GARCH) update the covariance matrix dynamically based on recent returns, providing more accurate short-term scenario simulation.</li></ul><p>The output of Monte Carlo stress testing is not just the expected loss but the full distribution of outcomes — including the shape of the tail beyond the 99th percentile, which is where existential risks live.</p>"
    },
    {
      type: "text",
      content: "<h3>Correlation Breakdown and Liquidity Stress</h3><p><strong>Correlation breakdown</strong> is the phenomenon where diversification disappears precisely when it is needed most. During the 2008 financial crisis, the correlation between the S&P 500 and investment-grade corporate bonds moved from approximately -0.3 (diversifying) to +0.7 (co-moving). A portfolio that calculated a 10% maximum drawdown under normal correlations actually suffered a 35%+ drawdown. Testing a portfolio under extreme correlation scenarios is therefore essential.</p><p><strong>Liquidity stress testing</strong> addresses a different question: not just how much will positions decline in value, but can the portfolio survive if it is forced to liquidate positions in a stressed market? Liquidity stress tests incorporate:</p><ul><li><strong>Bid-ask spread widening:</strong> In a 2008-style crisis, bid-ask spreads on illiquid bonds widened by 5-10x. The mark-to-market loss from spread widening alone can be substantial.</li><li><strong>Market depth assumptions:</strong> How much of each position can be liquidated per day without further market impact? A 1-billion-dollar position in a stock with average daily volume of 10 million dollars will take 10+ days to liquidate at 10% of ADV.</li><li><strong>Funding liquidity:</strong> Will repo lines and margin facilities remain available during a stress event? The 2008 experience showed that prime brokers can recall credit with little notice, forcing simultaneous liquidation of multiple portfolios at the worst time.</li></ul>"
    },
    {
      type: "comparison-table",
      headers: ["Stress Test Type", "Methodology", "Strengths", "Weaknesses", "Best Suited For"],
      rows: [
        ["Historical Scenario", "Replay actual crisis return sequences on current portfolio", "Uses real crisis correlations and dynamics", "Backward-looking; next crisis may differ structurally", "Regulatory reporting; intuitive communication to stakeholders"],
        ["Hypothetical Scenario", "Define custom shock vectors (e.g., rates +300bps, equity -40%)", "Can address specific identified risks; forward-looking", "Scenario design requires expert judgment; correlation assumptions arbitrary", "Testing specific macro risks; board-level risk discussions"],
        ["Monte Carlo (Gaussian)", "Simulate paths using normal distribution covariance matrix", "Many scenarios; captures portfolio non-linearity", "Severely underestimates tail risk; fat tails not represented", "Options book gamma/vega scenario generation"],
        ["Monte Carlo (Fat-Tailed)", "Simulate paths using Student-t or mixture distributions", "Better tail representation; captures skewness", "Complex to calibrate; parameter sensitivity", "Hedge fund risk management; internal economic capital"],
        ["Reverse Stress Test", "Find scenarios that cause a specific loss (e.g., 30% drawdown)", "Reveals hidden vulnerabilities; scenario-agnostic", "Many plausible scenarios may cause the target loss", "Identifying the most dangerous unhedged exposures"],
        ["Liquidity Stress Test", "Model position liquidation costs under stressed bid-ask and depth", "Captures funding and market liquidity simultaneously", "Data-intensive; market depth estimates are uncertain", "Funds with illiquid positions; risk of forced liquidation"]
      ]
    },
    {
      type: "key-concept",
      title: "Tail Risk Hedging: Cost vs Protection",
      content: "Identifying tail risk through stress testing is valuable only if it informs action. Tail risk hedging strategies include: (1) Long volatility (buying OTM puts or variance swaps) — the most direct protection. The challenge is cost: buying 10% OTM puts on equity portfolios costs approximately 1-3% per year in normal markets. Over a 10-year period with only one major crash, this drag can compound to 10-30% of portfolio value. (2) Trend-following allocations — systematic trend strategies (managed futures) have historically performed best during prolonged bear markets, providing natural crash protection. The cost is diversification drag in sideways and trending-up markets. (3) Safe-haven allocation — maintaining allocations to long-dated Treasuries, gold, or tail-risk-focused funds provides diversification, though correlation to equities is not guaranteed in all crisis types (2022 demonstrated this failure). (4) Dynamic hedging — monitoring leading indicators (VIX level, credit spreads, yield curve) and increasing put protection when stress signals emerge is more capital-efficient than static hedging but introduces timing risk. The key framework: size the hedge relative to the stress scenario loss you cannot tolerate. Spending 1% per year to reduce a potential 30% drawdown to a 15% drawdown is rational if the 30% loss would impair your ability to continue operating."
    }
  ]
};
