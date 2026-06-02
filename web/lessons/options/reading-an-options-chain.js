LESSON_REGISTRY["reading-an-options-chain"] = {
  id: "reading-an-options-chain",
  title: "Reading an Options Chain",
  category: "options-basics",
  difficulty: "intermediate",
  estimatedMinutes: 12,
  xpReward: 65,
  sections: [
    {
      type: "text",
      content: "<h3>The Options Chain Layout</h3>\n<p>An options chain is a table displaying all available options for a stock at a given expiration date. Understanding the layout is essential before placing any trade.</p>\n<ul>\n  <li><strong>Calls</strong> are displayed on the <strong>left side</strong> of the chain.</li>\n  <li><strong>Puts</strong> are displayed on the <strong>right side</strong>.</li>\n  <li><strong>Strike prices</strong> run down the center column, typically in $1, $2.50, or $5 increments.</li>\n  <li>The current stock price falls somewhere between the strikes, with ITM options highlighted or shaded.</li>\n</ul>"
    },
    {
      type: "comparison-table",
      headers: [
        "Column",
        "What It Tells You",
        "What to Look For"
      ],
      rows: [
        [
          "Bid",
          "Price someone will pay to buy your option",
          "Tight bid/ask spread = good liquidity"
        ],
        [
          "Ask",
          "Price you must pay to buy the option",
          "Wide spreads mean higher entry cost"
        ],
        [
          "Last",
          "Last traded price",
          "May be stale if volume is low"
        ],
        [
          "Volume",
          "Contracts traded today",
          "Higher volume = easier to fill orders"
        ],
        [
          "Open Interest (OI)",
          "Total open contracts",
          "High OI = established interest at that strike"
        ]
      ]
    },
    {
      type: "key-concept",
      title: "Liquidity Matters More Than You Think",
      content: "Always check the bid-ask spread before trading. A $0.05 spread on a $3.00 option means you lose 1.7% immediately. A $0.50 spread on the same option means you lose 16.7% just entering the trade. Stick to options with high volume and tight spreads -- typically ATM strikes on liquid stocks like AAPL, SPY, or MSFT."
    },
    {
      type: "text",
      content: "<h3>Picking the Right Strike</h3>\n<p>Your strike selection determines your risk/reward profile:</p>\n<ul>\n  <li><strong>ITM options</strong> &mdash; Higher premium, higher delta, more expensive but more likely to profit. Behave more like stock.</li>\n  <li><strong>ATM options</strong> &mdash; Moderate premium, ~0.50 delta. Balanced risk/reward and the most liquid.</li>\n  <li><strong>OTM options</strong> &mdash; Cheap, low delta, low probability of profit. Only suitable when you expect a large move.</li>\n</ul>\n<h3>Choosing Your Expiration</h3>\n<ul>\n  <li><strong>Weeklys (0-7 DTE)</strong> &mdash; Very high theta decay. Used for short-term directional bets or premium selling.</li>\n  <li><strong>Monthlys (30-60 DTE)</strong> &mdash; The sweet spot for most strategies. Enough time for your thesis to play out without excessive time decay.</li>\n  <li><strong>LEAPS (6-24 months)</strong> &mdash; Minimal theta, but expensive. Used as a stock replacement strategy.</li>\n</ul>"
    },
    {
      type: "interactive-chart",
      config: {
        ticker: "MSFT",
        title: "MSFT Options Context",
        description: "Review the current MSFT price level to understand which strikes would be ITM, ATM, or OTM on a real options chain."
      }
    },
    {
      type: "payoff-diagram",
      config: {
        title: "Long Call Payoff — Strike Selection",
        description: "See how choosing different strikes affects your risk and reward. A lower strike costs more premium but has a higher probability of profit. A higher strike is cheaper but needs a bigger move.",
        strategies: [
          {
            type: "long-call",
            strike: 420,
            premium: 8
          }
        ],
        stockPrice: 420,
        controls: [
          {
            type: "slider",
            label: "Strike Price",
            min: 390,
            max: 450,
            default: 420,
            id: "strikePrice",
            step: 5
          },
          {
            type: "slider",
            label: "Premium Paid",
            min: 1,
            max: 20,
            default: 8,
            id: "premium",
            step: 1
          }
        ]
      }
    }
  ],
  track: "options",
  order: 26,
  prerequisites: [
    "payoff-diagrams-calls-puts"
  ]
};
