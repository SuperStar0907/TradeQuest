LESSON_REGISTRY["backtesting-strategies"] = {
  id: "backtesting-strategies",
  title: "Backtesting & Strategy Development",
  category: "trading-skills",
  difficulty: "advanced",
  estimatedMinutes: 15,
  xpReward: 90,
  sections: [
    {
      type: "text",
      content: "<h3>Test Before You Trade</h3><p>Backtesting is applying a trading strategy to historical data to see how it would have performed. It answers: \"If I had traded this strategy over the past 5 years, would I have made money?\"</p><p>Steps: (1) Define precise entry/exit rules, (2) Apply to historical data, (3) Measure performance metrics, (4) Validate with out-of-sample data, (5) Paper trade before going live.</p>"
    },
    {
      type: "key-concept",
      title: "Overfitting: The Silent Killer",
      content: "Overfitting occurs when your strategy is too perfectly tuned to past data. A strategy with 20 parameters that shows 90% returns is almost certainly overfit — it found noise, not signal. It will fail in live trading. Simple strategies with 2-3 rules that work across multiple markets and timeframes are far more robust."
    },
    {
      type: "comparison-table",
      headers: [
        "Metric",
        "Formula",
        "Good Target"
      ],
      rows: [
        [
          "Sharpe Ratio",
          "(Return - Risk-Free Rate) / Std Dev",
          "> 1.0 (> 2.0 excellent)"
        ],
        [
          "Max Drawdown",
          "Peak-to-Trough decline",
          "< 20%"
        ],
        [
          "Win Rate",
          "Winning Trades / Total Trades",
          "> 40% (with good R:R)"
        ],
        [
          "Profit Factor",
          "Gross Profit / Gross Loss",
          "> 1.5"
        ],
        [
          "Average R:R",
          "Avg Win / Avg Loss",
          "> 2.0"
        ],
        [
          "Expectancy",
          "(Win% x Avg Win) - (Loss% x Avg Loss)",
          "> 0 (positive)"
        ]
      ]
    },
    {
      type: "text",
      content: "<h3>Walk-Forward Analysis</h3><p>The gold standard for strategy validation. Split your data into in-sample (optimization) and out-of-sample (validation) windows. Optimize on the first window, test on the next, then roll forward. If the strategy performs well out-of-sample across multiple windows, it is likely robust, not overfit.</p><p>Remember: Past performance does not guarantee future results. Markets change. A strategy that worked for 10 years can stop working when market conditions shift. Always monitor your live strategy performance against its historical expectations.</p>"
    }
  ],
  track: "stock-markets",
  order: 18,
  prerequisites: [
    "trading-psychology"
  ]
};
