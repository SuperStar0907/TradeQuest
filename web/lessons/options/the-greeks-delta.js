LESSON_REGISTRY["the-greeks-delta"] = {
  id: "the-greeks-delta",
  title: "The Greeks: Delta",
  track: "options",
  category: "options-greeks",
  difficulty: "intermediate",
  order: 4,
  estimatedMinutes: 15,
  xpReward: 90,
  prerequisites: ["buying-calls-puts"],
  sections: [
    {
      type: "text",
      content: "<h3>Introducing the Greeks</h3><p>The \"Greeks\" are a set of mathematical measurements that describe how an option's price changes in response to various factors. They are called Greeks because each is named after a Greek letter. Understanding the Greeks transforms you from a directional gambler into an informed trader who can quantify risk, manage positions, and predict how options will behave under different market conditions.</p><p>Delta is the first and most important Greek you need to learn. It is the foundation upon which the other Greeks build, and it is the metric that most directly affects your profit and loss on any options trade. Professional options traders think in terms of delta before anything else.</p>"
    },
    {
      type: "text",
      content: "<h3>What Delta Measures</h3><p><strong>Delta</strong> measures how much an option's price is expected to change for every <strong>$1 move</strong> in the underlying stock price. It is expressed as a number between -1.00 and +1.00.</p><p>For example, if an AAPL $180 Call has a delta of <strong>0.55</strong>, it means that for every $1 increase in AAPL's stock price, the call option's premium will increase by approximately $0.55. If AAPL goes from $180 to $181, the call's price might move from $5.00 to $5.55. Conversely, if AAPL drops $1, the call loses roughly $0.55 in value.</p><p>Since each contract controls 100 shares, a delta of 0.55 means a $1 stock move changes your position value by 0.55 x 100 = <strong>$55 per contract</strong>. If you own 3 contracts, a $1 move means a $165 change in your position.</p>"
    },
    {
      type: "text",
      content: "<h3>Delta Ranges for Calls and Puts</h3><p>Delta values follow predictable ranges based on the type of option:</p><ul><li><strong>Call options:</strong> Delta ranges from <strong>0 to +1.00</strong>. A deep in-the-money call has a delta approaching +1.00 (it moves almost dollar-for-dollar with the stock). A far out-of-the-money call has a delta near 0 (it barely moves when the stock moves). An at-the-money call has a delta of approximately <strong>+0.50</strong>.</li><li><strong>Put options:</strong> Delta ranges from <strong>0 to -1.00</strong>. The negative sign indicates that puts move inversely to the stock price. A deep ITM put has a delta near -1.00. A far OTM put has a delta near 0. An ATM put has a delta of approximately <strong>-0.50</strong>.</li></ul><p>Notice the symmetry: the absolute value of a call's delta plus the absolute value of the corresponding put's delta at the same strike roughly equals 1.00. An ATM call with delta +0.50 pairs with an ATM put with delta -0.50.</p>"
    },
    {
      type: "key-concept",
      title: "Delta as a Probability Proxy",
      content: "Delta can be roughly interpreted as the market's estimate of the probability that the option will expire in-the-money. An option with a delta of 0.70 has approximately a 70% chance of expiring ITM. An option with a delta of 0.20 has approximately a 20% chance. This isn't mathematically exact, but it's a useful mental model for quickly assessing the likelihood that your option will be profitable. ATM options with delta ~0.50 have roughly a coin-flip chance of expiring ITM."
    },
    {
      type: "text",
      content: "<h3>How Moneyness Affects Delta</h3><p>Delta changes as the stock price moves relative to the strike price. Understanding this relationship is critical for managing your positions:</p><ul><li><strong>Deep ITM options (delta 0.80 - 1.00):</strong> These behave almost like stock. A deep ITM call with delta 0.95 gains $0.95 for every $1 the stock rises. Traders use deep ITM options as stock substitutes because they cost less capital than buying shares outright. The trade-off is you still have an expiration date.</li><li><strong>ATM options (delta ~0.50):</strong> These are the most popular for directional trades. They offer a balance of cost and responsiveness. An ATM call with delta 0.50 gives you 50 cents of exposure per dollar of stock movement, at a fraction of the stock's cost.</li><li><strong>Deep OTM options (delta 0.01 - 0.20):</strong> These barely respond to stock price changes. A delta-0.05 call only gains $0.05 per $1 stock move. These are cheap lottery tickets — exciting when they hit, but they rarely do. Professional traders almost never buy deep OTM options as standalone trades.</li></ul><p>As expiration approaches, delta becomes more binary. ITM options move toward delta 1.00 (or -1.00 for puts), and OTM options move toward delta 0. This means that near expiration, small stock movements can cause dramatic delta swings for options near the strike price.</p>"
    },
    {
      type: "text",
      content: "<h3>Delta and Position Sizing</h3><p>Delta gives you a powerful way to think about the effective size of your position. Instead of thinking \"I own 5 call options,\" you can think in terms of <strong>delta-equivalent shares</strong>.</p><p><strong>Example:</strong> You own 5 contracts of an AAPL $180 Call with delta 0.55. Your position delta is 5 x 100 x 0.55 = <strong>275 delta</strong>. This means your position behaves roughly like owning 275 shares of AAPL. A $1 move in AAPL changes your P&L by approximately $275.</p><p>This \"delta-equivalent\" thinking is how professional traders manage risk. If you know you are comfortable with a $500 daily P&L swing, and AAPL typically moves $2-3 per day, you want your total delta exposure to be around 170-250 (because 250 delta x $2 = $500). This prevents you from taking on more risk than you intend.</p><p>You can also use delta to compare different option positions. Owning 10 contracts of a 0.30-delta call (300 total delta) gives you more directional exposure than 5 contracts of a 0.50-delta call (250 total delta), even though you might think 10 contracts sounds like \"more.\"</p>"
    },
    {
      type: "text",
      content: "<h3>Delta Changes Over Time</h3><p>Delta is not static — it changes as the stock price moves, as time passes, and as implied volatility shifts. The rate at which delta changes is measured by another Greek called <strong>gamma</strong>, which we will cover in the next lesson.</p><p>Key behaviors to understand now:</p><ul><li><strong>As expiration approaches,</strong> ATM option deltas become more sensitive. A $180 call with 30 days left might have delta 0.52. The same call with 2 days left might have delta 0.50 if the stock is at $180 — but if the stock moves to $181, delta might jump to 0.75. Near expiration, delta swings are dramatic for ATM options.</li><li><strong>As the stock moves,</strong> delta follows. If you buy a 0.50-delta call and the stock rallies $10, your delta might now be 0.75. Your option is now more sensitive to further stock moves. Conversely, if the stock drops $10, your delta might shrink to 0.25, reducing your exposure.</li><li><strong>Higher implied volatility</strong> compresses delta toward 0.50 for all strikes, because the market is pricing in a wider range of possible outcomes. Lower volatility pushes ITM deltas higher and OTM deltas lower.</li></ul>"
    },
    {
      type: "key-concept",
      title: "Practical Delta Rules of Thumb",
      content: "1) ATM options have delta ~0.50 for calls, ~-0.50 for puts. 2) Delta roughly equals the probability of expiring ITM. 3) Total position delta = contracts x 100 x delta per option. 4) To replicate owning 100 shares, buy 2 ATM calls (2 x 100 x 0.50 = 100 delta). 5) Delta is your most important risk metric — always know your total portfolio delta before the market opens."
    }
  ]
};
