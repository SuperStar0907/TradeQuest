QUIZ_REGISTRY["options-basics"] = {
  name: "Options Fundamentals",
  icon: "🎯",
  questions: [
    {
      type: "multiple-choice",
      question: "What does a call option give the buyer the right to do?",
      options: [
        "Sell shares at the strike price",
        "Buy shares at the strike price",
        "Borrow shares from the broker",
        "Receive dividends from the underlying stock"
      ],
      correct: 1,
      explanation: "A call option gives the buyer the right, but not the obligation, to purchase shares of the underlying stock at the strike price before expiration. The buyer pays a premium for this right and profits when the stock price exceeds the strike price plus the premium paid."
    },
    {
      type: "true-false",
      question: "A put option increases in value when the underlying stock price decreases.",
      correct: true,
      explanation: "A put option gives the holder the right to sell at the strike price. As the stock falls below the strike, the put becomes more valuable because the holder can sell shares above market price. The intrinsic value of a put equals the strike price minus the stock price when ITM."
    },
    {
      type: "multiple-choice",
      question: "What does \"in the money\" (ITM) mean for a call option?",
      options: [
        "The stock price is below the strike price",
        "The stock price is above the strike price",
        "The option has more than 30 days until expiration",
        "The option has been exercised"
      ],
      correct: 1,
      explanation: "A call option is in the money when the current stock price is above the strike price, meaning it has intrinsic value. For puts, it is the opposite: the put is ITM when the stock price is below the strike. ITM options are more expensive because they carry intrinsic value."
    },
    {
      type: "calculate",
      question: "A call option has a strike price of $50 and the stock is trading at $57. What is the intrinsic value per share?",
      answer: 7,
      tolerance: 0,
      unit: "$",
      explanation: "Intrinsic value of a call = Stock Price - Strike Price = $57 - $50 = $7. Intrinsic value represents the immediate profit from exercising the option. Any premium above this amount is extrinsic (time) value."
    },
    {
      type: "multiple-choice",
      question: "One standard equity options contract represents how many shares?",
      options: [
        "10 shares",
        "50 shares",
        "100 shares",
        "1,000 shares"
      ],
      correct: 2,
      explanation: "One standard equity options contract represents 100 shares of the underlying stock. So if an option is priced at $2.00 per share, the total cost of one contract is $200 (100 shares x $2.00). This standardization simplifies trading and pricing."
    },
    {
      type: "true-false",
      question: "The seller (writer) of an option has the obligation to fulfill the contract if the buyer exercises.",
      correct: true,
      explanation: "The option seller receives the premium in exchange for taking on the obligation to buy (put seller) or sell (call seller) shares at the strike price if the buyer exercises. This is why selling options carries more risk than buying them in many scenarios."
    },
    {
      type: "multiple-choice",
      question: "What is the maximum loss for a buyer of a call option?",
      options: [
        "Unlimited",
        "The strike price minus the stock price",
        "The premium paid",
        "The value of 100 shares"
      ],
      correct: 2,
      explanation: "The maximum loss for an option buyer is always limited to the premium paid. If the option expires worthless (out of the money), the buyer loses only the premium. This defined risk is one of the key advantages of buying options versus trading the underlying stock."
    },
    {
      type: "calculate",
      question: "You buy a call option for $3.00 per share with a strike of $45. The stock rises to $52 at expiration. What is your profit per share?",
      answer: 4,
      tolerance: 0,
      unit: "$",
      explanation: "Profit = (Stock Price - Strike Price) - Premium = ($52 - $45) - $3.00 = $7.00 - $3.00 = $4.00 per share. The intrinsic value at expiration was $7, but you paid $3 for the option, so your net profit is $4 per share, or $400 per contract."
    },
    {
      type: "multiple-choice",
      question: "What is the options chain?",
      options: [
        "A blockchain ledger tracking options trades",
        "A display of all available strike prices and expirations for a stock's options",
        "A series of linked options trades",
        "A risk management algorithm"
      ],
      correct: 1,
      explanation: "An options chain is a listing of all available options contracts for a given security, organized by expiration date and strike price. It shows puts and calls side by side, along with key data like bid/ask prices, volume, open interest, and implied volatility."
    },
    {
      type: "true-false",
      question: "American-style options can only be exercised at expiration, unlike European-style options.",
      correct: false,
      explanation: "It is the opposite. American-style options can be exercised at any time before or on the expiration date, while European-style options can only be exercised at expiration. Most equity options in the U.S. are American-style, while index options are often European-style."
    },
    {
      type: "multiple-choice",
      question: "What is \"open interest\" in options?",
      options: [
        "The number of options traded today",
        "The total number of outstanding contracts that have not been closed or exercised",
        "The interest rate used to price options",
        "The number of new positions opened today"
      ],
      correct: 1,
      explanation: "Open interest is the total number of active options contracts for a particular strike and expiration that have not been closed, exercised, or assigned. High open interest indicates liquidity and makes it easier to enter and exit positions at fair prices."
    },
    {
      type: "calculate",
      question: "A put option has a strike price of $60 and the stock trades at $54. What is the intrinsic value?",
      answer: 6,
      tolerance: 0,
      unit: "$",
      explanation: "Intrinsic value of a put = Strike Price - Stock Price = $60 - $54 = $6. The put is in the money by $6 because the holder can sell shares at $60 when they are only worth $54 in the market."
    },
    {
      type: "multiple-choice",
      question: "What does \"at the money\" (ATM) mean?",
      options: [
        "The option is about to expire",
        "The stock price is approximately equal to the strike price",
        "The option has been exercised profitably",
        "The option has the highest open interest"
      ],
      correct: 1,
      explanation: "An option is at the money when the underlying stock price is equal or very close to the strike price. ATM options have the highest time value and are most sensitive to changes in implied volatility. They have a delta of approximately 0.50 for calls and -0.50 for puts."
    },
    {
      type: "true-false",
      question: "Buying a put option is one way to hedge a long stock position against downside risk.",
      correct: true,
      explanation: "Buying a put option on a stock you own (a protective put) acts like insurance. If the stock falls, the put gains value, offsetting your stock losses. Your maximum loss is limited to the difference between the stock price and the strike, plus the premium paid."
    },
    {
      type: "multiple-choice",
      question: "What is the premium of an option?",
      options: [
        "The commission charged by the broker",
        "The price paid by the buyer to the seller for the options contract",
        "The difference between the bid and ask price",
        "The margin required to hold the position"
      ],
      correct: 1,
      explanation: "The premium is the price paid by the option buyer to the option seller for the rights conveyed by the contract. It is determined by factors including intrinsic value, time until expiration, implied volatility, and interest rates."
    }
  ]
};
