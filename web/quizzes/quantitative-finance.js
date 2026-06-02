QUIZ_REGISTRY["quantitative-finance"] = {
  name: "Quantitative Finance",
  icon: "📐",
  questions: [
    {
      type: "multiple-choice",
      question: "In pairs trading, what distinguishes cointegration from simple correlation?",
      options: [
        "Cointegration means both assets move in the same direction every day",
        "Cointegration means a linear combination of two price series is stationary, even if each series individually is non-stationary",
        "Cointegration requires both assets to be in the same sector",
        "Cointegration is just correlation measured over a longer time horizon"
      ],
      correct: 1,
      explanation: "Cointegration means a linear combination of two non-stationary time series produces a stationary series with a stable mean. Two stocks can have low short-term correlation yet be cointegrated, meaning their spread is mean-reverting over time — the key requirement for pairs trading profitability."
    },
    {
      type: "multiple-choice",
      question: "In the Fama-French three-factor model, which factors are added beyond market beta?",
      options: [
        "Momentum and volatility",
        "Size (SMB) and value (HML)",
        "Liquidity and credit risk",
        "Dividend yield and earnings growth"
      ],
      correct: 1,
      explanation: "The Fama-French three-factor model adds SMB (Small Minus Big, capturing the size premium) and HML (High Minus Low book-to-market, capturing the value premium) to the market factor. These factors explain a significant portion of cross-sectional return variation that CAPM alone cannot."
    },
    {
      type: "multiple-choice",
      question: "What does the GARCH(1,1) model capture that a simple moving average of squared returns does not?",
      options: [
        "Trend direction in asset prices",
        "Volatility clustering — periods of high volatility tend to persist",
        "The correlation between two different assets",
        "The risk-free rate component of returns"
      ],
      correct: 1,
      explanation: "GARCH (Generalized Autoregressive Conditional Heteroskedasticity) explicitly models how today's variance depends on both yesterday's squared return (ARCH term) and yesterday's conditional variance (GARCH term). This captures volatility clustering, where large moves tend to follow large moves, a well-documented stylized fact of financial returns."
    },
    {
      type: "multiple-choice",
      question: "In Markowitz mean-variance optimization, what is the primary practical challenge when using historical returns?",
      options: [
        "Historical returns are always negative",
        "The covariance matrix is difficult to estimate accurately and small errors lead to extreme, unstable portfolio weights",
        "Mean-variance optimization cannot handle more than 10 assets",
        "It requires daily rebalancing to work"
      ],
      correct: 1,
      explanation: "Markowitz optimization is highly sensitive to estimation errors in the covariance matrix and expected returns. Small perturbations can flip portfolio weights dramatically, often producing concentrated and unintuitive allocations. This is why practitioners use shrinkage estimators, robust optimization, or the Black-Litterman model to stabilize results."
    },
    {
      type: "multiple-choice",
      question: "What is the key innovation of the Black-Litterman model compared to standard mean-variance optimization?",
      options: [
        "It eliminates the need for a covariance matrix entirely",
        "It uses market-implied equilibrium returns as a starting point and blends them with investor views",
        "It maximizes the Sharpe ratio without any constraints",
        "It only works with fixed-income portfolios"
      ],
      correct: 1,
      explanation: "Black-Litterman starts from the equilibrium returns implied by market capitalization weights (reverse optimization from CAPM), then adjusts them based on investor views weighted by their confidence level. This produces much more stable and intuitive portfolio weights than raw Markowitz optimization."
    },
    {
      type: "calculate",
      question: "A strategy has an annualized return of 12%, the risk-free rate is 4%, and the annualized standard deviation of returns is 16%. What is the Sharpe ratio?",
      options: ["0.25", "0.50", "0.75", "1.00"],
      correct: 1,
      explanation: "Sharpe ratio = (Return - Risk-free rate) / Standard deviation = (12% - 4%) / 16% = 8% / 16% = 0.50. A Sharpe ratio of 0.50 is modest — most institutional strategies target above 1.0. The ratio measures excess return per unit of total risk."
    },
    {
      type: "calculate",
      question: "Using the Kelly criterion, if a trade has a 60% win rate with a 2:1 reward-to-risk ratio, what fraction of capital should be allocated?",
      options: ["20%", "40%", "50%", "60%"],
      correct: 1,
      explanation: "Kelly fraction = p - (q / b) where p = 0.60 (win probability), q = 0.40 (loss probability), b = 2 (reward-to-risk ratio). Kelly = 0.60 - (0.40 / 2) = 0.60 - 0.20 = 0.40 or 40%. In practice, most traders use \"half Kelly\" (20%) to reduce volatility and drawdowns, since the Kelly criterion assumes precise knowledge of edge and odds."
    },
    {
      type: "multiple-choice",
      question: "In a risk parity portfolio, how are asset weights determined?",
      options: [
        "Equal dollar amounts in each asset",
        "Weights are set so each asset contributes equally to total portfolio risk",
        "Assets are weighted by their Sharpe ratio",
        "Weights are proportional to market capitalization"
      ],
      correct: 1,
      explanation: "Risk parity allocates weights so that each asset's marginal risk contribution to the portfolio is equal. This typically means higher allocations to lower-volatility assets like bonds and lower allocations to equities. The approach avoids the concentration risk of traditional 60/40 portfolios where equities dominate the risk budget."
    },
    {
      type: "multiple-choice",
      question: "When using Monte Carlo simulation for portfolio risk analysis, what is the primary advantage over parametric VaR?",
      options: [
        "Monte Carlo is always faster to compute",
        "Monte Carlo can model non-linear payoffs, fat tails, and complex dependencies that parametric methods assume away",
        "Monte Carlo requires fewer assumptions about distributions",
        "Monte Carlo only needs one simulation path"
      ],
      correct: 1,
      explanation: "Monte Carlo simulation can incorporate non-normal distributions, path-dependent payoffs (like options), and complex correlation structures. Parametric VaR assumes returns are normally distributed, which understates tail risk. However, Monte Carlo's accuracy depends on the quality of the assumed distribution and requires thousands of simulation paths."
    },
    {
      type: "calculate",
      question: "A pairs trade has a spread with a long-run mean of 2.0 and a standard deviation of 0.5. The current spread value is 3.5. What is the z-score?",
      options: ["1.0", "1.5", "2.0", "3.0"],
      correct: 3,
      explanation: "Z-score = (Current value - Mean) / Standard deviation = (3.5 - 2.0) / 0.5 = 1.5 / 0.5 = 3.0. A z-score of 3.0 indicates the spread is three standard deviations above its mean, a strong signal to short the spread in a mean-reversion strategy. Typical entry thresholds are z-scores of 2.0 or above."
    },
    {
      type: "multiple-choice",
      question: "In PCA (Principal Component Analysis) applied to a yield curve, what does the first principal component typically represent?",
      options: [
        "Curvature (butterfly) shifts",
        "Slope changes (steepening/flattening)",
        "Parallel shifts in the overall level of interest rates",
        "Credit spread movements"
      ],
      correct: 2,
      explanation: "The first principal component of yield curve movements typically explains 85-95% of variance and corresponds to parallel level shifts — all rates moving up or down together. The second component captures slope changes, and the third captures curvature. This decomposition is fundamental to fixed-income risk management."
    },
    {
      type: "multiple-choice",
      question: "What distinguishes a momentum factor from a mean-reversion factor?",
      options: [
        "Momentum uses fundamental data while mean-reversion uses price data",
        "Momentum buys recent winners and sells recent losers; mean-reversion buys recent losers and sells recent winners",
        "Momentum only works in bull markets while mean-reversion only works in bear markets",
        "There is no difference — they are different names for the same strategy"
      ],
      correct: 1,
      explanation: "Momentum strategies bet that recent trends will continue, buying assets that have outperformed and selling those that have underperformed over a lookback period (typically 2-12 months). Mean-reversion strategies bet on the opposite — that prices will revert to a norm. These factors tend to perform differently across market regimes and can diversify each other."
    },
    {
      type: "true-false",
      question: "An ARIMA(1,1,1) model applies one round of differencing to make the time series stationary before fitting the autoregressive and moving average components.",
      correct: true,
      explanation: "The middle parameter 'd' in ARIMA(p,d,q) represents the order of differencing. ARIMA(1,1,1) takes first differences of the series to remove a unit root (non-stationarity), then fits an AR(1) and MA(1) model to the differenced series. This is commonly used for financial time series that exhibit random walk behavior in levels."
    },
    {
      type: "true-false",
      question: "Two assets with a correlation of 0.95 are necessarily cointegrated.",
      correct: false,
      explanation: "High correlation does not imply cointegration. Correlation measures the co-movement of returns over short intervals, while cointegration is a property of the price levels having a stable long-run equilibrium. Two stocks can be highly correlated yet drift apart permanently, or they can have moderate correlation but a strongly mean-reverting spread."
    },
    {
      type: "multiple-choice",
      question: "In a factor model, what does 'alpha' represent?",
      options: [
        "The portfolio's total return",
        "The return attributable to market beta",
        "The excess return not explained by systematic factor exposures",
        "The volatility of the portfolio"
      ],
      correct: 2,
      explanation: "Alpha is the intercept in a factor regression — the portion of return that cannot be attributed to known risk factors. It represents the manager's skill (or luck) in generating returns beyond what factor exposures would predict. True alpha is rare and tends to decay as more capital exploits the same signals."
    }
  ]
};
