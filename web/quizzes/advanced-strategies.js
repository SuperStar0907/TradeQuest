QUIZ_REGISTRY["advanced-strategies"] = {
  name: "Advanced Strategies",
  icon: "🎯",
  questions: [
    {
      type: "multiple-choice",
      question: "In Elliott Wave Theory, which of the following is a strict rule (not a guideline)?",
      options: [
        "Wave 3 is usually the longest impulse wave",
        "Wave 4 should not overlap with the price territory of wave 1 in an impulse",
        "Wave 5 often shows divergence on momentum indicators",
        "Corrective waves tend to alternate between simple and complex forms"
      ],
      correct: 1,
      explanation: "The non-overlap rule is one of three inviolable Elliott Wave rules: wave 4 must not enter the price range of wave 1 in an impulse sequence. If it does, the count is invalid and must be revised. The other strict rules are that wave 2 cannot retrace beyond the start of wave 1, and wave 3 cannot be the shortest of waves 1, 3, and 5."
    },
    {
      type: "multiple-choice",
      question: "In Wyckoff methodology, what characterizes the 'spring' event during an accumulation phase?",
      options: [
        "A high-volume breakout above resistance marking the start of an uptrend",
        "A brief dip below support on low volume that quickly reverses, designed to shake out weak holders before a markup",
        "A period of narrowing price range with declining volume",
        "A gap up on heavy institutional buying"
      ],
      correct: 1,
      explanation: "A Wyckoff spring is a deceptive move below the trading range support that traps breakout sellers, typically occurring on low volume. It is a terminal shakeout engineered by 'composite operators' to acquire shares cheaply before the markup phase. A genuine spring is confirmed by a rapid reversal back into the range on increasing volume."
    },
    {
      type: "multiple-choice",
      question: "In market profile analysis, what does the Point of Control (POC) represent?",
      options: [
        "The highest price traded during the session",
        "The price level with the most traded volume (highest TPO count)",
        "The midpoint between the session high and low",
        "The opening price of the session"
      ],
      correct: 1,
      explanation: "The Point of Control is the price level where the most trading activity occurred, measured by time-price opportunities (TPOs) or volume. It represents the price the market considers 'fair value' for that session. Traders watch for POC migration between sessions as a signal of directional conviction."
    },
    {
      type: "multiple-choice",
      question: "What does negative delta in order flow analysis indicate?",
      options: [
        "More buy limit orders were placed than sell limit orders",
        "More volume was traded at the ask than at the bid",
        "More volume was traded at the bid than at the ask, indicating aggressive selling pressure",
        "The spread between bid and ask widened"
      ],
      correct: 2,
      explanation: "Delta measures the difference between volume traded at the ask (aggressive buyers hitting the offer) and volume traded at the bid (aggressive sellers hitting the bid). Negative delta means sellers are more aggressive. Cumulative Volume Delta (CVD) tracks this imbalance over time and divergences between CVD and price can signal exhaustion or hidden accumulation."
    },
    {
      type: "multiple-choice",
      question: "What does a volatility skew where out-of-the-money puts have significantly higher implied volatility than equidistant out-of-the-money calls indicate?",
      options: [
        "The market expects the underlying to rally sharply",
        "Options are fairly priced across all strikes",
        "Demand for downside protection exceeds demand for upside speculation, reflecting crash risk premium",
        "The underlying has very low historical volatility"
      ],
      correct: 2,
      explanation: "Equity volatility skew reflects the market's asymmetric fear of large downside moves. After the 1987 crash, OTM puts persistently trade at higher implied volatility because institutional investors buy them as portfolio insurance. A steepening skew signals rising fear, while a flattening skew suggests complacency."
    },
    {
      type: "multiple-choice",
      question: "What distinguishes a knock-in barrier option from a vanilla option?",
      options: [
        "It has a longer expiration date",
        "It only comes into existence if the underlying reaches a specified barrier level before expiration",
        "It can only be exercised on the expiration date",
        "It pays out a fixed amount regardless of how far in-the-money it is"
      ],
      correct: 1,
      explanation: "A knock-in barrier option is initially inactive and only becomes a standard option if the underlying asset price touches or crosses a predetermined barrier level. They are cheaper than vanilla options since activation is conditional. Down-and-in puts, for example, only activate if the stock drops to the barrier, making them a cost-effective tail-risk hedge."
    },
    {
      type: "multiple-choice",
      question: "The second-order Greek 'vanna' measures sensitivity of an option's delta to changes in which variable?",
      options: [
        "Time to expiration",
        "Interest rates",
        "Implied volatility",
        "The underlying asset's dividend yield"
      ],
      correct: 2,
      explanation: "Vanna (also called DdeltaDvol) measures how much an option's delta changes for a one-unit change in implied volatility. It is critical for managing delta hedging in volatile markets because rising IV can shift your delta exposure significantly. Large vanna exposures from dealer hedging at key strikes can amplify directional moves in the underlying."
    },
    {
      type: "calculate",
      question: "A stat-arb pair has a spread mean of 0, standard deviation of 1.2, and current spread of -2.4. If you enter long at z = -2.0 and exit at z = 0, what is the expected profit in spread units?",
      options: ["1.2", "2.4", "3.6", "4.8"],
      correct: 1,
      explanation: "Entry is at z = -2.0, which corresponds to a spread value of -2.0 * 1.2 = -2.4. Exit is at z = 0, which corresponds to a spread value of 0. Profit in spread units = 0 - (-2.4) = 2.4. This assumes the spread does mean-revert to zero, which is the core bet in statistical arbitrage. Stop losses are typically placed at z = -3.0 or beyond."
    },
    {
      type: "calculate",
      question: "A TWAP algorithm needs to execute 12,000 shares over 2 hours in a market that trades 600,000 shares in that window. What percentage of market volume does this TWAP represent?",
      options: ["1%", "2%", "5%", "10%"],
      correct: 1,
      explanation: "Participation rate = Order size / Market volume = 12,000 / 600,000 = 0.02 or 2%. A 2% participation rate is generally considered low-impact for liquid stocks. TWAP slices the order into equal time intervals regardless of volume, while VWAP adjusts slice sizes to match the intraday volume profile, typically resulting in less market impact."
    },
    {
      type: "true-false",
      question: "CVaR (Conditional Value at Risk) is always greater than or equal to VaR at the same confidence level.",
      correct: true,
      explanation: "CVaR (also called Expected Shortfall) measures the average loss in the worst tail beyond the VaR threshold. Since it averages all losses worse than VaR, it must be at least as large as VaR itself. CVaR is considered a superior risk measure because it is coherent (satisfies subadditivity) and captures tail severity, not just the threshold breach."
    },
    {
      type: "true-false",
      question: "An inverted yield curve, where short-term rates exceed long-term rates, has preceded every U.S. recession since 1970.",
      correct: true,
      explanation: "The inversion of the 2-year/10-year Treasury spread has preceded every U.S. recession since 1970 with a lead time of roughly 6-24 months. It signals that bond markets expect the Fed will need to cut rates in response to an economic downturn. However, it has also produced a small number of false positives, and the timing of the subsequent recession is highly variable."
    },
    {
      type: "multiple-choice",
      question: "In a market-making strategy, what is the primary source of profit?",
      options: [
        "Predicting the direction of the next price move",
        "Earning the bid-ask spread by providing liquidity on both sides of the order book",
        "Holding large directional positions overnight",
        "Arbitraging price differences between exchanges"
      ],
      correct: 1,
      explanation: "Market makers profit by continuously quoting both bid and ask prices and earning the spread on completed round-trips. The key risk is adverse selection — being picked off by informed traders who know the price is about to move. Successful market makers manage inventory risk aggressively and adjust quotes based on flow toxicity and position limits."
    }
  ]
};
