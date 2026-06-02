QUIZ_REGISTRY["fundamentals"] = {
  name: "Market Fundamentals",
  icon: "📊",
  questions: [
    {
      type: "multiple-choice",
      question: "What does the P/E ratio measure?",
      options: [
        "Price relative to earnings",
        "Profit relative to expenses",
        "Price relative to equity",
        "Profit relative to equity"
      ],
      correct: 0,
      explanation: "The P/E (Price-to-Earnings) ratio measures a company's current share price relative to its earnings per share. It tells investors how much they are paying for each dollar of earnings and is one of the most widely used valuation metrics."
    },
    {
      type: "multiple-choice",
      question: "What is a market order?",
      options: [
        "An order to buy/sell at a specific price",
        "An order to buy/sell immediately at the best available price",
        "An order that expires at end of day",
        "An order placed before market open"
      ],
      correct: 1,
      explanation: "A market order is executed immediately at the best available price. Unlike limit orders, market orders prioritize speed of execution over price, which means you may pay more or receive less than expected in volatile markets."
    },
    {
      type: "true-false",
      question: "A stock's market capitalization is calculated by multiplying the share price by the total number of outstanding shares.",
      correct: true,
      explanation: "Market capitalization equals share price times total outstanding shares. It represents the total market value of a company's equity and is used to classify companies as small-cap, mid-cap, or large-cap."
    },
    {
      type: "multiple-choice",
      question: "What does the bid price represent?",
      options: [
        "The price a seller is asking for a stock",
        "The highest price a buyer is willing to pay",
        "The last traded price",
        "The average of the high and low prices"
      ],
      correct: 1,
      explanation: "The bid price is the highest price a buyer is willing to pay for a security. The difference between the bid and the ask (the lowest price a seller will accept) is called the bid-ask spread, which reflects the stock's liquidity."
    },
    {
      type: "calculate",
      question: "A company has a stock price of $50 and earnings per share of $5. What is its P/E ratio?",
      answer: 10,
      tolerance: 0,
      unit: "",
      explanation: "P/E ratio = Price / EPS = $50 / $5 = 10. This means investors are paying $10 for every $1 of earnings. A P/E of 10 is generally considered moderate, though what counts as \"fair\" varies by industry and growth expectations."
    },
    {
      type: "multiple-choice",
      question: "What is the primary role of the Federal Open Market Committee (FOMC)?",
      options: [
        "Regulating stock exchanges",
        "Setting monetary policy and interest rates",
        "Approving IPO applications",
        "Auditing public companies"
      ],
      correct: 1,
      explanation: "The FOMC is a branch of the Federal Reserve that sets U.S. monetary policy, including the federal funds rate. Their decisions on interest rates have a major impact on stock and bond markets because they influence borrowing costs and economic growth."
    },
    {
      type: "true-false",
      question: "An ETF (Exchange-Traded Fund) can only be bought or sold at the end of the trading day, like a mutual fund.",
      correct: false,
      explanation: "Unlike mutual funds, ETFs trade on exchanges throughout the trading day just like individual stocks. This means their price fluctuates in real time based on supply and demand, and investors can use limit orders, stop losses, and other order types."
    },
    {
      type: "multiple-choice",
      question: "What is a limit order?",
      options: [
        "An order that limits the number of shares you can buy",
        "An order to buy/sell at a specific price or better",
        "An order that automatically cancels after one minute",
        "An order placed only during after-hours trading"
      ],
      correct: 1,
      explanation: "A limit order sets the maximum price you're willing to pay (for buys) or the minimum price you're willing to accept (for sells). It gives you price control but does not guarantee execution if the market never reaches your specified price."
    },
    {
      type: "calculate",
      question: "A company earned $2 billion in net income and has 500 million shares outstanding. What is the EPS in dollars?",
      answer: 4,
      tolerance: 0,
      unit: "$",
      explanation: "EPS = Net Income / Shares Outstanding = $2,000,000,000 / 500,000,000 = $4.00. Earnings per share is a key profitability metric that shows how much profit is attributable to each share of common stock."
    },
    {
      type: "multiple-choice",
      question: "What does \"float\" refer to in the stock market?",
      options: [
        "The total number of authorized shares",
        "The number of shares available for public trading",
        "The daily trading volume",
        "The market capitalization divided by revenue"
      ],
      correct: 1,
      explanation: "Float refers to the number of shares available for public trading, excluding restricted shares held by insiders. Stocks with a low float tend to be more volatile because a smaller supply of tradeable shares means each trade has a larger price impact."
    },
    {
      type: "true-false",
      question: "A bear market is defined as a decline of 20% or more from recent highs.",
      correct: true,
      explanation: "A bear market is commonly defined as a drop of 20% or more from a recent peak in a broad market index. A decline of 10-20% is called a correction. Bear markets often coincide with economic recessions and can last months to years."
    },
    {
      type: "multiple-choice",
      question: "What is the Pattern Day Trader (PDT) rule?",
      options: [
        "You cannot trade more than 10 stocks per day",
        "You must hold stocks for at least 24 hours",
        "You need at least $25,000 in your account to make 4+ day trades in 5 business days",
        "Day trading is illegal for retail investors"
      ],
      correct: 2,
      explanation: "The PDT rule requires a minimum equity of $25,000 in a margin account if you execute 4 or more day trades within 5 business days. This rule was established by FINRA to protect less-experienced traders from excessive risk."
    },
    {
      type: "calculate",
      question: "A stock has a bid price of $49.95 and an ask price of $50.05. What is the bid-ask spread in dollars?",
      answer: 0.1,
      tolerance: 0.01,
      unit: "$",
      explanation: "Bid-ask spread = Ask - Bid = $50.05 - $49.95 = $0.10. A narrow spread indicates high liquidity and active trading, while a wide spread suggests lower liquidity and can add to transaction costs for traders."
    },
    {
      type: "multiple-choice",
      question: "What is a dividend?",
      options: [
        "A fee charged by brokers for executing trades",
        "A distribution of a portion of a company's earnings to shareholders",
        "The interest paid on a margin loan",
        "A tax on capital gains"
      ],
      correct: 1,
      explanation: "A dividend is a payment made by a corporation to its shareholders, usually from profits. Dividends can be paid in cash or additional shares, and companies that consistently pay dividends are often seen as financially stable."
    },
    {
      type: "true-false",
      question: "The wash sale rule prevents you from claiming a tax loss if you repurchase a substantially identical security within 30 days before or after the sale.",
      correct: true,
      explanation: "The IRS wash sale rule disallows a tax deduction on a loss if you buy the same or substantially identical security within a 61-day window (30 days before through 30 days after the sale). The disallowed loss is added to the cost basis of the new shares."
    }
  ]
};
