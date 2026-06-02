LESSON_REGISTRY["earnings-plays-iv-crush"] = {
  id: "earnings-plays-iv-crush",
  title: "Earnings Plays & IV Crush",
  category: "options-strategies",
  difficulty: "advanced",
  estimatedMinutes: 13,
  xpReward: 85,
  sections: [
    {
      type: "text",
      content: "<h3>IV Expansion Before Earnings</h3>\n<p>In the weeks leading up to an earnings announcement, implied volatility <strong>rises steadily</strong>. The market is pricing in uncertainty &mdash; nobody knows if the company will beat or miss estimates.</p>\n<ul>\n  <li>IV can increase by <strong>50-200%</strong> above its normal level heading into earnings.</li>\n  <li>This makes all options more expensive &mdash; calls and puts alike.</li>\n  <li>The closer to earnings, the faster IV climbs, especially in the final week.</li>\n</ul>\n<h3>IV Crush: The Morning After</h3>\n<p>Immediately after earnings are announced, the uncertainty is gone. IV <strong>collapses overnight</strong>, often dropping 30-60% in a single session. This is called <strong>IV crush</strong>.</p>\n<p>The critical insight: <em>even if the stock moves in your direction</em>, you can still lose money if the IV crush is severe enough to offset your directional gains.</p>"
    },
    {
      type: "key-concept",
      title: "Expected Move Calculation",
      content: "The expected move is the market-priced range for the stock after earnings. Approximate formula: Expected Move = ATM Straddle Price x 0.85. If the ATM straddle costs $12, the expected move is roughly $10.20. The stock is expected to land within +/- $10.20 of its current price about 68% of the time. If you buy a straddle, you need the stock to move MORE than the expected move to profit."
    },
    {
      type: "text",
      content: "<h3>Buying Premium Into Earnings</h3>\n<p>Buying straddles or strangles before earnings is a popular but <strong>difficult</strong> strategy:</p>\n<ul>\n  <li><strong>The math is against you</strong> &mdash; You pay inflated IV and need the stock to move beyond the expected range to profit.</li>\n  <li><strong>Better approach</strong> &mdash; Buy the straddle 1-2 weeks before earnings when IV is still ramping up. Sell before the announcement to capture the IV expansion, not the earnings move itself.</li>\n  <li><strong>Worst approach</strong> &mdash; Buying weekly options the day before earnings. Maximum IV crush exposure.</li>\n</ul>\n<h3>Selling Premium Into Earnings</h3>\n<p>Many professional traders prefer to <em>sell</em> premium into earnings:</p>\n<ul>\n  <li><strong>Iron condors</strong> &mdash; Sell an iron condor using the expected move as your short strikes. Collect rich premiums.</li>\n  <li><strong>Short strangles</strong> &mdash; Sell OTM put + OTM call. Higher risk (undefined) but higher premium.</li>\n  <li><strong>Advantage</strong> &mdash; IV crush is your friend. After earnings, IV drops and your short options lose value rapidly.</li>\n  <li><strong>Risk</strong> &mdash; If the stock gaps beyond your strikes, losses can be large and sudden.</li>\n</ul>"
    },
    {
      type: "comparison-table",
      headers: [
        "Strategy",
        "Pre-Earnings Action",
        "Post-Earnings Outcome",
        "IV Crush Impact"
      ],
      rows: [
        [
          "Buy Straddle (hold)",
          "Buy ATM call + put",
          "Need move > expected move",
          "Hurts you (lose extrinsic)"
        ],
        [
          "Buy Straddle (sell early)",
          "Buy 1-2 weeks before, sell day of",
          "Profit from IV expansion",
          "Avoid it entirely"
        ],
        [
          "Sell Iron Condor",
          "Sell IC at expected move range",
          "Keep premium if stock stays in range",
          "Helps you (short options lose value)"
        ],
        [
          "Sell Strangle",
          "Sell OTM call + put",
          "Keep premium, undefined risk",
          "Helps you significantly"
        ]
      ]
    },
    {
      type: "interactive-chart",
      config: {
        ticker: "TSLA",
        title: "TSLA Earnings Volatility",
        description: "TSLA is known for large post-earnings moves. Observe the gaps on the chart -- these are earnings reactions. Notice how some gaps are larger than others, illustrating why earnings trades are inherently risky."
      }
    }
  ],
  track: "options",
  order: 34,
  prerequisites: [
    "implied-volatility-iv-rank"
  ]
};
