LESSON_REGISTRY["straddles-and-strangles"] = {
  id: "straddles-and-strangles",
  title: "Straddles & Strangles",
  category: "options-strategies",
  difficulty: "advanced",
  estimatedMinutes: 13,
  xpReward: 85,
  sections: [
    {
      type: "text",
      content: "<h3>The Long Straddle</h3>\n<p>A long straddle involves buying <strong>both an ATM call and an ATM put</strong> with the same strike and expiration.</p>\n<ul>\n  <li>You profit from a <strong>large move in either direction</strong>.</li>\n  <li>You do not need to predict which way the stock moves &mdash; only that it moves <em>a lot</em>.</li>\n  <li>Max loss = total premium paid (both options).</li>\n  <li>Breakeven points: Strike +/- total premium paid.</li>\n</ul>\n<p>Example: Buy $180 call for $6 and $180 put for $5 = $11 total cost. Breakevens at $169 and $191. The stock must move more than $11 from the strike for you to profit.</p>"
    },
    {
      type: "payoff-diagram",
      config: {
        title: "Long Straddle Payoff",
        description: "The straddle forms a V-shaped payoff. You profit when the stock moves far enough in either direction to overcome the combined premium paid. The bottom of the V is your max loss (total premium) at the strike price.",
        strategies: [
          {
            type: "long-call",
            strike: 180,
            premium: 6
          },
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
            min: 160,
            max: 200,
            default: 180,
            id: "strikePrice",
            step: 5
          }
        ]
      }
    },
    {
      type: "text",
      content: "<h3>The Long Strangle</h3>\n<p>A long strangle is similar but uses <strong>OTM options</strong> &mdash; an OTM call (above current price) and an OTM put (below current price).</p>\n<ul>\n  <li><strong>Cheaper</strong> than a straddle because both options are OTM.</li>\n  <li>Requires a <strong>bigger move</strong> to become profitable.</li>\n  <li>Often used when you expect a massive move but want to reduce capital at risk.</li>\n</ul>\n<p>Example: Buy $190 call for $3 and $170 put for $2.50 = $5.50 total cost. Breakevens at $164.50 and $195.50.</p>\n<h3>When to Use These Strategies</h3>\n<ul>\n  <li><strong>Before earnings announcements</strong> &mdash; Stocks often make their biggest moves after earnings.</li>\n  <li><strong>Before binary events</strong> &mdash; FDA approvals, court rulings, election results.</li>\n  <li><strong>When IV is low</strong> &mdash; Cheap options can explode in value if volatility spikes.</li>\n</ul>"
    },
    {
      type: "comparison-table",
      headers: [
        "",
        "Long Straddle",
        "Long Strangle"
      ],
      rows: [
        [
          "Legs",
          "ATM call + ATM put (same strike)",
          "OTM call + OTM put (different strikes)"
        ],
        [
          "Cost",
          "Higher (both ATM = max extrinsic)",
          "Lower (both OTM)"
        ],
        [
          "Breakeven Range",
          "Narrower",
          "Wider"
        ],
        [
          "Move Required",
          "Smaller move to profit",
          "Larger move to profit"
        ],
        [
          "Max Loss",
          "Total premium (higher $)",
          "Total premium (lower $)"
        ],
        [
          "Best When",
          "Expecting big move, unsure of direction",
          "Expecting very large move, want cheaper entry"
        ]
      ]
    },
    {
      type: "key-concept",
      title: "The IV Trap with Straddles",
      content: "Before earnings, implied volatility rises because the market expects a big move. This inflates the straddle price. After earnings, IV collapses (\"IV crush\") even if the stock moves your way. The stock might move $8, but if the straddle was priced for a $12 move, you still lose. Always compare the straddle price to the expected move before buying."
    }
  ],
  track: "options",
  order: 31,
  prerequisites: [
    "iron-condors"
  ]
};
