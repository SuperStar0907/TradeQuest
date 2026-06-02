LESSON_REGISTRY["support-and-resistance"] = {
  id: "support-and-resistance",
  title: "Support and Resistance",
  track: "technical-analysis",
  category: "chart-analysis",
  difficulty: "beginner",
  order: 1,
  estimatedMinutes: 12,
  xpReward: 70,
  prerequisites: ["reading-price-charts"],
  sections: [
    {
      type: "text",
      content: `
        <h3>The Foundation of Technical Analysis</h3>
        <p>Support and resistance are arguably the most important concepts in all of technical analysis. Every strategy, every pattern, every indicator — they all ultimately relate back to support and resistance. Understanding these concepts will transform the way you look at charts.</p>
        <p><strong>Support</strong> is a price level where buying pressure is strong enough to prevent the price from falling further. Think of it as a floor. When a stock drops to a support level, buyers step in because they perceive the stock as good value at that price. The increased demand halts the decline and often pushes the price back up.</p>
        <p><strong>Resistance</strong> is a price level where selling pressure is strong enough to prevent the price from rising further. Think of it as a ceiling. When a stock rises to a resistance level, sellers step in — some taking profits, others shorting the stock. The increased supply halts the advance and often pushes the price back down.</p>
        <p>These levels exist because of market memory. Traders remember the prices at which they bought and sold, and they make decisions based on those memories. A trader who bought at $50 and watched the stock drop to $40 is likely to sell (break even) when the price returns to $50 — creating resistance at that level.</p>
      `
    },
    {
      type: "key-concept",
      title: "Support = Floor, Resistance = Ceiling",
      content: "Support is a price level where demand (buying) is strong enough to stop the price from falling. Resistance is a price level where supply (selling) is strong enough to stop the price from rising. These levels are not exact prices but rather zones where buying or selling pressure concentrates."
    },
    {
      type: "text",
      content: `
        <h3>How to Identify Support and Resistance Levels</h3>
        <p>Finding support and resistance levels is more art than science, but there are clear guidelines:</p>
        <ul>
          <li><strong>Previous highs and lows:</strong> The most straightforward method. Look at where the price has previously reversed. If a stock has bounced off $150 three times in the past six months, $150 is a strong support level. If it has been rejected at $200 twice, $200 is resistance.</li>
          <li><strong>Multiple touches:</strong> The more times a level is tested, the stronger it becomes. A support level that has been tested 5 times is generally considered stronger than one that's only been tested twice. However, each touch also weakens the level slightly — eventually, support and resistance levels break.</li>
          <li><strong>High-volume areas:</strong> Levels where significant volume occurred are often strong support or resistance. This is because many traders bought or sold there, and they have a vested interest in that price level. Volume profile tools can help identify these areas.</li>
          <li><strong>Gap levels:</strong> When a stock gaps up or down (opening significantly higher or lower than the previous close), the edges of the gap often act as support or resistance. Gaps represent areas where no trading occurred, creating a "vacuum" that the price may be drawn back to fill.</li>
        </ul>
        <p><strong>Practical Tip:</strong> Draw horizontal lines at key support and resistance levels on your chart. These lines should be treated as <strong>zones</strong>, not exact prices. A support level at $100 might actually be a zone from $98 to $102. Precision is less important than the general area.</p>
      `
    },
    {
      type: "text",
      content: `
        <h3>The Role Reversal Principle</h3>
        <p>One of the most powerful concepts in support and resistance analysis is <strong>role reversal</strong> (also called the polarity principle). When a support level breaks, it often becomes resistance. When a resistance level breaks, it often becomes support.</p>
        <p>Why does this happen? Consider a stock trading at $80 with strong support at $75. Many traders bought at $75, and the stock bounced from that level several times. But then the stock breaks below $75 and drops to $70. Those traders who bought at $75 are now underwater — they're sitting on losses. When the stock eventually rallies back to $75, many of those trapped buyers will sell to get out at breakeven. That selling pressure turns the former support ($75) into new resistance.</p>
        <p>The same logic works in reverse. If a stock has been struggling to break above $100 (resistance) for months, and then finally breaks above $100 on strong volume, many traders who were short or hesitant will want to buy on a pullback to $100. That buying interest turns former resistance into new support.</p>
        <p><strong>Real-World Example:</strong> In 2020, the S&P 500 (SPY) had strong support around $340. When COVID-19 hit in February-March 2020, that support broke and the market crashed to $218. When the market recovered in mid-2020, the $340 level initially acted as resistance before eventually being broken to the upside. Once $340 was reconquered, it became support for the next move higher. This is role reversal in action on a massive scale.</p>
      `
    },
    {
      type: "key-concept",
      title: "Broken Support Becomes Resistance (and Vice Versa)",
      content: "When a support level breaks, it often becomes resistance on the next rally attempt. When a resistance level breaks, it often becomes support on the next pullback. This is called role reversal or polarity. It happens because traders who were trapped at the broken level use the retest to exit their positions."
    },
    {
      type: "text",
      content: `
        <h3>Round Numbers as Psychological Levels</h3>
        <p>Human psychology plays a significant role in creating support and resistance. We naturally gravitate toward round numbers, and this tendency shows up clearly in stock markets.</p>
        <p>Prices like $10, $25, $50, $100, $500, and $1,000 tend to act as natural support and resistance levels. This happens because:</p>
        <ul>
          <li><strong>Limit orders cluster at round numbers.</strong> If you ask a hundred people to set a buy limit order, most will choose round numbers. "I'll buy AAPL if it drops to $150" is far more common than "I'll buy AAPL at $153.47." This concentration of orders creates support and resistance.</li>
          <li><strong>Option strike prices concentrate at round numbers.</strong> Options contracts are typically available at $5 or $10 intervals for large stocks. The $150 strike, $200 strike, etc. attract enormous option activity, which in turn affects the stock price at those levels (a phenomenon called "gamma pinning").</li>
          <li><strong>Media and analysts use round numbers.</strong> Headlines say "Apple breaks $200" not "Apple breaks $198.73." This draws attention and triggers action from investors who follow the news.</li>
        </ul>
        <p>Watch how stocks behave around major round numbers. Amazon's journey past $1,000, $2,000, and $3,000 — each of these round numbers provided meaningful resistance before being broken, and then turned into support on subsequent pullbacks.</p>
      `
    },
    {
      type: "text",
      content: `
        <h3>Strength of Support and Resistance Levels</h3>
        <p>Not all support and resistance levels are created equal. Several factors determine how strong a level is likely to be:</p>
        <ul>
          <li><strong>Number of touches:</strong> More touches = stronger level. A price level that has been tested and held 4-5 times carries more weight than one tested only once.</li>
          <li><strong>Timeframe:</strong> Levels from higher timeframes (weekly, monthly) are stronger than levels from lower timeframes (hourly, 15-minute). A resistance level visible on the monthly chart will overpower a support level visible only on the 15-minute chart.</li>
          <li><strong>Volume at the level:</strong> Heavy trading at a price level makes it more significant. A bounce off support on 3x average volume creates a stronger floor than a bounce on average volume.</li>
          <li><strong>Recency:</strong> More recent levels tend to be more relevant than older ones, though major historical levels can remain important for years.</li>
          <li><strong>How cleanly the level held:</strong> A level that produced a sharp V-shaped reversal is generally stronger than one where the price just drifted along for a while before slowly reversing.</li>
        </ul>
      `
    },
    {
      type: "interactive-chart",
      config: {
        ticker: "SPY",
        title: "Identify Support and Resistance on SPY",
        description: "Study this SPY chart and try to identify horizontal support and resistance levels. Look for prices where the chart has reversed multiple times. Notice how former resistance levels sometimes become support after being broken (role reversal).",
        indicators: ["sma"],
        controls: [
          { type: "range", id: "smaPeriod", label: "SMA Period", min: 5, max: 200, default: 50, step: 1 }
        ],
        showRSI: false,
        showMACD: false
      }
    },
    {
      type: "text",
      content: `
        <h3>Trading Support and Resistance — Practical Strategies</h3>
        <p>Once you can identify support and resistance levels, here's how to use them in your trading:</p>
        <ul>
          <li><strong>Buy near support, sell near resistance (range trading):</strong> In a sideways market, buy when the price approaches support and sell when it approaches resistance. Place your stop loss just below the support level. This strategy works well in choppy, non-trending markets.</li>
          <li><strong>Trade breakouts:</strong> When a stock breaks above resistance or below support on strong volume, trade in the direction of the break. Wait for the candle to close beyond the level to confirm the breakout — many intraday breakouts fail by the close (called "fakeouts").</li>
          <li><strong>Trade the retest:</strong> After a breakout, the price often pulls back to retest the broken level (role reversal). This retest provides a lower-risk entry point. If the former resistance holds as new support, it confirms the breakout is legitimate.</li>
          <li><strong>Set stop losses using support and resistance:</strong> Place stop losses on the other side of a key level. If you buy at support, your stop goes just below support. If the level breaks, your thesis is invalid, and you exit with a small loss.</li>
        </ul>
        <p><strong>Common Mistakes:</strong> Don't set your stop loss exactly at the support level — give it some room (a few cents to a few percent, depending on the stock's volatility). Market makers and algorithms often "stop hunt" by briefly pushing the price through a key level to trigger stop losses before reversing. Also, don't blindly buy at support in a strong downtrend — in a bear market, support levels break more often than they hold.</p>
      `
    }
  ]
};
