LESSON_REGISTRY["risk-management"] = {
  id: "risk-management",
  title: "Risk Management & Position Sizing",
  category: "trading-skills",
  difficulty: "beginner",
  estimatedMinutes: 12,
  xpReward: 75,
  sections: [
    {
      type: "text",
      content: "<h3>The Most Important Skill in Trading</h3><p>Risk management is what separates profitable traders from those who blow up their accounts. You can have a 40% win rate and still be profitable if your winners are bigger than your losers.</p><p>The golden rules:</p><ul><li><strong>Never risk more than 1-2% of your account on a single trade</strong></li><li><strong>Always know your exit before you enter</strong></li><li><strong>Never let a winner turn into a loser</strong></li></ul>"
    },
    {
      type: "key-concept",
      title: "Position Sizing Formula",
      content: "<strong>Shares = (Account Size x Risk %) / (Entry Price - Stop Loss Price)</strong><br><br>Example: $100,000 account, risking 1%, entry at $150, stop at $145.<br>Shares = ($100,000 x 0.01) / ($150 - $145) = $1,000 / $5 = 200 shares.<br>Total position = $30,000 (30% of account), but risk is only $1,000 (1%)."
    },
    {
      type: "text",
      content: "<h3>Risk/Reward Ratio</h3><p>Before every trade, calculate your risk/reward ratio:</p><p><strong>R:R = (Target Price - Entry) / (Entry - Stop Loss)</strong></p><p>Aim for at least 2:1. This means risking $1 to make $2. With a 2:1 ratio, you only need to be right 34% of the time to break even.</p><ul><li>1:1 R:R — Need 50%+ win rate (breakeven)</li><li>2:1 R:R — Need 34%+ win rate (profitable)</li><li>3:1 R:R — Need 25%+ win rate (highly profitable)</li></ul>"
    },
    {
      type: "text",
      content: "<h3>Stop Loss Placement</h3><p>Place stops at levels that invalidate your trade thesis:</p><ul><li>Below a key support level (for long trades)</li><li>Below the most recent swing low</li><li>Below a moving average</li><li>A fixed percentage (e.g., 5-8% below entry)</li></ul><p><strong>Never move your stop further away from your entry.</strong> If you are wrong, accept the loss. Moving stops to avoid being stopped out leads to catastrophic losses.</p>"
    }
  ],
  track: "stock-markets",
  order: 13,
  prerequisites: [
    "order-types"
  ]
};
