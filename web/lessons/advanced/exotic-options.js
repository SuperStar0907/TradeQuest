LESSON_REGISTRY["exotic-options"] = {
  id: "exotic-options",
  title: "Exotic Options",
  track: "advanced",
  category: "advanced-strategies",
  difficulty: "advanced",
  order: 51,
  estimatedMinutes: 14,
  xpReward: 95,
  prerequisites: ["volatility-surface"],
  sections: [
    {
      type: "text",
      content: "<h3>Beyond Vanilla: Path-Dependent Payoffs</h3><p>Vanilla options (standard calls and puts) have payoffs that depend only on the underlying price at expiration relative to the strike. Exotic options are any options whose payoffs are more complex — they may depend on the <em>path</em> the underlying took to reach expiration, specific price levels it crossed, an average of prices over a period, or the maximum/minimum price it ever reached. This path dependency is what fundamentally distinguishes exotics from vanillas and makes them harder to price and hedge.</p><p>Exotics are primarily traded over-the-counter (OTC) by corporations (for hedging specific cash flows), institutional investors, and structured product desks. Retail access is limited, but understanding exotics provides deep insight into how risk is customized and priced in professional markets.</p>"
    },
    {
      type: "key-concept",
      title: "Barrier Options: Knock-In and Knock-Out",
      content: "Barrier options activate or deactivate depending on whether the underlying price touches a specified barrier level during the option's life. Knock-Out (KO) options start as live options but immediately expire worthless if the underlying touches the barrier — they are cheaper than vanilla options because the holder takes the risk of the option disappearing. Knock-In (KI) options are dormant and only become live vanilla options if the underlying touches the barrier — they are cheaper than vanillas because the holder may never receive the option at all. Key subtypes: Up-and-Out (underlying rises to the barrier, option dies), Down-and-Out (underlying falls to barrier, option dies), Up-and-In, Down-and-In. Barrier proximity creates significant hedging challenges — the dealer's delta can be extreme near the barrier, creating potential for violent price reactions as dealers hedge."
    },
    {
      type: "text",
      content: "<h3>Asian Options: Averaging Reduces Manipulation Risk</h3><p>Asian options (also called average options) have payoffs based on the <em>average</em> price of the underlying over a specified period, rather than the price at a single point in time. There are two variants:</p><ul><li><strong>Average Price Option:</strong> The payoff is based on the difference between the average price and the fixed strike: max(Avg - K, 0) for a call. The most common type.</li><li><strong>Average Strike Option:</strong> The strike itself is set as the average, and the payoff is the difference between the final price and that average.</li></ul><p>Asian options are cheaper than vanilla options because averaging reduces variance — extreme single-day moves affect the payoff much less. They are heavily used by corporations hedging commodity exposures (e.g., an airline hedging monthly jet fuel costs) where the economic exposure is an average price over time, not a single day's price. Pricing requires numerical methods (Monte Carlo simulation) because the distribution of the average of a lognormal process does not have a simple closed form.</p>"
    },
    {
      type: "text",
      content: "<h3>Lookback and Binary Options</h3><p><strong>Lookback options</strong> grant the holder the benefit of hindsight — the payoff depends on the maximum or minimum price over the option's life. A lookback call has a payoff of (S_max - K) or (S_T - S_min) depending on the variant. They are the most expensive vanilla-like options because they guarantee the best possible outcome. Their primary use is theoretical (they define the upper bound of any strategy's value) and in structured products where the complexity is embedded in a capital-protection wrapper.</p><p><strong>Binary (Digital) options</strong> pay a fixed amount if the underlying is above (or below) the strike at expiration, and nothing otherwise. They have a discontinuous payoff — zero for a fraction of a cent below the strike, and the full fixed payment for a fraction of a cent above it. This discontinuity creates severe delta and gamma challenges near expiration: the delta can be enormous when the underlying is near the strike close to expiry. Binary options on regulated exchanges (Nadex) are used by retail traders; OTC digitals are common in FX markets for expressing directional views. Warning: many unregulated binary option products are outright scams — the regulatory landscape is important to verify.</p>"
    },
    {
      type: "comparison-table",
      headers: ["Exotic Type", "Payoff Dependency", "Relative Cost vs Vanilla", "Primary Hedging Use Case", "Key Pricing Challenge"],
      rows: [
        ["Barrier (Knock-Out)", "Path: whether barrier was touched", "Cheaper (risk of extinguishment)", "Corporations: reduce premium cost while accepting barrier risk", "Delta discontinuity near the barrier; local vol model sensitivity"],
        ["Barrier (Knock-In)", "Path: whether barrier was touched", "Cheaper (option may never activate)", "Structured products; leveraged directional views", "Same as KO; requires careful monitoring of barrier proximity"],
        ["Asian (Average Price)", "Path: average of prices over period", "Cheaper (averaging reduces variance)", "Commodity hedging; FX treasury management", "No closed-form solution; Monte Carlo or approximation methods"],
        ["Lookback", "Path: maximum or minimum over period", "Expensive (guaranteed best outcome)", "Theoretical benchmark; structured capital-guarantee products", "Path simulation cost; sensitive to dividend assumptions"],
        ["Binary (Digital)", "Single point: above/below strike at expiry", "Depends on probability; can be cheap or expensive", "FX event trading; expressing high-conviction binary outcomes", "Discontinuous payoff creates extreme delta/gamma near strike/expiry"],
        ["Quanto", "Underlying in one currency, payoff in another at fixed rate", "Depends on correlation premium", "Cross-border equity exposure without currency risk", "Correlation between underlying and exchange rate must be modeled"]
      ]
    },
    {
      type: "key-concept",
      title: "Why Exotics Create Hedging Complexity",
      content: "The dealer who sells an exotic option faces hedging challenges that do not exist with vanilla options. For a knock-out option, as the underlying approaches the barrier, the dealer's delta can shift from positive to strongly negative within a tiny price range — creating a potential need to sell massive quantities of the underlying in a short time window. This mechanical hedging activity can itself cause the barrier to be hit, creating a 'self-fulfilling' price move known as a 'barrier cascade.' Sophisticated participants track known barrier levels on heavily traded instruments (particularly FX pairs) and position themselves to profit from this mechanical dealer hedging. The existence of large open interest at barrier levels is one reason certain 'round number' price levels in FX and equity indices show unusual magnetic attraction or repulsion."
    }
  ]
};
