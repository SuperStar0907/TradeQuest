LESSON_REGISTRY["alpha-attribution"] = {
  id: "alpha-attribution",
  title: "Alpha Attribution and Performance Decomposition",
  track: "expert",
  category: "expert-research",
  difficulty: "expert",
  order: 63,
  estimatedMinutes: 15,
  xpReward: 100,
  prerequisites: ["defi-tokenomics"],
  sections: [
    {
      type: "text",
      content: "<h3>The Attribution Problem: Separating Skill from Beta</h3><p>Raw return is the most misleading performance metric in finance. A fund that returned 25% in a year when the market returned 28% underperformed. A fund that returned 5% in a year when the market fell 20% generated extraordinary alpha. Performance attribution is the discipline of decomposing observed returns into components attributable to market exposure (beta), systematic factor exposures (factor alpha), asset selection (idiosyncratic alpha), and timing. Without this decomposition, investors and managers cannot determine whether a strategy generates genuine alpha or merely disguised beta.</p><p>The Carhart four-factor model is the standard baseline for equity fund attribution: R_p - R_f = alpha + beta_mkt*(R_mkt-R_f) + beta_smb*SMB + beta_hml*HML + beta_mom*MOM + epsilon. Alpha in this context is the intercept — the return unexplained by exposure to the market, small-cap premium, value premium, and momentum premium.</p>"
    },
    {
      type: "key-concept",
      title: "Brinson-Hood-Beebower Attribution: Allocation vs. Selection",
      content: "The Brinson-Hood-Beebower (BHB) model decomposes active portfolio return relative to a benchmark into three effects. Allocation effect measures the impact of overweighting or underweighting sectors relative to benchmark; it is positive when a manager overweights outperforming sectors and underweights underperforming ones. Selection effect measures the impact of picking stocks within each sector that outperform the benchmark sector return; a manager can add value here even with neutral sector weights. Interaction effect captures the joint impact of both decisions simultaneously. The key formula: Total Active Return = Sum_i [ (w_pi - w_bi) * (R_bi - R_b) + w_bi * (R_pi - R_bi) + (w_pi - w_bi) * (R_pi - R_bi) ]. In practice, sophisticated attribution systems include a fourth factor — currency allocation — for global mandates, and decompose selection further into factor-based and residual components."
    },
    {
      type: "text",
      content: "<h3>The Information Ratio and Its Correct Interpretation</h3><p>The information ratio (IR) is the most important single metric for evaluating an active manager: IR = alpha / tracking error, where alpha is the annualized excess return above benchmark and tracking error is the annualized standard deviation of excess returns. Unlike the Sharpe ratio, which measures return per unit of total risk, the IR measures return per unit of active risk taken — the risk you chose to deviate from the benchmark.</p><p>Theoretical properties of the IR:</p><ul><li><strong>IR of 0.5 is considered good</strong> for an active equity manager; IR above 1.0 is exceptional and rare over multi-year periods</li><li><strong>IR is roughly related to hit rate</strong> by the Fundamental Law of Active Management: IR = IC * sqrt(N), where IC is the information coefficient (correlation between forecasts and outcomes) and N is the number of independent bets per year. A manager with IC of 0.05 (modest skill) can achieve IR of 0.5 by making 100 independent bets per year.</li><li><strong>The IR should be evaluated over full market cycles</strong> — a manager with high IR in bull markets but deeply negative IR in bear markets has not demonstrated durable skill.</li></ul>"
    },
    {
      type: "text",
      content: "<h3>Skill vs. Luck: Statistical Significance in Fund Evaluation</h3><p>The single greatest error in performance evaluation is confusing statistical noise with skill. With N years of annual returns, the t-statistic for testing whether the true Sharpe ratio is positive is approximately SR * sqrt(N). Even a genuine Sharpe ratio of 0.5 produces a t-statistic above 2 (the conventional 5% significance threshold) only after 16 years of data. Over shorter periods, almost any result could be luck.</p><p>Three techniques beyond simple t-testing improve skill assessment. Bootstrap simulation: resample the fund's actual returns with replacement to construct a distribution of achievable Sharpe ratios under the null of no skill; compare the actual to this distribution. Cross-validation of signal quality: separately evaluate the strategy's constituent alpha signals — if individual signals have consistent IC across time and assets, the aggregate skill is more likely real. Out-of-sample performance: any backtest is in-sample; comparing performance before and after a manager's strategy became known or capacity-constrained separates ex-ante skill from ex-post overfitting. The False Discovery Rate (FDR) framework — adjusting for the number of strategies tested before selecting the best — provides a rigorous framework for determining how many standard deviations of performance are required to claim statistical significance given the number of strategies evaluated.</p>"
    },
    {
      type: "key-concept",
      title: "Regime-Conditional Attribution",
      content: "Unconditional attribution averages performance over all market conditions, obscuring the crucial question of when a strategy works and why. Regime-conditional attribution decomposes performance by market state: bull vs. bear, high vs. low volatility, risk-on vs. risk-off, expansion vs. recession. A strategy that earns all its alpha in low-volatility regimes and loses in high-volatility regimes is a short-volatility strategy in disguise, regardless of what the portfolio holdings look like. The practical implementation uses regime classifiers (HMM models, threshold rules on VIX level or trailing returns) to label periods, then computes attribution statistics separately within each regime. Performance that is consistent across diverse regimes — particularly if the strategy earns positive alpha in its weakest regime — is the strongest evidence of durable skill."
    },
    {
      type: "comparison-table",
      headers: ["Attribution Level", "What It Measures", "Key Metric", "Typical Use"],
      rows: [
        ["Total Return vs. Benchmark", "Raw outperformance", "Active return (alpha)", "Basic performance reporting"],
        ["Factor Decomposition (Carhart)", "Beta vs. factor exposures vs. residual alpha", "Regression alpha (intercept)", "Distinguishing luck/factor from skill"],
        ["Brinson-Hood-Beebower", "Allocation vs. selection within sectors", "Allocation, selection, interaction effects", "Equity long-only fund analysis"],
        ["Information Coefficient Analysis", "Per-forecast prediction accuracy", "IC, ICIR (IC / std dev of IC)", "Quantitative signal evaluation"],
        ["Regime-Conditional", "When and why the strategy works", "Alpha by regime; worst-regime alpha", "Robustness and strategy characterization"]
      ]
    }
  ]
};
