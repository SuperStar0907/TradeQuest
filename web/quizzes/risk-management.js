QUIZ_REGISTRY["risk-management"] = {
  name: "Risk Management",
  icon: "🛡️",
  questions: [
    {
      type: "multiple-choice",
      question: "What is the primary purpose of a stop-loss order?",
      options: [
        "To guarantee a profit on a trade",
        "To limit potential losses by automatically selling at a predetermined price",
        "To buy more shares when the price drops",
        "To lock in gains from a winning trade"
      ],
      correct: 1,
      explanation: "A stop-loss order is placed below the current market price and triggers a sell when that price is reached. It limits potential losses on a position by exiting before the loss grows too large. Note that in fast-moving markets, execution may occur at a worse price than the stop."
    },
    {
      type: "calculate",
      question: "You have a $50,000 account and risk 2% per trade. What is your maximum risk per trade in dollars?",
      answer: 1000,
      tolerance: 0,
      unit: "$",
      explanation: "Maximum risk = Account size x Risk percentage = $50,000 x 0.02 = $1,000. The 2% rule is a widely used risk management guideline that prevents any single trade from significantly damaging your account. It ensures you can survive a string of losing trades."
    },
    {
      type: "multiple-choice",
      question: "What is the risk/reward ratio of a trade with $200 potential loss and $600 potential gain?",
      options: [
        "1:2",
        "1:3",
        "3:1",
        "2:1"
      ],
      correct: 1,
      explanation: "Risk/reward = Potential loss : Potential gain = $200 : $600 = 1:3. This means for every $1 you risk, you stand to gain $3. Most professional traders look for setups with at least a 1:2 risk/reward ratio to ensure profitability even with a sub-50% win rate."
    },
    {
      type: "true-false",
      question: "Diversification eliminates all investment risk.",
      correct: false,
      explanation: "Diversification reduces unsystematic (company-specific) risk but cannot eliminate systematic (market-wide) risk. Events like recessions, interest rate changes, and geopolitical crises affect all stocks to some degree regardless of how diversified the portfolio is."
    },
    {
      type: "calculate",
      question: "Your portfolio peaked at $100,000 and currently stands at $85,000. What is the drawdown percentage?",
      answer: 15,
      tolerance: 0,
      unit: "%",
      explanation: "Drawdown = (Peak - Current) / Peak x 100 = ($100,000 - $85,000) / $100,000 x 100 = 15%. Drawdown measures the decline from a peak to a trough and is a key metric for evaluating risk. A 15% drawdown requires approximately a 17.6% gain to recover."
    },
    {
      type: "multiple-choice",
      question: "What is a trailing stop?",
      options: [
        "A stop loss that only works during after-hours trading",
        "A stop loss that moves up with the stock price but never moves down",
        "A stop loss placed at the previous day's low",
        "A limit order that trails the market price"
      ],
      correct: 1,
      explanation: "A trailing stop automatically adjusts upward as the stock price rises but stays fixed when the price falls. This lets you lock in profits during an uptrend while still providing downside protection. It can be set as a dollar amount or percentage below the current price."
    },
    {
      type: "true-false",
      question: "Position sizing refers to determining how many shares or contracts to trade based on your risk tolerance.",
      correct: true,
      explanation: "Position sizing is the process of determining the appropriate number of shares or contracts for a trade given your account size, risk tolerance, and the trade's stop-loss distance. Proper position sizing ensures no single trade can cause catastrophic losses."
    },
    {
      type: "calculate",
      question: "You risk $1 per share with a stop loss. Your max risk per trade is $500. How many shares can you buy?",
      answer: 500,
      tolerance: 0,
      unit: "",
      explanation: "Position size = Max risk / Risk per share = $500 / $1 = 500 shares. This formula ensures your position size is calibrated to your risk parameters. If the stop-loss distance changes, the position size adjusts inversely to maintain consistent risk."
    },
    {
      type: "multiple-choice",
      question: "What does the Sharpe Ratio measure?",
      options: [
        "The total return of a portfolio",
        "The risk-adjusted return relative to the risk-free rate",
        "The maximum drawdown of a strategy",
        "The correlation between two assets"
      ],
      correct: 1,
      explanation: "The Sharpe Ratio measures excess return per unit of risk, calculated as (Portfolio Return - Risk-Free Rate) / Portfolio Standard Deviation. A higher Sharpe Ratio indicates better risk-adjusted performance. A ratio above 1.0 is generally considered acceptable."
    },
    {
      type: "true-false",
      question: "Using leverage amplifies both gains and losses.",
      correct: true,
      explanation: "Leverage multiplies your exposure beyond your actual capital. While it can magnify profits, it equally magnifies losses and can result in losing more than your initial investment. This is why margin accounts carry significant risk and require careful position sizing."
    }
  ]
};
