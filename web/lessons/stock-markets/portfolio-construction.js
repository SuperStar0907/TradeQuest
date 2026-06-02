LESSON_REGISTRY["portfolio-construction"] = {
  id: "portfolio-construction",
  title: "Portfolio Construction & Diversification",
  category: "trading-skills",
  difficulty: "advanced",
  estimatedMinutes: 15,
  xpReward: 90,
  sections: [
    {
      type: "text",
      content: "<h3>Building a Portfolio</h3><p>A portfolio is not just a collection of stocks — it is a risk management system. The goal is to maximize returns for a given level of risk.</p><p>Key principles:</p><ul><li><strong>Diversification</strong> — Do not put all eggs in one basket. Spread across sectors, asset classes, and geographies.</li><li><strong>Asset Allocation</strong> — The split between stocks, bonds, cash, and alternatives. This single decision drives 90%+ of long-term returns.</li><li><strong>Correlation</strong> — Adding assets that do not move together reduces portfolio volatility without reducing expected returns.</li></ul>"
    },
    {
      type: "key-concept",
      title: "Modern Portfolio Theory",
      content: "Harry Markowitz showed that you can build an <strong>efficient frontier</strong> — the set of portfolios with the highest return for each level of risk. The key insight: adding a volatile but uncorrelated asset can actually REDUCE portfolio risk. This is why even conservative portfolios often include some international stocks or commodities."
    },
    {
      type: "comparison-table",
      headers: [
        "Approach",
        "Description",
        "Pros",
        "Cons"
      ],
      rows: [
        [
          "Core-Satellite",
          "Core = index funds (70-80%), Satellite = individual picks (20-30%)",
          "Low cost, diversified base, room for alpha",
          "Requires stock-picking skill for satellite"
        ],
        [
          "Equal Weight",
          "Equal allocation to each position",
          "Simple, avoids concentration",
          "Ignores conviction levels"
        ],
        [
          "Risk Parity",
          "Allocate based on risk contribution, not capital",
          "Balanced risk exposure",
          "Complex, may over-allocate to bonds"
        ]
      ]
    },
    {
      type: "text",
      content: "<h3>Rebalancing</h3><p>Over time, winners grow and losers shrink, causing your portfolio to drift from target allocations. Rebalancing brings it back in line.</p><p>Two approaches: <strong>Calendar</strong> (rebalance quarterly or annually) or <strong>Threshold</strong> (rebalance when any position drifts 5%+ from target). Rebalancing forces you to sell high and buy low — a mechanical discipline that improves long-term returns.</p>"
    }
  ],
  track: "stock-markets",
  order: 19,
  prerequisites: [
    "backtesting-strategies"
  ]
};
