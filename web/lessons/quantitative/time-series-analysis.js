LESSON_REGISTRY["time-series-analysis"] = {
  id: "time-series-analysis",
  title: "Time Series Analysis for Trading",
  category: "quantitative-finance",
  difficulty: "advanced",
  estimatedMinutes: 15,
  xpReward: 100,
  sections: [
    {
      type: "text",
      content: "<h3>Stationarity: The Foundation of Time Series Modeling</h3><p>A time series is <strong>stationary</strong> if its statistical properties — mean, variance, and autocovariance — do not change over time. Most financial price series are <em>non-stationary</em> (they trend or exhibit changing variance), which means naive regression and forecasting will produce spurious results.</p><p>The standard remedy is to work with <strong>returns</strong> (first differences of log prices) rather than prices. Log returns are approximately stationary in mean, though their variance is not constant — a phenomenon called <strong>volatility clustering</strong> that GARCH models address.</p><p>Stationarity tests include:</p><ul><li><strong>Augmented Dickey-Fuller (ADF) test</strong>: Tests H0: unit root (non-stationary). Reject H0 if p-value &lt; 0.05.</li><li><strong>KPSS test</strong>: Tests H0: stationary. Use alongside ADF for robustness.</li><li><strong>Phillips-Perron test</strong>: Non-parametric alternative to ADF, robust to serial correlation.</li></ul>"
    },
    {
      type: "text",
      content: "<h3>ARIMA Models</h3><p>ARIMA(p, d, q) — <em>AutoRegressive Integrated Moving Average</em> — models a time series using three components:</p><ul><li><strong>AR(p)</strong>: The current value depends on its own <em>p</em> lagged values. Captures autocorrelation in returns (momentum or mean reversion).</li><li><strong>I(d)</strong>: The series is differenced <em>d</em> times to achieve stationarity. For log prices, d=1 yields log returns.</li><li><strong>MA(q)</strong>: The current value depends on <em>q</em> lagged forecast errors. Captures moving-average effects in residuals.</li></ul><p>Model selection uses the <strong>ACF</strong> (autocorrelation function, guides MA order) and <strong>PACF</strong> (partial autocorrelation function, guides AR order). The <strong>Akaike Information Criterion (AIC)</strong> and <strong>Bayesian Information Criterion (BIC)</strong> penalize complexity and guide final selection. For daily equity returns, ARIMA(1,0,0) or ARIMA(0,0,1) often suffices — most of the predictability in returns is weak.</p>"
    },
    {
      type: "key-concept",
      title: "Volatility Clustering and GARCH",
      content: "Financial returns exhibit <strong>volatility clustering</strong>: large price moves tend to be followed by more large moves, and calm periods cluster together. This violates the constant-variance assumption of ARIMA. The <strong>GARCH(1,1)</strong> model (Generalized AutoRegressive Conditional Heteroskedasticity) captures this: sigma<sub>t</sub>^2 = omega + alpha * epsilon<sub>t-1</sub>^2 + beta * sigma<sub>t-1</sub>^2. Here, <em>alpha</em> measures how much today's variance is driven by yesterday's shock, and <em>beta</em> measures the persistence of variance. Typical estimates: alpha + beta is close to 0.97, implying high persistence. GARCH is essential for option pricing, risk management, and any strategy that trades volatility directly."
    },
    {
      type: "text",
      content: "<h3>The ADF Test in Practice</h3><p>When testing a spread for mean reversion (e.g., in pairs trading), the ADF test procedure is:</p><ol><li>Compute the spread series: S<sub>t</sub> = P<sub>1,t</sub> - beta * P<sub>2,t</sub></li><li>Run ADF regression: delta-S<sub>t</sub> = alpha + phi * S<sub>t-1</sub> + sum(gamma<sub>i</sub> * delta-S<sub>t-i</sub>) + epsilon<sub>t</sub></li><li>Test H0: phi = 0 (unit root, non-stationary) vs. H1: phi &lt; 0 (mean-reverting)</li><li>Reject H0 if the t-statistic on phi is below the critical value (e.g., -2.86 at 5% for 100 observations)</li></ol><p>Important: standard ADF critical values do not apply when the spread comes from an OLS regression (the Engle-Granger case). You must use <strong>MacKinnon critical values</strong>, which are more conservative. A spread that passes ADF at 5% significance in the Engle-Granger framework is a meaningful cointegration finding.</p>"
    },
    {
      type: "interactive-chart",
      config: {
        ticker: "VIX",
        title: "VIX — Volatility Clustering Over Time",
        description: "The VIX index illustrates volatility clustering: spikes are followed by elevated volatility for extended periods, while low-volatility regimes persist. This is the empirical motivation for GARCH modeling."
      }
    },
    {
      type: "comparison-table",
      headers: ["Model", "Use Case", "Key Parameters", "Limitation"],
      rows: [
        ["ARIMA(p,d,q)", "Return forecasting, spread modeling", "p: AR lags, d: differencing, q: MA lags", "Assumes constant variance; misses volatility clustering"],
        ["GARCH(1,1)", "Volatility forecasting, risk estimation", "omega, alpha (shock), beta (persistence)", "Symmetric — treats positive and negative shocks equally"],
        ["EGARCH", "Leverage effect modeling", "Asymmetric response to positive vs. negative shocks", "More parameters, harder to estimate"],
        ["ARIMA-GARCH", "Joint return and volatility modeling", "Combined ARIMA mean + GARCH variance", "Estimation complexity; risk of overfitting"],
        ["VAR (Vector AR)", "Multi-asset return modeling", "p lags across n assets simultaneously", "Exponential parameter growth with n assets"]
      ]
    }
  ],
  track: "quantitative",
  order: 39,
  prerequisites: ["mean-reversion"]
};
