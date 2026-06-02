LESSON_REGISTRY["payoff-diagrams-calls-puts"] = {
  id: "payoff-diagrams-calls-puts",
  title: "Payoff Diagrams: Calls & Puts",
  category: "options-basics",
  difficulty: "beginner",
  estimatedMinutes: 10,
  xpReward: 55,
  sections: [
    {
      type: "text",
      content: "<h3>How to Read a Payoff Diagram</h3>\n<p>A payoff diagram is the single most important visual tool in options trading. It shows your profit or loss at expiration for every possible stock price.</p>\n<ul>\n  <li><strong>X-axis (horizontal)</strong> = stock price at expiration</li>\n  <li><strong>Y-axis (vertical)</strong> = your profit or loss</li>\n  <li>The <strong>breakeven point</strong> is where the line crosses zero</li>\n</ul>\n<p>Once you can read payoff diagrams fluently, you can instantly evaluate any options strategy at a glance.</p>"
    },
    {
      type: "key-concept",
      title: "Maximum Loss for Buyers",
      content: "When you buy a call or a put, your maximum loss is always the premium you paid -- nothing more. The payoff line flattens out below the strike price (for calls) or above the strike price (for puts), sitting at the negative premium amount."
    },
    {
      type: "payoff-diagram",
      config: {
        title: "Long Call Payoff",
        description: "Buy a call option: you profit when the stock rises above your strike price plus the premium paid. Below the strike, your loss is limited to the premium. Drag the sliders to see how strike price and premium affect the payoff shape.",
        strategies: [
          {
            type: "long-call",
            strike: 180,
            premium: 5
          }
        ],
        stockPrice: 180,
        controls: [
          {
            type: "slider",
            label: "Strike Price",
            min: 150,
            max: 210,
            default: 180,
            id: "strikePrice",
            step: 5
          },
          {
            type: "slider",
            label: "Premium Paid",
            min: 1,
            max: 15,
            default: 5,
            id: "premium",
            step: 1
          }
        ]
      }
    },
    {
      type: "payoff-diagram",
      config: {
        title: "Long Put Payoff",
        description: "Buy a put option: you profit when the stock falls below your strike price minus the premium paid. Above the strike, your loss is limited to the premium. This is the classic way to hedge or bet on a decline.",
        strategies: [
          {
            type: "long-put",
            strike: 180,
            premium: 5
          }
        ],
        stockPrice: 180,
        controls: [
          {
            type: "slider",
            label: "Strike Price",
            min: 150,
            max: 210,
            default: 180,
            id: "strikePrice",
            step: 5
          },
          {
            type: "slider",
            label: "Premium Paid",
            min: 1,
            max: 15,
            default: 5,
            id: "premium",
            step: 1
          }
        ]
      }
    },
    {
      type: "comparison-table",
      headers: [
        "",
        "Long Call",
        "Long Put"
      ],
      rows: [
        [
          "Market Outlook",
          "Bullish",
          "Bearish"
        ],
        [
          "Max Profit",
          "Unlimited",
          "Strike - Premium (stock goes to $0)"
        ],
        [
          "Max Loss",
          "Premium paid",
          "Premium paid"
        ],
        [
          "Breakeven",
          "Strike + Premium",
          "Strike - Premium"
        ],
        [
          "Example Breakeven",
          "$180 + $5 = $185",
          "$180 - $5 = $175"
        ]
      ]
    }
  ],
  track: "options",
  order: 25,
  prerequisites: [
    "gamma-theta-vega"
  ]
};
