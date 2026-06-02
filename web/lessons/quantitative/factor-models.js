LESSON_REGISTRY["factor-models"] = {
  id: "factor-models",
  title: "Factor Models in Equity Investing",
  category: "quantitative-finance",
  difficulty: "advanced",
  estimatedMinutes: 15,
  xpReward: 100,
  sections: [
    {
      type: "text",
      content: "<h3>CAPM: The Single-Factor Model</h3><p>The <strong>Capital Asset Pricing Model (CAPM)</strong>, developed by Sharpe (1964) and Lintner (1965), describes expected returns as a linear function of a single factor — the market portfolio:</p><p><em>E(R<sub>i</sub>) = R<sub>f</sub> + beta<sub>i</sub> * (E(R<sub>m</sub>) - R<sub>f</sub>)</em></p><p>Where <em>beta<sub>i</sub></em> measures the stock's sensitivity to the market. CAPM predicts that only market risk (systematic risk, <em>beta</em>) is compensated with a return premium. Idiosyncratic risk can be diversified away and earns no return. Despite its elegance, empirical tests showed CAPM leaves large portions of the cross-section of returns unexplained. Stocks with low beta, small size, and low valuation earn returns inconsistent with CAPM predictions.</p>"
    },
    {
      type: "text",
      content: "<h3>Fama-French Three-Factor Model</h3><p>Eugene Fama and Kenneth French (1993) extended CAPM with two additional factors that explained much of the anomalous returns left by CAPM:</p><ul><li><strong>MKT-RF</strong>: Market excess return (same as CAPM beta)</li><li><strong>SMB</strong> (Small Minus Big): Return premium of small-cap stocks over large-cap stocks</li><li><strong>HML</strong> (High Minus Low): Return premium of high book-to-market (value) stocks over low book-to-market (growth) stocks</li></ul><p><em>R<sub>i</sub> - R<sub>f</sub> = alpha + beta<sub>MKT</sub> * MKT-RF + beta<sub>SMB</sub> * SMB + beta<sub>HML</sub> * HML + epsilon</em></p><p>The three-factor model explains roughly 90-95% of the variation in diversified portfolio returns, compared to 70-75% for CAPM. However, it does not explain momentum, leaving the door open for a fourth factor.</p>"
    },
    {
      type: "key-concept",
      title: "Carhart Four-Factor Model",
      content: "Mark Carhart (1997) added a <strong>momentum factor (WML — Winners Minus Losers)</strong> to the Fama-French model, creating the four-factor model that became the standard for mutual fund performance attribution for over a decade. WML is constructed by going long stocks with the highest prior 12-month returns (winners) and short stocks with the lowest (losers), skip one month. Adding WML dramatically reduces the positive alpha measured for momentum-chasing funds — most of their 'skill' is simply compensation for momentum factor exposure. The four-factor model is the baseline for evaluating active manager alpha."
    },
    {
      type: "text",
      content: "<h3>The Factor Zoo and Smart Beta</h3><p>Since Carhart, hundreds of factors have been proposed in academic literature — so many that Harvey, Liu, and Zhu (2016) dubbed it the <strong>factor zoo</strong>. Notable additions beyond the classic four include:</p><ul><li><strong>Quality/Profitability (QMJ)</strong>: Profitable, well-managed companies outperform (Novy-Marx 2013, AQR)</li><li><strong>Low Volatility (BAB)</strong>: Low-beta stocks outperform on a risk-adjusted basis (Frazzini &amp; Pedersen 2014)</li><li><strong>Investment (CMA)</strong>: Conservative investors (low asset growth) outperform aggressive investors</li><li><strong>Liquidity</strong>: Illiquid stocks earn a liquidity premium</li></ul><p><strong>Smart beta ETFs</strong> package factor exposures into passive products. Examples include iShares MSCI Momentum (MTUM), iShares MSCI Value (IVE), and Invesco S&amp;P 500 Low Volatility (SPLV). The key risk with smart beta is factor timing — factors can underperform for years (momentum crashed in 2009, value has underperformed growth since 2007).</p>"
    },
    {
      type: "interactive-chart",
      config: {
        ticker: "IWD",
        title: "IWD (Russell 1000 Value) vs. IWF (Russell 1000 Growth)",
        description: "The relative performance of value versus growth illustrates factor cycles. Value underperformed growth dramatically from 2007 to 2020, then sharply recovered in 2021-2022 as rates rose."
      }
    },
    {
      type: "comparison-table",
      headers: ["Model", "Year", "Factors", "Key Addition", "Unexplained Anomaly"],
      rows: [
        ["CAPM", "1964", "1 (Market)", "Single systematic risk factor", "Size, value, momentum, low-beta"],
        ["Fama-French 3-Factor", "1993", "3 (MKT, SMB, HML)", "Size and value premiums", "Momentum"],
        ["Carhart 4-Factor", "1997", "4 (+ WML)", "Momentum factor", "Quality, low-volatility, investment"],
        ["Fama-French 5-Factor", "2015", "5 (+ RMW, CMA)", "Profitability and investment factors", "Momentum (dropped intentionally)"],
        ["Q-Factor Model (Hou et al.)", "2015", "4 (Market, Size, Investment, Profitability)", "Macro-founded investment-based factors", "Intangibles, short-term reversal"]
      ]
    }
  ],
  track: "quantitative",
  order: 40,
  prerequisites: ["momentum-strategies"]
};
