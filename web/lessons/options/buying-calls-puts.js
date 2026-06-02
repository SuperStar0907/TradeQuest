LESSON_REGISTRY["buying-calls-puts"] = {
  id: "buying-calls-puts",
  title: "Buying Calls & Puts",
  track: "options",
  category: "options-basics",
  difficulty: "beginner",
  order: 3,
  estimatedMinutes: 15,
  xpReward: 80,
  prerequisites: ["options-terminology"],
  sections: [
    {
      type: "text",
      content: "<h3>Your First Directional Options Trades</h3><p>Now that you understand the terminology, it's time to learn how to actually use options to make directional bets on stocks. Buying a call or buying a put is the most straightforward options trade you can make, and it's where every options trader starts.</p><p>When you <strong>buy a call</strong>, you are betting that the stock will go <em>up</em>. When you <strong>buy a put</strong>, you are betting that the stock will go <em>down</em>. In both cases, your maximum risk is limited to the premium you paid — you can never lose more than your initial investment. This defined-risk characteristic is what makes long options attractive for beginners.</p><p>Let's walk through the mechanics of each trade in detail, including how to calculate breakeven points, maximum profit, and maximum loss.</p>"
    },
    {
      type: "text",
      content: "<h3>Long Call: Mechanics and Payoff</h3><p>A <strong>long call</strong> is a bullish position. You buy a call option when you believe the underlying stock will rise above the strike price before expiration. Here's a step-by-step example:</p><p><strong>Setup:</strong> AAPL is trading at $180. You buy the AAPL $180 Call expiring in 45 days for a premium of $5.00. Your total cost is $5.00 x 100 = <strong>$500</strong>.</p><p><strong>Breakeven at expiration:</strong> Strike Price + Premium Paid = $180 + $5 = <strong>$185</strong>. The stock must rise to at least $185 for you to break even at expiration.</p><p><strong>Maximum profit:</strong> Theoretically <strong>unlimited</strong>. As the stock rises above $185, every $1 increase adds $100 to your profit ($1 x 100 shares). If AAPL goes to $200, your profit is ($200 - $185) x 100 = $1,500. If it goes to $220, your profit is $3,500.</p><p><strong>Maximum loss:</strong> Limited to the <strong>$500 premium</strong> paid. If AAPL stays at or below $180 at expiration, the call expires worthless and you lose the entire $500. Importantly, you cannot lose more than $500 no matter how far the stock drops.</p>"
    },
    {
      type: "key-concept",
      title: "Long Call Breakeven Formula",
      content: "Breakeven = Strike Price + Premium Paid. For a $180 call purchased at $5.00, breakeven is $185. Below this price at expiration, you lose money. Above it, you profit dollar-for-dollar (times 100 shares). The further above breakeven the stock goes, the more you make — with no upper limit."
    },
    {
      type: "payoff-diagram",
      config: {
        title: "Long Call Payoff Diagram",
        description: "This diagram shows profit and loss at expiration for a long call. The breakeven point is where the line crosses zero. Below the strike, the loss is flat at the premium paid. Above breakeven, profits increase linearly with no cap.",
        strategies: [
          {
            type: "long-call",
            strike: 180,
            premium: 5
          }
        ],
        stockPrice: 180,
        controls: [
          {
            type: "range",
            id: "strikePrice",
            label: "Strike Price",
            min: 150,
            max: 210,
            default: 180,
            step: 5
          },
          {
            type: "range",
            id: "premium",
            label: "Premium Paid",
            min: 1,
            max: 15,
            default: 5,
            step: 0.5
          }
        ]
      }
    },
    {
      type: "text",
      content: "<h3>Long Put: Mechanics and Payoff</h3><p>A <strong>long put</strong> is a bearish position. You buy a put option when you believe the underlying stock will fall below the strike price before expiration. Puts are also commonly used as <em>insurance</em> to protect existing stock positions from downside risk.</p><p><strong>Setup:</strong> AAPL is trading at $180. You buy the AAPL $180 Put expiring in 45 days for a premium of $4.50. Your total cost is $4.50 x 100 = <strong>$450</strong>.</p><p><strong>Breakeven at expiration:</strong> Strike Price - Premium Paid = $180 - $4.50 = <strong>$175.50</strong>. The stock must drop below $175.50 for you to profit at expiration.</p><p><strong>Maximum profit:</strong> The stock can theoretically fall to $0, so maximum profit = (Strike - Premium) x 100 = ($180 - $4.50) x 100 = <strong>$17,550</strong>. In practice, stocks rarely go to zero, but large drops of 20-40% do happen during earnings misses, scandals, or market crashes, and puts can return 500-1000% in those scenarios.</p><p><strong>Maximum loss:</strong> Limited to the <strong>$450 premium</strong> paid. If AAPL stays at or above $180 at expiration, the put expires worthless. Your risk is defined from the start, just like with calls.</p>"
    },
    {
      type: "key-concept",
      title: "Long Put Breakeven Formula",
      content: "Breakeven = Strike Price - Premium Paid. For a $180 put purchased at $4.50, breakeven is $175.50. Above this price at expiration, you lose money. Below it, you profit dollar-for-dollar (times 100 shares) as the stock falls. Maximum profit occurs if the stock goes to $0."
    },
    {
      type: "payoff-diagram",
      config: {
        title: "Long Put Payoff Diagram",
        description: "This diagram shows profit and loss at expiration for a long put. The breakeven point is where the line crosses zero. Above the strike, the loss is flat at the premium paid. Below breakeven, profits increase as the stock falls.",
        strategies: [
          {
            type: "long-put",
            strike: 180,
            premium: 4.5
          }
        ],
        stockPrice: 180,
        controls: [
          {
            type: "range",
            id: "strikePrice",
            label: "Strike Price",
            min: 150,
            max: 210,
            default: 180,
            step: 5
          },
          {
            type: "range",
            id: "premium",
            label: "Premium Paid",
            min: 1,
            max: 15,
            default: 4.5,
            step: 0.5
          }
        ]
      }
    },
    {
      type: "text",
      content: "<h3>Choosing Between Calls and Puts</h3><p>The decision to buy a call or a put comes down to your <strong>directional outlook</strong> on the stock:</p><ul><li><strong>Buy a call</strong> when you expect the stock to rise meaningfully before expiration. Good catalysts include upcoming earnings you're bullish on, positive sector trends, technical breakouts, or favorable macro conditions.</li><li><strong>Buy a put</strong> when you expect the stock to decline. Common reasons include bearish earnings expectations, deteriorating fundamentals, broken technical support levels, or as a hedge to protect profits on shares you own.</li></ul><p>In both cases, consider <strong>how far</strong> and <strong>how fast</strong> you expect the stock to move. Options are a wasting asset — time works against you. If you think AAPL will rise $20 but it might take six months, you need a longer-dated option. If you expect a move within two weeks (like an earnings reaction), a shorter-dated option makes sense because it costs less.</p><p>A common beginner approach is to buy ATM or slightly OTM options with 30-60 days to expiration. This balances cost (OTM is cheaper), probability of profit (ATM has roughly 50% chance), and time for your thesis to play out.</p>"
    },
    {
      type: "comparison-table",
      headers: ["", "Long Call", "Long Put"],
      rows: [
        ["Market Outlook", "Bullish (expect stock to rise)", "Bearish (expect stock to fall)"],
        ["Breakeven", "Strike + Premium", "Strike - Premium"],
        ["Maximum Profit", "Unlimited", "Strike - Premium (stock to $0)"],
        ["Maximum Loss", "Premium paid", "Premium paid"],
        ["Best Case Scenario", "Stock surges well above strike", "Stock crashes well below strike"],
        ["Worst Case Scenario", "Stock stays flat or drops", "Stock stays flat or rises"],
        ["Time Decay Effect", "Works against you", "Works against you"],
        ["Typical Delta", "+0.30 to +0.70 (ATM ~0.50)", "-0.30 to -0.70 (ATM ~-0.50)"]
      ]
    },
    {
      type: "text",
      content: "<h3>Practical Tips for Buying Options</h3><ul><li><strong>Position sizing:</strong> Never risk more than 2-5% of your account on a single options trade. If your account is $10,000, limit each trade to $200-$500 in premium.</li><li><strong>Expiration selection:</strong> Give yourself time. Buy at least 30-45 DTE (days to expiration) for swing trades. Buying weeklies is tempting because they are cheap, but time decay is brutal in the final week.</li><li><strong>Strike selection:</strong> ATM options offer the best balance of cost and probability. Deep OTM options are cheap but rarely pay off. Slightly ITM options cost more but have a higher probability of profit.</li><li><strong>Exit strategy:</strong> Set a profit target of 50-100% and a stop-loss at 40-50% of the premium. If you paid $5.00 for an option, consider selling at $7.50-$10.00 (profit) or $2.50-$3.00 (loss). Don't hold to expiration hoping for a miracle.</li><li><strong>Avoid earnings if you're new:</strong> Options premiums inflate before earnings due to high implied volatility, and they often collapse after the announcement (IV crush) regardless of the stock's direction. This is a trap for beginners.</li></ul>"
    }
  ]
};
