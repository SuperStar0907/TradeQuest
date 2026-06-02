LESSON_REGISTRY["sector-analysis"] = {
  id: "sector-analysis",
  title: "Sector Analysis & Correlation",
  category: "fundamentals",
  difficulty: "intermediate",
  estimatedMinutes: 12,
  xpReward: 75,
  sections: [
    {
      type: "text",
      content: "<h3>The 11 GICS Sectors</h3><p>The stock market is divided into 11 sectors (Global Industry Classification Standard):</p><ol><li>Technology (XLK)</li><li>Healthcare (XLV)</li><li>Financials (XLF)</li><li>Consumer Discretionary (XLY)</li><li>Communication Services (XLC)</li><li>Industrials (XLI)</li><li>Consumer Staples (XLP)</li><li>Energy (XLE)</li><li>Utilities (XLU)</li><li>Real Estate (XLRE)</li><li>Materials (XLB)</li></ol><p>Each sector has an ETF that tracks it. Understanding sector rotation helps you identify where money is flowing.</p>"
    },
    {
      type: "key-concept",
      title: "Sector Rotation",
      content: "Different sectors lead at different points in the economic cycle. <strong>Early recovery</strong>: Financials, Consumer Discretionary. <strong>Mid-cycle</strong>: Technology, Industrials. <strong>Late cycle</strong>: Energy, Materials. <strong>Recession</strong>: Utilities, Healthcare, Consumer Staples (defensive sectors)."
    },
    {
      type: "interactive-chart",
      config: {
        ticker: "SPY",
        title: "S&P 500 (SPY) — Market Benchmark",
        description: "SPY represents the overall market. Compare individual stock performance against SPY to see if a stock is outperforming or underperforming the market."
      }
    },
    {
      type: "comparison-table",
      headers: [
        "Type",
        "Sectors",
        "When They Lead",
        "Characteristics"
      ],
      rows: [
        [
          "Cyclical",
          "Tech, Financials, Consumer Disc.",
          "Economic expansion",
          "Higher beta, more volatile"
        ],
        [
          "Defensive",
          "Utilities, Healthcare, Staples",
          "Recession / uncertainty",
          "Lower beta, dividends, stable"
        ]
      ]
    }
  ],
  track: "stock-markets",
  order: 15,
  prerequisites: [
    "fundamental-analysis"
  ]
};
