LESSON_REGISTRY["fundamental-analysis"] = {
  id: "fundamental-analysis",
  title: "Fundamental Analysis",
  category: "fundamentals",
  difficulty: "intermediate",
  estimatedMinutes: 15,
  xpReward: 80,
  sections: [
    {
      type: "text",
      content: "<h3>Valuing a Company</h3><p>Fundamental analysis evaluates a stock by examining the underlying business. While technical analysis looks at price and volume, fundamental analysis looks at financial statements, competitive position, and growth prospects.</p><p>Key financial statements: <strong>Income Statement</strong> (revenue, expenses, profit), <strong>Balance Sheet</strong> (assets, liabilities, equity), <strong>Cash Flow Statement</strong> (actual cash generated).</p>"
    },
    {
      type: "comparison-table",
      headers: [
        "Metric",
        "Formula",
        "What It Tells You"
      ],
      rows: [
        [
          "P/E Ratio",
          "Stock Price / Earnings Per Share",
          "How much you pay per dollar of earnings. Lower = cheaper (generally)"
        ],
        [
          "EPS",
          "Net Income / Shares Outstanding",
          "Profit per share. Growth over time is key"
        ],
        [
          "P/S Ratio",
          "Market Cap / Revenue",
          "Useful for unprofitable companies (no earnings to use P/E)"
        ],
        [
          "PEG Ratio",
          "P/E / Earnings Growth Rate",
          "P/E adjusted for growth. PEG < 1 = potentially undervalued"
        ],
        [
          "ROE",
          "Net Income / Shareholders Equity",
          "How efficiently company uses equity. Higher = better"
        ],
        [
          "Free Cash Flow",
          "Operating Cash - CapEx",
          "Actual cash generated. More reliable than earnings"
        ]
      ]
    },
    {
      type: "key-concept",
      title: "Growth vs Value",
      content: "<strong>Growth stocks</strong> trade at high P/E ratios because investors expect rapid earnings growth (NVDA, TSLA). <strong>Value stocks</strong> trade at low P/E ratios, often mature companies with dividends (JNJ, KO). Neither approach is inherently better — it depends on market conditions and your risk tolerance."
    },
    {
      type: "text",
      content: "<h3>Reading an Earnings Report</h3><p>Every quarter, public companies report earnings. Key things to watch:</p><ul><li><strong>Revenue beat/miss</strong> — Did they sell more than expected?</li><li><strong>EPS beat/miss</strong> — Did they earn more per share than expected?</li><li><strong>Guidance</strong> — What does management expect for next quarter? This often moves the stock more than the actual numbers.</li><li><strong>Margins</strong> — Are profit margins expanding or shrinking?</li></ul><p>A company can beat on earnings and still drop if guidance disappoints. Always listen to the earnings call.</p>"
    }
  ],
  track: "stock-markets",
  order: 14,
  prerequisites: [
    "risk-management"
  ]
};
