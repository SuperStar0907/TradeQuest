LESSON_REGISTRY["markowitz-optimization"] = {
  id: "markowitz-optimization",
  title: "Markowitz Mean-Variance Optimization",
  category: "quantitative-finance",
  difficulty: "advanced",
  estimatedMinutes: 15,
  xpReward: 100,
  sections: [
    {
      type: "text",
      content: "<h3>The Mean-Variance Framework</h3><p>Harry Markowitz (1952) formalized the intuition that diversification reduces risk without sacrificing expected return. Given a portfolio of <em>n</em> assets, the framework characterizes portfolios by two statistics:</p><ul><li><strong>Expected return</strong>: mu<sub>p</sub> = w<sup>T</sup> * mu, where w is the weight vector and mu is the vector of expected returns</li><li><strong>Portfolio variance</strong>: sigma<sub>p</sub>^2 = w<sup>T</sup> * Sigma * w, where Sigma is the covariance matrix</li></ul><p>The <strong>optimization problem</strong> is: minimize portfolio variance for a given target return, subject to the constraint that weights sum to 1 (and optionally that weights are non-negative for long-only portfolios). Solving this for all target return levels traces out the <strong>efficient frontier</strong> — the set of portfolios with the highest expected return for each level of risk.</p>"
    },
    {
      type: "key-concept",
      title: "The Efficient Frontier and the Tangency Portfolio",
      content: "The efficient frontier is a curved line in mean-variance space. Two special portfolios lie on it: the <strong>global minimum variance (GMV) portfolio</strong> at the leftmost point, and the <strong>tangency portfolio</strong> — the point where a line drawn from the risk-free rate is tangent to the frontier. The tangency portfolio maximizes the <strong>Sharpe ratio</strong>. Under CAPM assumptions, every rational investor holds a combination of the risk-free asset and the tangency portfolio. The tangency portfolio is the market portfolio. In practice, the estimated tangency portfolio is highly sensitive to expected return inputs, which is the central problem with mean-variance optimization."
    },
    {
      type: "text",
      content: "<h3>Practical Problems with MVO</h3><p>Despite its theoretical elegance, mean-variance optimization has serious practical limitations:</p><ul><li><strong>Estimation error</strong>: Expected returns are notoriously difficult to estimate. A small error in mu leads to wildly different portfolio weights. Michaud (1989) showed that the optimizer amplifies estimation errors rather than diversifying them.</li><li><strong>Concentrated positions</strong>: Unconstrained MVO typically produces extreme, concentrated portfolios — often 100% in one or two assets.</li><li><strong>Covariance matrix instability</strong>: With 500 assets, you need to estimate 124,750 covariance parameters from limited historical data. The sample covariance matrix is often singular or poorly conditioned for n > T (more assets than observations).</li><li><strong>Lookback sensitivity</strong>: Portfolio weights are highly sensitive to the choice of historical window. Changing from a 1-year to a 3-year lookback can completely change the allocation.</li></ul>"
    },
    {
      type: "text",
      content: "<h3>Practical Solutions and Constraints</h3><p>Practitioners address MVO's fragility through several techniques:</p><ul><li><strong>Shrinkage estimators</strong>: The Ledoit-Wolf shrinkage estimator blends the sample covariance matrix toward a structured target (e.g., the identity matrix or constant-correlation matrix), producing a better-conditioned estimate.</li><li><strong>Resampled efficiency</strong> (Michaud): Run MVO on many bootstrap samples of the return series, then average the resulting weight vectors. This produces more stable, diversified allocations.</li><li><strong>Constraints</strong>: Apply upper bounds per asset (e.g., max 5%), sector constraints, turnover constraints, and transaction cost penalties directly in the optimization.</li><li><strong>Black-Litterman</strong>: Replace sample mean returns with equilibrium returns blended with investor views, dramatically reducing sensitivity to return estimates.</li><li><strong>Factor-based covariance</strong>: Use a factor model (Barra, Axioma) to estimate the covariance matrix with far fewer parameters than the full sample covariance.</li></ul>"
    },
    {
      type: "interactive-chart",
      config: {
        ticker: "SPY",
        title: "SPY — Rolling 1-Year vs. 3-Year Return Estimates",
        description: "Expected return estimates change significantly with the lookback window. This volatility in inputs is the core reason mean-variance optimization produces unstable portfolio weights in practice."
      }
    },
    {
      type: "comparison-table",
      headers: ["Approach", "Input Requirement", "Stability", "Complexity", "Best For"],
      rows: [
        ["Unconstrained MVO", "Expected returns + full covariance matrix", "Very low — extreme weights", "Low", "Academic illustration only"],
        ["Constrained MVO", "Expected returns + covariance + constraints", "Moderate", "Low to moderate", "Long-only institutional portfolios"],
        ["Global Minimum Variance", "Covariance matrix only (no return forecasts)", "Moderate to high", "Low", "Investors with no return views"],
        ["Resampled Efficiency", "Expected returns + covariance + bootstrap", "High", "Moderate", "Multi-asset strategic allocation"],
        ["Black-Litterman MVO", "Equilibrium returns + views + covariance", "High", "Moderate to high", "Active managers with return forecasts"],
        ["Risk Parity", "Covariance matrix only", "High", "Low to moderate", "Risk-balanced diversification"]
      ]
    }
  ],
  track: "quantitative",
  order: 41,
  prerequisites: ["factor-models"]
};
