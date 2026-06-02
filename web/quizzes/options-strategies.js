QUIZ_REGISTRY["options-strategies"] = {
  name: "Options Strategies",
  icon: "♟️",
  questions: [
    {
      type: "multiple-choice",
      question: "What is a covered call strategy?",
      options: [
        "Buying a call option while shorting the stock",
        "Owning 100 shares and selling a call option against them",
        "Buying both a call and put at the same strike",
        "Selling a call option without owning any shares"
      ],
      correct: 1,
      explanation: "A covered call involves owning 100 shares of stock and selling a call option against that position. It generates income from the premium received but limits upside potential above the strike price. It is one of the most conservative options strategies."
    },
    {
      type: "true-false",
      question: "An iron condor profits when the stock stays within a defined range between expiration.",
      correct: true,
      explanation: "An iron condor combines a bull put spread and a bear call spread. Maximum profit occurs when the stock stays between the two short strikes at expiration, allowing all four options to expire worthless and the trader to keep the full premium received."
    },
    {
      type: "multiple-choice",
      question: "What is a bull call spread?",
      options: [
        "Buying a call and selling a call at a higher strike in the same expiration",
        "Buying two calls at different expirations",
        "Selling a put and buying a put at the same strike",
        "Buying a call and a put at the same strike"
      ],
      correct: 0,
      explanation: "A bull call spread (debit spread) involves buying a call at a lower strike and selling a call at a higher strike with the same expiration. The sold call reduces cost but caps profit. It profits when the stock rises, with both max gain and max loss being defined."
    },
    {
      type: "calculate",
      question: "You sell a covered call at a $55 strike for $2.00 premium. Your stock cost basis is $50. What is your maximum profit per share?",
      answer: 7,
      tolerance: 0,
      unit: "$",
      explanation: "Maximum profit = (Strike - Cost Basis) + Premium = ($55 - $50) + $2.00 = $7.00 per share. You gain $5 from stock appreciation up to the strike plus the $2 premium. Above $55, your shares get called away so you cannot profit further from the stock rising."
    },
    {
      type: "multiple-choice",
      question: "What is a straddle?",
      options: [
        "Buying a call and selling a put at the same strike",
        "Buying a call and a put at the same strike and expiration",
        "Selling two calls at different strikes",
        "Buying one call and two puts"
      ],
      correct: 1,
      explanation: "A long straddle involves buying both a call and a put at the same strike price and expiration. It profits from large price moves in either direction. The position loses money if the stock stays near the strike, because both options lose time value."
    },
    {
      type: "true-false",
      question: "A protective put strategy has unlimited upside potential.",
      correct: true,
      explanation: "A protective put combines a long stock position with a long put option. The put limits downside risk to the strike price minus the premium, while the stock retains unlimited upside potential. It functions like an insurance policy on your stock holdings."
    },
    {
      type: "multiple-choice",
      question: "What is the \"wheel\" strategy?",
      options: [
        "Continuously buying and selling the same stock",
        "Cycling between selling cash-secured puts and covered calls",
        "Rolling options from one expiration to the next indefinitely",
        "Trading options on four different stocks simultaneously"
      ],
      correct: 1,
      explanation: "The wheel strategy begins by selling cash-secured puts. If assigned, you then sell covered calls on the acquired shares. If called away, you restart by selling puts. It generates consistent income from premiums while building positions at desired prices."
    },
    {
      type: "calculate",
      question: "You buy a $50 call for $3 and sell a $55 call for $1. What is your max loss on this bull call spread?",
      answer: 2,
      tolerance: 0,
      unit: "$",
      explanation: "Max loss = Net debit paid = Premium paid - Premium received = $3.00 - $1.00 = $2.00 per share. This occurs if the stock closes at or below $50 at expiration, making both calls expire worthless. The defined risk is one of the key benefits of vertical spreads."
    },
    {
      type: "multiple-choice",
      question: "What outlook does a bear put spread express?",
      options: [
        "Bullish",
        "Neutral",
        "Moderately bearish",
        "Extremely bullish"
      ],
      correct: 2,
      explanation: "A bear put spread involves buying a put at a higher strike and selling a put at a lower strike. It profits when the stock declines moderately. The sold put reduces cost but caps the profit at the difference between the strikes minus the net debit paid."
    },
    {
      type: "true-false",
      question: "A long strangle is cheaper than a long straddle because both options are purchased out of the money.",
      correct: true,
      explanation: "A strangle buys an OTM call and an OTM put, making it cheaper than a straddle (which buys ATM options). However, the stock needs to make a larger move for the strangle to become profitable because both options start with no intrinsic value."
    },
    {
      type: "multiple-choice",
      question: "What is a calendar spread?",
      options: [
        "Buying and selling options at the same expiration but different strikes",
        "Buying a longer-dated option and selling a shorter-dated option at the same strike",
        "Trading options based on the economic calendar",
        "Buying options that expire on different days of the same week"
      ],
      correct: 1,
      explanation: "A calendar spread (time spread) involves selling a near-term option and buying a longer-term option at the same strike. It profits from the faster time decay of the near-term option and benefits from increases in implied volatility on the longer-dated leg."
    },
    {
      type: "calculate",
      question: "An iron condor receives a net credit of $1.50 with wing widths of $5 on each side. What is the maximum loss per share?",
      answer: 3.5,
      tolerance: 0.01,
      unit: "$",
      explanation: "Max loss = Wing width - Net credit = $5.00 - $1.50 = $3.50 per share. This occurs if the stock moves beyond either short strike by more than the wing width. The risk-reward on this trade is $3.50 risk for $1.50 potential gain."
    }
  ]
};
