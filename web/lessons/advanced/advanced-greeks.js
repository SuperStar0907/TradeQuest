LESSON_REGISTRY["advanced-greeks"] = {
  id: "advanced-greeks",
  title: "Advanced Options Greeks",
  track: "advanced",
  category: "advanced-strategies",
  difficulty: "advanced",
  order: 52,
  estimatedMinutes: 15,
  xpReward: 100,
  prerequisites: ["exotic-options"],
  sections: [
    {
      type: "text",
      content: "<h3>Second and Third Order Greeks: Why They Matter</h3><p>Most options education covers the first-order Greeks: delta (sensitivity to price), vega (sensitivity to volatility), and theta (sensitivity to time). These describe how an option's value changes for a small, instantaneous change in a single input. But markets do not move in small, isolated steps — they move in jumps, and multiple inputs change simultaneously. The higher-order Greeks describe how the first-order Greeks themselves change, enabling more precise risk management and more sophisticated trading strategies.</p><p>For a derivatives desk running a large book, higher-order Greeks are not theoretical curiosities — they are daily risk management requirements. Ignoring them leads to large, unexpected P&L swings that cannot be explained by the first-order Greeks alone.</p>"
    },
    {
      type: "key-concept",
      title: "Rho: Interest Rate Sensitivity",
      content: "Rho measures the sensitivity of an option's price to a 1% change in the risk-free interest rate. For standard equity options, rho is relatively minor except for very long-dated options (LEAPS). Calls have positive rho (higher rates increase call value because the cost-of-carry argument makes the call more valuable versus holding the stock). Puts have negative rho (higher rates decrease put value). Rho becomes critically important in: (1) interest rate options and bond options, where it is the primary risk; (2) long-dated equity options where a 100bps rate move can materially affect value; (3) dividend-adjusted rho for stocks with known future dividends. In the post-2022 rate environment, rho has received renewed attention from equity options traders who previously ignored it."
    },
    {
      type: "text",
      content: "<h3>Charm and Speed: Time-Dependent Dynamics</h3><p><strong>Charm</strong> (also called delta decay or DdeltaDtime) measures the rate of change of delta with respect to time. It tells you how much delta will change as one day passes, holding everything else constant. Charm is particularly important for:</p><ul><li>Delta-neutral traders who rebalance daily: if charm is large, your overnight delta will drift significantly from zero even without any price movement.</li><li>Short-dated options near expiration: as theta accelerates, so does charm. An at-the-money option rapidly approaches a delta of 0.50 and then snaps to either 0 or 1 as it approaches expiration.</li><li>Weekend decay: charm is often larger going into a weekend because three days of theta decay occur but the underlying price does not move.</li></ul><p><strong>Speed</strong> (DgammaDspot) measures the rate of change of gamma with respect to the underlying price. If you know your current gamma, speed tells you how gamma will change as the stock moves. Positive speed means your gamma increases as price rises; this is important for understanding how your hedge ratio will change in a trending market versus a reverting one.</p>"
    },
    {
      type: "text",
      content: "<h3>Vanna and Volga: The Cross-Greeks</h3><p><strong>Vanna</strong> (DdeltaDvol, or equivalently DvegaDspot) measures how delta changes when implied volatility changes, and how vega changes when the underlying price changes. These are two perspectives on the same cross-partial derivative. Vanna is crucial for:</p><ul><li><strong>Delta hedging accuracy:</strong> When you hedge delta with a delta-neutral position, a sudden change in implied volatility will move your delta. If vanna is large (as it is for deep OTM options), your hedge can become materially wrong after a vol spike.</li><li><strong>Skew trading:</strong> Vanna explains much of the P&L of risk reversal positions. When spot falls and vol rises simultaneously (the typical equity market stress pattern), a long put has positive vanna — both the delta increase from spot falling and the vega increase from vol rising reinforce each other.</li></ul><p><strong>Volga</strong> (DvegaDvol, also called vomma or vega convexity) measures how vega changes when implied volatility changes. A positive volga position benefits from large moves in implied volatility in either direction — it is a long convexity position in volatility space. Long straddles have positive volga; short straddles have negative volga. Volga is the reason that options on options (compound options) and variance swaps have a specific premium over vanilla options.</p>"
    },
    {
      type: "comparison-table",
      headers: ["Greek", "Formal Definition", "Sign for Long Call", "Most Impactful For", "Trading Use Case"],
      rows: [
        ["Rho", "dV/dr (rate change)", "Positive", "LEAPS, rate-sensitive underlyings", "Adjusting book sensitivity before Fed meetings"],
        ["Charm", "d(Delta)/dt", "Negative (delta decays toward 0 for OTM)", "Short-dated options, pre-expiry risk management", "Daily delta rebalancing; weekend gamma exposure"],
        ["Speed", "d(Gamma)/dS", "Positive for OTM, negative for ITM", "Books with large gamma near strikes", "Understanding how hedge requirements change as price moves"],
        ["Vanna", "d(Delta)/d(sigma) = d(Vega)/dS", "Positive (typically)", "Risk reversals; OTM options during vol spikes", "Explaining delta hedge drift after volatility moves"],
        ["Volga", "d(Vega)/d(sigma)", "Positive", "Long-dated options; OTM options; compound structures", "Positioning for vol-of-vol events; variance swap replication"],
        ["Color", "d(Charm)/dt = d(Gamma)/dt", "Varies with moneyness and time", "Daily gamma risk management over multi-day periods", "Forecasting how gamma P&L will evolve through expiration week"]
      ]
    },
    {
      type: "key-concept",
      title: "Practical Risk Management with Higher-Order Greeks",
      content: "A derivatives desk running a market-making book uses higher-order Greeks as part of a daily risk report. The standard practice is to run 'scenario analysis' — repricing the entire book under a grid of spot and volatility moves (e.g., spot up 1%/2%/5% and vol up 2/5/10 points, and all combinations). The P&L from each scenario is decomposed into contributions from delta, gamma, vega, vanna, volga, and theta. If a large P&L attribution comes from vanna but the desk is not explicitly managing vanna, that is a risk that needs to be hedged. For individual options traders, the key practical insight is: when you buy a low-IV straddle before an event, your P&L depends not just on how much realized volatility exceeds implied (your gamma P&L), but also on how much implied volatility itself moves (volga exposure) and how both spot and vol move together (vanna exposure). Thinking only in delta and theta terms will leave you surprised by these higher-order effects."
    }
  ]
};
