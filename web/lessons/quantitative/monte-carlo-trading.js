LESSON_REGISTRY["monte-carlo-trading"] = {
  id: "monte-carlo-trading",
  title: "Monte Carlo Methods in Trading",
  category: "quantitative-finance",
  difficulty: "advanced",
  estimatedMinutes: 15,
  xpReward: 100,
  sections: [
    {
      type: "text",
      content: "<h3>What Is Monte Carlo Simulation?</h3><p>Monte Carlo simulation uses <strong>repeated random sampling</strong> to compute numerical results that are difficult or impossible to derive analytically. Named after the Monte Carlo Casino in Monaco, the method was formalized by Stanislaw Ulam and John von Neumann at Los Alamos in the 1940s. In trading and finance, Monte Carlo is used across three broad domains:</p><ul><li><strong>Option pricing</strong>: Simulating thousands of asset price paths under risk-neutral dynamics to estimate the expected payoff of path-dependent options (Asian, barrier, lookback)</li><li><strong>Portfolio risk</strong>: Simulating joint return distributions to estimate Value-at-Risk (VaR), Expected Shortfall (ES), and drawdown distributions</li><li><strong>Strategy evaluation</strong>: Bootstrapping historical returns to assess whether a strategy's backtest results are statistically significant or due to luck</li></ul>"
    },
    {
      type: "text",
      content: "<h3>Simulating Asset Price Paths</h3><p>The standard model for equity prices is <strong>Geometric Brownian Motion (GBM)</strong>:</p><p><em>dS = mu * S * dt + sigma * S * dW</em></p><p>In discrete form for simulation: S<sub>t+1</sub> = S<sub>t</sub> * exp((mu - 0.5 * sigma^2) * dt + sigma * sqrt(dt) * Z), where Z ~ N(0,1).</p><p>To simulate N paths over T time steps:</p><ol><li>Draw a matrix of standard normal random numbers: Z of shape (N, T)</li><li>Compute log-return increments: r = (mu - 0.5 * sigma^2) * dt + sigma * sqrt(dt) * Z</li><li>Compute cumulative sum of log-returns and exponentiate: S = S<sub>0</sub> * exp(cumsum(r, axis=1))</li></ol><p>For more realistic simulations, GBM can be replaced with a <strong>Heston stochastic volatility model</strong> (where sigma itself follows a mean-reverting process) or a <strong>jump-diffusion model</strong> (adding Poisson jumps to capture fat tails and gaps).</p>"
    },
    {
      type: "key-concept",
      title: "Bootstrap vs. Parametric Monte Carlo",
      content: "Two distinct approaches are used for portfolio and strategy simulation: <strong>Parametric Monte Carlo</strong> assumes returns follow a known distribution (usually multivariate normal or t-distribution with estimated parameters) and draws from it. This is fast but misses fat tails, skewness, and autocorrelation present in real data. <strong>Historical bootstrap</strong> (non-parametric Monte Carlo) resamples blocks of actual historical return data with replacement. Block bootstrap preserves short-run autocorrelation (momentum, mean reversion). The advantage is that the simulated distribution inherits all empirical features of the actual data. The disadvantage is that it is limited to regimes that actually occurred — it cannot simulate a worse crash than the historical maximum."
    },
    {
      type: "text",
      content: "<h3>Portfolio VaR and Expected Shortfall via Monte Carlo</h3><p><strong>Value-at-Risk (VaR)</strong> at confidence level alpha is the loss that is not exceeded with probability alpha over a given horizon. To compute it via Monte Carlo:</p><ol><li>Simulate N joint return scenarios for all portfolio assets (using historical bootstrap or parametric)</li><li>Apply portfolio weights to compute N portfolio return scenarios</li><li>Sort the N returns in ascending order</li><li>VaR at 99% = the loss at the 1st percentile (N * 0.01-th worst scenario)</li></ol><p><strong>Expected Shortfall (ES)</strong>, also called Conditional VaR (CVaR), is the average loss in the worst (1 - alpha)% of scenarios. ES is preferred to VaR in risk management because it captures the severity of tail losses, not just the threshold. Under Basel III, banks transitioned from VaR to ES as the standard risk measure.</p><p>For a 1-day 99% VaR on a $10M portfolio, a 10,000-scenario simulation identifies the 100 worst outcomes and averages them for ES.</p>"
    },
    {
      type: "text",
      content: "<h3>Applying Monte Carlo to Strategy Evaluation</h3><p>A backtest produces a single sample path of strategy returns. Monte Carlo methods test whether the observed performance could have arisen by chance:</p><ul><li><strong>Randomized benchmark</strong>: Shuffle the strategy's daily return time series (destroying autocorrelation) and re-run performance metrics 10,000 times. If only 3% of shuffled series beat the observed Sharpe ratio, the p-value is 0.03 — the strategy is unlikely to be a lucky draw.</li><li><strong>Block bootstrap</strong>: Resample overlapping return blocks (e.g., 20-day windows) to simulate alternative histories that preserve short-term autocorrelation. Compute confidence intervals for Sharpe ratio, maximum drawdown, and CAGR.</li><li><strong>Walk-forward Monte Carlo</strong>: Simulate the distribution of out-of-sample performance by repeatedly splitting historical data into training and validation windows, measuring how consistently the strategy performs across different market regimes.</li></ul><p>A strategy with a Sharpe ratio of 1.5 on a 5-year backtest with 250 trades has a reasonably narrow confidence interval. A strategy with 15 trades and a 1-year backtest has wide confidence intervals — Monte Carlo will show this explicitly.</p>"
    },
    {
      type: "comparison-table",
      headers: ["Method", "Use Case", "Handles Fat Tails", "Handles Autocorrelation", "Complexity"],
      rows: [
        ["Parametric GBM Monte Carlo", "Option pricing, basic VaR", "No (assumes normality)", "No", "Low"],
        ["Historical Simulation", "Portfolio VaR, backtesting", "Yes (uses actual history)", "Partially", "Low"],
        ["Block Bootstrap", "Strategy evaluation, ES", "Yes", "Yes (block length choice)", "Moderate"],
        ["Heston Stochastic Vol Monte Carlo", "Option pricing with vol smile", "Partial (fat tails from vol clustering)", "Yes (vol mean reversion)", "High"],
        ["Jump-Diffusion Monte Carlo", "Tail risk, gap modeling", "Yes (jumps add kurtosis)", "Partial", "High"],
        ["Copula-Based Monte Carlo", "Multi-asset tail dependence", "Yes (tail copula)", "No", "High"]
      ]
    }
  ],
  track: "quantitative",
  order: 45,
  prerequisites: []
};
