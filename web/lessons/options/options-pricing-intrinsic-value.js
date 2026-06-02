LESSON_REGISTRY["options-pricing-intrinsic-value"] = {
  id: "options-pricing-intrinsic-value",
  title: "Options Pricing & Intrinsic Value",
  category: "options-basics",
  difficulty: "beginner",
  estimatedMinutes: 10,
  xpReward: 55,
  sections: [
    {
      type: "text",
      content: "<h3>The Two Components of an Option's Price</h3>\n<p>Every option premium can be broken into two parts:</p>\n<p><strong>Premium = Intrinsic Value + Extrinsic Value (Time Value)</strong></p>\n<ul>\n  <li><strong>Intrinsic Value</strong> &mdash; The amount the option is \"in the money.\" This is real, tangible value you could capture right now by exercising.</li>\n  <li><strong>Extrinsic Value (Time Value)</strong> &mdash; The extra amount traders pay for the <em>possibility</em> that the option could become more valuable before expiration. This portion decays to zero by expiration.</li>\n</ul>"
    },
    {
      type: "key-concept",
      title: "Intrinsic Value Formulas",
      content: "Call Intrinsic Value = max(Stock Price - Strike Price, 0). Put Intrinsic Value = max(Strike Price - Stock Price, 0). Intrinsic value can never be negative -- if the formula yields a negative number, intrinsic value is simply zero."
    },
    {
      type: "text",
      content: "<h3>In the Money, At the Money, Out of the Money</h3>\n<ul>\n  <li><strong>In the Money (ITM)</strong> &mdash; The option has intrinsic value. A $170 call on a $180 stock is $10 ITM.</li>\n  <li><strong>At the Money (ATM)</strong> &mdash; Strike price equals the current stock price. All value is extrinsic.</li>\n  <li><strong>Out of the Money (OTM)</strong> &mdash; The option has zero intrinsic value. A $190 call on a $180 stock is OTM.</li>\n</ul>\n<p>Example: AAPL is at $180. A $170 call is trading at $14.50.</p>\n<ul>\n  <li>Intrinsic value = $180 - $170 = <strong>$10.00</strong></li>\n  <li>Extrinsic value = $14.50 - $10.00 = <strong>$4.50</strong></li>\n</ul>"
    },
    {
      type: "comparison-table",
      headers: [
        "Factor",
        "Effect on Call Price",
        "Effect on Put Price"
      ],
      rows: [
        [
          "Stock Price Rises",
          "Increases",
          "Decreases"
        ],
        [
          "Stock Price Falls",
          "Decreases",
          "Increases"
        ],
        [
          "More Time to Expiry",
          "Increases",
          "Increases"
        ],
        [
          "Higher Implied Volatility",
          "Increases",
          "Increases"
        ],
        [
          "Higher Strike Price",
          "Decreases",
          "Increases"
        ]
      ]
    },
    {
      type: "text",
      content: "<h3>Time Decay: The Option Buyer's Enemy</h3>\n<p>Every day that passes, the extrinsic value of your option shrinks a little. This is called <strong>time decay</strong> (measured by the Greek \"Theta\").</p>\n<p>Time decay is not linear &mdash; it <em>accelerates</em> as expiration approaches. An option loses roughly one-third of its time value in the first half of its life and two-thirds in the second half. The last 30 days are brutal for buyers.</p>\n<p>This is why experienced traders say: <strong>\"Option buyers need to be right about direction AND timing. Option sellers just need to be patient.\"</strong></p>"
    },
    {
      type: "payoff-diagram",
      config: {
        title: "Long Put Payoff",
        description: "A long put profits when the stock falls below the strike price minus the premium. Your maximum loss is the premium paid. Use puts to hedge downside or bet on a decline.",
        strategies: [
          {
            type: "long-put",
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
            max: 200,
            default: 170,
            id: "strikePrice",
            step: 5
          },
          {
            type: "slider",
            label: "Premium Paid",
            min: 1,
            max: 12,
            default: 4,
            id: "premium",
            step: 1
          }
        ]
      }
    },
    {
      type: "text",
      content: "<h3>How a Real Trader Thinks About Options Pricing</h3>\n<p>Imagine AAPL is trading at $180 and you are considering a $185 call expiring in 30 days for $3.50. Before buying, an experienced trader asks three questions:</p>\n<ol>\n  <li><strong>What move do I need?</strong> The breakeven is $188.50. That is a 4.7% move in 30 days. Is that realistic given AAPL's typical range?</li>\n  <li><strong>How much is time value?</strong> The entire $3.50 is extrinsic value since the option is out of the money. All of it will decay to zero by expiration unless AAPL moves above $185.</li>\n  <li><strong>Is volatility inflated?</strong> If earnings are next week, implied volatility may be pumping up this premium. After earnings, IV will collapse and the option could lose 30-40% of its value overnight even if AAPL does not move.</li>\n</ol>\n<p>This kind of thinking separates informed traders from gamblers. The premium is not just a price — it encodes the market's expectations about magnitude, timing, and uncertainty.</p>"
    },
    {
      type: "key-concept",
      title: "Pro Tips for Options Pricing",
      content: "Always compare the cost of the option to the expected move. If an ATM straddle costs $12, the market is pricing in a $12 move (roughly). If you think the stock will only move $8, buying that straddle is a losing proposition. Also remember that deep in-the-money options have very little extrinsic value, which means minimal time decay. They behave almost like stock but require less capital. This makes them useful as stock replacement positions for traders who want leverage with less time decay risk."
    }
  ],
  track: "options",
  order: 22,
  prerequisites: [
    "what-are-options"
  ]
};
