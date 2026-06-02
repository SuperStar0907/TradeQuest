LESSON_REGISTRY["risk-parity"] = {
  id: "risk-parity",
  title: "Risk Parity Portfolio Construction",
  category: "quantitative-finance",
  difficulty: "advanced",
  estimatedMinutes: 14,
  xpReward: 95,
  sections: [
    {
      type: "text",
      content: "<h3>The Problem with Traditional Allocation</h3><p>A classic 60/40 portfolio (60% equities, 40% bonds) appears diversified by <em>capital</em>, but is dominated by <em>risk</em>. Equities are roughly 3-4x more volatile than bonds. As a result, equities contribute approximately <strong>85-90% of total portfolio risk</strong>, while bonds contribute only 10-15%. In practice, the portfolio behaves almost identically to an all-equity portfolio during market stress — bonds add diversification in calm markets but the portfolio's risk is almost entirely equity risk.</p><p><strong>Risk parity</strong> addresses this by allocating capital such that each asset class contributes an <em>equal share of total portfolio risk</em>. To achieve equal risk contributions, lower-volatility assets (bonds) receive larger capital allocations, while higher-volatility assets (equities) receive smaller allocations. This typically requires <strong>leverage</strong> on the bond side to bring total portfolio return to a meaningful level.</p>"
    },
    {
      type: "key-concept",
      title: "Equal Risk Contribution (ERC)",
      content: "The formal risk parity condition is that each asset's <strong>marginal risk contribution</strong> equals 1/n of total portfolio risk: RC<sub>i</sub> = w<sub>i</sub> * (partial sigma_p / partial w<sub>i</sub>) = sigma_p / n for all i. The marginal risk contribution of asset i is: w<sub>i</sub> * (Sigma * w)<sub>i</sub> / sigma_p. For a two-asset portfolio (equities and bonds), the ERC condition simplifies to: w<sub>eq</sub> * sigma<sub>eq</sub> = w<sub>bond</sub> * sigma<sub>bond</sub> (ignoring correlation). This gives w<sub>eq</sub> / w<sub>bond</sub> = sigma<sub>bond</sub> / sigma<sub>eq</sub> — assets are weighted inversely proportional to their volatility."
    },
    {
      type: "text",
      content: "<h3>Leverage and the All-Weather Framework</h3><p>Because risk-parity portfolios overweight low-volatility assets (particularly bonds), they require leverage to achieve equity-like returns. The leverage is applied at the portfolio level, not within individual positions. For example, a risk-parity portfolio with 40% equity and 160% bonds (200% gross exposure) might target 10-12% annualized volatility — similar to a 60/40 portfolio — while maintaining equal risk contributions from each asset class.</p><p>Ray Dalio's <strong>All-Weather portfolio</strong> at Bridgewater is the most famous public application of risk parity. It allocates across four economic environments defined by growth and inflation surprises:</p><ul><li><strong>Rising growth</strong>: Long equities, long commodities</li><li><strong>Falling growth</strong>: Long bonds, long gold</li><li><strong>Rising inflation</strong>: Long commodities, long inflation-linked bonds (TIPS)</li><li><strong>Falling inflation</strong>: Long bonds, long equities</li></ul><p>The portfolio weights approximately 30% equities, 40% long-term bonds, 15% intermediate bonds, 7.5% gold, 7.5% commodities. The large bond allocation requires leverage to equalize risk contributions.</p>"
    },
    {
      type: "text",
      content: "<h3>Practical Implementation Challenges</h3><p>Risk parity is simple in concept but has several practical challenges:</p><ul><li><strong>Volatility estimation</strong>: Risk contributions depend on the covariance matrix, which must be estimated from historical data. Exponentially weighted covariance (EWMA) responds faster to regime changes than simple historical covariance.</li><li><strong>Leverage costs</strong>: Implementing leverage through futures, margin, or total return swaps adds financing costs that reduce net returns. The strategy's advantage over 60/40 shrinks when leverage costs are high relative to the bond risk premium.</li><li><strong>Bond sensitivity</strong>: Risk parity portfolios performed exceptionally well from 1980 to 2020 — a 40-year bull market in bonds. In a rising rate environment, the large bond allocation creates headwinds. The strategy is not immune to prolonged rising rate cycles.</li><li><strong>Volatility regime shifts</strong>: When equity volatility spikes (e.g., 2008, 2020), the risk parity algorithm de-levers equities and adds to bonds. This forced de-leveraging can amplify equity drawdowns and create procyclical selling pressure.</li></ul>"
    },
    {
      type: "interactive-chart",
      config: {
        ticker: "RPAR",
        title: "RPAR Risk Parity ETF — Performance and Volatility",
        description: "RPAR uses a risk parity approach across equities, Treasury bonds, TIPS, and commodities. Compare its volatility and drawdown profile against a traditional 60/40 portfolio."
      }
    },
    {
      type: "comparison-table",
      headers: ["Portfolio", "Equity Weight", "Bond Weight", "Risk Contribution (Equity)", "Leverage Required", "Key Risk"],
      rows: [
        ["60/40 Traditional", "60%", "40%", "~85-90%", "None", "Equity-dominated drawdowns"],
        ["Risk Parity (unlevered)", "~25-30%", "~70-75%", "~50%", "None", "Low absolute return without leverage"],
        ["Risk Parity (levered 1.5x)", "~40-45%", "~110%", "~50%", "1.5x gross", "Leverage costs, forced de-leveraging"],
        ["All-Weather (Dalio public)", "~30%", "~55% (LT+IT)", "~50%", "Moderate", "Bond bear market, inflation surprise"],
        ["Equal Weight", "~50%", "~50%", "~75-80%", "None", "Still equity-dominated due to vol mismatch"]
      ]
    }
  ],
  track: "quantitative",
  order: 44,
  prerequisites: ["markowitz-optimization"]
};
