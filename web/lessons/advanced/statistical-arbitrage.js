LESSON_REGISTRY["statistical-arbitrage"] = {
  id: "statistical-arbitrage",
  title: "Statistical Arbitrage",
  track: "advanced",
  category: "advanced-strategies",
  difficulty: "advanced",
  order: 54,
  estimatedMinutes: 15,
  xpReward: 100,
  prerequisites: ["algo-execution"],
  sections: [
    {
      type: "text",
      content: "<h3>The Statistical Arbitrage Framework</h3><p>Statistical arbitrage (stat arb) is the systematic exploitation of temporary mispricings between related securities. Unlike pure arbitrage (which involves risk-free profits from identical assets), stat arb involves probabilistic, mean-reverting bets backed by statistical models. The core thesis: if two or more historically correlated securities diverge in relative value, that divergence is likely to revert, providing a profit opportunity — if your risk model is correct and your holding period is appropriate.</p><p>Modern stat arb is primarily a quantitative discipline. Positions are sized by a risk model, signals are generated algorithmically, and execution is automated. The edge comes not from any single trade but from the law of large numbers across many positions: each individual bet has moderate probability, but across hundreds of positions the expected value is positive and the risk is diversified.</p>"
    },
    {
      type: "key-concept",
      title: "Principal Component Analysis (PCA) and Eigenportfolios",
      content: "PCA is the mathematical foundation of most statistical arbitrage models. Applied to equity returns, PCA decomposes the covariance matrix of returns into orthogonal factors (principal components) ordered by the variance they explain. The first principal component typically represents the market factor (a market-cap-weighted portfolio). The second and third typically represent sector or style tilts. By expressing each stock's return as a linear combination of these factors, you can model what each stock 'should' return given the current values of the factors. An eigenportfolio is a portfolio constructed by weighting stocks proportionally to their loadings on a principal component. These portfolios are factor-pure — by construction they are uncorrelated with all other eigenportfolios. A stat arb signal is generated when a stock's actual return deviates from its factor-model predicted return (its 'residual' return), and the bet is that this residual will revert to zero."
    },
    {
      type: "text",
      content: "<h3>Mean Reversion Signals and Signal Construction</h3><p>The residual return (also called the idiosyncratic return, alpha signal, or stock-specific return) is the component of a stock's return not explained by the factor model. For a stat arb strategy, this residual is the primary trading signal. Construction follows these steps:</p><ol><li><strong>Return calculation:</strong> Compute daily (or higher frequency) returns for each stock.</li><li><strong>Factor return estimation:</strong> Run a cross-sectional regression of stock returns on factor exposures to estimate factor returns each day.</li><li><strong>Residual calculation:</strong> Subtract the factor model's predicted return from the actual return. The residual is assumed to be mean-reverting.</li><li><strong>Signal normalization:</strong> Normalize residuals into z-scores (mean zero, unit variance) using a rolling window. A z-score of +2 means the stock has significantly outperformed its factor-predicted return — a short signal. A z-score of -2 means significant underperformance — a long signal.</li><li><strong>Signal decay:</strong> Most mean-reversion signals have a half-life of 1-5 days. The signal strength decays as the stock reverts. Updating the signal daily (or more frequently) is essential.</li></ol>"
    },
    {
      type: "text",
      content: "<h3>Portfolio Construction and Risk Management</h3><p>Stat arb portfolios must be constructed carefully to achieve the desired risk exposures:</p><ul><li><strong>Dollar neutrality:</strong> Long and short positions are equal in dollar value, eliminating directional market exposure at the gross level.</li><li><strong>Factor neutrality:</strong> The portfolio must also be neutral to the risk factors (market, sector, style) in the risk model. Even a dollar-neutral portfolio with long technology stocks and short energy stocks has significant sector factor exposure. Factor neutralization is achieved by constraining the optimization so that the sum of factor exposures across the long and short books is zero for each factor.</li><li><strong>Idiosyncratic risk limits:</strong> Maximum position size in any single stock limits concentration risk. A typical limit is 0.5%-1.0% of portfolio NAV per stock.</li><li><strong>Turnover management:</strong> High turnover erodes alpha through transaction costs. Signal z-score thresholds are calibrated to balance the cost of trading against the benefit of having current positions.</li></ul><p>The portfolio is typically optimized using a quadratic optimizer (mean-variance optimization with the signal as expected return and the risk model covariance matrix as the risk input).</p>"
    },
    {
      type: "comparison-table",
      headers: ["Strategy Variant", "Signal Type", "Holding Period", "Key Risk", "Typical Sharpe Ratio"],
      rows: [
        ["Pairs Trading", "Cointegration between two stocks", "Days to weeks", "Cointegration breakdown; merger arbitrage contamination", "0.5 - 1.5 before costs"],
        ["PCA-Based Residual Reversion", "Cross-sectional z-score of factor residuals", "1-5 days", "Factor model instability; crowding by similar funds", "1.0 - 2.5 with good execution"],
        ["Earnings Drift Reversion", "Post-earnings announcement drift mean reversion", "Days to 2 weeks", "Persistent drift if fundamentals shift; event contamination", "0.8 - 1.5"],
        ["Industry Relative Value", "Stocks vs sector ETF; within-sector rank", "1-10 days", "Sector-specific news moves entire group against position", "0.6 - 1.2"],
        ["High-Frequency Stat Arb", "Short-term order imbalance, microstructure signals", "Seconds to minutes", "Technology risk; latency disadvantage vs HFT", "3.0+ but capacity-constrained"],
        ["ETF Arbitrage", "ETF price vs NAV of underlying basket", "Intraday to overnight", "Basket untradability; stale NAV pricing", "Low Sharpe but very consistent; basis risk"]
      ]
    },
    {
      type: "key-concept",
      title: "Crowding Risk: The Existential Threat to Stat Arb",
      content: "The single greatest risk in statistical arbitrage is crowding — when many funds run similar models and hold similar positions. Because stat arb signals are derived from the same publicly available price data using similar mathematical techniques (PCA, cointegration, cross-sectional z-scores), many shops arrive at nearly identical positions. The danger: when one large fund needs to reduce exposure (due to redemptions, margin calls, or a drawdown stop), they sell their long positions and buy back their short positions. This creates exactly the price moves that hurt all other similarly-positioned funds simultaneously. This self-reinforcing deleveraging cascade is what caused the 'Quant Quake' of August 2007, during which many previously highly Sharpe stat arb funds suffered losses of 5-15% in a single week from positions that were previously profitable. Mitigation strategies include: signal differentiation (proprietary data sources, alternative signals), position diversification across uncorrelated signal types, drawdown stops with pre-specified deleveraging plans, and monitoring crowding indicators such as factor correlation across funds' estimated holdings."
    }
  ]
};
