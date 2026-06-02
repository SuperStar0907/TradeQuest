LESSON_REGISTRY["options-market-making"] = {
  id: "options-market-making",
  title: "Options Market Making",
  track: "advanced",
  category: "advanced-strategies",
  difficulty: "advanced",
  order: 55,
  estimatedMinutes: 15,
  xpReward: 100,
  prerequisites: ["statistical-arbitrage"],
  sections: [
    {
      type: "text",
      content: "<h3>The Market Maker's Business Model</h3><p>An options market maker provides liquidity by continuously quoting two-sided markets (bid and ask) for options contracts. Their profit comes primarily from the bid-ask spread — buying at the bid, selling at the ask, and hedging the resulting directional risk. The market maker does not speculate on direction; they speculate on volatility (implied vs realized) and manage the complex Greeks exposures that accumulate from maintaining large, diverse books of options positions.</p><p>The economics of market making are straightforward at the level of a single trade: sell a call, delta hedge with the underlying, collect theta while gamma costs money if the stock moves. The complexity emerges from the interaction of thousands of positions across many underlyings and expirations, all changing simultaneously. The market maker's primary P&L drivers are:</p><ul><li><strong>Spread capture:</strong> The bid-ask spread collected on each trade, net of exchange fees and rebates</li><li><strong>Volatility edge:</strong> Selling implied volatility that exceeds subsequent realized volatility (the variance risk premium)</li><li><strong>Gamma P&L:</strong> The daily P&L from delta re-hedging, which equals (realized variance - implied variance) times the gamma notional</li></ul>"
    },
    {
      type: "key-concept",
      title: "Quoting Strategy and Spread Determination",
      content: "A market maker's quote is centered on their theoretical fair value (TV) for the option, with a spread added symmetrically (or asymmetrically based on inventory). The TV is computed from the market maker's proprietary volatility model — their estimate of the 'right' implied volatility for each option based on their vol surface model. The bid-ask width around TV is determined by: (1) Gamma risk — options near-the-money with short time to expiration have high gamma and therefore high re-hedging risk. Wider spreads are needed to compensate. (2) Vega risk — longer-dated options have more vega. If the vol model is uncertain, the spread must compensate for potential model error. (3) Liquidity of the underlying — options on illiquid stocks have wider spreads because the delta hedge is itself costly. (4) Inventory — if the market maker is already long gamma (has bought many options), they will shade their bid lower and ask lower to attract sellers, reducing their inventory. Market makers optimize quote width to maximize the number of trades times the average spread captured, subject to not being adversely selected by informed traders."
    },
    {
      type: "text",
      content: "<h3>Gamma Scalping: The Daily P&L Engine</h3><p>A market maker who sells options to customers collects premium (theta) but becomes short gamma — they lose money when the stock makes large moves. They delta hedge this gamma exposure by continuously adjusting their position in the underlying. This process of re-hedging is called <strong>gamma scalping</strong> (or, from the short gamma perspective, gamma bleeding).</p><p>The P&L from gamma scalping is determined by the formula: <code>Gamma P&L = 0.5 * Gamma * (dS)^2</code> where dS is the stock price move. For a long gamma position, large moves are profitable. For a short gamma position (typical for market makers who sell options), large moves are costly. The daily P&L from gamma is compared to theta decay: theta is earned steadily each day, while gamma P&L varies with realized volatility. The net result:</p><ul><li>If realized volatility &gt; implied volatility used to price the options sold: the gamma losses exceed the theta earned — net loss</li><li>If realized volatility &lt; implied volatility used to price the options sold: theta exceeds gamma losses — net profit</li></ul><p>This is the daily manifestation of the variance risk premium. The market maker makes money over time if they consistently sell options at higher implied volatility than the subsequent realized volatility.</p>"
    },
    {
      type: "text",
      content: "<h3>Inventory Management and Skew Positioning</h3><p>Managing the accumulated inventory of options positions is the central challenge of market making. A book that has too many short puts in a sector creates massive downside exposure. Key inventory management tools:</p><ul><li><strong>Greek limits:</strong> Maximum allowed delta, gamma, vega, vanna, and volga across the entire book. When limits are approached, the market maker must reduce positions or hedge the excess exposure.</li><li><strong>Skew positioning:</strong> The market maker can intentionally maintain a skewed book — for example, being net long downside puts (long negative skew) to profit if the market falls sharply. This is not pure market making but a deliberate speculative overlay on the book, sized within risk limits.</li><li><strong>Correlation trades:</strong> A book of single-stock options has significant implicit exposure to cross-stock correlation (through index options that are being priced from the same volatility surface). Managing this correlation exposure often requires index options to hedge.</li><li><strong>Hedging P&L attribution:</strong> A well-run options book tracks the P&L from delta hedging separately from the P&L from changes in implied volatility, allowing the risk manager to distinguish between realized vol edge and vol surface repricing gains/losses.</li></ul>"
    },
    {
      type: "comparison-table",
      headers: ["Risk Type", "Greek Exposure", "Profitable If...", "Hedging Instrument", "Typical Limit Metric"],
      rows: [
        ["Directional (delta)", "Net delta across book", "Underlying moves in delta direction", "Stock, futures, ETF delta hedge", "Dollar delta per underlying, aggregate"],
        ["Convexity (gamma)", "Net gamma across book", "Long gamma: stock moves a lot; Short gamma: stock is quiet", "Re-hedge with underlying; buy/sell options", "Dollar gamma per 1% move"],
        ["Volatility level (vega)", "Net vega across book", "Long vega: IV rises; Short vega: IV falls", "Buy/sell options; variance swaps", "Dollar vega per 1 vol point"],
        ["Volatility skew (vanna)", "Net vanna across book", "Depends on correlation of spot and vol moves", "Risk reversals; OTM put/call spreads", "Dollar vanna per combined unit move"],
        ["Volatility convexity (volga)", "Net volga across book", "Long volga: vol-of-vol increases", "Buy OTM options; variance swap overlay", "Dollar volga per vol-of-vol move"],
        ["Time decay (theta)", "Net theta across book", "Net short options: time passes without moves", "No direct hedge; managed through gamma balance", "Daily dollar theta"]
      ]
    },
    {
      type: "key-concept",
      title: "Adverse Selection and Informed Order Flow",
      content: "The market maker's greatest nemesis is informed order flow — a trader who knows something about the underlying that is not yet priced into the market. If an insider buys calls before an acquisition announcement, the market maker who sold those calls will suffer a loss from which the spread captured provides no meaningful protection. Market makers use several techniques to manage adverse selection: (1) Wider spreads on options that are unusually active before news events. (2) Real-time monitoring for unusual volume or options activity relative to historical norms — a sudden spike in volume on a specific strike and expiration is a red flag. (3) Position limits per counterparty — if a single entity is consistently buying in a specific name, the market maker will reduce size or widen spreads. (4) Delta hedging immediately upon fill rather than batching hedges — this limits the adverse selection window. The fundamental tension in market making is between earning spread income from uninformed flow and avoiding being picked off by informed flow. The best market makers have superior models for distinguishing the two."
    }
  ]
};
