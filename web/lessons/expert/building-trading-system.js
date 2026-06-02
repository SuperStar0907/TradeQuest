LESSON_REGISTRY["building-trading-system"] = {
  id: "building-trading-system",
  title: "Building an End-to-End Trading System",
  track: "expert",
  category: "expert-research",
  difficulty: "expert",
  order: 65,
  estimatedMinutes: 15,
  xpReward: 100,
  prerequisites: ["leverage-systemic-risk"],
  sections: [
    {
      type: "text",
      content: "<h3>System Architecture: Five Layers of a Production Trading System</h3><p>A production trading system is a multi-component pipeline where each layer has distinct reliability, latency, and correctness requirements. Architectural decisions made early propagate constraints through the entire stack; retrofitting real-time guarantees onto a batch-designed system is prohibitively expensive.</p><p>The five canonical layers are:</p><ul><li><strong>Data pipeline</strong> — Ingests, validates, normalizes, and stores market data from multiple sources. The foundation all other layers depend on. Data quality errors here propagate silently and are discovered late, after causing live trading errors.</li><li><strong>Signal generation</strong> — Applies alpha models to clean data to produce predicted returns, factor scores, or directional signals for each instrument in the universe.</li><li><strong>Risk model</strong> — Estimates covariance structure, current factor exposures, and portfolio-level risk metrics. Translates raw signals into risk-adjusted position targets.</li><li><strong>Execution engine</strong> — Routes orders to venues, manages fills, tracks slippage, and maintains real-time position and PnL accounting.</li><li><strong>Monitoring and operations</strong> — Detects anomalies, tracks system health, fires alerts, and provides the interface for human oversight and intervention.</li></ul>"
    },
    {
      type: "key-concept",
      title: "Data Pipeline Design: The Corporate Actions Problem",
      content: "The most underestimated component of a trading system is the data pipeline's handling of corporate actions: stock splits, dividends, rights offerings, mergers, and delistings. A 2:1 split halves the stock price overnight; a model trained on raw prices will see this as a 50% one-day return followed by apparent reversal — both spurious. Proper back-adjusted price series multiply all historical prices by the adjustment factor so that percentage returns are correct throughout history. Dividend adjustment further complicates this: total return series must include dividend reinvestment, but different strategies require different adjustments (a market-making model cares about price gaps; a trend-following model cares about total return). Survivorship bias — using only companies that survived to the present when constructing historical universes — inflates backtested performance by 1-3% annually depending on the market and period, because failed companies are excluded retroactively. Point-in-time data sets (which include only the information that was available at each historical date) are the correct standard but expensive to construct and maintain."
    },
    {
      type: "text",
      content: "<h3>Signal Generation and the Alpha Model Hierarchy</h3><p>Alpha models translate processed data into expected returns. A production system typically runs multiple signals that are combined into a composite view rather than relying on any single predictor — diversification of alpha sources reduces performance variance and improves stability across market regimes.</p><p>Signal design principles that distinguish production-grade from research-grade implementations:</p><ul><li><strong>Signal decay analysis</strong> — Plot the IC of a signal at horizons of 1, 2, 5, 10, 21 days. A signal with IC of 0.04 at 1-day that decays to zero by day 5 should be traded at higher frequency; a signal with flat IC across horizons should be held longer. Mismatching signal horizon to holding period wastes alpha.</li><li><strong>Transaction cost awareness</strong> — The net alpha of a signal is gross alpha minus transaction costs. A signal with 1% gross expected return and 0.8% round-trip cost has 20 basis points net alpha — barely worth trading. Signal strength must be filtered against realized cost estimates before production deployment.</li><li><strong>Signal orthogonalization</strong> — When combining signals, remove shared factor exposures so the combination reflects independent information. Two signals both loaded on momentum will not diversify the momentum risk; explicitly orthogonalizing signal 2 to signal 1 before combining improves the aggregate information ratio.</li></ul>"
    },
    {
      type: "text",
      content: "<h3>Execution and the Implementation Shortfall Framework</h3><p>Implementation shortfall (IS) — also called the Perold measure — is the gold standard for measuring execution quality. IS = paper portfolio return - live portfolio return = (decision price - fill price) * shares / portfolio value. It decomposes into: (1) delay cost (price change between decision and order submission), (2) market impact (price movement caused by your own trading), and (3) timing cost (price change between partial fills). The Almgren-Chriss model provides the optimal execution schedule that minimizes the expected implementation shortfall for a given risk aversion — the trade-off between trading quickly (high impact, low timing risk) and trading slowly (low impact, high timing risk). The optimal trajectory is a declining exponential schedule that front-loads execution in liquid periods. Production systems use adaptive versions that incorporate real-time liquidity signals: if the market impact is lower than predicted, accelerate; if participation rate constraints are binding, slow down.</p>"
    },
    {
      type: "key-concept",
      title: "Continuous Improvement: The Research-to-Production Feedback Loop",
      content: "A trading system is not a fixed artifact — it requires continuous iteration driven by systematic post-trade analysis. The research-to-production feedback loop operates at three timescales. Daily: fill quality reports identify systematic slippage patterns (e.g., fills consistently worse on one venue), signal attribution identifies which signals contributed positively or negatively to the day's PnL, and anomaly detection flags data quality issues. Monthly: factor exposure reports verify that the portfolio's realized risk profile matches the intended profile; regime attribution identifies whether recent performance is consistent with historical signal behavior; capacity analysis estimates whether the strategy is approaching capacity constraints where its own trades move prices. Quarterly: full strategy review including out-of-sample performance attribution, signal degradation analysis (alpha signals decay as they become known or as market structure changes), and universe review to ensure the instrument set remains relevant and tradeable. The most dangerous failure mode in a live system is silently degrading performance — small consistent losses that remain within normal variance until the strategy is deeply underwater."
    },
    {
      type: "comparison-table",
      headers: ["System Component", "Primary Failure Mode", "Detection Method", "Mitigation"],
      rows: [
        ["Data pipeline", "Silent data errors (missing bars, stale prices, bad corporate action adjustments)", "Cross-source consistency checks; return distribution monitoring", "Multiple independent data vendors; automated reconciliation against exchange official data"],
        ["Signal generation", "Look-ahead bias in feature calculation; model staleness in new regime", "Walk-forward IC monitoring; out-of-sample IR tracking", "Strict point-in-time feature engineering; regime-conditional signal monitoring"],
        ["Risk model", "Underestimation of correlation during stress; factor model instability", "Realized vs. forecast volatility ratio; factor exposure drift alerts", "Conservative vol scaling; stress-test scenarios layered on top of factor model estimates"],
        ["Execution engine", "Runaway order loops; stale price references; venue connectivity failures", "Order rate circuit breakers; position limit hard stops; heartbeat monitoring", "Redundant connectivity; pre-trade risk checks at order level; position reconciliation every 5 minutes"],
        ["Monitoring", "Alert fatigue leading to ignored warnings; insufficient logging depth", "Alert-to-action conversion rate tracking; incident post-mortems", "Tiered alert severity; structured logging with full event replay capability"]
      ]
    }
  ]
};
