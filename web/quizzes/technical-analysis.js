QUIZ_REGISTRY["technical-analysis"] = {
  name: "Technical Analysis",
  icon: "📈",
  questions: [
    {
      type: "multiple-choice",
      question: "What does the RSI (Relative Strength Index) measure?",
      options: [
        "The strength of a company's balance sheet",
        "The speed and magnitude of recent price changes",
        "The ratio of a stock's price to the S&P 500",
        "The correlation between two stocks"
      ],
      correct: 1,
      explanation: "RSI measures the speed and magnitude of recent price changes to evaluate overbought or oversold conditions. It oscillates between 0 and 100, with readings above 70 typically indicating overbought conditions and below 30 indicating oversold."
    },
    {
      type: "true-false",
      question: "A golden cross occurs when the 50-day moving average crosses above the 200-day moving average.",
      correct: true,
      explanation: "A golden cross is a bullish technical signal that occurs when a shorter-term moving average (commonly the 50-day) crosses above a longer-term moving average (commonly the 200-day). The opposite pattern, where the 50-day crosses below the 200-day, is called a death cross."
    },
    {
      type: "multiple-choice",
      question: "What is a support level?",
      options: [
        "The highest price a stock has ever reached",
        "A price level where buying interest is strong enough to prevent further decline",
        "The average price over the last 20 days",
        "The price at which a company will buy back its own shares"
      ],
      correct: 1,
      explanation: "Support is a price level where a stock tends to stop falling because demand increases as the price drops. Traders watch support levels for potential buying opportunities, and a break below support can signal further downside."
    },
    {
      type: "calculate",
      question: "Calculate the 3-day SMA given closing prices of $10, $12, and $14.",
      answer: 12,
      tolerance: 0,
      unit: "$",
      explanation: "SMA = (Sum of closing prices) / Number of periods = ($10 + $12 + $14) / 3 = $12. The Simple Moving Average gives equal weight to all prices in the period and is used to smooth out short-term fluctuations and identify trends."
    },
    {
      type: "multiple-choice",
      question: "What does MACD stand for?",
      options: [
        "Moving Average Convergence Divergence",
        "Market Average Composite Derivative",
        "Multiple Asset Class Distribution",
        "Mean Adjusted Cumulative Difference"
      ],
      correct: 0,
      explanation: "MACD stands for Moving Average Convergence Divergence. It is a trend-following momentum indicator that shows the relationship between two exponential moving averages of a security's price, typically the 12-period and 26-period EMAs."
    },
    {
      type: "true-false",
      question: "Bollinger Bands widen when volatility increases and narrow when volatility decreases.",
      correct: true,
      explanation: "Bollinger Bands consist of a middle SMA band and two outer bands set at standard deviations above and below. When volatility increases, the bands widen; when volatility decreases, they narrow. This \"squeeze\" of narrow bands often precedes a significant price move."
    },
    {
      type: "multiple-choice",
      question: "In candlestick charting, what does a long lower wick (shadow) indicate?",
      options: [
        "Strong selling pressure dominated the session",
        "Buyers pushed the price back up after sellers drove it down",
        "The stock gapped up at open",
        "Volume was unusually low"
      ],
      correct: 1,
      explanation: "A long lower wick shows that sellers pushed the price significantly lower during the session, but buyers stepped in and drove it back up. This price action suggests buying interest at lower levels and can signal a potential reversal, especially at support."
    },
    {
      type: "calculate",
      question: "If a stock's upper Bollinger Band is at $55 and the lower band is at $45, what is the middle band (SMA)?",
      answer: 50,
      tolerance: 0,
      unit: "$",
      explanation: "The middle Bollinger Band is the SMA, and the upper and lower bands are equidistant from it. Middle band = (Upper + Lower) / 2 = ($55 + $45) / 2 = $50. The bands are typically set at 2 standard deviations above and below this moving average."
    },
    {
      type: "multiple-choice",
      question: "What does a head and shoulders pattern typically signal?",
      options: [
        "A continuation of the current uptrend",
        "A potential reversal from bullish to bearish",
        "Increasing volatility with no directional bias",
        "A stock split is imminent"
      ],
      correct: 1,
      explanation: "The head and shoulders pattern is one of the most reliable reversal patterns. It consists of three peaks where the middle peak (head) is higher than the two surrounding peaks (shoulders). A break below the neckline confirms a bearish reversal."
    },
    {
      type: "true-false",
      question: "Volume should ideally increase in the direction of the prevailing trend to confirm its strength.",
      correct: true,
      explanation: "Volume confirmation is an important principle in technical analysis. In an uptrend, rising volume on up days and declining volume on down days confirms the trend. If volume decreases as price rises, it may signal weakening momentum and a potential reversal."
    },
    {
      type: "multiple-choice",
      question: "What is the primary Fibonacci retracement level considered most significant?",
      options: [
        "23.6%",
        "38.2%",
        "61.8%",
        "78.6%"
      ],
      correct: 2,
      explanation: "The 61.8% level, known as the \"golden ratio,\" is considered the most significant Fibonacci retracement level. It is derived from the Fibonacci sequence where each number divided by the next approaches 0.618. Traders watch this level closely for potential support or resistance."
    },
    {
      type: "calculate",
      question: "A stock moves from $100 to $150, then retraces. What is the price at the 50% Fibonacci retracement level?",
      answer: 125,
      tolerance: 0,
      unit: "$",
      explanation: "The 50% retracement = High - (Range x 0.50) = $150 - ($50 x 0.50) = $150 - $25 = $125. While not a true Fibonacci number, the 50% level is commonly included because markets frequently retrace about half of a prior move before continuing."
    },
    {
      type: "multiple-choice",
      question: "What does divergence between price and RSI suggest?",
      options: [
        "The trend is accelerating",
        "Volume is increasing",
        "The current trend may be weakening and a reversal is possible",
        "The stock is about to split"
      ],
      correct: 2,
      explanation: "Divergence occurs when price makes new highs (or lows) but RSI does not. This disagreement suggests momentum is fading and the current trend may be losing strength. Bearish divergence occurs at tops; bullish divergence occurs at bottoms."
    },
    {
      type: "true-false",
      question: "A doji candlestick always signals a reversal.",
      correct: false,
      explanation: "A doji indicates indecision, where the opening and closing prices are nearly equal. While it can signal a potential reversal, especially after a strong trend, it requires confirmation from subsequent candles. In a sideways market, a doji may simply reflect continued indecision."
    },
    {
      type: "multiple-choice",
      question: "What is VWAP primarily used for?",
      options: [
        "Calculating a stock's intrinsic value",
        "Determining the average price weighted by volume throughout the day",
        "Measuring long-term trend direction",
        "Predicting earnings announcements"
      ],
      correct: 1,
      explanation: "VWAP (Volume Weighted Average Price) calculates the average price a security has traded at throughout the day, weighted by volume. Institutional traders use it as a benchmark to ensure they are getting a fair price, and day traders use it as dynamic support/resistance."
    },
    {
      type: "calculate",
      question: "If the 12-period EMA is 25 and the 26-period EMA is 23, what is the MACD line value?",
      answer: 2,
      tolerance: 0,
      unit: "",
      explanation: "MACD line = 12-period EMA - 26-period EMA = 25 - 23 = 2. A positive MACD indicates that the shorter-term average is above the longer-term average, suggesting upward momentum. Traders watch for the MACD crossing its signal line for buy/sell signals."
    },
    {
      type: "multiple-choice",
      question: "What does an ascending triangle pattern suggest?",
      options: [
        "A bearish reversal",
        "A bullish continuation with a flat resistance and rising support",
        "Decreasing volatility with no trend",
        "The stock is range-bound indefinitely"
      ],
      correct: 1,
      explanation: "An ascending triangle features a flat upper resistance line and a rising lower support line. It typically forms during an uptrend and suggests that buyers are becoming more aggressive. A breakout above the flat resistance often leads to a continuation of the uptrend."
    },
    {
      type: "true-false",
      question: "The EMA gives more weight to recent prices compared to the SMA.",
      correct: true,
      explanation: "The Exponential Moving Average applies a greater weighting multiplier to the most recent data points, making it more responsive to new information. This is in contrast to the SMA, which gives equal weight to all data points in the period."
    },
    {
      type: "multiple-choice",
      question: "What does a breakout above resistance with high volume typically indicate?",
      options: [
        "A false signal that should be ignored",
        "The stock is overbought and will reverse",
        "Strong buying conviction and potential for continued upward movement",
        "Market makers are manipulating the price"
      ],
      correct: 2,
      explanation: "A breakout above resistance accompanied by high volume indicates strong buying interest and conviction. Volume validates the breakout by showing that many participants are involved. Low-volume breakouts are more likely to fail and reverse back below resistance."
    },
    {
      type: "calculate",
      question: "A stock's 14-day RSI shows average gains of $1.50 and average losses of $0.50. What is the RSI value?",
      answer: 75,
      tolerance: 0,
      unit: "",
      explanation: "RS = Average Gain / Average Loss = $1.50 / $0.50 = 3. RSI = 100 - (100 / (1 + RS)) = 100 - (100 / 4) = 100 - 25 = 75. An RSI of 75 is above the 70 threshold, indicating the security may be overbought."
    }
  ]
};
