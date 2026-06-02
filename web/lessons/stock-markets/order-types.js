LESSON_REGISTRY["order-types"] = {
  id: "order-types",
  title: "Order Types",
  category: "trading-skills",
  difficulty: "beginner",
  estimatedMinutes: 10,
  xpReward: 60,
  sections: [
    {
      type: "text",
      content: "<h3>How Orders Work</h3><p>An order is an instruction to your broker to buy or sell a security. Different order types give you control over the price and timing of your trades.</p><p>Choosing the right order type is crucial. A market order in a volatile, illiquid stock can result in terrible fills. A limit order too far from the current price may never execute.</p>"
    },
    {
      type: "comparison-table",
      headers: [
        "Order Type",
        "Execution",
        "Price Control",
        "Best For"
      ],
      rows: [
        [
          "Market",
          "Immediate (guaranteed fill)",
          "None — you get whatever price is available",
          "Liquid stocks when you need in/out NOW"
        ],
        [
          "Limit",
          "Only at your price or better",
          "Full control",
          "Getting a specific entry/exit price"
        ],
        [
          "Stop",
          "Becomes market order when stop price hit",
          "None after triggered",
          "Protecting profits / limiting losses"
        ],
        [
          "Stop-Limit",
          "Becomes limit order when stop price hit",
          "Control after triggered",
          "Protection with price guarantee (but may not fill)"
        ],
        [
          "Trailing Stop",
          "Follows price by fixed amount/percentage",
          "Adjusts automatically",
          "Locking in profits as price moves in your favor"
        ]
      ]
    },
    {
      type: "key-concept",
      title: "Slippage",
      content: "Slippage is the difference between the price you expected and the price you actually got. Market orders in volatile or low-volume stocks can experience significant slippage. Use limit orders for illiquid stocks or during high-volatility events like earnings."
    },
    {
      type: "text",
      content: "<h3>Time-in-Force</h3><p>Orders also have a duration:</p><ul><li><strong>Day Order</strong> — Expires at market close if not filled</li><li><strong>GTC (Good Til Cancelled)</strong> — Stays active until filled or you cancel (usually up to 90 days)</li><li><strong>IOC (Immediate or Cancel)</strong> — Fill what you can immediately, cancel the rest</li><li><strong>FOK (Fill or Kill)</strong> — Fill the entire order immediately or cancel everything</li></ul>"
    },
    {
      type: "text",
      content: "<h3>Common Mistakes with Order Types</h3><ul><li><strong>Using market orders on illiquid stocks</strong> — A market order on a stock with a $0.50 spread can cost you significantly more than expected. If the stock trades 50,000 shares a day, a market order for 5,000 shares will chew through multiple price levels. Always use limit orders on low-volume names.</li><li><strong>Setting stops at obvious levels</strong> — If a stock has clear support at $100, thousands of traders have stops at $99.90. Market makers and algorithms know this. The stock dips to $99.85, triggers all the stops, and then reverses higher. Place stops slightly below the obvious level or use a closing-price stop instead.</li><li><strong>Forgetting about GTC orders</strong> — Traders place GTC limit orders and forget about them. Weeks later, the market context has changed but the old order fills at a price that no longer makes sense. Review your open orders at least weekly.</li><li><strong>Not using bracket orders</strong> — Most brokers support OCO (One Cancels Other) or bracket orders that attach a profit target and stop loss to your entry. This automates your exits and removes emotion from the equation. Use them on every trade.</li></ul>"
    },
    {
      type: "text",
      content: "<h3>How a Real Trader Chooses Order Types</h3><p>Here is how an experienced swing trader might handle a typical setup. They spot MSFT breaking out above resistance at $420 on strong volume. Instead of chasing with a market order, they place a limit buy at $421 — slightly above the breakout level to confirm the break is real, but still a controlled entry price.</p><p>Simultaneously, they set up a bracket order: a stop loss at $412 (below the previous resistance, now support) and a limit sell at $440 (their profit target based on the measured move). If MSFT hits $440 first, the profit target fills and the stop is automatically cancelled. If MSFT drops to $412, the stop triggers and the profit target is cancelled.</p><p>This approach means the trader defines their entire risk and reward before the trade begins. No emotional decisions, no watching the screen all day, and no scrambling to exit when things move fast.</p>"
    }
  ],
  track: "stock-markets",
  order: 12,
  prerequisites: [
    "candlestick-patterns"
  ]
};
