QUIZ_REGISTRY["macro-markets"] = {
  name: "Macro & Markets",
  icon: "🌍",
  questions: [
    {
      type: "multiple-choice",
      question: "What does a yield curve inversion (2y-10y spread going negative) primarily signal to bond markets?",
      options: [
        "Inflation is about to spike and the Fed will raise rates aggressively",
        "Economic growth expectations are deteriorating and the market anticipates future rate cuts",
        "The Treasury is issuing too many long-term bonds",
        "Foreign investors are selling U.S. debt"
      ],
      correct: 1,
      explanation: "An inverted yield curve means short-term rates exceed long-term rates, reflecting bond market expectations that the Fed will eventually need to cut rates in response to economic weakness. Long-term yields fall because investors lock in current rates anticipating lower future rates. It has historically been one of the most reliable recession indicators, though the lag between inversion and recession varies widely."
    },
    {
      type: "multiple-choice",
      question: "How does a rising Federal Funds rate typically affect equity valuations, all else being equal?",
      options: [
        "It has no effect on equity valuations",
        "It increases valuations by signaling economic strength",
        "It reduces the present value of future cash flows, compressing P/E multiples — especially for growth stocks with distant earnings",
        "It only affects bank stocks"
      ],
      correct: 2,
      explanation: "Higher risk-free rates increase the discount rate used in DCF models, reducing the present value of future earnings. This disproportionately affects growth stocks whose value depends on earnings projected far into the future. Value stocks with near-term cash flows are relatively less impacted, which is why rate-hiking cycles often trigger rotation from growth to value."
    },
    {
      type: "multiple-choice",
      question: "Why does a strengthening U.S. dollar (rising DXY) tend to pressure emerging market equities and debt?",
      options: [
        "Emerging markets only trade in U.S. dollars",
        "EM countries and corporations often have dollar-denominated debt, so a stronger dollar increases their real debt burden and tightens financial conditions",
        "A strong dollar means the U.S. economy is in recession",
        "EM investors cannot buy dollars when DXY rises"
      ],
      correct: 1,
      explanation: "Many emerging market governments and corporations borrow in USD. A rising dollar increases the local-currency cost of servicing and repaying this debt, squeezing margins and creditworthiness. It also triggers capital outflows as global investors repatriate to higher-yielding U.S. assets, putting further pressure on EM currencies and asset prices in a reflexive cycle."
    },
    {
      type: "multiple-choice",
      question: "What distinguishes PCE (Personal Consumption Expenditures) from CPI as an inflation measure, and why does the Fed prefer PCE?",
      options: [
        "PCE is always higher than CPI",
        "PCE accounts for substitution effects (consumers switching to cheaper alternatives) and has broader coverage, making it a more accurate measure of actual consumer inflation",
        "PCE only measures food and energy prices",
        "CPI is published quarterly while PCE is monthly"
      ],
      correct: 1,
      explanation: "PCE uses a chain-weighted formula that adjusts for substitution behavior (e.g., consumers buying chicken instead of beef when beef prices rise), while CPI uses a fixed basket. PCE also covers a broader set of expenditures including those paid by employers on behalf of workers. The Fed targets 2% Core PCE specifically because of these methodological advantages."
    },
    {
      type: "multiple-choice",
      question: "In the classic sector rotation model, which sectors typically outperform during the early recovery phase of the business cycle?",
      options: [
        "Utilities and consumer staples",
        "Consumer discretionary, financials, and industrials",
        "Energy and materials",
        "Healthcare and technology"
      ],
      correct: 1,
      explanation: "Early recovery follows the trough of a recession: rates are low, credit is easing, and consumer spending rebounds. Consumer discretionary benefits from pent-up demand, financials from a steepening yield curve and rising loan demand, and industrials from capex recovery. Defensive sectors like utilities and staples, which outperformed during the recession, tend to lag as risk appetite returns."
    },
    {
      type: "multiple-choice",
      question: "A PMI (Purchasing Managers' Index) reading of 48.5 indicates what about the manufacturing sector?",
      options: [
        "The sector is expanding at a rapid pace",
        "The sector is contracting, as any reading below 50 signals declining activity relative to the prior month",
        "The sector is neutral — neither expanding nor contracting",
        "The PMI is only meaningful when it exceeds 60"
      ],
      correct: 1,
      explanation: "PMI uses 50 as the dividing line: above 50 signals expansion, below 50 signals contraction. A reading of 48.5 means manufacturing is contracting but only slightly. Markets watch the direction of change as much as the level itself — a move from 45 to 48.5 is improving even though it is still contractionary, and may signal an upcoming recovery."
    },
    {
      type: "calculate",
      question: "A carry trade borrows JPY at 0.5% annual interest and invests in AUD at 4.5% annual interest. Assuming no exchange rate movement, what is the annualized carry return?",
      options: ["0.5%", "2.0%", "4.0%", "4.5%"],
      correct: 2,
      explanation: "Carry return = Investment yield - Borrowing cost = 4.5% - 0.5% = 4.0% annualized. In practice, uncovered interest rate parity suggests the higher-yielding currency should depreciate to offset this differential, but empirically carry trades have been profitable over long periods. The major risk is sudden unwinding: carry trades can suffer sharp losses when risk aversion spikes and funding currencies strengthen rapidly."
    },
    {
      type: "multiple-choice",
      question: "What characterizes a 'risk-off' market environment?",
      options: [
        "Investors move capital from safe-haven assets into equities and high-yield credit",
        "Treasury yields rise sharply as investors sell bonds",
        "Investors flee risky assets (equities, high-yield, EM) into safe havens (Treasuries, USD, gold, JPY), widening credit spreads and compressing equity multiples",
        "Commodity prices rise across the board"
      ],
      correct: 2,
      explanation: "Risk-off episodes are characterized by a flight to safety: investors sell equities, high-yield bonds, and EM assets while buying U.S. Treasuries, the dollar, gold, and the Japanese yen. Credit spreads widen, the VIX spikes, and cross-asset correlations increase (everything risky falls together). Understanding the risk-on/risk-off regime is essential for managing portfolio-level drawdowns."
    },
    {
      type: "true-false",
      question: "Central bank policy divergence — where one major central bank is raising rates while another is cutting — tends to strengthen the currency of the hawkish central bank.",
      correct: true,
      explanation: "Higher interest rates attract global capital seeking better yields, increasing demand for that currency. When the Fed was hiking in 2022 while the ECB and BOJ remained accommodative, the dollar surged against the euro and yen. Policy divergence is one of the most reliable drivers of medium-term currency trends, though the effect can be offset by trade flows, risk sentiment, or intervention."
    },
    {
      type: "true-false",
      question: "Breakeven inflation rates, derived from the spread between nominal and TIPS yields, represent the market's exact forecast of future CPI inflation.",
      correct: false,
      explanation: "Breakeven inflation rates approximate the market's inflation expectations but are not exact forecasts. They include a liquidity premium (TIPS are less liquid than nominal Treasuries) and an inflation risk premium (compensation for uncertainty). During stress periods, TIPS liquidity can deteriorate, distorting breakevens. Adjusted for these premia, breakevens are useful but imperfect indicators of expected inflation."
    }
  ]
};
