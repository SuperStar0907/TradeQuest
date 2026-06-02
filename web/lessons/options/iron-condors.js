LESSON_REGISTRY["iron-condors"] = {
  id: "iron-condors",
  title: "Iron Condors",
  track: "options",
  category: "options-strategies",
  difficulty: "advanced",
  order: 8,
  estimatedMinutes: 18,
  xpReward: 110,
  prerequisites: ["vertical-spreads"],
  sections: [
    {
      type: "text",
      content: "<h3>What Is an Iron Condor?</h3><p>An <strong>iron condor</strong> is a four-leg, non-directional options strategy designed to profit when a stock stays within a defined price range. It is one of the most popular income-generating strategies among intermediate and advanced options traders because it allows you to profit from the passage of time without needing the stock to move in any particular direction.</p><p>An iron condor combines two vertical spreads: a <strong>bull put spread</strong> (below the current stock price) and a <strong>bear call spread</strong> (above the current stock price). Together, these four legs create a \"profit zone\" — a range of stock prices where the trade makes money at expiration. As long as the stock stays within this zone, all four options expire worthless and you keep the entire premium collected.</p><p>Think of an iron condor as collecting rent on a price range. You are betting that the stock will stay within its typical trading range over the next 30-45 days. Since stocks spend most of their time consolidating rather than trending, this bet wins more often than it loses — typically 60-75% of the time depending on the width of your profit zone.</p>"
    },
    {
      type: "text",
      content: "<h3>The Four Legs Explained</h3><p>Let's build an iron condor on AAPL, currently trading at $180:</p><ul><li><strong>Leg 1 — Sell the $170 Put</strong> for $3.00: This is the lower anchor of your put spread. You collect premium and take on the obligation to buy shares at $170 if the stock falls below that level.</li><li><strong>Leg 2 — Buy the $165 Put</strong> for $1.50: This is the protective wing. It limits your maximum loss if the stock crashes. Without it, you'd have naked put risk all the way to $0.</li><li><strong>Leg 3 — Sell the $190 Call</strong> for $3.00: This is the upper anchor of your call spread. You collect premium and take on the obligation to sell shares at $190 if the stock rises above that level.</li><li><strong>Leg 4 — Buy the $195 Call</strong> for $1.50: This is the protective wing on the upside. It limits your loss if the stock surges past $190.</li></ul><p><strong>Net credit received:</strong> ($3.00 + $3.00) - ($1.50 + $1.50) = <strong>$3.00 per share</strong>, or $300 per iron condor.</p><p>Your profit zone is $170 to $190 — a $20 range centered on the current stock price. As long as AAPL stays between these strikes at expiration, you keep the full $300.</p>"
    },
    {
      type: "text",
      content: "<h3>Max Profit, Max Loss, and Breakevens</h3><p><strong>Maximum profit:</strong> The net credit received = <strong>$3.00 per share</strong> ($300 per condor). This is achieved when the stock price is between the two short strikes ($170-$190) at expiration. All four options expire worthless and you keep every penny of premium.</p><p><strong>Maximum loss:</strong> The width of the wider spread minus the net credit. Both spreads are $5 wide: $5.00 - $3.00 = <strong>$2.00 per share</strong> ($200 per condor). This occurs if the stock moves beyond either of your long strikes ($165 or $195) at expiration. You can only lose on one side — the stock can't be both above $195 and below $165 simultaneously.</p><p><strong>Breakeven points:</strong> There are two breakevens:</p><ul><li>Lower breakeven: Short put strike - net credit = $170 - $3.00 = <strong>$167.00</strong></li><li>Upper breakeven: Short call strike + net credit = $190 + $3.00 = <strong>$193.00</strong></li></ul><p>This means your true profit zone is actually $167 to $193 — wider than the short strikes because the credit you received provides a cushion. The stock can move moderately against you and you still profit.</p>"
    },
    {
      type: "key-concept",
      title: "Iron Condor Risk-Reward",
      content: "The risk-reward on an iron condor is typically inverted: you risk more than you stand to gain on any single trade. In our example, you risk $200 to make $300 — a 1.5:1 reward-to-risk. But the probability of profit is 60-75%, which makes the expected value positive over many trades. Iron condors are a probability game: you win small amounts frequently and lose larger amounts occasionally. Consistent position sizing is critical to surviving the inevitable losing trades."
    },
    {
      type: "payoff-diagram",
      config: {
        title: "Iron Condor Payoff Diagram",
        description: "The iron condor creates a flat profit zone between the short strikes. Outside the long strikes, losses are capped. The wider the profit zone, the higher the probability of profit but the lower the premium collected.",
        strategies: [
          {
            type: "short-put",
            strike: 170,
            premium: 3
          },
          {
            type: "long-put",
            strike: 165,
            premium: 1.5
          },
          {
            type: "short-call",
            strike: 190,
            premium: 3
          },
          {
            type: "long-call",
            strike: 195,
            premium: 1.5
          }
        ],
        stockPrice: 180,
        controls: [
          {
            type: "range",
            id: "strikePrice",
            label: "Short Put Strike",
            min: 155,
            max: 180,
            default: 170,
            step: 5
          },
          {
            type: "range",
            id: "premium",
            label: "Short Call Strike",
            min: 180,
            max: 205,
            default: 190,
            step: 5
          }
        ]
      }
    },
    {
      type: "text",
      content: "<h3>When to Trade Iron Condors</h3><p>Iron condors thrive in specific conditions:</p><ul><li><strong>High implied volatility:</strong> When IV is elevated (IV rank above 50%), option premiums are inflated. You collect more credit for the same spread width, improving your risk-reward ratio. Selling iron condors in high IV environments is one of the most consistently profitable options strategies because IV tends to overstate actual stock movement.</li><li><strong>Range-bound markets:</strong> If a stock has been trading between $170-$190 for weeks, an iron condor centered in that range is a high-probability trade. Look for stocks that are consolidating after a big move, trading between established support and resistance levels.</li><li><strong>Post-earnings quiet periods:</strong> After a stock reports earnings and settles into a new range, IV drops and the stock often consolidates for several weeks. This is a good time to sell iron condors — IV is still somewhat elevated from the post-earnings adjustment, and the stock is unlikely to make another big move soon.</li></ul><p><strong>When NOT to trade iron condors:</strong> Avoid iron condors on stocks that are trending strongly (up or down), stocks about to report earnings, or during periods of extreme market uncertainty (VIX above 35). Iron condors need calm markets to work.</p>"
    },
    {
      type: "text",
      content: "<h3>Selecting Strikes for Iron Condors</h3><p>Strike selection determines your probability of profit and your risk-reward ratio. There are two common approaches:</p><p><strong>Delta-based selection:</strong> Many traders sell their short strikes at the 15-20 delta level on each side. A 16-delta short strike means there's roughly a 16% chance the stock reaches that strike at expiration — giving each side an 84% chance of expiring worthless. With both sides combined, the probability of the stock breaching either side is roughly 30-35%, giving you a 65-70% win rate.</p><p><strong>Standard deviation approach:</strong> Sell short strikes at approximately 1 standard deviation from the current price. For a stock with 25% annualized IV and 30 DTE, one standard deviation is roughly $180 x 25% x sqrt(30/365) = $12.90. So your short strikes would be around $167 and $193 — about $13 from the current price in each direction.</p><p><strong>Wing width:</strong> The distance between your short and long strikes (the wings) should be $5 for stocks under $100 and $5-$10 for stocks over $100. Wider wings collect more credit but increase your max loss. A $5-wide iron condor on a $180 stock is standard.</p>"
    },
    {
      type: "text",
      content: "<h3>Managing and Adjusting Iron Condors</h3><p>Active management is essential for iron condor success. Here are the key techniques:</p><ul><li><strong>Close at 50% profit:</strong> Once your iron condor has gained 50% of the maximum profit (e.g., you collected $3.00 and it's now worth $1.50), close the position. Studies show this improves win rates from ~70% to ~85% because you remove the risk of a late reversal eating your profits.</li><li><strong>Close the threatened side:</strong> If the stock approaches one of your short strikes, you can buy back just that spread (at a loss) while letting the other side expire worthless (full profit). This reduces your loss on the trade from a full max loss to a partial loss.</li><li><strong>Roll the untested side:</strong> If the stock moves toward your call spread, consider rolling your put spread closer to the current price to collect additional credit. This is called \"following the stock\" and can improve your breakeven point.</li><li><strong>Time-based exit:</strong> If the trade has more than 21 DTE remaining and is near max profit, close it. If it's past 21 DTE with less than 50% profit, consider holding since theta decay accelerates from here. Always close by 7-10 DTE to avoid gamma risk.</li></ul>"
    },
    {
      type: "comparison-table",
      headers: ["Metric", "Narrow Iron Condor", "Wide Iron Condor"],
      rows: [
        ["Short strike distance", "~$8-10 from current price", "~$15-20 from current price"],
        ["Premium collected", "Higher ($3-5)", "Lower ($1-2)"],
        ["Probability of profit", "Lower (55-65%)", "Higher (70-80%)"],
        ["Max loss", "Lower", "Higher (wider wings)"],
        ["Management effort", "More (stock tests strikes more often)", "Less (larger buffer zone)"],
        ["Best for", "High IV environments, income focus", "Low IV, high probability focus"]
      ]
    },
    {
      type: "key-concept",
      title: "The Iron Condor Trader's Mindset",
      content: "Iron condors are a probability game, not a prediction game. You will have losing trades — that's built into the strategy. The key is that your average winner exceeds your average loser when adjusted for frequency. If you win 70% of trades at $200 profit and lose 30% at $300 loss, your expected value per trade is (0.70 x $200) - (0.30 x $300) = $140 - $90 = $50 net positive. Trade small, trade consistently, and let the probabilities work over dozens of trades."
    }
  ]
};
