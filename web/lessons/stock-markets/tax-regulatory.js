LESSON_REGISTRY["tax-regulatory"] = {
  id: "tax-regulatory",
  title: "Tax & Regulatory Basics",
  category: "fundamentals",
  difficulty: "advanced",
  estimatedMinutes: 10,
  xpReward: 80,
  sections: [
    {
      type: "text",
      content: "<h3>Taxes on Trading</h3><p>Trading profits are taxable. Understanding the rules can save you thousands:</p><ul><li><strong>Short-Term Capital Gains</strong> — Positions held less than 1 year. Taxed as ordinary income (up to 37%).</li><li><strong>Long-Term Capital Gains</strong> — Positions held more than 1 year. Taxed at 0%, 15%, or 20% depending on income.</li></ul><p>This means a $10,000 profit on a day trade could cost you $3,700 in taxes, while the same profit on a stock held for 13 months might only cost $1,500. Time horizon matters enormously for after-tax returns.</p>"
    },
    {
      type: "key-concept",
      title: "The Wash Sale Rule",
      content: "You cannot claim a tax loss if you buy the same or \"substantially identical\" security within 30 days before or after the sale. Example: You sell AAPL at a loss on Dec 15, then buy AAPL back on Jan 5. The loss is <strong>disallowed</strong>. The 30-day window applies in both directions. This rule prevents people from selling for a tax deduction and immediately buying back."
    },
    {
      type: "text",
      content: "<h3>Pattern Day Trader (PDT) Rule</h3><p>If you execute 4 or more day trades within 5 business days in a margin account, you are classified as a Pattern Day Trader. You must maintain a minimum equity of <strong>$25,000</strong> in your account.</p><p>If you fall below $25K, your account is restricted to closing trades only until you deposit more funds. Workarounds: use a cash account (no PDT rule but requires settled funds), or keep multiple broker accounts.</p>"
    },
    {
      type: "text",
      content: "<h3>Tax-Loss Harvesting</h3><p>Tax-loss harvesting is selling losing positions to offset gains. If you have $5,000 in gains and $3,000 in losses, you only pay tax on $2,000 net gain. You can deduct up to $3,000 of net losses against ordinary income per year, and carry forward unused losses indefinitely.</p><p><strong>Strategy</strong>: In December, review your portfolio for positions with unrealized losses. Sell them to harvest the tax benefit. Wait 31 days (wash sale rule), then repurchase if you still want the position. In the meantime, you can buy a similar (but not identical) ETF to maintain exposure.</p>"
    }
  ],
  track: "stock-markets",
  order: 20,
  prerequisites: [
    "portfolio-construction"
  ]
};
