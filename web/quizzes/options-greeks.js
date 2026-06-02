QUIZ_REGISTRY["options-greeks"] = {
  name: "The Greeks",
  icon: "🏛️",
  questions: [
    {
      type: "multiple-choice",
      question: "What does Delta measure in options?",
      options: [
        "The rate of time decay",
        "The sensitivity of the option's price to a $1 change in the underlying",
        "The impact of volatility changes",
        "The curvature of the option's price curve"
      ],
      correct: 1,
      explanation: "Delta measures how much an option's price is expected to change for a $1 move in the underlying stock. A call with a delta of 0.60 would gain approximately $0.60 for every $1 the stock rises. Delta also approximates the probability of the option expiring in the money."
    },
    {
      type: "true-false",
      question: "Theta is always negative for option buyers because time decay erodes the value of their position.",
      correct: true,
      explanation: "Theta represents the rate at which an option loses value as time passes, all else being equal. For option buyers, theta works against them as each day that passes reduces the time value of their option. For option sellers, theta works in their favor."
    },
    {
      type: "multiple-choice",
      question: "What does Gamma measure?",
      options: [
        "The sensitivity of delta to changes in the stock price",
        "The sensitivity of the option to interest rate changes",
        "The sensitivity of the option to dividend payments",
        "The total premium of the option"
      ],
      correct: 0,
      explanation: "Gamma measures the rate of change of delta for a $1 move in the underlying. High gamma means delta will change rapidly, making the position more unpredictable. Gamma is highest for at-the-money options near expiration and is important for managing directional risk."
    },
    {
      type: "calculate",
      question: "A call option has a delta of 0.55. If the stock price increases by $2, approximately how much will the option price increase?",
      answer: 1.1,
      tolerance: 0.01,
      unit: "$",
      explanation: "Option price change = Delta x Stock price change = 0.55 x $2.00 = $1.10. Note that this is an approximation because delta itself changes as the stock moves (which is what gamma measures). For larger moves, gamma makes the actual change differ from this estimate."
    },
    {
      type: "multiple-choice",
      question: "What does Vega measure?",
      options: [
        "The speed of the stock's price movement",
        "The sensitivity of the option's price to changes in implied volatility",
        "The volume of options traded",
        "The direction of the next price move"
      ],
      correct: 1,
      explanation: "Vega measures how much an option's price changes for a 1% change in implied volatility. Options with more time until expiration have higher vega. When implied volatility rises, both calls and puts become more expensive, which benefits option buyers."
    },
    {
      type: "true-false",
      question: "An at-the-money option has a delta of approximately 0.50 for calls.",
      correct: true,
      explanation: "ATM call options have a delta near 0.50, meaning there is roughly a 50% chance the option will expire in the money. As a call moves deeper ITM, delta approaches 1.0; as it moves further OTM, delta approaches 0. ATM puts have a delta near -0.50."
    },
    {
      type: "calculate",
      question: "An option has a theta of -0.05. How much value will it lose over 5 days due to time decay alone?",
      answer: 0.25,
      tolerance: 0.01,
      unit: "$",
      explanation: "Value lost = |Theta| x Days = 0.05 x 5 = $0.25 per share. Theta accelerates as expiration approaches, so this linear estimate becomes less accurate closer to expiry. For one contract (100 shares), the total time decay would be $25."
    },
    {
      type: "multiple-choice",
      question: "Which Greek is most important for option sellers who want to profit from time decay?",
      options: [
        "Delta",
        "Gamma",
        "Theta",
        "Vega"
      ],
      correct: 2,
      explanation: "Theta is the most important Greek for option sellers because it quantifies how much premium they collect each day as the option loses time value. Option sellers have positive theta (they benefit from time passing) and prefer to sell options with high theta relative to the premium."
    },
    {
      type: "true-false",
      question: "Deep in-the-money call options have a delta close to 1.0.",
      correct: true,
      explanation: "As a call option moves deeper in the money, its delta approaches 1.0, meaning it moves nearly dollar-for-dollar with the stock. A deep ITM call behaves almost like owning the stock itself, with very little time value remaining in the premium."
    },
    {
      type: "multiple-choice",
      question: "What happens to gamma as an option approaches expiration?",
      options: [
        "Gamma decreases for all options",
        "Gamma increases dramatically for at-the-money options",
        "Gamma remains constant",
        "Gamma only affects put options near expiration"
      ],
      correct: 1,
      explanation: "Gamma spikes for ATM options near expiration because small stock price changes cause large shifts in delta (and the probability of finishing ITM or OTM). This \"gamma risk\" is why market makers and short-option traders closely monitor positions as expiration approaches."
    },
    {
      type: "calculate",
      question: "An option has a vega of 0.12 and implied volatility increases from 25% to 28%. How much does the option price increase?",
      answer: 0.36,
      tolerance: 0.01,
      unit: "$",
      explanation: "Option price change = Vega x IV change = 0.12 x (28 - 25) = 0.12 x 3 = $0.36 per share. Vega is expressed as the dollar change for a 1-percentage-point change in implied volatility. Rising IV benefits option buyers and hurts option sellers."
    },
    {
      type: "multiple-choice",
      question: "Why is gamma risk particularly dangerous for short option positions?",
      options: [
        "Because gamma causes time decay to accelerate",
        "Because high gamma means delta changes rapidly, making hedging difficult and costly",
        "Because gamma increases the bid-ask spread",
        "Because gamma causes implied volatility to spike"
      ],
      correct: 1,
      explanation: "High gamma means delta is changing rapidly, so a short option position can quickly shift from a manageable risk to a large directional exposure. Hedging a high-gamma position requires frequent adjustments, and each adjustment incurs transaction costs and potential slippage."
    }
  ]
};
