LESSON_REGISTRY["macro-cycle-trading"] = {
  id: "macro-cycle-trading",
  title: "Macro Cycle Trading",
  track: "advanced",
  category: "advanced-strategies",
  difficulty: "advanced",
  order: 56,
  estimatedMinutes: 13,
  xpReward: 90,
  prerequisites: ["options-market-making"],
  sections: [
    {
      type: "text",
      content: "<h3>The Economic Cycle as a Trading Framework</h3><p>Financial markets do not move in isolation — they are forward-looking discounting mechanisms embedded in macroeconomic cycles. Understanding where the economy sits within its cycle, and where it is likely headed, provides a framework for systematic rotation between asset classes and sectors. The key insight is that different assets perform best in different phases of the economic and monetary policy cycle. By identifying the current phase and anticipating transitions, macro cycle traders gain a structural edge over purely technical or fundamental approaches.</p><p>The primary cycle framework used by practitioners is the interaction of two variables: the direction of economic growth (improving vs deteriorating) and the direction of monetary policy (tightening vs easing). These four combinations define the four primary macro regimes, each with distinct asset class return characteristics.</p>"
    },
    {
      type: "key-concept",
      title: "The Four Macro Regimes",
      content: "Regime 1 — Expansion (Growth improving, Policy neutral to accommodative): Equities perform best, particularly cyclicals and small caps. Credit spreads tighten. Commodities rise on demand. This is the longest phase of the cycle. Regime 2 — Late Cycle (Growth strong but decelerating, Policy tightening): Value stocks and energy outperform growth and technology. Real assets (commodities, TIPS) perform well as inflation peaks. Yield curve flattens. Regime 3 — Contraction / Recession (Growth deteriorating, Policy still tight then pivoting): Defensive equities (utilities, consumer staples, healthcare) outperform. Long-duration government bonds rally as the Fed pivots. Gold often performs well. Regime 4 — Recovery (Growth trough reached, Policy aggressively accommodating): Growth stocks and emerging markets outperform as liquidity expands. Small caps rebound sharply from depressed levels. High-yield credit outperforms investment grade. The transitions between regimes, not the regimes themselves, are the most important moments for positioning."
    },
    {
      type: "text",
      content: "<h3>The Yield Curve: The Market's Macro Indicator</h3><p>The yield curve — the plot of Treasury yields from short-term (3-month) to long-term (30-year) maturities — is one of the most reliable leading economic indicators available. Key shapes and their implications:</p><ul><li><strong>Normal (upward-sloping):</strong> Long-term yields exceed short-term yields. Reflects expectations of economic growth and inflation. Historically, a steep curve predicts strong future growth and is positive for bank profitability (banks borrow short, lend long).</li><li><strong>Flat:</strong> Short and long-term yields converge. Transition point between normal and inverted. Indicates uncertainty about growth outlook. Bank lending margins compress.</li><li><strong>Inverted (downward-sloping):</strong> Short-term yields exceed long-term yields. Caused by the Fed raising short-term rates faster than long-term growth expectations rise. The 2-year/10-year inversion has preceded every US recession since the 1970s with a lag of 12-24 months. It is the most widely watched recession indicator.</li><li><strong>Bear steepener:</strong> Both ends of the curve rise but the long end rises faster. Often occurs when the market prices higher inflation expectations without a growth pickup — the most hostile environment for both equities and bonds.</li></ul>"
    },
    {
      type: "text",
      content: "<h3>Federal Reserve Policy and Asset Prices</h3><p>The Federal Reserve's monetary policy is the single most powerful driver of asset prices over intermediate time horizons. Key transmission mechanisms:</p><p><strong>Rate cycle:</strong> The Fed's target for the federal funds rate sets the price of short-term money, which cascades through all asset prices via the discount rate. When the Fed cuts rates, the present value of future cash flows rises, boosting equity and bond valuations simultaneously. When the Fed raises rates, the opposite occurs.</p><p><strong>Balance sheet (QE/QT):</strong> Quantitative easing (asset purchases) expands the Fed's balance sheet, injecting liquidity into the financial system, compressing risk premiums, and supporting asset prices broadly. Quantitative tightening (balance sheet reduction) has the opposite effect, though the magnitude is debated. The Fed balance sheet level is highly correlated with equity market capitalization.</p><p><strong>Forward guidance:</strong> What the Fed says about future policy is as important as current policy. The dot plot (FOMC members' projections for future rate levels) moves markets more than the actual rate decision on days when the guidance changes meaningfully.</p><p><strong>Real rates:</strong> The real interest rate (nominal rate minus inflation expectations) is the most important variable for growth equity valuations. Higher real rates increase the discount rate for long-duration cash flows, disproportionately harming high-multiple growth stocks. The 2022 growth stock crash was primarily a real rate repricing event.</p>"
    },
    {
      type: "comparison-table",
      headers: ["Leading Indicator", "What It Measures", "Lead Time", "Bullish Signal", "Bearish Signal"],
      rows: [
        ["Yield Curve (2yr-10yr)", "Market expectations for growth and Fed policy", "12-24 months for recession signal", "Steepening from trough; uninverting curve", "Deep inversion persisting for 3+ months"],
        ["ISM Manufacturing PMI", "Activity level in manufacturing sector", "1-3 months for equity correlation", "Expansion above 50 and rising", "Contraction below 50 and falling; especially below 45"],
        ["Conference Board LEI", "Composite of 10 leading economic indicators", "3-6 months", "Monthly increases in LEI", "Six consecutive months of decline"],
        ["Credit Spreads (HY vs IG)", "Market perception of default risk and credit conditions", "1-4 months", "Tightening spreads indicate risk appetite rising", "Widening spreads, especially above 500bps for HY"],
        ["Initial Jobless Claims", "Weekly leading labor market indicator", "Weeks to 2 months", "Claims stable or falling below 250K", "Sustained rise above 300K; accelerating claims"],
        ["NFIB Small Business Optimism", "Forward-looking small business sentiment", "1-3 months", "Index above 100; rising hiring and capex plans", "Sharp decline in hiring plans and capex intentions"]
      ]
    },
    {
      type: "key-concept",
      title: "Sector Rotation: Timing the Cycle",
      content: "Within each macro regime, specific equity sectors historically outperform. The classic sector rotation framework (based on work by Martin Pring and the Investment Clock concept) maps sector leadership to cycle phases: Energy and Materials lead in late expansion/early contraction when commodity demand peaks. Financials lead in early expansion when the yield curve steepens and credit demand rises. Technology and Consumer Discretionary lead in mid-expansion when growth is strong and consumers are spending. Healthcare and Consumer Staples lead in recession when investors prize predictable cash flows. Utilities lead in recovery before interest rates bottom, as their bond-proxy characteristics attract yield-hungry capital. The practical implementation: use macro indicators to identify the current regime, then tilt sector exposure accordingly. A sector ETF rotation strategy using this framework has historically outperformed a static buy-and-hold allocation by 2-4% per year with lower drawdowns, though regime identification in real time involves uncertainty and regime transitions are not always clean."
    }
  ]
};
