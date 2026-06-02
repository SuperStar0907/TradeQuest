LESSON_REGISTRY["what-are-options"] = {
  id: "what-are-options",
  title: "What Are Options?",
  track: "options",
  category: "options-basics",
  difficulty: "beginner",
  order: 1,
  estimatedMinutes: 12,
  xpReward: 70,
  prerequisites: [],
  sections: [
    {
      type: "text",
      content: "<h3>Introduction to Options Contracts</h3><p>An <strong>option</strong> is a financial contract that gives the buyer the <strong>right, but not the obligation</strong>, to buy or sell an underlying asset at a predetermined price within a specified time period. Options are one of the most versatile instruments in all of finance, used by everyone from conservative retirees generating income to aggressive speculators making directional bets.</p><p>Unlike buying stock, where you simply own a piece of a company, options add two critical dimensions to your trading: <em>time</em> and <em>directionality with leverage</em>. Every options contract has an expiration date, and every contract controls <strong>100 shares</strong> of the underlying stock. When you see an option quoted at $3.00, the actual cost of one contract is $3.00 x 100 = <strong>$300</strong>.</p><p>Options trade on regulated exchanges like the Chicago Board Options Exchange (CBOE) and are standardized contracts, meaning the terms are set by the exchange rather than negotiated between buyer and seller. This standardization creates liquidity and transparency that makes options accessible to retail traders.</p>"
    },
    {
      type: "text",
      content: "<h3>Calls vs. Puts: The Two Building Blocks</h3><p>There are only two types of options, and every strategy in existence is built from combinations of these two building blocks:</p><ul><li><strong>Call Option</strong> &mdash; gives the buyer the right to <em>buy</em> 100 shares of the underlying stock at the strike price before expiration. You buy calls when you believe the stock price will go <em>up</em>.</li><li><strong>Put Option</strong> &mdash; gives the buyer the right to <em>sell</em> 100 shares of the underlying stock at the strike price before expiration. You buy puts when you believe the stock price will go <em>down</em>.</li></ul><p>Think of a call option like a reservation to buy a house at today's price. If the housing market rises over the next six months, your reservation becomes very valuable because you locked in a lower price. If the market drops, you simply let the reservation expire and lose only the small deposit you paid.</p><p>A put option is like an insurance policy on a stock you own. If the stock crashes, your put lets you sell at the higher strike price, limiting your loss. If the stock goes up, you let the insurance expire and lose only the premium.</p>"
    },
    {
      type: "key-concept",
      title: "Right vs. Obligation",
      content: "Option buyers pay a premium and receive the RIGHT to act. Option sellers (writers) collect a premium and take on the OBLIGATION to fulfill the contract if the buyer exercises. This asymmetry is the foundation of all options trading. Buyers have limited risk (the premium paid) and theoretically unlimited profit potential. Sellers have limited profit potential (the premium collected) but can face substantial or even unlimited losses."
    },
    {
      type: "text",
      content: "<h3>Why Trade Options?</h3><p>Options offer several advantages that stocks alone cannot provide:</p><ul><li><strong>Leverage</strong> &mdash; Control 100 shares of a $180 stock ($18,000 worth) for a fraction of the cost. A $5.00 call option costs only $500, giving you exposure to the same 100 shares. If the stock rises $10, your call might gain $700-800, a return of 140-160% on your $500 investment, compared to a 5.6% return on the $18,000 stock position.</li><li><strong>Defined Risk</strong> &mdash; When buying options, your maximum loss is always the premium you paid. You will never receive a margin call, and you can never lose more than your initial investment. This makes position sizing straightforward and eliminates the risk of catastrophic losses that can occur with leveraged stock positions.</li><li><strong>Flexibility</strong> &mdash; Options let you profit in any market direction. Bullish? Buy calls. Bearish? Buy puts. Think the stock will stay flat? Sell options and collect premium. Expect a big move but unsure of direction? Buy both a call and a put. No other instrument offers this range of strategies.</li><li><strong>Income Generation</strong> &mdash; Sell covered calls on stocks you own to collect premium and generate weekly or monthly income. Many retirees and conservative investors use this approach to boost their portfolio returns by 8-15% annually.</li><li><strong>Hedging</strong> &mdash; Protect your stock portfolio from downside risk by buying put options. Institutional investors routinely use puts as portfolio insurance, and you can do the same for a fraction of the cost of selling your positions.</li></ul>"
    },
    {
      type: "comparison-table",
      headers: ["", "Buying 100 Shares of AAPL at $180", "Buying 1 AAPL $180 Call at $5"],
      rows: [
        ["Capital Required", "$18,000", "$500"],
        ["Max Loss", "$18,000 (stock goes to $0)", "$500 (premium paid)"],
        ["If AAPL rises to $200", "Profit: $2,000 (11.1% return)", "Profit: $1,500 (300% return)"],
        ["If AAPL drops to $160", "Loss: -$2,000 (-11.1%)", "Loss: -$500 (-100%)"],
        ["If AAPL stays at $180", "No gain or loss", "Loss: -$500 (option expires worthless)"],
        ["Time Limit", "None — hold indefinitely", "Expires on expiration date"],
        ["Dividends", "Yes — receive dividends", "No — options don't pay dividends"],
        ["Voting Rights", "Yes — you own shares", "No — options are contracts, not ownership"]
      ]
    },
    {
      type: "text",
      content: "<h3>How Options Differ from Stocks</h3><p>The comparison table above reveals the core trade-off: options give you amplified returns on a smaller capital base, but they come with a time limit. A stock position can sit in your portfolio for years, recovering from drawdowns. An option has a fixed expiration date, and if the stock hasn't moved in your favor by then, the option can expire completely worthless.</p><p>This introduces a concept unique to options: <strong>time decay</strong>. Every day that passes, your option loses a small amount of value even if the stock price doesn't change. This is because there is less time remaining for the stock to move favorably. Time decay accelerates as expiration approaches, which is why experienced traders typically buy options with at least 30-45 days until expiration.</p><p>Another key difference is that options have a <strong>bid-ask spread</strong> that tends to be wider than stocks. When you buy an option, you pay the ask price, and when you sell, you receive the bid price. The difference between these two prices is a cost of trading. Highly liquid options on stocks like AAPL, SPY, and TSLA have tight spreads (a few cents), while options on less popular stocks can have spreads of $0.50 or more.</p>"
    },
    {
      type: "text",
      content: "<h3>Real-World Example: Your First Options Trade</h3><p>Let's walk through a concrete example. It's January, and you believe Apple (AAPL) will report strong earnings in late January and rise from its current price of $180 to above $190. Here's how you might approach this with options:</p><p><strong>Step 1:</strong> You buy 1 AAPL February 21 $185 Call for $3.50 per share. Your total cost is $3.50 x 100 = <strong>$350</strong>.</p><p><strong>Step 2:</strong> Apple reports blowout earnings and the stock jumps to $195. Your $185 call now has an <em>intrinsic value</em> of $195 - $185 = $10.00. The call might actually trade at $10.50, because there's still some time value remaining until the February expiration.</p><p><strong>Step 3:</strong> You sell the call for $10.50. Your profit is ($10.50 - $3.50) x 100 = <strong>$700</strong>. That's a <strong>200% return</strong> on your $350 investment. If you had bought 100 shares instead, your profit would have been $1,500, but you would have needed $18,000 in capital — a return of only 8.3%.</p><p><strong>The downside scenario:</strong> If Apple disappoints and the stock drops to $175, your $185 call becomes worthless at expiration. You lose the entire $350 premium. But notice: you lost $350, not $500 (the loss on 100 shares at $180 dropping to $175). Your risk was <em>defined</em> from the start.</p>"
    },
    {
      type: "key-concept",
      title: "The Options Buyer's Edge",
      content: "When buying options, you always know your worst-case scenario before entering the trade. Your maximum loss is the premium paid, period. This defined risk is what makes options attractive for newer traders — you can take a directional view on a stock with a fraction of the capital, and your downside is capped at exactly the amount you invested. However, remember that the probability of a long option expiring profitable is typically less than 50%, which is why risk management and position sizing remain critical."
    },
    {
      type: "text",
      content: "<h3>Common Mistakes Beginners Make</h3><ul><li><strong>Buying cheap, far out-of-the-money options</strong> &mdash; A $0.10 call on a $180 stock with a $220 strike seems like a bargain, but the stock would need to rally over 22% before expiration for the option to have any value. The probability of profit might be 2-3%. Buying these is essentially buying lottery tickets.</li><li><strong>Ignoring time decay</strong> &mdash; Options are wasting assets. Every day that passes costs you money, even if the stock doesn't move. Beginners often buy options with only a week to expiration because they're cheap, then watch the premium evaporate as expiration arrives.</li><li><strong>Oversizing positions</strong> &mdash; Because options are cheap compared to stock, beginners often buy too many contracts. Ten contracts of a $3 option is $3,000 at risk. If the trade goes against you, losing $3,000 in a week can be psychologically devastating. Start with 1-2 contracts until you understand how options behave.</li><li><strong>Not having an exit plan</strong> &mdash; Before entering any options trade, know your profit target and your stop-loss level. Many traders set a rule: sell at 50-100% profit, or cut losses at 50% of the premium paid. Without rules, emotions will drive your decisions.</li></ul>"
    },
    {
      type: "key-concept",
      title: "Getting Started Safely",
      content: "Start by paper trading options for at least 2-4 weeks before using real money. Focus on liquid, well-known stocks like AAPL, MSFT, or SPY where bid-ask spreads are tight. Buy options with at least 30-45 days to expiration to give your thesis time to play out. Always know your maximum loss before entering a trade. And never risk more than 2-5% of your trading account on any single options trade."
    }
  ]
};
