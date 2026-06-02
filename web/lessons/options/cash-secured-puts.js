LESSON_REGISTRY["cash-secured-puts"] = {
  id: "cash-secured-puts",
  title: "Cash-Secured Puts",
  category: "options-strategies",
  difficulty: "intermediate",
  estimatedMinutes: 12,
  xpReward: 70,
  sections: [
    {
      type: "text",
      content: "<h3>What Is a Cash-Secured Put?</h3>\n<p>A cash-secured put (CSP) involves <strong>selling a put option</strong> while holding enough cash in your account to buy 100 shares at the strike price if assigned.</p>\n<ul>\n  <li>You collect premium upfront as income.</li>\n  <li>If the stock stays above the strike, the put expires worthless and you keep the premium.</li>\n  <li>If the stock drops below the strike, you are assigned and buy 100 shares at the strike price &mdash; effectively purchasing the stock at a <strong>discount</strong> (strike price minus premium collected).</li>\n</ul>\n<p>This strategy is ideal when you <strong>want to own the stock but at a lower price</strong>. You get paid to wait for the dip.</p>"
    },
    {
      type: "key-concept",
      title: "Buying Stock at a Discount",
      content: "If you sell a $170 put on AAPL for $3.00 and get assigned, your effective purchase price is $170 - $3 = $167. Compare that to simply buying at the current $180 market price. You saved $13 per share. The tradeoff: if AAPL rockets to $200, you only collected $300 in premium instead of capturing $2,000 in stock gains."
    },
    {
      type: "payoff-diagram",
      config: {
        title: "Cash-Secured Put Payoff",
        description: "Selling a put: you keep the premium if the stock stays above the strike. Below the strike, you are effectively long the stock from the strike price minus the premium collected. Your maximum profit is the premium; your maximum loss is if the stock goes to zero.",
        strategies: [
          {
            type: "short-put",
            strike: 170,
            premium: 4
          }
        ],
        stockPrice: 180,
        controls: [
          {
            type: "slider",
            label: "Strike Price",
            min: 150,
            max: 185,
            default: 170,
            id: "strikePrice",
            step: 5
          },
          {
            type: "slider",
            label: "Premium Collected",
            min: 1,
            max: 10,
            default: 4,
            id: "premium",
            step: 1
          }
        ]
      }
    },
    {
      type: "text",
      content: "<h3>Strike Selection and Income Generation</h3>\n<p>Choose your strike based on where you would <em>genuinely want to own</em> the stock:</p>\n<ul>\n  <li><strong>Conservative (deep OTM)</strong>: Sell puts 10-15% below current price. Low premium but high probability of expiring worthless. Good for income generation.</li>\n  <li><strong>Moderate (slightly OTM)</strong>: Sell puts 3-7% below current price. Better premium, reasonable chance of assignment.</li>\n  <li><strong>Aggressive (ATM)</strong>: Sell ATM puts for maximum premium. High probability of assignment. Only do this if you want the stock right now.</li>\n</ul>\n<h3>When Assignment Is a Good Thing</h3>\n<p>If you picked a great company at a great price, getting assigned is <em>exactly what you wanted</em>. Now you own 100 shares at a discount, and you can start selling covered calls on those shares for additional income. This leads directly to the Wheel Strategy (covered in Lesson 12).</p>"
    },
    {
      type: "interactive-chart",
      config: {
        ticker: "AAPL",
        title: "Finding Your CSP Strike",
        description: "Look at where AAPL is trading. Where would you be happy to buy it? That is your target strike for selling a cash-secured put."
      }
    }
  ],
  track: "options",
  order: 28,
  prerequisites: [
    "covered-calls"
  ]
};
