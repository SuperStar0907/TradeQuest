LESSON_REGISTRY["defi-tokenomics"] = {
  id: "defi-tokenomics",
  title: "DeFi Mechanics and Tokenomics",
  track: "expert",
  category: "expert-research",
  difficulty: "expert",
  order: 62,
  estimatedMinutes: 15,
  xpReward: 100,
  prerequisites: ["volatility-derivatives"],
  sections: [
    {
      type: "text",
      content: "<h3>Automated Market Makers: The Constant Function Model</h3><p>Automated market makers (AMMs) replace the traditional order book with a deterministic pricing function derived from pool reserves. Uniswap v2 uses the constant product formula: x * y = k, where x and y are the reserves of two tokens and k is a constant maintained by the protocol. Any trade changes the ratio of x to y, and the price of y in terms of x is always x/y at the margin.</p><p>The constant product AMM has several non-obvious properties that professionals must understand:</p><ul><li><strong>Infinite liquidity</strong> — The formula allows trading at any size; the pool never runs out, but price impact increases with trade size (the curve is hyperbolic, so larger trades push price further from the current point)</li><li><strong>No price oracle</strong> — The AMM does not fetch external prices; it converges to fair value through arbitrageurs who trade against it when it diverges from the market clearing price</li><li><strong>Price manipulation vulnerability</strong> — Using AMM spot prices as oracles creates flash loan attack vectors; time-weighted average prices (TWAPs) over many blocks provide manipulation resistance at the cost of staleness</li></ul>"
    },
    {
      type: "key-concept",
      title: "Impermanent Loss: The Precise Quantification",
      content: "Impermanent loss (IL) is the opportunity cost of providing liquidity relative to simply holding the underlying tokens. For a constant product AMM, if the price of token Y relative to token X moves by a factor of r (so r = P_new / P_initial), the impermanent loss as a fraction of the hold value is: IL = 2*sqrt(r)/(1+r) - 1. At r=2 (price doubles), IL = -5.7%. At r=4, IL = -20%. At r=0.25 (price falls 75%), IL = -20%. IL is symmetric in log-price space: a 2x move and a 0.5x move produce the same IL percentage. IL becomes permanent when the liquidity provider withdraws while prices are displaced. Fee revenue may compensate for IL if trading volume is sufficiently high — the break-even relationship is: required fee revenue > |IL| * pool value. In practice, IL is the dominant cost for pairs with high price divergence (e.g., ETH/USDC), while fee revenue dominates for stable pairs (e.g., USDC/USDT)."
    },
    {
      type: "text",
      content: "<h3>Liquidity Pool Dynamics and Concentrated Liquidity</h3><p>Uniswap v3 introduced concentrated liquidity, allowing LPs to deploy capital within a specified price range [P_lower, P_upper] rather than across the entire price curve. Within the active range, the LP earns fees as if their capital were deployed over the full range — capital efficiency can be 10x-100x higher for narrow range positions around the current price, compared to v2's uniform distribution.</p><p>The trade-off is increased active management burden and amplified impermanent loss. If the price moves outside the LP's range, their position becomes entirely composed of the depreciating asset (analogous to a covered call position that gets exercised). Concentrated LPs must choose ranges based on expected volatility: a tighter range earns more fees but experiences full IL and becomes fully one-sided more frequently; a wider range has more resilience but lower fee APR.</p><p>Gamma strategies emerged as automated LP management protocols that rebalance range positions dynamically — effectively implementing a delta-neutral LP position by continuously adjusting ranges and hedging with perps, attempting to capture fee revenue while neutralizing directional exposure.</p>"
    },
    {
      type: "text",
      content: "<h3>Token Valuation Frameworks</h3><p>Valuing DeFi protocol tokens is methodologically different from valuing equities. Three frameworks are in active use among practitioners:</p><ul><li><strong>Cash flow to token (fee discounting)</strong> — For protocols that distribute fees to token holders, discount projected fee revenue at a risk-adjusted rate. Applicable to protocols like GMX (fee sharing) or Curve (revenue to veCRV stakers). Key inputs: fee revenue growth rate, protocol market share, and take rate. Subject to severe uncertainty due to short operating histories and regulatory risk.</li><li><strong>Total Value Locked (TVL) multiples</strong> — Price-to-TVL ratios are analogous to price-to-assets ratios for banks. A lending protocol trading at 0.05x TVL is cheap if the fee take rate on that TVL is sustainable; a DEX at 0.5x TVL may be rich if volume is declining. TVL is gameable via incentive emissions.</li><li><strong>Token supply dynamics</strong> — Emission schedules, vesting cliffs, and buy-back-and-burn mechanics affect token supply over time. A protocol with 20% of tokens unlocking in 6 months has a fundamental headwind regardless of fee revenue, because locked token holders will sell on unlock. Fully diluted valuation (FDV) is more informative than market cap when unlock schedules are front-loaded.</li></ul>"
    },
    {
      type: "key-concept",
      title: "Protocol Risk Taxonomy for DeFi Positions",
      content: "DeFi positions carry overlapping risk layers that traditional finance risk frameworks do not fully capture. Smart contract risk: the protocol code may have exploitable bugs; a single re-entrancy vulnerability can drain an entire lending pool in one transaction (Cream Finance, Euler Finance exploits). Oracle risk: price manipulation attacks occur when an attacker can move an AMM price to trigger a cascade of liquidations in a dependent lending protocol using a flash loan. Governance risk: token-weighted governance creates plutocratic control; a majority token holder can vote to redirect protocol treasury to themselves (e.g., Build Finance DAO attack). Liquidity risk: low-TVL pools can be depleted rapidly; deep liquidity should be verified, not assumed. Regulatory risk: the legal status of liquidity provision, yield farming, and token ownership varies by jurisdiction and is actively contested."
    },
    {
      type: "comparison-table",
      headers: ["Mechanism", "Yield Source", "Primary Risk", "Typical APR Range", "Capital Efficiency"],
      rows: [
        ["v2 AMM LP (volatile pair)", "Trading fees (0.3% per swap)", "Impermanent loss from price divergence", "5-40% (highly variable)", "Low — capital spread over full price range"],
        ["v3 Concentrated LP (narrow range)", "Trading fees (higher share per dollar)", "Amplified IL; active management required", "20-200%+ (highly variable)", "High — 10-100x v2 for same capital"],
        ["Stable AMM LP (USDC/USDT)", "Trading fees on stable swaps", "De-peg risk; smart contract risk", "1-8%", "Very high — minimal IL"],
        ["Lending Protocol (supply)", "Interest from borrowers", "Smart contract risk; borrower default (overcollateralized)", "2-15%", "Moderate"],
        ["Yield Farming (incentive tokens)", "Protocol token emissions", "Token price depreciation; mercenary capital exodus", "10-500%+ (temporary)", "Variable; depends on emission schedule"]
      ]
    }
  ]
};
