LESSON_REGISTRY["volatility-surface"] = {
  id: "volatility-surface",
  title: "The Volatility Surface",
  track: "advanced",
  category: "advanced-strategies",
  difficulty: "advanced",
  order: 50,
  estimatedMinutes: 15,
  xpReward: 100,
  prerequisites: ["market-profile"],
  sections: [
    {
      type: "text",
      content: "<h3>Beyond a Single Implied Volatility Number</h3><p>The Black-Scholes model assumes volatility is constant across all strikes and expirations. In practice, this is demonstrably false. The implied volatility (IV) derived from market option prices varies systematically with both the option's strike price and its expiration date. Plotting IV across these two dimensions creates the <strong>volatility surface</strong> — a three-dimensional structure that encodes the market's collective beliefs about future price distributions.</p><p>The volatility surface has two primary dimensions:</p><ul><li><strong>The volatility smile/skew:</strong> IV varies across strike prices for a single expiration. In equity markets, lower strikes (puts) typically have higher IV than higher strikes (calls) — this downward slope is called the <em>skew</em> or <em>smirk</em>.</li><li><strong>The term structure:</strong> IV varies across expirations for a single strike (usually at-the-money). It can be upward-sloping (contango), flat, or inverted (backwardation) depending on market conditions.</li></ul>"
    },
    {
      type: "key-concept",
      title: "Why the Volatility Skew Exists in Equity Markets",
      content: "The equity volatility skew (higher IV for lower strikes) exists for three reinforcing reasons: (1) Supply and demand — institutional investors consistently buy out-of-the-money puts for portfolio protection, creating excess demand that inflates put IV relative to call IV. (2) Leverage effect — as stock prices fall, companies become more leveraged (debt stays constant while equity value falls), increasing fundamental business risk and justifying higher volatility expectations at lower prices. (3) Jump risk — markets exhibit negative skewness (crash risk); large downside moves are more common than symmetrically large upside moves. The skew quantifies the market's insurance premium for tail risk. A steep skew indicates high demand for downside protection; a flat skew is unusual and often precedes volatility regime changes."
    },
    {
      type: "text",
      content: "<h3>Term Structure: Reading the Shape of Future Uncertainty</h3><p>The volatility term structure describes how IV changes across expiration dates, usually measured at-the-money. In normal market conditions, near-term IV is lower than longer-term IV (upward-sloping or contango), reflecting that there is more uncertainty over longer periods but near-term conditions are relatively calm.</p><p>Term structure inverts (backwardation) when there is an immediate, acute risk — an earnings announcement, a central bank meeting, a geopolitical event. The near-term expiration is most affected by the event; longer-term expirations reflect that the event will resolve, returning to a calmer baseline. Extreme inversion in the VIX term structure has historically been one of the most reliable indicators of genuine market stress.</p><p>The <strong>variance risk premium (VRP)</strong> refers to the consistent tendency for implied volatility to exceed realized volatility over time. This premium compensates option sellers for bearing tail risk. The VRP is the structural reason that systematic volatility-selling strategies have historically been profitable — they are, in effect, insurance companies collecting premiums.</p>"
    },
    {
      type: "text",
      content: "<h3>Local Volatility and Stochastic Volatility Models</h3><p>Because Black-Scholes fails to reproduce the observed surface, practitioners use more sophisticated models:</p><p><strong>Local Volatility Model (Dupire/Derman-Kani):</strong> Constructs a unique volatility function sigma(S, t) that exactly reproduces the observed surface. It treats volatility as a deterministic function of the current stock price and time. It prices exotic options consistently with the observed surface but has a known weakness: it predicts that the skew will 'flatten' as the stock price moves, which does not match observed dynamics.</p><p><strong>Stochastic Volatility Models (Heston, SABR):</strong> Model volatility as a separate stochastic process correlated with the underlying. The Heston model uses a mean-reverting volatility process. SABR (Stochastic Alpha Beta Rho) is standard in interest rate markets. These models capture the observed dynamic behavior of the skew more accurately but are harder to calibrate. The parameter rho (correlation between stock and vol processes) is the primary driver of skew in these models — a highly negative rho produces the equity market's characteristic downward skew.</p>"
    },
    {
      type: "comparison-table",
      headers: ["Model", "Volatility Treatment", "Strengths", "Weaknesses", "Primary Use Case"],
      rows: [
        ["Black-Scholes", "Constant; single number", "Simple; closed-form; universal benchmark", "Cannot explain the smile; misprices OTM options", "Baseline reference; European vanilla options"],
        ["Local Volatility (Dupire)", "Deterministic function of S and t", "Exactly fits the surface; arbitrage-free", "Skew dynamics are empirically wrong; poor for exotics with path dependence", "Barrier options pricing; surface interpolation"],
        ["Heston (Stochastic Vol)", "Mean-reverting stochastic process", "Captures smile and skew dynamics; realistic Vol-of-Vol", "Complex calibration; semi-closed form only", "Equity derivatives; forward skew products"],
        ["SABR", "Stochastic alpha (vol) and beta (backbone)", "Industry standard for rates; good smile fit", "Can produce arbitrage at deep strikes; complex", "Interest rate options; swaptions; caps/floors"],
        ["Rough Volatility (Bergomi)", "Fractional Brownian motion; H < 0.5", "Explains short-term term structure; matches historical vol behavior", "Computationally expensive; no closed form", "Short-dated options; VIX futures pricing"]
      ]
    },
    {
      type: "key-concept",
      title: "Trading the Surface: Practical Applications",
      content: "The volatility surface is not just a theoretical construct — it is a tradable asset class. Key trading applications: (1) Skew trading — if the skew steepens unusually, one can buy calls and sell puts (or vice versa) to position for mean reversion in relative IV. Risk reversals (long call, short put, or reverse) are the primary instrument. (2) Calendar spreads — positioning for changes in term structure. Buying near-term IV and selling longer-term IV (a calendar) profits if the term structure flattens. (3) Dispersion trading — selling index implied volatility while buying single-stock implied volatility (or vice versa). The index vol usually trades at a premium to the weighted average of component vols due to correlation risk, creating a systematic opportunity. (4) Volatility surface arbitrage — if the surface is not internally consistent (e.g., it implies negative forward volatility for some period), a near-certain arbitrage exists. Sophisticated shops maintain continuous models of the surface to detect such mispricings."
    }
  ]
};
