LESSON_REGISTRY["momentum-strategies"] = {
  id: "momentum-strategies",
  title: "Momentum Strategies",
  category: "quantitative-finance",
  difficulty: "intermediate",
  estimatedMinutes: 14,
  xpReward: 90,
  sections: [
    {
      type: "text",
      content: "<h3>The Momentum Anomaly</h3><p>Momentum is the empirical finding that assets with strong recent performance tend to continue outperforming, while recent losers continue underperforming. It is one of the most robust and pervasive return anomalies documented in finance, surviving across asset classes (equities, commodities, currencies, fixed income) and time periods going back over a century.</p><p>Unlike mean reversion, which profits from short-term reversals, momentum strategies hold positions for <strong>1 to 12 months</strong>. The strategy exploits <em>behavioral biases</em> — investors underreact to new information initially, then overreact as the trend becomes widely recognized.</p>"
    },
    {
      type: "text",
      content: "<h3>Cross-Sectional vs. Time-Series Momentum</h3><p><strong>Cross-sectional momentum</strong> (also called <em>relative momentum</em>) ranks a universe of assets by their past returns and goes long the top decile while shorting the bottom decile. The universe provides both the long and short sides, so the portfolio is approximately dollar-neutral. This is the classic Jegadeesh-Titman (1993) construction.</p><p><strong>Time-series momentum</strong> (also called <em>absolute momentum</em> or <em>trend following</em>) looks at each asset independently: go long if its own past return is positive, short if negative. This approach, documented by Moskowitz, Ooi, and Pedersen (2012), has the advantage of reducing exposure to all assets simultaneously during market downturns because negative-trending assets are shorted rather than held long.</p>"
    },
    {
      type: "key-concept",
      title: "Jegadeesh-Titman Formation and Holding Periods",
      content: "The classic equity momentum strategy uses a <strong>12-1 formation period</strong>: returns are measured over the past 12 months, skipping the most recent month (month -1). The skip-month exclusion avoids the short-term reversal effect documented at 1-month horizons. Positions are held for <strong>1, 3, 6, or 12 months</strong> with overlapping portfolios to reduce turnover variance. The strategy produces annualized alphas of 10-12% in U.S. equities before transaction costs, though this has decayed since the strategy became widely known. Risk-adjusted performance is strongest in the 6-12 month formation window."
    },
    {
      type: "text",
      content: "<h3>Dual Momentum: Combining Cross-Sectional and Absolute Momentum</h3><p>Gary Antonacci's <strong>Dual Momentum</strong> framework applies both types of momentum sequentially:</p><ol><li><strong>Absolute momentum screen</strong>: If U.S. equities have a negative 12-month return, shift entirely to bonds (defensive mode). This cuts exposure during bear markets.</li><li><strong>Relative momentum filter</strong>: Among the remaining assets, select the one with the highest 12-month return.</li></ol><p>The combination dramatically reduces drawdowns compared to pure relative momentum (which holds long-only portfolios through bear markets) while preserving most of the upside. The Global Equities Momentum (GEM) strategy using this approach has historically delivered Sharpe ratios near 0.8-1.0 with maximum drawdowns below 25%, versus the S&amp;P 500's 50%+ drawdowns.</p>"
    },
    {
      type: "interactive-chart",
      config: {
        ticker: "SPY",
        title: "SPY — 12-Month Trailing Return (Absolute Momentum Signal)",
        description: "When the 12-month trailing return turns negative, absolute momentum signals a shift to defensive assets. Notice how these periods coincide with major market drawdowns."
      }
    },
    {
      type: "comparison-table",
      headers: ["Strategy Type", "Formation Period", "Holding Period", "Market Neutrality", "Key Risk"],
      rows: [
        ["Cross-sectional (Jegadeesh-Titman)", "2-12 months, skip 1 month", "1-12 months", "Approximately dollar-neutral", "Momentum crashes in sharp reversals"],
        ["Time-series (Trend Following)", "1-12 months", "1 month rebalance", "Long/short varies with trend", "Whipsaw in sideways markets"],
        ["Dual Momentum (Antonacci)", "12 months", "Monthly rebalance", "Long-only, varies exposure", "Slow to react to rapid reversals"],
        ["52-Week High Momentum", "52 weeks", "1-3 months", "Long-only", "Concentrated in recent winners"],
        ["Industry Momentum", "6-12 months", "1-6 months", "Long/short industries", "Factor crowding, sector risk"]
      ]
    }
  ],
  track: "quantitative",
  order: 38,
  prerequisites: []
};
