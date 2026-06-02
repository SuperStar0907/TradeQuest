LESSON_REGISTRY["options-terminology"] = {
  id: "options-terminology",
  title: "Options Terminology",
  track: "options",
  category: "options-basics",
  difficulty: "beginner",
  order: 2,
  estimatedMinutes: 12,
  xpReward: 70,
  prerequisites: ["what-are-options"],
  sections: [
    {
      type: "text",
      content: "<h3>The Language of Options Trading</h3><p>Before you can trade options effectively, you need to master the vocabulary. Options have their own specialized language, and understanding each term precisely is essential for reading options chains, following market commentary, and communicating with other traders. Every term in this lesson will come up repeatedly throughout your options education.</p><p>Think of this lesson as your options dictionary. Bookmark it and come back whenever you encounter a term you are not sure about. Let's start with the most fundamental concepts and build from there.</p>"
    },
    {
      type: "text",
      content: "<h3>Strike Price</h3><p>The <strong>strike price</strong> (also called the <em>exercise price</em>) is the price at which the option holder can buy (for calls) or sell (for puts) the underlying stock. When you look at an options chain, you will see a column of strike prices listed in $2.50 or $5 increments for most stocks, and $1 increments for highly liquid names like AAPL or SPY.</p><p>For example, if you own an AAPL $180 Call, your strike price is $180. This means you have the right to buy 100 shares of AAPL at $180 per share, regardless of where the stock is actually trading in the market. If AAPL is at $200, you can still buy at $180 through your option — that's what makes the option valuable.</p><p>Choosing the right strike price is one of the most important decisions in options trading. Lower strike calls cost more but have a higher probability of profit. Higher strike calls are cheaper but less likely to end up profitable. The strike you choose reflects your confidence in how far the stock will move.</p>"
    },
    {
      type: "text",
      content: "<h3>Premium</h3><p>The <strong>premium</strong> is the price you pay to buy an option, or the price you receive when you sell one. It is quoted on a per-share basis, but since each contract controls 100 shares, you multiply by 100 to get the actual dollar cost.</p><p>If an AAPL $180 Call is quoted at $5.25, the premium is $5.25 per share, and the total cost of one contract is $5.25 x 100 = <strong>$525</strong>. This premium is the maximum amount the buyer can lose, and it is the maximum amount the seller can gain.</p><p>The premium is determined by supply and demand in the options market, but it is influenced by several measurable factors: the stock's current price relative to the strike (intrinsic value), the time remaining until expiration, the stock's expected volatility, interest rates, and dividends. We'll break down the components of premium next.</p>"
    },
    {
      type: "text",
      content: "<h3>Expiration Date</h3><p>Every option has an <strong>expiration date</strong> — the last day the option can be exercised or traded. After this date, the option ceases to exist. Standard monthly options expire on the third Friday of each month. Weekly options (\"weeklies\") expire every Friday. Some popular stocks also offer Monday and Wednesday expirations.</p><p>The time remaining until expiration is critical because it directly affects the option's value. More time means more opportunity for the stock to move in your favor, so longer-dated options cost more than shorter-dated ones with the same strike price. An AAPL $180 Call expiring in 90 days might cost $8.00, while the same strike expiring in 7 days might cost only $1.50.</p><p>Options that expire in less than 45 days experience <em>accelerating time decay</em> — they lose value faster and faster as expiration approaches. This is a critical concept we will explore in detail in the Greeks lessons.</p>"
    },
    {
      type: "text",
      content: "<h3>Intrinsic Value vs. Extrinsic Value</h3><p>An option's premium is made up of two components:</p><ul><li><strong>Intrinsic Value</strong> — the amount the option is \"in the money.\" For a call, intrinsic value = stock price minus strike price (if positive). For a put, intrinsic value = strike price minus stock price (if positive). Intrinsic value can never be negative; at worst it is zero.</li><li><strong>Extrinsic Value</strong> (also called <em>time value</em>) — the remaining premium above intrinsic value. This represents the market's assessment of the probability that the option will gain more intrinsic value before expiration. Extrinsic value is influenced by time remaining, implied volatility, and interest rates.</li></ul><p><strong>Example:</strong> AAPL is trading at $190. An AAPL $180 Call is priced at $13.50.</p><ul><li>Intrinsic Value = $190 - $180 = <strong>$10.00</strong></li><li>Extrinsic Value = $13.50 - $10.00 = <strong>$3.50</strong></li></ul><p>At expiration, all extrinsic value disappears. An option's value at expiration is purely its intrinsic value. This is why time works against option buyers — the extrinsic value they paid for erodes every day.</p>"
    },
    {
      type: "key-concept",
      title: "Intrinsic vs. Extrinsic Value",
      content: "Intrinsic value is real, tangible value — the profit you'd make if you exercised the option right now. Extrinsic value is speculative value — the market's estimate of how much more intrinsic value the option might gain. At expiration, extrinsic value is always zero. As a buyer, you are paying for both, but only intrinsic value survives to expiration. As a seller, extrinsic value decay is your friend."
    },
    {
      type: "text",
      content: "<h3>Moneyness: ITM, ATM, and OTM</h3><p>\"Moneyness\" describes the relationship between an option's strike price and the current stock price. There are three states:</p><ul><li><strong>In-the-Money (ITM)</strong> — the option has intrinsic value. For calls, the stock price is <em>above</em> the strike price. For puts, the stock price is <em>below</em> the strike price. Example: AAPL at $190 makes the $180 Call ITM by $10.</li><li><strong>At-the-Money (ATM)</strong> — the strike price is approximately equal to the current stock price. These options have the most extrinsic value and are the most actively traded. Example: AAPL at $180 makes the $180 Call ATM.</li><li><strong>Out-of-the-Money (OTM)</strong> — the option has no intrinsic value. For calls, the stock price is <em>below</em> the strike price. For puts, the stock price is <em>above</em> the strike price. Example: AAPL at $175 makes the $180 Call OTM. All of its premium is extrinsic value.</li></ul><p>Moneyness matters because it affects the option's price, its sensitivity to stock price changes (delta), and its probability of expiring with value. Deep ITM options behave almost like stock. Deep OTM options are cheap but rarely profitable.</p>"
    },
    {
      type: "comparison-table",
      headers: ["Term", "Call Option", "Put Option"],
      rows: [
        ["In-the-Money (ITM)", "Stock price > Strike price", "Stock price < Strike price"],
        ["At-the-Money (ATM)", "Stock price ≈ Strike price", "Stock price ≈ Strike price"],
        ["Out-of-the-Money (OTM)", "Stock price < Strike price", "Stock price > Strike price"],
        ["Intrinsic Value", "Max(Stock - Strike, 0)", "Max(Strike - Stock, 0)"],
        ["Extrinsic Value", "Premium - Intrinsic Value", "Premium - Intrinsic Value"],
        ["Delta Range", "+0.01 to +1.00", "-0.01 to -1.00"],
        ["Most Expensive", "Deep ITM (mostly intrinsic)", "Deep ITM (mostly intrinsic)"],
        ["Cheapest", "Deep OTM (all extrinsic)", "Deep OTM (all extrinsic)"]
      ]
    },
    {
      type: "text",
      content: "<h3>Open Interest and Volume</h3><p><strong>Volume</strong> is the number of contracts traded during the current trading session. High volume indicates active trading interest at that strike and expiration. <strong>Open interest</strong> is the total number of outstanding contracts that have not been closed or exercised. High open interest indicates a popular strike price with lots of existing positions.</p><p>Both metrics matter for <em>liquidity</em>. You want to trade options with high volume and open interest because:</p><ul><li>Tighter bid-ask spreads, reducing your trading costs</li><li>Easier to enter and exit positions at fair prices</li><li>More reliable pricing that reflects true market sentiment</li></ul><p>As a rule of thumb, look for options with at least 100 contracts of open interest and daily volume of 50 or more. On popular names like SPY, AAPL, and TSLA, you'll see open interest in the tens of thousands and volume in the thousands.</p>"
    },
    {
      type: "key-concept",
      title: "The Options Chain at a Glance",
      content: "An options chain displays all available strikes and expirations for a given stock. Calls are typically shown on the left and puts on the right, with strike prices in the middle column. Key data points include: last price (premium), bid/ask, volume, open interest, and implied volatility. Learning to read an options chain fluently is a foundational skill — practice by pulling up the chain for AAPL or SPY on your broker's platform and identifying ITM, ATM, and OTM options."
    }
  ]
};
