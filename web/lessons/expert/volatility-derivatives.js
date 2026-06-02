LESSON_REGISTRY["volatility-derivatives"] = {
  id: "volatility-derivatives",
  title: "Volatility Derivatives and the Vol Surface",
  track: "expert",
  category: "expert-research",
  difficulty: "expert",
  order: 61,
  estimatedMinutes: 15,
  xpReward: 100,
  prerequisites: ["hft-dynamics"],
  sections: [
    {
      type: "text",
      content: "<h3>Volatility as a Tradable Asset Class</h3><p>Volatility is not merely a parameter in an options pricing model — it is itself a market with its own supply and demand dynamics, term structure, and risk premium. The volatility risk premium (VRP) — the systematic tendency for implied volatility to exceed realized volatility — is one of the most persistent and well-documented risk premia in financial markets. Selling volatility (through short options positions or variance swaps) harvests this premium, but exposes the seller to left-tail events where realized volatility dramatically exceeds implied volatility.</p><p>The VIX index, calculated from a model-free replication of the 30-day expected variance of the S&P 500 using a strip of options across all strikes, is the primary benchmark for US equity implied volatility. VIX futures allow direct trading of forward volatility, and the persistent VIX futures curve structure (typically in contango) creates a systematic roll decay for long VIX futures positions — the mechanism exploited by short-volatility strategies like short VIX ETPs.</p>"
    },
    {
      type: "key-concept",
      title: "Variance Swaps and the Replication Argument",
      content: "A variance swap pays the buyer (realized variance - strike variance) * notional at expiration. The strike is set at initiation so the contract has zero value. The key insight is that variance swaps can be replicated by a continuous strip of options weighted by 1/K^2, where K is the strike price. This model-free replication means the fair variance swap strike is directly observable from option prices without assuming any dynamics for the underlying. The difference between the variance swap strike and the expected realized variance is the variance risk premium. Variance swaps are preferred over VIX futures by sophisticated hedgers because: (1) they have no path dependency (VIX futures depend on the path of the VIX, not just terminal realized variance), and (2) the payoff is linear in variance, not in the square root of variance (VIX), making hedging cleaner."
    },
    {
      type: "text",
      content: "<h3>The Volatility Term Structure and Its Trading Implications</h3><p>The term structure of implied volatility describes how ATM implied vol varies across expiration dates. In normal regimes, the term structure slopes upward — near-term vol is lower than long-term vol because the market expects current calm to persist but acknowledges long-run uncertainty. During stress events, the term structure inverts as near-term vol spikes above long-term vol, reflecting acute uncertainty that is expected to resolve. Trading the slope of the term structure is a distinct strategy from trading the level of volatility.</p><p>Calendar spread strategies exploit mean reversion in the term structure slope:</p><ul><li><strong>Flattener</strong> — Long front-month volatility (VIX futures or options), short back-month. Profits when near-term vol spikes relative to long-term vol (e.g., before a binary event). </li><li><strong>Steepener</strong> — Short front-month, long back-month. Profits from contango roll and normalization of an inverted curve after a stress event subsides.</li><li><strong>VIX roll trade</strong> — Systematically shorting front-month VIX futures and rolling forward, capturing the average contango premium historically around 4-5 VIX points per roll cycle. Exposed to blowup risk when VIX spikes sharply (February 2018 XIV event).</li></ul>"
    },
    {
      type: "text",
      content: "<h3>Vol-of-Vol and Convexity in Volatility Products</h3><p>Volatility of volatility (vol-of-vol) measures how much implied volatility itself fluctuates. High vol-of-vol regimes make long volatility positions more valuable due to the convexity of options: holding a long straddle benefits not just from realized volatility exceeding strike but from any large move in implied volatility itself (vega PnL). The VVIX index (\"VIX of VIX\") measures the 30-day implied vol of VIX options, providing a direct measure of vol-of-vol.</p><p>Convexity effects are central to understanding the difference between variance swaps and volatility swaps. A volatility swap pays (realized vol - strike vol), while a variance swap pays (realized variance - strike variance). Because variance is the square of volatility, variance is always a convex function of volatility. Jensen's inequality implies that E[variance] > (E[vol])^2, so variance swap strikes always trade above the square of volatility swap strikes. The difference — the convexity adjustment — widens as vol-of-vol increases, making this spread itself a tradable expression of vol-of-vol.</p>"
    },
    {
      type: "key-concept",
      title: "Skew Trading: Risk Reversals and the Volatility Smile",
      content: "The volatility smile (or smirk in equity markets) describes the tendency for implied volatility to be higher for out-of-the-money puts than for ATM options, and higher still for deep OTM puts relative to OTM calls of the same delta. This reflects the market's pricing of crash risk. The 25-delta risk reversal — the difference between 25-delta call IV and 25-delta put IV — is the standard metric for skew. In equity markets, this is persistently negative (puts are richer than calls), reflecting demand for downside protection and the skewness of equity return distributions. Skew trading strategies include: (1) selling OTM put spreads to capture rich put premium when skew is historically elevated, (2) buying risk reversals before events expected to be positively skewed (e.g., FDA approvals where the upside scenario is large), and (3) gamma-weighted skew hedges that isolate the skewness premium from the level of implied vol."
    },
    {
      type: "comparison-table",
      headers: ["Instrument", "Payoff Structure", "Path Dependency", "Primary Risk", "Typical Users"],
      rows: [
        ["VIX Futures", "Linear in VIX level at expiration", "Yes — depends on VIX path, not realized variance", "Roll decay in contango; spike risk", "Macro hedgers; retail vol traders"],
        ["Variance Swap", "Linear in realized variance minus strike", "No — pure realized variance exposure", "Jump risk (tail events inflate variance payoff)", "Sophisticated hedgers; vol desk prop traders"],
        ["Volatility Swap", "Linear in realized vol minus strike", "No — pure realized vol exposure", "Vol-of-vol risk; convexity gap to variance swap", "Vol desks seeking cleaner vol exposure"],
        ["VIX Options", "Non-linear; depend on VIX level", "Yes — depends on VIX, not underlying", "Expensive premium; gamma decay", "Tail hedgers; skew traders"],
        ["S&P Options Strip (1/K^2 weighted)", "Replicates variance swap", "No", "Execution costs; discrete strike replication error", "Dealers hedging variance swap books"]
      ]
    }
  ]
};
