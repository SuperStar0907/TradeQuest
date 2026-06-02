LESSON_REGISTRY["volume-analysis"] = {
  id: "volume-analysis",
  title: "Volume & What It Tells You",
  category: "technical-analysis",
  difficulty: "beginner",
  estimatedMinutes: 10,
  xpReward: 60,
  sections: [
    {
      type: "text",
      content: "<h3>What is Volume?</h3><p>Volume is the number of shares traded in a given period. It is the most important confirmation tool in technical analysis.</p><p>Think of volume as the <strong>conviction</strong> behind a price move. Price tells you WHAT happened. Volume tells you HOW MUCH conviction was behind it.</p>"
    },
    {
      type: "interactive-chart",
      config: {
        ticker: "NVDA",
        title: "NVIDIA (NVDA) — Volume Analysis",
        description: "The bars at the bottom show volume. Notice how volume spikes on big price moves. Green bars = up days, red = down days.",
        showVolume: true
      }
    },
    {
      type: "key-concept",
      title: "Volume Signals",
      content: "<strong>High volume + price up</strong> = strong buying (bullish). <strong>High volume + price down</strong> = strong selling (bearish). <strong>Low volume + price up</strong> = weak rally (suspicious). <strong>Low volume + price down</strong> = lack of sellers (potentially bullish)."
    },
    {
      type: "text",
      content: "<h3>On-Balance Volume (OBV)</h3><p>OBV is a cumulative indicator. It adds volume on up days and subtracts on down days. If OBV is trending up while price is flat, it suggests accumulation — smart money buying before a move up.</p><p><strong>Volume Spike Rule:</strong> If today's volume is 2x or more the 20-day average, pay attention. Combine this with price action for trading signals.</p>"
    },
    {
      type: "text",
      content: "<h3>How a Real Trader Uses Volume</h3><p>Suppose you are watching NVDA and it has been consolidating between $800 and $850 for two weeks. One morning, the stock breaks above $850 on volume that is 3x the 20-day average. A volume-aware trader treats this as a high-conviction breakout because the surge in participation confirms that institutional money is driving the move, not just a handful of retail orders.</p><p>Conversely, if NVDA drifts above $850 on below-average volume, an experienced trader would be skeptical. The breakout lacks conviction and is more likely to fail. Many traders will wait for a volume-confirmed retest of the breakout level before committing capital.</p><p>Volume also matters on pullbacks. If a stock pulls back to a key moving average on declining volume, it suggests sellers are drying up and the uptrend is likely to continue. Heavy volume on the pullback, on the other hand, signals genuine distribution and a potential trend change.</p>"
    },
    {
      type: "comparison-table",
      headers: [
        "Volume Pattern",
        "What It Means",
        "Trader Action"
      ],
      rows: [
        [
          "Breakout on high volume",
          "Strong conviction, likely to follow through",
          "Enter in the direction of the breakout with a stop below the breakout level"
        ],
        [
          "Breakout on low volume",
          "Weak conviction, likely a false breakout",
          "Wait for a retest or skip the trade entirely"
        ],
        [
          "Pullback on declining volume",
          "Sellers drying up, trend intact",
          "Look for entries near support or a moving average"
        ],
        [
          "Pullback on rising volume",
          "Distribution, potential trend reversal",
          "Tighten stops or reduce position size"
        ],
        [
          "Volume spike on a reversal candle",
          "Capitulation or climax buying",
          "Watch for follow-through the next day before acting"
        ]
      ]
    },
    {
      type: "key-concept",
      title: "Pro Tips for Volume Analysis",
      content: "Always compare current volume to its own average, not to another stock. NVDA trading 50 million shares may be normal, while the same volume on a small-cap would be extraordinary. Use the 20-day average volume as your baseline. Also pay attention to volume at specific price levels (Volume Profile), which reveals where the most trading activity occurred and highlights support and resistance zones that pure price charts miss."
    }
  ],
  track: "stock-markets",
  order: 3,
  prerequisites: [
    "reading-price-charts"
  ]
};
