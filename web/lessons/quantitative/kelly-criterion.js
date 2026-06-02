LESSON_REGISTRY["kelly-criterion"] = {
  id: "kelly-criterion",
  title: "Kelly Criterion and Bet Sizing",
  category: "quantitative-finance",
  difficulty: "advanced",
  estimatedMinutes: 13,
  xpReward: 95,
  sections: [
    {
      type: "text",
      content: "<h3>The Kelly Formula</h3><p>John Kelly (Bell Labs, 1956) derived the optimal bet size that maximizes the <strong>long-run growth rate of wealth</strong> — equivalently, maximizes the expected value of the logarithm of wealth. For a bet with probability <em>p</em> of winning and odds of <em>b</em>-to-1:</p><p><em>f* = (b * p - q) / b = p - q/b</em></p><p>Where <em>q = 1 - p</em> is the probability of losing. For a coin with p=0.55 and even odds (b=1), Kelly recommends betting f* = 0.55 - 0.45 = 10% of capital on each flip. This is the <strong>exact fraction</strong> that maximizes expected log wealth; any bet larger than Kelly leads to lower long-run growth.</p><p>For continuous returns (the investment setting), the Kelly fraction is: f* = mu / sigma^2, where mu is the expected excess return and sigma^2 is the return variance. This is equivalent to the <strong>Sharpe ratio times the inverse volatility</strong>.</p>"
    },
    {
      type: "key-concept",
      title: "Why Overbetting Is Catastrophic",
      content: "The Kelly criterion produces the <em>geometric</em> maximum — not the arithmetic maximum. Betting more than Kelly actually <strong>reduces</strong> long-run growth and can lead to ruin. If you bet 2x Kelly (double Kelly), your long-run growth rate equals the risk-free rate — all edge is destroyed by the volatility drag. At 3x Kelly, you lose money on average despite having a positive-edge bet. This is because variance drag (approximately 0.5 * f^2 * sigma^2) grows faster than the linear gain from larger bets. The log-wealth growth rate is: g = mu * f - 0.5 * sigma^2 * f^2, which is maximized at f* = mu / sigma^2 and is negative for f > 2 * f*."
    },
    {
      type: "text",
      content: "<h3>Fractional Kelly and Practical Considerations</h3><p>Full Kelly is theoretically optimal but deeply impractical for several reasons:</p><ul><li><strong>Parameter uncertainty</strong>: Kelly is extremely sensitive to the accuracy of mu and sigma estimates. An overestimate of edge leads to overbetting. Most practitioners use <strong>half-Kelly</strong> (f = f*/2) as a conservative starting point.</li><li><strong>Short-term volatility</strong>: Full Kelly produces large position sizes and high drawdowns. The standard deviation of outcomes under full Kelly is approximately equal to its expected growth rate — meaning 1-sigma bad luck wipes out all expected gains. Half-Kelly halves the drawdown at the cost of only 25% of the growth rate.</li><li><strong>Non-stationarity</strong>: The true edge changes over time. A conservative fraction protects against regime changes where edge temporarily disappears.</li></ul><p>Ed Thorp, who applied Kelly to blackjack and later to quantitative investing, consistently used fractional Kelly (typically 25-50% of full Kelly) to account for estimation error.</p>"
    },
    {
      type: "text",
      content: "<h3>Kelly for Multiple Simultaneous Bets</h3><p>When running multiple simultaneous positions (the standard investment case), the Kelly framework extends to a portfolio context. The optimal weight vector is:</p><p><em>f* = Sigma^{-1} * mu</em></p><p>Where Sigma is the covariance matrix of returns and mu is the vector of expected excess returns. This is proportional to the <strong>mean-variance tangency portfolio</strong> — Kelly and Markowitz converge in the log-utility (continuous-returns) setting.</p><p>Practical implications:</p><ul><li>Positions are determined jointly — the Kelly fraction for a single asset depends on its correlations with all other positions</li><li>Adding a correlated position reduces the Kelly fraction for existing positions (reducing concentration risk)</li><li>The diversification benefit compounds over time: a portfolio of 20 uncorrelated Kelly bets grows faster than a single Kelly bet with the same total edge</li></ul>"
    },
    {
      type: "interactive-chart",
      config: {
        ticker: "SPY",
        title: "SPY — Historical Sharpe Ratio and Kelly Fraction Estimate",
        description: "The Kelly fraction f* = mu/sigma^2 for broad equities is estimated at roughly 0.3-0.5 using long-run parameters, suggesting significant leverage is not warranted for the market portfolio alone."
      }
    },
    {
      type: "comparison-table",
      headers: ["Strategy", "Fraction of Full Kelly", "Growth Rate vs. Full Kelly", "Max Drawdown (approx.)", "Best For"],
      rows: [
        ["Full Kelly", "1.0x", "100% (maximum)", "~50-70% in practice", "Perfect information scenarios"],
        ["Half Kelly", "0.5x", "75% of full Kelly", "~25-35%", "Most real trading with estimation error"],
        ["Quarter Kelly", "0.25x", "43% of full Kelly", "~15-20%", "High-uncertainty environments"],
        ["Fixed fraction (2%)", "Varies", "Suboptimal for high-edge strategies", "~10-15%", "Risk-averse systematic traders"],
        ["Equal weight", "~0.1-0.3x typically", "Suboptimal", "Varies by asset volatility", "Simple diversification without estimates"]
      ]
    }
  ],
  track: "quantitative",
  order: 43,
  prerequisites: []
};
