LESSON_REGISTRY["implied-volatility-iv-rank"] = {
  id: "implied-volatility-iv-rank",
  title: "Implied Volatility & IV Rank",
  category: "options-greeks",
  difficulty: "advanced",
  estimatedMinutes: 14,
  xpReward: 85,
  sections: [
    {
      type: "text",
      content: "<h3>What Is Implied Volatility?</h3>\n<p><strong>Implied Volatility (IV)</strong> is the market's forecast of how much a stock is likely to move over a given period. It is derived from current option prices using the Black-Scholes model.</p>\n<ul>\n  <li>IV is expressed as an <strong>annualized percentage</strong>. An IV of 30% means the market expects the stock to move roughly 30% over the next year (one standard deviation).</li>\n  <li>IV does <strong>not predict direction</strong> &mdash; only the <em>magnitude</em> of the expected move.</li>\n  <li>Higher IV = higher option premiums. Lower IV = cheaper options.</li>\n</ul>\n<h3>Historical Volatility vs. Implied Volatility</h3>\n<ul>\n  <li><strong>Historical Volatility (HV)</strong> looks backward &mdash; how much the stock actually moved over a past period.</li>\n  <li><strong>Implied Volatility (IV)</strong> looks forward &mdash; how much the market expects the stock to move.</li>\n  <li>When IV > HV, options are \"expensive\" relative to actual movement. When IV < HV, options are \"cheap.\"</li>\n</ul>"
    },
    {
      type: "key-concept",
      title: "IV Rank and IV Percentile",
      content: "IV Rank = (Current IV - 52-week Low IV) / (52-week High IV - 52-week Low IV) x 100. If IV ranged from 20% to 60% over the past year and current IV is 40%, IV Rank = (40-20)/(60-20) = 50%. IV Percentile measures the percentage of days in the past year that IV was below the current level. Both help you determine whether options are relatively cheap or expensive compared to recent history."
    },
    {
      type: "text",
      content: "<h3>Trading Rules Based on IV</h3>\n<ul>\n  <li><strong>High IV (IV Rank > 50%)</strong>: Favor <em>selling premium</em> strategies -- covered calls, cash-secured puts, iron condors, credit spreads. Premiums are inflated and likely to contract.</li>\n  <li><strong>Low IV (IV Rank < 30%)</strong>: Favor <em>buying options</em> strategies -- long calls/puts, debit spreads, straddles. Options are cheap relative to history.</li>\n  <li><strong>Middle IV (IV Rank 30-50%)</strong>: Either approach can work. Focus on directional conviction rather than volatility edge.</li>\n</ul>\n<h3>The Volatility Smile and Skew</h3>\n<p>If you plot IV across different strike prices at the same expiration, you will notice it is <strong>not a flat line</strong>:</p>\n<ul>\n  <li><strong>Volatility Smile</strong> &mdash; OTM puts and OTM calls have higher IV than ATM options. Common in indices and during uncertain markets.</li>\n  <li><strong>Volatility Skew</strong> &mdash; OTM puts have higher IV than OTM calls. This is the typical pattern for equities because markets fear crashes more than rallies.</li>\n</ul>\n<p>Skew exists because demand for protective puts (portfolio insurance) drives up their prices, while covered call selling suppresses call premiums.</p>"
    },
    {
      type: "comparison-table",
      headers: [
        "IV Environment",
        "IV Rank",
        "Strategy Bias",
        "Example Strategies"
      ],
      rows: [
        [
          "Low IV",
          "< 30%",
          "Buy premium",
          "Long calls/puts, debit spreads, straddles"
        ],
        [
          "Normal IV",
          "30% - 50%",
          "Neutral",
          "Direction-dependent; spreads preferred"
        ],
        [
          "High IV",
          "> 50%",
          "Sell premium",
          "Iron condors, credit spreads, CSPs, covered calls"
        ],
        [
          "Extreme IV",
          "> 80%",
          "Aggressively sell premium",
          "Strangles, wide iron condors (with strict risk management)"
        ]
      ]
    },
    {
      type: "interactive-chart",
      config: {
        ticker: "SPY",
        title: "SPY and Volatility Context",
        description: "SPY is the most liquid options market in the world. Watch how its price action relates to volatility expansion (sharp drops) and contraction (grinding rallies)."
      }
    }
  ],
  track: "options",
  order: 33,
  prerequisites: [
    "the-wheel-strategy"
  ]
};
