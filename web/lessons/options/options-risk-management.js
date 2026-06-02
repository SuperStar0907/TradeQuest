LESSON_REGISTRY["options-risk-management"] = {
  id: "options-risk-management",
  title: "Options Risk Management",
  category: "options-basics",
  difficulty: "advanced",
  estimatedMinutes: 14,
  xpReward: 100,
  sections: [
    {
      type: "text",
      content: "<h3>Position Sizing for Options</h3>\n<p>Options can produce outsized gains, but they can also go to zero. Proper position sizing is non-negotiable.</p>\n<ul>\n  <li><strong>Never risk more than 2-5% of your total account on a single options trade.</strong> If your account is $50,000, your maximum risk per trade should be $1,000-$2,500.</li>\n  <li>For defined-risk strategies (debit spreads, iron condors), your risk is the max loss of the position.</li>\n  <li>For long options, your risk is the total premium paid.</li>\n  <li>Start with <strong>1 contract</strong>. Scaling up is easy once you have a proven process. Scaling down from a blown-up account is not.</li>\n</ul>"
    },
    {
      type: "key-concept",
      title: "Defined Risk vs. Undefined Risk",
      content: "Defined risk strategies (debit spreads, iron condors, long options) have a known maximum loss. Undefined risk strategies (naked calls, naked puts, short strangles) have theoretically unlimited loss. Beginners should ONLY trade defined risk. Even experienced traders should limit undefined risk positions and always have a stop-loss plan."
    },
    {
      type: "text",
      content: "<h3>Rolling Options</h3>\n<p>\"Rolling\" means closing your current position and opening a new one at a different strike and/or expiration. Common rolling scenarios:</p>\n<ul>\n  <li><strong>Roll out in time</strong> &mdash; Move to a later expiration when you need more time for your thesis to play out.</li>\n  <li><strong>Roll up/down in strike</strong> &mdash; Adjust your strike after a big move to lock in profits or reduce risk.</li>\n  <li><strong>When to roll</strong> &mdash; Roll when the trade thesis is still intact but the position needs adjustment. Do NOT roll a bad trade just to avoid taking a loss &mdash; that turns one loss into a bigger one.</li>\n</ul>\n<h3>Early Assignment Risk</h3>\n<p>American-style options can be exercised at any time before expiration. Early assignment is most common:</p>\n<ul>\n  <li>On <strong>short calls</strong> right before an ex-dividend date (the call buyer wants the dividend).</li>\n  <li>On <strong>deep ITM short puts</strong> when extrinsic value is near zero.</li>\n  <li>Early assignment is an <strong>inconvenience, not a catastrophe</strong>. You are simply fulfilling your obligation early.</li>\n</ul>"
    },
    {
      type: "text",
      content: "<h3>Common Mistakes to Avoid</h3>\n<ol>\n  <li><strong>Oversizing positions</strong> &mdash; \"Going all in\" on a single options trade. One bad trade can wipe out months of gains.</li>\n  <li><strong>Ignoring the Greeks</strong> &mdash; Buying options without understanding theta decay or vega exposure.</li>\n  <li><strong>Holding to expiration</strong> &mdash; Most profitable trades should be closed early. Take 50-75% of max profit and move on.</li>\n  <li><strong>Revenge trading</strong> &mdash; Doubling down on a losing position to \"make it back.\" Cut losses and find a new trade.</li>\n  <li><strong>Trading illiquid options</strong> &mdash; Wide bid-ask spreads silently eat your profits. Stick to liquid names.</li>\n  <li><strong>No exit plan</strong> &mdash; Define your profit target and max loss BEFORE entering. Write it down.</li>\n</ol>"
    },
    {
      type: "comparison-table",
      headers: [
        "Risk Category",
        "Rule",
        "Why It Matters"
      ],
      rows: [
        [
          "Position Size",
          "Max 2-5% of account per trade",
          "Survive losing streaks without account destruction"
        ],
        [
          "Strategy Selection",
          "Beginners: defined risk only",
          "Known max loss prevents catastrophic surprises"
        ],
        [
          "Profit Taking",
          "Close at 50-75% of max profit",
          "Locking in gains avoids round-tripping winners"
        ],
        [
          "Loss Cutting",
          "Exit at 1.5-2x premium (debit) or 2x credit (credit spreads)",
          "Small losses are recoverable; large ones are not"
        ],
        [
          "Margin",
          "Never use more than 50% of available margin",
          "Leaves room for adjustments and avoids margin calls"
        ],
        [
          "Diversification",
          "No more than 3-5 positions in same sector",
          "Sector events can hit all correlated positions at once"
        ]
      ]
    },
    {
      type: "payoff-diagram",
      config: {
        title: "Iron Condor — Defined Risk, Range-Bound Strategy",
        description: "An iron condor profits when the stock stays within a range. You collect premium from selling both a put and a call, with defined risk on both sides. This diagram shows the short strikes — your profit zone is between them.",
        strategies: [
          {
            type: "short-put",
            strike: 160,
            premium: 3
          },
          {
            type: "short-call",
            strike: 200,
            premium: 3
          }
        ],
        stockPrice: 180,
        controls: [
          {
            type: "slider",
            label: "Short Put Strike",
            min: 140,
            max: 175,
            default: 160,
            id: "putStrike",
            step: 5
          },
          {
            type: "slider",
            label: "Short Call Strike",
            min: 185,
            max: 220,
            default: 200,
            id: "callStrike",
            step: 5
          }
        ]
      }
    }
  ],
  track: "options",
  order: 35,
  prerequisites: [
    "earnings-plays-iv-crush"
  ]
};
