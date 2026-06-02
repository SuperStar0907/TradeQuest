LESSON_REGISTRY["market-microstructure"] = {
  id: "market-microstructure",
  title: "Market Microstructure",
  category: "trading-skills",
  difficulty: "intermediate",
  estimatedMinutes: 12,
  xpReward: 80,
  sections: [
    {
      type: "text",
      content: "<h3>How Markets Actually Work</h3><p>Behind every trade is a complex system of market makers, exchanges, and electronic matching engines.</p><ul><li><strong>Bid</strong> — The highest price a buyer will pay</li><li><strong>Ask (Offer)</strong> — The lowest price a seller will accept</li><li><strong>Spread</strong> — The difference between bid and ask. Tighter spread = more liquid</li></ul><p>AAPL might have a spread of $0.01 (very liquid). A small-cap stock might have a spread of $0.10-$0.50 (illiquid). The spread is a hidden cost of trading.</p>"
    },
    {
      type: "key-concept",
      title: "Market Makers",
      content: "Market makers are firms that provide liquidity by continuously quoting bid and ask prices. They profit from the spread. Major market makers: Citadel Securities, Virtu Financial, GTS. They ensure you can always buy or sell, but they also see order flow, which gives them an information advantage."
    },
    {
      type: "text",
      content: "<h3>Order Book & Liquidity</h3><p>The order book shows all pending buy and sell orders at each price level. A \"thick\" order book with many orders means high liquidity — your large orders will not move the price much. A \"thin\" order book means even small orders can cause big price swings.</p><p><strong>Dark Pools</strong> are private exchanges where institutional investors trade large blocks without showing their orders to the public order book. About 40% of US equity volume trades in dark pools.</p>"
    },
    {
      type: "text",
      content: "<h3>Payment for Order Flow (PFOF)</h3><p>Commission-free brokers like Robinhood make money by selling your orders to market makers (Citadel, Virtu). The market maker pays the broker a small fee and then fills your order, profiting from the spread. This is legal and common, but it means your orders may not always get the best possible price.</p>"
    },
    {
      type: "text",
      content: "<h3>Common Mistakes Related to Market Microstructure</h3><ul><li><strong>Trading during the first and last 15 minutes blindly</strong> — The open and close are the most volatile periods. Spreads can widen dramatically, and large institutional orders can cause rapid price swings. Unless you have a specific strategy designed for these windows, consider waiting until 10:00 AM ET for conditions to stabilize.</li><li><strong>Ignoring the bid-ask spread as a cost</strong> — If you buy at the ask and immediately sell at the bid, you lose the spread. On a stock with a $0.05 spread, that is negligible. On an illiquid option with a $0.30 spread, you are starting every trade down $30 per contract. Always factor the spread into your expected return.</li><li><strong>Not understanding the difference between displayed and hidden liquidity</strong> — The order book you see on Level 2 quotes is only part of the picture. Iceberg orders show only a fraction of their true size, and dark pool volume does not appear at all. A \"thin\" order book does not always mean low liquidity.</li></ul>"
    },
    {
      type: "comparison-table",
      headers: [
        "Venue",
        "Visibility",
        "Typical Users",
        "Percentage of US Equity Volume"
      ],
      rows: [
        [
          "NYSE / NASDAQ (lit exchanges)",
          "Fully visible order book",
          "All market participants",
          "Approximately 55-60%"
        ],
        [
          "Dark Pools",
          "Hidden; no pre-trade transparency",
          "Institutional investors trading large blocks",
          "Approximately 35-40%"
        ],
        [
          "Internalization (PFOF)",
          "Routed to market maker, not exchange",
          "Retail brokers (Robinhood, Schwab, etc.)",
          "Included in the above figures"
        ]
      ]
    },
    {
      type: "key-concept",
      title: "Pro Tips for Understanding Microstructure",
      content: "Pay attention to the time and sales tape (also called the \"tape\" or \"prints\"). It shows every executed trade with its price, size, and timestamp. Large prints at the ask price indicate aggressive buying. Large prints at the bid indicate aggressive selling. A series of large prints at the ask on rising volume often precedes a significant move up. Learning to read the tape takes practice but gives you an edge that chart patterns alone cannot provide."
    }
  ],
  track: "stock-markets",
  order: 16,
  prerequisites: [
    "sector-analysis"
  ]
};
