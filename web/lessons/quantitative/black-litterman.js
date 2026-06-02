LESSON_REGISTRY["black-litterman"] = {
  id: "black-litterman",
  title: "Black-Litterman Portfolio Model",
  category: "quantitative-finance",
  difficulty: "advanced",
  estimatedMinutes: 15,
  xpReward: 100,
  sections: [
    {
      type: "text",
      content: "<h3>The Problem Black-Litterman Solves</h3><p>Fischer Black and Robert Litterman (Goldman Sachs, 1990) developed their model to address the two central failures of mean-variance optimization: <strong>extreme, unintuitive portfolio weights</strong> and <strong>excessive sensitivity to expected return estimates</strong>.</p><p>Their insight was to replace the unreliable sample mean returns with a two-component prior:</p><ol><li><strong>Equilibrium returns</strong>: The implied returns that would make the market-cap weighted portfolio the optimal mean-variance portfolio. If you have no views, you hold the market.</li><li><strong>Investor views</strong>: Your own forecasts, blended with the equilibrium returns using Bayesian updating. The confidence in each view determines how much the final returns deviate from equilibrium.</li></ol><p>The result is a <em>posterior distribution</em> over expected returns that combines the stability of equilibrium with the informational content of your forecasts.</p>"
    },
    {
      type: "text",
      content: "<h3>Step 1: Computing Equilibrium Returns</h3><p>The equilibrium (or implied) expected return vector <strong>Pi</strong> is derived by reverse-engineering the market portfolio:</p><p><em>Pi = delta * Sigma * w<sub>mkt</sub></em></p><p>Where:</p><ul><li><em>delta</em> is the risk aversion coefficient (typically 2.5, derived from the market Sharpe ratio divided by market variance)</li><li><em>Sigma</em> is the covariance matrix of asset returns</li><li><em>w<sub>mkt</sub></em> is the vector of market-cap weights of the assets</li></ul><p>This reverse optimization ensures that, absent any views, the optimal portfolio exactly equals the market-cap weighted portfolio. This is the <em>neutral starting point</em> — a sensible default that avoids the extreme allocations produced by optimizing on sample returns.</p>"
    },
    {
      type: "key-concept",
      title: "Bayesian Blending of Views",
      content: "Investor views are expressed as: <strong>P * mu = Q + epsilon</strong>, where P is a <em>k x n</em> matrix mapping views to assets, Q is the <em>k x 1</em> vector of view returns, and Omega is the <em>k x k</em> diagonal matrix of view uncertainties (variances). A view can be <em>absolute</em> (e.g., 'Asset A will return 8%') or <em>relative</em> (e.g., 'Asset A will outperform Asset B by 3%'). The <strong>posterior expected return</strong> is: mu_BL = [(tau * Sigma)^{-1} + P^T * Omega^{-1} * P]^{-1} * [(tau * Sigma)^{-1} * Pi + P^T * Omega^{-1} * Q]. Views with low Omega (high confidence) pull the posterior strongly toward the view; views with high Omega have minimal influence."
    },
    {
      type: "text",
      content: "<h3>Setting View Confidence (Omega)</h3><p>The hardest part of implementing Black-Litterman is specifying <em>Omega</em>, the uncertainty in each view. Several approaches are used in practice:</p><ul><li><strong>Proportional to prior variance</strong>: Omega<sub>kk</sub> = tau * P<sub>k</sub> * Sigma * P<sub>k</sub><sup>T</sup>. This scales view uncertainty to the same tau parameter used for the prior uncertainty, avoiding the need to set Omega independently.</li><li><strong>Idzorek's method</strong>: Express confidence as a percentage (0-100%) and translate it into Omega numerically using an iterative procedure. More intuitive for practitioners.</li><li><strong>Historical backtest</strong>: Estimate Omega from the historical accuracy of similar forecasts (information coefficient squared).</li></ul><p>The scalar <em>tau</em> controls overall confidence in the equilibrium prior relative to historical covariance. Values in the range 0.025 to 0.1 are common; some implementations set tau = 1 and adjust view weights instead.</p>"
    },
    {
      type: "text",
      content: "<h3>From Posterior Returns to Portfolio Weights</h3><p>Once the posterior expected return vector mu_BL and the posterior covariance matrix are computed, you run a standard mean-variance optimization using mu_BL as inputs. The resulting weights will be:</p><ul><li><strong>Close to market-cap weights</strong> when views have low confidence or are absent</li><li><strong>Tilted toward view-consistent assets</strong> when views have high confidence and large alpha</li><li><strong>Diversified and bounded</strong> unlike unconstrained MVO on sample returns</li></ul><p>Black-Litterman is not a replacement for the optimizer — it is a smarter way to generate the return inputs that feed the optimizer. The final step still uses MVO, and constraints (long-only, turnover, sector limits) are applied as usual.</p>"
    },
    {
      type: "comparison-table",
      headers: ["Aspect", "Standard MVO", "Black-Litterman MVO"],
      rows: [
        ["Return inputs", "Sample historical mean returns", "Posterior returns blending equilibrium + views"],
        ["Default portfolio (no views)", "Highly concentrated, unstable", "Market-cap weighted portfolio"],
        ["Sensitivity to estimates", "Extremely high — small changes flip allocations", "Low — equilibrium prior dampens estimation error"],
        ["Incorporating forecasts", "Direct substitution of return forecasts", "Bayesian update weighted by view confidence"],
        ["View expression", "Not structured", "Absolute or relative views with confidence levels"],
        ["Implementation complexity", "Low", "Moderate — requires market cap weights, risk aversion calibration"]
      ]
    }
  ],
  track: "quantitative",
  order: 42,
  prerequisites: ["markowitz-optimization"]
};
