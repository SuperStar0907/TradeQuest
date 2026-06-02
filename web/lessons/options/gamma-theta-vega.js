LESSON_REGISTRY["gamma-theta-vega"] = {
  id: "gamma-theta-vega",
  title: "Gamma, Theta, Vega",
  category: "options-greeks",
  difficulty: "intermediate",
  estimatedMinutes: 14,
  xpReward: 75,
  sections: [
    {
      type: "text",
      content: "<h3>Gamma: The Accelerator</h3>\n<p><strong>Gamma</strong> measures the rate of change of delta for every $1 move in the stock. Think of delta as speed and gamma as acceleration.</p>\n<ul>\n  <li>Gamma is <strong>highest for ATM options</strong> near expiration. These options have the most \"explosive\" delta changes.</li>\n  <li>Gamma is <strong>lowest for deep ITM or deep OTM</strong> options, because their deltas are already near their extremes.</li>\n  <li>Long options have <strong>positive gamma</strong> (delta moves in your favor). Short options have <strong>negative gamma</strong> (delta moves against you).</li>\n</ul>\n<p>High gamma near expiration is why short-dated ATM options can swing wildly in value. A stock that crosses through your strike price in the last few days can cause enormous P&amp;L swings.</p>"
    },
    {
      type: "text",
      content: "<h3>Theta: The Clock Is Ticking</h3>\n<p><strong>Theta</strong> measures how much value an option loses each day, all else being equal. It is expressed as a negative number for option buyers.</p>\n<ul>\n  <li>An option with theta of -0.05 loses <strong>$5 per contract per day</strong> ($0.05 x 100 shares).</li>\n  <li>Theta <strong>accelerates in the last 30 days</strong> before expiration. An option that took 60 days to lose half its time value might lose the other half in just 15 days.</li>\n  <li>ATM options have the <strong>highest theta</strong> in dollar terms because they have the most extrinsic value to lose.</li>\n</ul>\n<p>This is why option sellers love time &mdash; every day that passes puts money in their pocket. Option buyers are fighting the clock.</p>"
    },
    {
      type: "text",
      content: "<h3>Vega: Volatility Sensitivity</h3>\n<p><strong>Vega</strong> measures how much an option's price changes for every 1% change in implied volatility (IV).</p>\n<ul>\n  <li>A vega of 0.15 means the option gains <strong>$15 per contract</strong> if IV rises 1% and loses $15 if IV drops 1%.</li>\n  <li>Higher IV means <strong>higher premiums</strong> for all options. This is why options become expensive before earnings.</li>\n  <li>Longer-dated options have <strong>higher vega</strong> because there is more time for volatility to impact the stock.</li>\n</ul>"
    },
    {
      type: "comparison-table",
      headers: [
        "Greek",
        "Measures",
        "Buyer Impact",
        "Seller Impact",
        "Highest When"
      ],
      rows: [
        [
          "Delta",
          "Price sensitivity per $1 stock move",
          "Positive (calls) / Negative (puts)",
          "Opposite of buyer",
          "Deep ITM"
        ],
        [
          "Gamma",
          "Rate of delta change",
          "Positive (good)",
          "Negative (risky)",
          "ATM, near expiration"
        ],
        [
          "Theta",
          "Daily time decay",
          "Negative (cost)",
          "Positive (income)",
          "ATM, near expiration"
        ],
        [
          "Vega",
          "IV sensitivity per 1%",
          "Positive (benefits from IV rise)",
          "Negative (hurt by IV rise)",
          "ATM, long-dated"
        ]
      ]
    },
    {
      type: "key-concept",
      title: "The Gamma-Theta Tradeoff",
      content: "Gamma and theta are two sides of the same coin. Long option positions have positive gamma (delta moves in your favor during big moves) but negative theta (you pay time decay daily). Short option positions earn theta but carry negative gamma risk. You cannot have one without the other."
    }
  ],
  track: "options",
  order: 24,
  prerequisites: [
    "the-greeks-delta"
  ]
};
