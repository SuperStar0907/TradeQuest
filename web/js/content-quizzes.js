const QUIZ_DATA = {
  'fundamentals': {
    name: 'Market Fundamentals',
    icon: '📊',
    questions: [
      {
        type: 'multiple-choice',
        question: 'What does the P/E ratio measure?',
        options: ['Price relative to earnings', 'Profit relative to expenses', 'Price relative to equity', 'Profit relative to equity'],
        correct: 0,
        explanation: 'The P/E (Price-to-Earnings) ratio measures a company\'s current share price relative to its earnings per share. It tells investors how much they are paying for each dollar of earnings and is one of the most widely used valuation metrics.'
      },
      {
        type: 'multiple-choice',
        question: 'What is a market order?',
        options: [
          'An order to buy/sell at a specific price',
          'An order to buy/sell immediately at the best available price',
          'An order that expires at end of day',
          'An order placed before market open'
        ],
        correct: 1,
        explanation: 'A market order is executed immediately at the best available price. Unlike limit orders, market orders prioritize speed of execution over price, which means you may pay more or receive less than expected in volatile markets.'
      },
      {
        type: 'true-false',
        question: 'A stock\'s market capitalization is calculated by multiplying the share price by the total number of outstanding shares.',
        correct: true,
        explanation: 'Market capitalization equals share price times total outstanding shares. It represents the total market value of a company\'s equity and is used to classify companies as small-cap, mid-cap, or large-cap.'
      },
      {
        type: 'multiple-choice',
        question: 'What does the bid price represent?',
        options: [
          'The price a seller is asking for a stock',
          'The highest price a buyer is willing to pay',
          'The last traded price',
          'The average of the high and low prices'
        ],
        correct: 1,
        explanation: 'The bid price is the highest price a buyer is willing to pay for a security. The difference between the bid and the ask (the lowest price a seller will accept) is called the bid-ask spread, which reflects the stock\'s liquidity.'
      },
      {
        type: 'calculate',
        question: 'A company has a stock price of $50 and earnings per share of $5. What is its P/E ratio?',
        answer: 10,
        tolerance: 0,
        unit: '',
        explanation: 'P/E ratio = Price / EPS = $50 / $5 = 10. This means investors are paying $10 for every $1 of earnings. A P/E of 10 is generally considered moderate, though what counts as "fair" varies by industry and growth expectations.'
      },
      {
        type: 'multiple-choice',
        question: 'What is the primary role of the Federal Open Market Committee (FOMC)?',
        options: [
          'Regulating stock exchanges',
          'Setting monetary policy and interest rates',
          'Approving IPO applications',
          'Auditing public companies'
        ],
        correct: 1,
        explanation: 'The FOMC is a branch of the Federal Reserve that sets U.S. monetary policy, including the federal funds rate. Their decisions on interest rates have a major impact on stock and bond markets because they influence borrowing costs and economic growth.'
      },
      {
        type: 'true-false',
        question: 'An ETF (Exchange-Traded Fund) can only be bought or sold at the end of the trading day, like a mutual fund.',
        correct: false,
        explanation: 'Unlike mutual funds, ETFs trade on exchanges throughout the trading day just like individual stocks. This means their price fluctuates in real time based on supply and demand, and investors can use limit orders, stop losses, and other order types.'
      },
      {
        type: 'multiple-choice',
        question: 'What is a limit order?',
        options: [
          'An order that limits the number of shares you can buy',
          'An order to buy/sell at a specific price or better',
          'An order that automatically cancels after one minute',
          'An order placed only during after-hours trading'
        ],
        correct: 1,
        explanation: 'A limit order sets the maximum price you\'re willing to pay (for buys) or the minimum price you\'re willing to accept (for sells). It gives you price control but does not guarantee execution if the market never reaches your specified price.'
      },
      {
        type: 'calculate',
        question: 'A company earned $2 billion in net income and has 500 million shares outstanding. What is the EPS in dollars?',
        answer: 4,
        tolerance: 0,
        unit: '$',
        explanation: 'EPS = Net Income / Shares Outstanding = $2,000,000,000 / 500,000,000 = $4.00. Earnings per share is a key profitability metric that shows how much profit is attributable to each share of common stock.'
      },
      {
        type: 'multiple-choice',
        question: 'What does "float" refer to in the stock market?',
        options: [
          'The total number of authorized shares',
          'The number of shares available for public trading',
          'The daily trading volume',
          'The market capitalization divided by revenue'
        ],
        correct: 1,
        explanation: 'Float refers to the number of shares available for public trading, excluding restricted shares held by insiders. Stocks with a low float tend to be more volatile because a smaller supply of tradeable shares means each trade has a larger price impact.'
      },
      {
        type: 'true-false',
        question: 'A bear market is defined as a decline of 20% or more from recent highs.',
        correct: true,
        explanation: 'A bear market is commonly defined as a drop of 20% or more from a recent peak in a broad market index. A decline of 10-20% is called a correction. Bear markets often coincide with economic recessions and can last months to years.'
      },
      {
        type: 'multiple-choice',
        question: 'What is the Pattern Day Trader (PDT) rule?',
        options: [
          'You cannot trade more than 10 stocks per day',
          'You must hold stocks for at least 24 hours',
          'You need at least $25,000 in your account to make 4+ day trades in 5 business days',
          'Day trading is illegal for retail investors'
        ],
        correct: 2,
        explanation: 'The PDT rule requires a minimum equity of $25,000 in a margin account if you execute 4 or more day trades within 5 business days. This rule was established by FINRA to protect less-experienced traders from excessive risk.'
      },
      {
        type: 'calculate',
        question: 'A stock has a bid price of $49.95 and an ask price of $50.05. What is the bid-ask spread in dollars?',
        answer: 0.10,
        tolerance: 0.01,
        unit: '$',
        explanation: 'Bid-ask spread = Ask - Bid = $50.05 - $49.95 = $0.10. A narrow spread indicates high liquidity and active trading, while a wide spread suggests lower liquidity and can add to transaction costs for traders.'
      },
      {
        type: 'multiple-choice',
        question: 'What is a dividend?',
        options: [
          'A fee charged by brokers for executing trades',
          'A distribution of a portion of a company\'s earnings to shareholders',
          'The interest paid on a margin loan',
          'A tax on capital gains'
        ],
        correct: 1,
        explanation: 'A dividend is a payment made by a corporation to its shareholders, usually from profits. Dividends can be paid in cash or additional shares, and companies that consistently pay dividends are often seen as financially stable.'
      },
      {
        type: 'true-false',
        question: 'The wash sale rule prevents you from claiming a tax loss if you repurchase a substantially identical security within 30 days before or after the sale.',
        correct: true,
        explanation: 'The IRS wash sale rule disallows a tax deduction on a loss if you buy the same or substantially identical security within a 61-day window (30 days before through 30 days after the sale). The disallowed loss is added to the cost basis of the new shares.'
      }
    ]
  },

  'technical-analysis': {
    name: 'Technical Analysis',
    icon: '📈',
    questions: [
      {
        type: 'multiple-choice',
        question: 'What does the RSI (Relative Strength Index) measure?',
        options: [
          'The strength of a company\'s balance sheet',
          'The speed and magnitude of recent price changes',
          'The ratio of a stock\'s price to the S&P 500',
          'The correlation between two stocks'
        ],
        correct: 1,
        explanation: 'RSI measures the speed and magnitude of recent price changes to evaluate overbought or oversold conditions. It oscillates between 0 and 100, with readings above 70 typically indicating overbought conditions and below 30 indicating oversold.'
      },
      {
        type: 'true-false',
        question: 'A golden cross occurs when the 50-day moving average crosses above the 200-day moving average.',
        correct: true,
        explanation: 'A golden cross is a bullish technical signal that occurs when a shorter-term moving average (commonly the 50-day) crosses above a longer-term moving average (commonly the 200-day). The opposite pattern, where the 50-day crosses below the 200-day, is called a death cross.'
      },
      {
        type: 'multiple-choice',
        question: 'What is a support level?',
        options: [
          'The highest price a stock has ever reached',
          'A price level where buying interest is strong enough to prevent further decline',
          'The average price over the last 20 days',
          'The price at which a company will buy back its own shares'
        ],
        correct: 1,
        explanation: 'Support is a price level where a stock tends to stop falling because demand increases as the price drops. Traders watch support levels for potential buying opportunities, and a break below support can signal further downside.'
      },
      {
        type: 'calculate',
        question: 'Calculate the 3-day SMA given closing prices of $10, $12, and $14.',
        answer: 12,
        tolerance: 0,
        unit: '$',
        explanation: 'SMA = (Sum of closing prices) / Number of periods = ($10 + $12 + $14) / 3 = $12. The Simple Moving Average gives equal weight to all prices in the period and is used to smooth out short-term fluctuations and identify trends.'
      },
      {
        type: 'multiple-choice',
        question: 'What does MACD stand for?',
        options: [
          'Moving Average Convergence Divergence',
          'Market Average Composite Derivative',
          'Multiple Asset Class Distribution',
          'Mean Adjusted Cumulative Difference'
        ],
        correct: 0,
        explanation: 'MACD stands for Moving Average Convergence Divergence. It is a trend-following momentum indicator that shows the relationship between two exponential moving averages of a security\'s price, typically the 12-period and 26-period EMAs.'
      },
      {
        type: 'true-false',
        question: 'Bollinger Bands widen when volatility increases and narrow when volatility decreases.',
        correct: true,
        explanation: 'Bollinger Bands consist of a middle SMA band and two outer bands set at standard deviations above and below. When volatility increases, the bands widen; when volatility decreases, they narrow. This "squeeze" of narrow bands often precedes a significant price move.'
      },
      {
        type: 'multiple-choice',
        question: 'In candlestick charting, what does a long lower wick (shadow) indicate?',
        options: [
          'Strong selling pressure dominated the session',
          'Buyers pushed the price back up after sellers drove it down',
          'The stock gapped up at open',
          'Volume was unusually low'
        ],
        correct: 1,
        explanation: 'A long lower wick shows that sellers pushed the price significantly lower during the session, but buyers stepped in and drove it back up. This price action suggests buying interest at lower levels and can signal a potential reversal, especially at support.'
      },
      {
        type: 'calculate',
        question: 'If a stock\'s upper Bollinger Band is at $55 and the lower band is at $45, what is the middle band (SMA)?',
        answer: 50,
        tolerance: 0,
        unit: '$',
        explanation: 'The middle Bollinger Band is the SMA, and the upper and lower bands are equidistant from it. Middle band = (Upper + Lower) / 2 = ($55 + $45) / 2 = $50. The bands are typically set at 2 standard deviations above and below this moving average.'
      },
      {
        type: 'multiple-choice',
        question: 'What does a head and shoulders pattern typically signal?',
        options: [
          'A continuation of the current uptrend',
          'A potential reversal from bullish to bearish',
          'Increasing volatility with no directional bias',
          'A stock split is imminent'
        ],
        correct: 1,
        explanation: 'The head and shoulders pattern is one of the most reliable reversal patterns. It consists of three peaks where the middle peak (head) is higher than the two surrounding peaks (shoulders). A break below the neckline confirms a bearish reversal.'
      },
      {
        type: 'true-false',
        question: 'Volume should ideally increase in the direction of the prevailing trend to confirm its strength.',
        correct: true,
        explanation: 'Volume confirmation is an important principle in technical analysis. In an uptrend, rising volume on up days and declining volume on down days confirms the trend. If volume decreases as price rises, it may signal weakening momentum and a potential reversal.'
      },
      {
        type: 'multiple-choice',
        question: 'What is the primary Fibonacci retracement level considered most significant?',
        options: ['23.6%', '38.2%', '61.8%', '78.6%'],
        correct: 2,
        explanation: 'The 61.8% level, known as the "golden ratio," is considered the most significant Fibonacci retracement level. It is derived from the Fibonacci sequence where each number divided by the next approaches 0.618. Traders watch this level closely for potential support or resistance.'
      },
      {
        type: 'calculate',
        question: 'A stock moves from $100 to $150, then retraces. What is the price at the 50% Fibonacci retracement level?',
        answer: 125,
        tolerance: 0,
        unit: '$',
        explanation: 'The 50% retracement = High - (Range x 0.50) = $150 - ($50 x 0.50) = $150 - $25 = $125. While not a true Fibonacci number, the 50% level is commonly included because markets frequently retrace about half of a prior move before continuing.'
      },
      {
        type: 'multiple-choice',
        question: 'What does divergence between price and RSI suggest?',
        options: [
          'The trend is accelerating',
          'Volume is increasing',
          'The current trend may be weakening and a reversal is possible',
          'The stock is about to split'
        ],
        correct: 2,
        explanation: 'Divergence occurs when price makes new highs (or lows) but RSI does not. This disagreement suggests momentum is fading and the current trend may be losing strength. Bearish divergence occurs at tops; bullish divergence occurs at bottoms.'
      },
      {
        type: 'true-false',
        question: 'A doji candlestick always signals a reversal.',
        correct: false,
        explanation: 'A doji indicates indecision, where the opening and closing prices are nearly equal. While it can signal a potential reversal, especially after a strong trend, it requires confirmation from subsequent candles. In a sideways market, a doji may simply reflect continued indecision.'
      },
      {
        type: 'multiple-choice',
        question: 'What is VWAP primarily used for?',
        options: [
          'Calculating a stock\'s intrinsic value',
          'Determining the average price weighted by volume throughout the day',
          'Measuring long-term trend direction',
          'Predicting earnings announcements'
        ],
        correct: 1,
        explanation: 'VWAP (Volume Weighted Average Price) calculates the average price a security has traded at throughout the day, weighted by volume. Institutional traders use it as a benchmark to ensure they are getting a fair price, and day traders use it as dynamic support/resistance.'
      },
      {
        type: 'calculate',
        question: 'If the 12-period EMA is 25 and the 26-period EMA is 23, what is the MACD line value?',
        answer: 2,
        tolerance: 0,
        unit: '',
        explanation: 'MACD line = 12-period EMA - 26-period EMA = 25 - 23 = 2. A positive MACD indicates that the shorter-term average is above the longer-term average, suggesting upward momentum. Traders watch for the MACD crossing its signal line for buy/sell signals.'
      },
      {
        type: 'multiple-choice',
        question: 'What does an ascending triangle pattern suggest?',
        options: [
          'A bearish reversal',
          'A bullish continuation with a flat resistance and rising support',
          'Decreasing volatility with no trend',
          'The stock is range-bound indefinitely'
        ],
        correct: 1,
        explanation: 'An ascending triangle features a flat upper resistance line and a rising lower support line. It typically forms during an uptrend and suggests that buyers are becoming more aggressive. A breakout above the flat resistance often leads to a continuation of the uptrend.'
      },
      {
        type: 'true-false',
        question: 'The EMA gives more weight to recent prices compared to the SMA.',
        correct: true,
        explanation: 'The Exponential Moving Average applies a greater weighting multiplier to the most recent data points, making it more responsive to new information. This is in contrast to the SMA, which gives equal weight to all data points in the period.'
      },
      {
        type: 'multiple-choice',
        question: 'What does a breakout above resistance with high volume typically indicate?',
        options: [
          'A false signal that should be ignored',
          'The stock is overbought and will reverse',
          'Strong buying conviction and potential for continued upward movement',
          'Market makers are manipulating the price'
        ],
        correct: 2,
        explanation: 'A breakout above resistance accompanied by high volume indicates strong buying interest and conviction. Volume validates the breakout by showing that many participants are involved. Low-volume breakouts are more likely to fail and reverse back below resistance.'
      },
      {
        type: 'calculate',
        question: 'A stock\'s 14-day RSI shows average gains of $1.50 and average losses of $0.50. What is the RSI value?',
        answer: 75,
        tolerance: 0,
        unit: '',
        explanation: 'RS = Average Gain / Average Loss = $1.50 / $0.50 = 3. RSI = 100 - (100 / (1 + RS)) = 100 - (100 / 4) = 100 - 25 = 75. An RSI of 75 is above the 70 threshold, indicating the security may be overbought.'
      }
    ]
  },

  'options-basics': {
    name: 'Options Fundamentals',
    icon: '🎯',
    questions: [
      {
        type: 'multiple-choice',
        question: 'What does a call option give the buyer the right to do?',
        options: [
          'Sell shares at the strike price',
          'Buy shares at the strike price',
          'Borrow shares from the broker',
          'Receive dividends from the underlying stock'
        ],
        correct: 1,
        explanation: 'A call option gives the buyer the right, but not the obligation, to purchase shares of the underlying stock at the strike price before expiration. The buyer pays a premium for this right and profits when the stock price exceeds the strike price plus the premium paid.'
      },
      {
        type: 'true-false',
        question: 'A put option increases in value when the underlying stock price decreases.',
        correct: true,
        explanation: 'A put option gives the holder the right to sell at the strike price. As the stock falls below the strike, the put becomes more valuable because the holder can sell shares above market price. The intrinsic value of a put equals the strike price minus the stock price when ITM.'
      },
      {
        type: 'multiple-choice',
        question: 'What does "in the money" (ITM) mean for a call option?',
        options: [
          'The stock price is below the strike price',
          'The stock price is above the strike price',
          'The option has more than 30 days until expiration',
          'The option has been exercised'
        ],
        correct: 1,
        explanation: 'A call option is in the money when the current stock price is above the strike price, meaning it has intrinsic value. For puts, it is the opposite: the put is ITM when the stock price is below the strike. ITM options are more expensive because they carry intrinsic value.'
      },
      {
        type: 'calculate',
        question: 'A call option has a strike price of $50 and the stock is trading at $57. What is the intrinsic value per share?',
        answer: 7,
        tolerance: 0,
        unit: '$',
        explanation: 'Intrinsic value of a call = Stock Price - Strike Price = $57 - $50 = $7. Intrinsic value represents the immediate profit from exercising the option. Any premium above this amount is extrinsic (time) value.'
      },
      {
        type: 'multiple-choice',
        question: 'One standard equity options contract represents how many shares?',
        options: ['10 shares', '50 shares', '100 shares', '1,000 shares'],
        correct: 2,
        explanation: 'One standard equity options contract represents 100 shares of the underlying stock. So if an option is priced at $2.00 per share, the total cost of one contract is $200 (100 shares x $2.00). This standardization simplifies trading and pricing.'
      },
      {
        type: 'true-false',
        question: 'The seller (writer) of an option has the obligation to fulfill the contract if the buyer exercises.',
        correct: true,
        explanation: 'The option seller receives the premium in exchange for taking on the obligation to buy (put seller) or sell (call seller) shares at the strike price if the buyer exercises. This is why selling options carries more risk than buying them in many scenarios.'
      },
      {
        type: 'multiple-choice',
        question: 'What is the maximum loss for a buyer of a call option?',
        options: [
          'Unlimited',
          'The strike price minus the stock price',
          'The premium paid',
          'The value of 100 shares'
        ],
        correct: 2,
        explanation: 'The maximum loss for an option buyer is always limited to the premium paid. If the option expires worthless (out of the money), the buyer loses only the premium. This defined risk is one of the key advantages of buying options versus trading the underlying stock.'
      },
      {
        type: 'calculate',
        question: 'You buy a call option for $3.00 per share with a strike of $45. The stock rises to $52 at expiration. What is your profit per share?',
        answer: 4,
        tolerance: 0,
        unit: '$',
        explanation: 'Profit = (Stock Price - Strike Price) - Premium = ($52 - $45) - $3.00 = $7.00 - $3.00 = $4.00 per share. The intrinsic value at expiration was $7, but you paid $3 for the option, so your net profit is $4 per share, or $400 per contract.'
      },
      {
        type: 'multiple-choice',
        question: 'What is the options chain?',
        options: [
          'A blockchain ledger tracking options trades',
          'A display of all available strike prices and expirations for a stock\'s options',
          'A series of linked options trades',
          'A risk management algorithm'
        ],
        correct: 1,
        explanation: 'An options chain is a listing of all available options contracts for a given security, organized by expiration date and strike price. It shows puts and calls side by side, along with key data like bid/ask prices, volume, open interest, and implied volatility.'
      },
      {
        type: 'true-false',
        question: 'American-style options can only be exercised at expiration, unlike European-style options.',
        correct: false,
        explanation: 'It is the opposite. American-style options can be exercised at any time before or on the expiration date, while European-style options can only be exercised at expiration. Most equity options in the U.S. are American-style, while index options are often European-style.'
      },
      {
        type: 'multiple-choice',
        question: 'What is "open interest" in options?',
        options: [
          'The number of options traded today',
          'The total number of outstanding contracts that have not been closed or exercised',
          'The interest rate used to price options',
          'The number of new positions opened today'
        ],
        correct: 1,
        explanation: 'Open interest is the total number of active options contracts for a particular strike and expiration that have not been closed, exercised, or assigned. High open interest indicates liquidity and makes it easier to enter and exit positions at fair prices.'
      },
      {
        type: 'calculate',
        question: 'A put option has a strike price of $60 and the stock trades at $54. What is the intrinsic value?',
        answer: 6,
        tolerance: 0,
        unit: '$',
        explanation: 'Intrinsic value of a put = Strike Price - Stock Price = $60 - $54 = $6. The put is in the money by $6 because the holder can sell shares at $60 when they are only worth $54 in the market.'
      },
      {
        type: 'multiple-choice',
        question: 'What does "at the money" (ATM) mean?',
        options: [
          'The option is about to expire',
          'The stock price is approximately equal to the strike price',
          'The option has been exercised profitably',
          'The option has the highest open interest'
        ],
        correct: 1,
        explanation: 'An option is at the money when the underlying stock price is equal or very close to the strike price. ATM options have the highest time value and are most sensitive to changes in implied volatility. They have a delta of approximately 0.50 for calls and -0.50 for puts.'
      },
      {
        type: 'true-false',
        question: 'Buying a put option is one way to hedge a long stock position against downside risk.',
        correct: true,
        explanation: 'Buying a put option on a stock you own (a protective put) acts like insurance. If the stock falls, the put gains value, offsetting your stock losses. Your maximum loss is limited to the difference between the stock price and the strike, plus the premium paid.'
      },
      {
        type: 'multiple-choice',
        question: 'What is the premium of an option?',
        options: [
          'The commission charged by the broker',
          'The price paid by the buyer to the seller for the options contract',
          'The difference between the bid and ask price',
          'The margin required to hold the position'
        ],
        correct: 1,
        explanation: 'The premium is the price paid by the option buyer to the option seller for the rights conveyed by the contract. It is determined by factors including intrinsic value, time until expiration, implied volatility, and interest rates.'
      }
    ]
  },

  'options-greeks': {
    name: 'Options Greeks',
    icon: '🔢',
    questions: [
      {
        type: 'multiple-choice',
        question: 'What does Delta measure in options?',
        options: [
          'The rate of time decay',
          'The sensitivity of the option\'s price to a $1 change in the underlying',
          'The impact of volatility changes',
          'The curvature of the option\'s price curve'
        ],
        correct: 1,
        explanation: 'Delta measures how much an option\'s price is expected to change for a $1 move in the underlying stock. A call with a delta of 0.60 would gain approximately $0.60 for every $1 the stock rises. Delta also approximates the probability of the option expiring in the money.'
      },
      {
        type: 'true-false',
        question: 'Theta is always negative for option buyers because time decay erodes the value of their position.',
        correct: true,
        explanation: 'Theta represents the rate at which an option loses value as time passes, all else being equal. For option buyers, theta works against them as each day that passes reduces the time value of their option. For option sellers, theta works in their favor.'
      },
      {
        type: 'multiple-choice',
        question: 'What does Gamma measure?',
        options: [
          'The sensitivity of delta to changes in the stock price',
          'The sensitivity of the option to interest rate changes',
          'The sensitivity of the option to dividend payments',
          'The total premium of the option'
        ],
        correct: 0,
        explanation: 'Gamma measures the rate of change of delta for a $1 move in the underlying. High gamma means delta will change rapidly, making the position more unpredictable. Gamma is highest for at-the-money options near expiration and is important for managing directional risk.'
      },
      {
        type: 'calculate',
        question: 'A call option has a delta of 0.55. If the stock price increases by $2, approximately how much will the option price increase?',
        answer: 1.10,
        tolerance: 0.01,
        unit: '$',
        explanation: 'Option price change = Delta x Stock price change = 0.55 x $2.00 = $1.10. Note that this is an approximation because delta itself changes as the stock moves (which is what gamma measures). For larger moves, gamma makes the actual change differ from this estimate.'
      },
      {
        type: 'multiple-choice',
        question: 'What does Vega measure?',
        options: [
          'The speed of the stock\'s price movement',
          'The sensitivity of the option\'s price to changes in implied volatility',
          'The volume of options traded',
          'The direction of the next price move'
        ],
        correct: 1,
        explanation: 'Vega measures how much an option\'s price changes for a 1% change in implied volatility. Options with more time until expiration have higher vega. When implied volatility rises, both calls and puts become more expensive, which benefits option buyers.'
      },
      {
        type: 'true-false',
        question: 'An at-the-money option has a delta of approximately 0.50 for calls.',
        correct: true,
        explanation: 'ATM call options have a delta near 0.50, meaning there is roughly a 50% chance the option will expire in the money. As a call moves deeper ITM, delta approaches 1.0; as it moves further OTM, delta approaches 0. ATM puts have a delta near -0.50.'
      },
      {
        type: 'calculate',
        question: 'An option has a theta of -0.05. How much value will it lose over 5 days due to time decay alone?',
        answer: 0.25,
        tolerance: 0.01,
        unit: '$',
        explanation: 'Value lost = |Theta| x Days = 0.05 x 5 = $0.25 per share. Theta accelerates as expiration approaches, so this linear estimate becomes less accurate closer to expiry. For one contract (100 shares), the total time decay would be $25.'
      },
      {
        type: 'multiple-choice',
        question: 'Which Greek is most important for option sellers who want to profit from time decay?',
        options: ['Delta', 'Gamma', 'Theta', 'Vega'],
        correct: 2,
        explanation: 'Theta is the most important Greek for option sellers because it quantifies how much premium they collect each day as the option loses time value. Option sellers have positive theta (they benefit from time passing) and prefer to sell options with high theta relative to the premium.'
      },
      {
        type: 'true-false',
        question: 'Deep in-the-money call options have a delta close to 1.0.',
        correct: true,
        explanation: 'As a call option moves deeper in the money, its delta approaches 1.0, meaning it moves nearly dollar-for-dollar with the stock. A deep ITM call behaves almost like owning the stock itself, with very little time value remaining in the premium.'
      },
      {
        type: 'multiple-choice',
        question: 'What happens to gamma as an option approaches expiration?',
        options: [
          'Gamma decreases for all options',
          'Gamma increases dramatically for at-the-money options',
          'Gamma remains constant',
          'Gamma only affects put options near expiration'
        ],
        correct: 1,
        explanation: 'Gamma spikes for ATM options near expiration because small stock price changes cause large shifts in delta (and the probability of finishing ITM or OTM). This "gamma risk" is why market makers and short-option traders closely monitor positions as expiration approaches.'
      },
      {
        type: 'calculate',
        question: 'An option has a vega of 0.12 and implied volatility increases from 25% to 28%. How much does the option price increase?',
        answer: 0.36,
        tolerance: 0.01,
        unit: '$',
        explanation: 'Option price change = Vega x IV change = 0.12 x (28 - 25) = 0.12 x 3 = $0.36 per share. Vega is expressed as the dollar change for a 1-percentage-point change in implied volatility. Rising IV benefits option buyers and hurts option sellers.'
      },
      {
        type: 'multiple-choice',
        question: 'Why is gamma risk particularly dangerous for short option positions?',
        options: [
          'Because gamma causes time decay to accelerate',
          'Because high gamma means delta changes rapidly, making hedging difficult and costly',
          'Because gamma increases the bid-ask spread',
          'Because gamma causes implied volatility to spike'
        ],
        correct: 1,
        explanation: 'High gamma means delta is changing rapidly, so a short option position can quickly shift from a manageable risk to a large directional exposure. Hedging a high-gamma position requires frequent adjustments, and each adjustment incurs transaction costs and potential slippage.'
      },
      {
        type: 'calculate',
        question: 'If delta is 0.60, how much does a $100 option move in price for a $1 increase in the underlying stock?',
        answer: 0.60,
        tolerance: 0.01,
        unit: '$',
        explanation: 'Price change = Delta x Stock move = 0.60 x $1.00 = $0.60. Delta directly tells you the expected dollar change in the option for each dollar change in the stock. A delta of 0.60 also roughly implies a 60% probability that the option finishes in the money at expiration.'
      },
      {
        type: 'multiple-choice',
        question: 'How does vega typically change as an option moves from at-the-money to deep out-of-the-money?',
        options: [
          'Vega increases significantly',
          'Vega stays approximately the same',
          'Vega decreases because the option has less sensitivity to volatility changes',
          'Vega becomes negative'
        ],
        correct: 2,
        explanation: 'Vega is highest for at-the-money options and decreases as an option moves further out of the money (or deeper in the money). OTM options have less time value that can be affected by volatility changes, so their sensitivity to IV changes diminishes. Vega is always positive for long options.'
      },
      {
        type: 'true-false',
        question: 'Rho measures an option\'s sensitivity to changes in interest rates and is typically the least impactful Greek for short-term options.',
        correct: true,
        explanation: 'Rho quantifies how much an option\'s price changes for a 1% change in interest rates. For short-dated options, rho has minimal impact because interest rate changes over days or weeks are negligible. Rho becomes more relevant for LEAPS and other long-dated options where the time value of money over the option\'s life is significant.'
      }
    ]
  },

  'options-strategies': {
    name: 'Options Strategies',
    icon: '♟️',
    questions: [
      {
        type: 'multiple-choice',
        question: 'What is a covered call strategy?',
        options: [
          'Buying a call option while shorting the stock',
          'Owning 100 shares and selling a call option against them',
          'Buying both a call and put at the same strike',
          'Selling a call option without owning any shares'
        ],
        correct: 1,
        explanation: 'A covered call involves owning 100 shares of stock and selling a call option against that position. It generates income from the premium received but limits upside potential above the strike price. It is one of the most conservative options strategies.'
      },
      {
        type: 'true-false',
        question: 'An iron condor profits when the stock stays within a defined range between expiration.',
        correct: true,
        explanation: 'An iron condor combines a bull put spread and a bear call spread. Maximum profit occurs when the stock stays between the two short strikes at expiration, allowing all four options to expire worthless and the trader to keep the full premium received.'
      },
      {
        type: 'multiple-choice',
        question: 'What is a bull call spread?',
        options: [
          'Buying a call and selling a call at a higher strike in the same expiration',
          'Buying two calls at different expirations',
          'Selling a put and buying a put at the same strike',
          'Buying a call and a put at the same strike'
        ],
        correct: 0,
        explanation: 'A bull call spread (debit spread) involves buying a call at a lower strike and selling a call at a higher strike with the same expiration. The sold call reduces cost but caps profit. It profits when the stock rises, with both max gain and max loss being defined.'
      },
      {
        type: 'calculate',
        question: 'You sell a covered call at a $55 strike for $2.00 premium. Your stock cost basis is $50. What is your maximum profit per share?',
        answer: 7,
        tolerance: 0,
        unit: '$',
        explanation: 'Maximum profit = (Strike - Cost Basis) + Premium = ($55 - $50) + $2.00 = $7.00 per share. You gain $5 from stock appreciation up to the strike plus the $2 premium. Above $55, your shares get called away so you cannot profit further from the stock rising.'
      },
      {
        type: 'multiple-choice',
        question: 'What is a straddle?',
        options: [
          'Buying a call and selling a put at the same strike',
          'Buying a call and a put at the same strike and expiration',
          'Selling two calls at different strikes',
          'Buying one call and two puts'
        ],
        correct: 1,
        explanation: 'A long straddle involves buying both a call and a put at the same strike price and expiration. It profits from large price moves in either direction. The position loses money if the stock stays near the strike, because both options lose time value.'
      },
      {
        type: 'true-false',
        question: 'A protective put strategy has unlimited upside potential.',
        correct: true,
        explanation: 'A protective put combines a long stock position with a long put option. The put limits downside risk to the strike price minus the premium, while the stock retains unlimited upside potential. It functions like an insurance policy on your stock holdings.'
      },
      {
        type: 'multiple-choice',
        question: 'What is the "wheel" strategy?',
        options: [
          'Continuously buying and selling the same stock',
          'Cycling between selling cash-secured puts and covered calls',
          'Rolling options from one expiration to the next indefinitely',
          'Trading options on four different stocks simultaneously'
        ],
        correct: 1,
        explanation: 'The wheel strategy begins by selling cash-secured puts. If assigned, you then sell covered calls on the acquired shares. If called away, you restart by selling puts. It generates consistent income from premiums while building positions at desired prices.'
      },
      {
        type: 'calculate',
        question: 'You buy a $50 call for $3 and sell a $55 call for $1. What is your max loss on this bull call spread?',
        answer: 2,
        tolerance: 0,
        unit: '$',
        explanation: 'Max loss = Net debit paid = Premium paid - Premium received = $3.00 - $1.00 = $2.00 per share. This occurs if the stock closes at or below $50 at expiration, making both calls expire worthless. The defined risk is one of the key benefits of vertical spreads.'
      },
      {
        type: 'multiple-choice',
        question: 'What outlook does a bear put spread express?',
        options: ['Bullish', 'Neutral', 'Moderately bearish', 'Extremely bullish'],
        correct: 2,
        explanation: 'A bear put spread involves buying a put at a higher strike and selling a put at a lower strike. It profits when the stock declines moderately. The sold put reduces cost but caps the profit at the difference between the strikes minus the net debit paid.'
      },
      {
        type: 'true-false',
        question: 'A long strangle is cheaper than a long straddle because both options are purchased out of the money.',
        correct: true,
        explanation: 'A strangle buys an OTM call and an OTM put, making it cheaper than a straddle (which buys ATM options). However, the stock needs to make a larger move for the strangle to become profitable because both options start with no intrinsic value.'
      },
      {
        type: 'multiple-choice',
        question: 'What is a calendar spread?',
        options: [
          'Buying and selling options at the same expiration but different strikes',
          'Buying a longer-dated option and selling a shorter-dated option at the same strike',
          'Trading options based on the economic calendar',
          'Buying options that expire on different days of the same week'
        ],
        correct: 1,
        explanation: 'A calendar spread (time spread) involves selling a near-term option and buying a longer-term option at the same strike. It profits from the faster time decay of the near-term option and benefits from increases in implied volatility on the longer-dated leg.'
      },
      {
        type: 'calculate',
        question: 'An iron condor receives a net credit of $1.50 with wing widths of $5 on each side. What is the maximum loss per share?',
        answer: 3.50,
        tolerance: 0.01,
        unit: '$',
        explanation: 'Max loss = Wing width - Net credit = $5.00 - $1.50 = $3.50 per share. This occurs if the stock moves beyond either short strike by more than the wing width. The risk-reward on this trade is $3.50 risk for $1.50 potential gain.'
      }
    ]
  },

  'risk-management': {
    name: 'Risk Management',
    icon: '🛡️',
    questions: [
      {
        type: 'multiple-choice',
        question: 'What is the primary purpose of a stop-loss order?',
        options: [
          'To guarantee a profit on a trade',
          'To limit potential losses by automatically selling at a predetermined price',
          'To buy more shares when the price drops',
          'To lock in gains from a winning trade'
        ],
        correct: 1,
        explanation: 'A stop-loss order is placed below the current market price and triggers a sell when that price is reached. It limits potential losses on a position by exiting before the loss grows too large. Note that in fast-moving markets, execution may occur at a worse price than the stop.'
      },
      {
        type: 'calculate',
        question: 'You have a $50,000 account and risk 2% per trade. What is your maximum risk per trade in dollars?',
        answer: 1000,
        tolerance: 0,
        unit: '$',
        explanation: 'Maximum risk = Account size x Risk percentage = $50,000 x 0.02 = $1,000. The 2% rule is a widely used risk management guideline that prevents any single trade from significantly damaging your account. It ensures you can survive a string of losing trades.'
      },
      {
        type: 'multiple-choice',
        question: 'What is the risk/reward ratio of a trade with $200 potential loss and $600 potential gain?',
        options: ['1:2', '1:3', '3:1', '2:1'],
        correct: 1,
        explanation: 'Risk/reward = Potential loss : Potential gain = $200 : $600 = 1:3. This means for every $1 you risk, you stand to gain $3. Most professional traders look for setups with at least a 1:2 risk/reward ratio to ensure profitability even with a sub-50% win rate.'
      },
      {
        type: 'true-false',
        question: 'Diversification eliminates all investment risk.',
        correct: false,
        explanation: 'Diversification reduces unsystematic (company-specific) risk but cannot eliminate systematic (market-wide) risk. Events like recessions, interest rate changes, and geopolitical crises affect all stocks to some degree regardless of how diversified the portfolio is.'
      },
      {
        type: 'calculate',
        question: 'Your portfolio peaked at $100,000 and currently stands at $85,000. What is the drawdown percentage?',
        answer: 15,
        tolerance: 0,
        unit: '%',
        explanation: 'Drawdown = (Peak - Current) / Peak x 100 = ($100,000 - $85,000) / $100,000 x 100 = 15%. Drawdown measures the decline from a peak to a trough and is a key metric for evaluating risk. A 15% drawdown requires approximately a 17.6% gain to recover.'
      },
      {
        type: 'multiple-choice',
        question: 'What is a trailing stop?',
        options: [
          'A stop loss that only works during after-hours trading',
          'A stop loss that moves up with the stock price but never moves down',
          'A stop loss placed at the previous day\'s low',
          'A limit order that trails the market price'
        ],
        correct: 1,
        explanation: 'A trailing stop automatically adjusts upward as the stock price rises but stays fixed when the price falls. This lets you lock in profits during an uptrend while still providing downside protection. It can be set as a dollar amount or percentage below the current price.'
      },
      {
        type: 'true-false',
        question: 'Position sizing refers to determining how many shares or contracts to trade based on your risk tolerance.',
        correct: true,
        explanation: 'Position sizing is the process of determining the appropriate number of shares or contracts for a trade given your account size, risk tolerance, and the trade\'s stop-loss distance. Proper position sizing ensures no single trade can cause catastrophic losses.'
      },
      {
        type: 'calculate',
        question: 'You risk $1 per share with a stop loss. Your max risk per trade is $500. How many shares can you buy?',
        answer: 500,
        tolerance: 0,
        unit: '',
        explanation: 'Position size = Max risk / Risk per share = $500 / $1 = 500 shares. This formula ensures your position size is calibrated to your risk parameters. If the stop-loss distance changes, the position size adjusts inversely to maintain consistent risk.'
      },
      {
        type: 'multiple-choice',
        question: 'What does the Sharpe Ratio measure?',
        options: [
          'The total return of a portfolio',
          'The risk-adjusted return relative to the risk-free rate',
          'The maximum drawdown of a strategy',
          'The correlation between two assets'
        ],
        correct: 1,
        explanation: 'The Sharpe Ratio measures excess return per unit of risk, calculated as (Portfolio Return - Risk-Free Rate) / Portfolio Standard Deviation. A higher Sharpe Ratio indicates better risk-adjusted performance. A ratio above 1.0 is generally considered acceptable.'
      },
      {
        type: 'true-false',
        question: 'Using leverage amplifies both gains and losses.',
        correct: true,
        explanation: 'Leverage multiplies your exposure beyond your actual capital. While it can magnify profits, it equally magnifies losses and can result in losing more than your initial investment. This is why margin accounts carry significant risk and require careful position sizing.'
      },
      {
        type: 'calculate',
        question: 'Using the 1% rule on a $75,000 account, your stop loss is $1.50 per share. How many shares should you buy?',
        answer: 500,
        tolerance: 0,
        unit: '',
        explanation: 'Max risk = $75,000 x 0.01 = $750. Position size = Max risk / Risk per share = $750 / $1.50 = 500 shares. The 1% rule limits each trade\'s potential loss to 1% of total account equity, ensuring that even a streak of losing trades will not devastate the portfolio.'
      },
      {
        type: 'multiple-choice',
        question: 'What is the Kelly Criterion used for?',
        options: [
          'Calculating the fair value of a stock',
          'Determining the optimal percentage of capital to risk on a trade based on win rate and payoff ratio',
          'Measuring portfolio volatility',
          'Setting stop-loss distances based on ATR'
        ],
        correct: 1,
        explanation: 'The Kelly Criterion calculates the optimal bet size as: Kelly % = W - [(1 - W) / R], where W is the win probability and R is the win/loss ratio. While theoretically optimal for long-term growth, most traders use a fractional Kelly (half or quarter) to reduce volatility and the risk of ruin from estimation errors.'
      }
    ]
  },

  'market-psychology': {
    name: 'Trading Psychology',
    icon: '🧠',
    questions: [
      {
        type: 'multiple-choice',
        question: 'What is confirmation bias in trading?',
        options: [
          'Only executing trades that have been confirmed by a second trader',
          'The tendency to seek out information that supports your existing belief and ignore contradictory evidence',
          'Waiting for a candlestick pattern to confirm before entering a trade',
          'Requiring two technical indicators to agree before placing an order'
        ],
        correct: 1,
        explanation: 'Confirmation bias causes traders to selectively focus on news, data, or chart patterns that validate their existing position or thesis while dismissing evidence that contradicts it. This leads to overconfidence, poor risk assessment, and the inability to cut losing trades. Combating it requires actively seeking disconfirming evidence for every trade idea.'
      },
      {
        type: 'true-false',
        question: 'Loss aversion means that the psychological pain of losing money is roughly twice as powerful as the pleasure of gaining the same amount.',
        correct: true,
        explanation: 'Research by Kahneman and Tversky showed that losses are felt approximately 2 to 2.5 times more intensely than equivalent gains. In trading, this causes people to hold losing positions too long (hoping to avoid realizing the loss) and sell winners too quickly (locking in the pleasure of a gain). This pattern is known as the disposition effect.'
      },
      {
        type: 'multiple-choice',
        question: 'What is anchoring bias?',
        options: [
          'The tendency to rely too heavily on the first piece of information encountered when making decisions',
          'The practice of using anchor stocks to stabilize a portfolio',
          'Setting stop losses at round numbers',
          'The habit of always buying stocks at their 52-week low'
        ],
        correct: 0,
        explanation: 'Anchoring bias causes traders to fixate on a specific reference point, such as their purchase price or a past high, and make decisions relative to that anchor rather than current market conditions. For example, refusing to sell a stock at $40 because you bought it at $60, even when fundamentals have deteriorated, is a classic anchoring trap.'
      },
      {
        type: 'multiple-choice',
        question: 'During which phase of the market emotion cycle are most retail investors likely to buy?',
        options: [
          'Disbelief and skepticism at the start of an uptrend',
          'Euphoria and excitement near the market top',
          'Panic and capitulation near the bottom',
          'Acceptance during a sustained downtrend'
        ],
        correct: 1,
        explanation: 'The fear and greed cycle shows that retail investors tend to buy near the top during euphoria, when prices have already risen substantially and media coverage is overwhelmingly positive. Conversely, they sell near the bottom during panic. This is why Warren Buffett advises being "fearful when others are greedy and greedy when others are fearful."'
      },
      {
        type: 'true-false',
        question: 'Keeping a detailed trading journal is considered one of the most effective tools for improving trading discipline and performance.',
        correct: true,
        explanation: 'A trading journal records not only entries, exits, and P&L but also the rationale behind each trade and the emotions felt during execution. Reviewing the journal helps traders identify recurring mistakes, emotional patterns, and strategy weaknesses. Professional traders consistently cite journaling as critical to long-term improvement.'
      },
      {
        type: 'multiple-choice',
        question: 'What is "revenge trading"?',
        options: [
          'A legitimate strategy to recover from a losing streak by doubling position size',
          'Making impulsive, emotionally driven trades to recoup recent losses',
          'Short selling a stock that caused you a loss',
          'Trading against a market maker who filled your order at an unfavorable price'
        ],
        correct: 1,
        explanation: 'Revenge trading occurs when a trader, frustrated by a loss, abandons their trading plan and makes impulsive trades to "win back" what was lost. This emotionally charged behavior typically leads to larger losses because trade selection, sizing, and risk management are all compromised. The correct response to a loss is to step away, review the journal, and return with a clear mind.'
      },
      {
        type: 'true-false',
        question: 'Overconfidence bias can lead traders to overtrade, use excessive leverage, and underestimate risks.',
        correct: true,
        explanation: 'Overconfidence bias causes traders to overestimate their knowledge, predictive abilities, and skill. After a winning streak, traders may attribute success entirely to skill rather than favorable market conditions, leading them to increase position sizes, trade more frequently, and skip risk management steps. Studies show that overconfident traders consistently underperform.'
      },
      {
        type: 'multiple-choice',
        question: 'What is the "disposition effect" in behavioral finance?',
        options: [
          'The tendency to diversify across too many positions',
          'The tendency to sell winning investments too early and hold losing investments too long',
          'The effect of market disposition on individual stock prices',
          'The psychological impact of account disposition fees'
        ],
        correct: 1,
        explanation: 'The disposition effect, documented by Shefrin and Statman, describes traders\' tendency to sell winners prematurely to lock in gains while holding losers in hopes of a recovery. It stems from loss aversion and the desire to avoid regret. Overcoming it requires strict adherence to predetermined exit rules for both profits and losses.'
      },
      {
        type: 'multiple-choice',
        question: 'What is the most effective way to manage emotions during a volatile trading session?',
        options: [
          'Increase position sizes to capitalize on the volatility',
          'Watch the screen more closely and react to every price tick',
          'Follow a pre-defined trading plan with specific entry, exit, and sizing rules',
          'Switch to a different asset class that is not moving'
        ],
        correct: 2,
        explanation: 'A pre-defined trading plan removes the need for in-the-moment decision-making, which is when emotions are most likely to override logic. The plan should include entry criteria, exit targets, stop-loss levels, and position sizing rules determined before the market opens. During execution, the trader\'s only job is to follow the plan, not to improvise.'
      },
      {
        type: 'true-false',
        question: 'Recency bias causes traders to place too much weight on recent events and ignore long-term historical patterns.',
        correct: true,
        explanation: 'Recency bias leads traders to assume that recent market trends will continue indefinitely. After a prolonged bull market, traders underestimate the risk of a downturn; after a crash, they become overly pessimistic. This bias distorts probability assessments and risk perception. Maintaining a systematic approach with backtested strategies helps counteract recency bias.'
      }
    ]
  }
};
