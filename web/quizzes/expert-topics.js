QUIZ_REGISTRY["expert-topics"] = {
  name: "Expert Topics",
  icon: "🧬",
  questions: [
    {
      type: "multiple-choice",
      question: "When engineering features for a machine learning trading model, what is 'lookahead bias' and why is it dangerous?",
      options: [
        "Using too many features in the model, causing overfitting",
        "Accidentally incorporating future information into training features, creating unrealistically high backtest performance that fails live",
        "Training on too little historical data",
        "Using the same features across different asset classes"
      ],
      correct: 1,
      explanation: "Lookahead bias occurs when training data includes information that would not have been available at prediction time — for example, using a full-day VWAP as a feature for a morning signal. This inflates backtest accuracy dramatically because the model effectively 'cheats' by seeing the future. Point-in-time feature construction with strict temporal cutoffs is essential."
    },
    {
      type: "multiple-choice",
      question: "In reinforcement learning for trading, what does 'reward shaping' address?",
      options: [
        "The tendency of neural networks to overfit on small datasets",
        "The problem of sparse terminal rewards (only P&L at episode end) making it difficult for the agent to learn intermediate good behaviors",
        "The need to normalize input features",
        "The challenge of training across multiple asset classes simultaneously"
      ],
      correct: 1,
      explanation: "In a naive RL setup, the agent only receives a reward signal when a trade is closed, creating a sparse reward problem. Reward shaping provides intermediate signals (e.g., unrealized P&L changes, risk-adjusted returns per step) to guide learning. However, poorly designed shaping can introduce bias and cause the agent to optimize for the shaped reward rather than the true objective."
    },
    {
      type: "multiple-choice",
      question: "Why do HFT firms invest millions in colocation — placing servers physically next to exchange matching engines?",
      options: [
        "To reduce internet bandwidth costs",
        "To gain microsecond latency advantages that enable profitable strategies like latency arbitrage and queue priority",
        "To comply with regulatory requirements for trade logging",
        "To reduce the risk of power outages"
      ],
      correct: 1,
      explanation: "At HFT timescales, every microsecond matters. Colocation reduces the round-trip time between the firm's servers and the exchange's matching engine to single-digit microseconds. This enables latency arbitrage (acting on information before slower participants), better queue positioning for passive orders, and faster cancellation of stale quotes. The speed advantage translates directly into P&L."
    },
    {
      type: "multiple-choice",
      question: "What is 'alpha decay' in quantitative trading?",
      options: [
        "The radioactive decay of physical trading hardware",
        "The gradual erosion of a strategy's excess returns as more participants discover and exploit the same signal",
        "The decrease in a stock's price after an earnings announcement",
        "The reduction in portfolio volatility from diversification"
      ],
      correct: 1,
      explanation: "Alpha decay occurs as a profitable signal becomes crowded — more capital chasing the same edge compresses returns and increases execution costs. Signals that were profitable five years ago may be arbitraged away today. This is why quant firms continuously research new signals and why execution speed, transaction cost modeling, and capacity estimation are critical to a strategy's lifecycle."
    },
    {
      type: "multiple-choice",
      question: "In variance swaps, what does the buyer receive at expiration?",
      options: [
        "The difference between implied volatility and a fixed strike",
        "The difference between realized variance of the underlying and the pre-agreed variance strike, multiplied by the notional",
        "A fixed coupon payment regardless of market moves",
        "The change in the VIX index over the swap period"
      ],
      correct: 1,
      explanation: "A variance swap pays (realized variance - variance strike) * variance notional at expiration. The buyer profits when the underlying is more volatile than the strike implies. Unlike options, variance swaps provide pure exposure to realized volatility without delta or gamma management. They are commonly used for hedging tail risk and expressing vol views."
    },
    {
      type: "calculate",
      question: "An AMM liquidity provider deposits equal values of ETH ($2,000) and USDC ($2,000) into a constant-product pool. ETH price doubles from $2,000 to $4,000. What is the approximate impermanent loss percentage?",
      options: ["0%", "2.9%", "5.7%", "20%"],
      correct: 2,
      explanation: "For a constant-product AMM (x*y=k), impermanent loss = 2*sqrt(r)/(1+r) - 1, where r is the price ratio. With r = 4000/2000 = 2: IL = 2*sqrt(2)/(1+2) - 1 = 2*1.4142/3 - 1 = 2.8284/3 - 1 = 0.9428 - 1 = -0.0572 or about -5.7%. This means holding in the pool returned 5.7% less than simply holding the assets. Trading fees may or may not offset this loss."
    },
    {
      type: "calculate",
      question: "A leveraged position uses 5x margin. If the underlying drops 15%, what is the percentage loss on equity (ignoring funding costs)?",
      options: ["15%", "25%", "50%", "75%"],
      correct: 3,
      explanation: "With 5x leverage, the equity loss = underlying move * leverage = 15% * 5 = 75%. At 5x leverage, a mere 20% drop in the underlying would wipe out 100% of equity. This non-linear relationship between leverage and ruin probability is why margin spirals occur — losses trigger margin calls, forced selling drives prices lower, which triggers more margin calls in a reflexive cascade."
    },
    {
      type: "multiple-choice",
      question: "In building a trading system, what is the key difference between the 'alpha model' and the 'execution model'?",
      options: [
        "The alpha model handles risk management while the execution model generates signals",
        "The alpha model generates return forecasts and position targets, while the execution model minimizes market impact and slippage when implementing those targets",
        "They are the same component with different names",
        "The alpha model runs in real-time while the execution model runs overnight"
      ],
      correct: 1,
      explanation: "The alpha model decides what to trade and how much (generating signals and optimal position sizes), while the execution model decides how and when to trade (splitting orders, choosing venues, managing market impact). A brilliant alpha model is worthless with poor execution — slippage, spread costs, and market impact can easily consume the entire theoretical edge."
    },
    {
      type: "true-false",
      question: "In DeFi lending protocols, a liquidation cascade occurs when falling collateral prices trigger forced sales that further depress prices, creating a positive feedback loop.",
      correct: true,
      explanation: "Liquidation cascades are a systemic risk in DeFi. When collateral values drop below maintenance ratios, protocols automatically liquidate positions by selling collateral on-chain. In thin liquidity conditions, these forced sales push prices lower, breaching more liquidation thresholds. During the May 2022 Terra/Luna collapse, cascading liquidations across protocols amplified losses far beyond the initial trigger."
    },
    {
      type: "multiple-choice",
      question: "Why does 'vol-of-vol' (volatility of volatility) matter for options traders?",
      options: [
        "It only affects options with more than one year to expiration",
        "It determines the bid-ask spread of the underlying stock",
        "It drives the price of volatility derivatives and affects the stability of vega hedges — when vol itself is volatile, hedging costs increase unpredictably",
        "It is only relevant during earnings announcements"
      ],
      correct: 2,
      explanation: "Vol-of-vol measures how unstable implied volatility itself is. High vol-of-vol means your vega exposure changes rapidly, making hedging expensive and unreliable. It is a key input for pricing VIX options, variance swaps, and other vol derivatives. Periods of high vol-of-vol (e.g., March 2020) cause outsized moves in volatility products and can blow up strategies that assume stable vol dynamics."
    }
  ]
};
