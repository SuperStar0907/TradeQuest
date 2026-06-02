LESSON_REGISTRY["the-greeks-advanced"] = {
  id: "the-greeks-advanced",
  title: "The Greeks: Gamma, Theta & Vega",
  track: "options",
  category: "options-greeks",
  difficulty: "intermediate",
  order: 5,
  estimatedMinutes: 15,
  xpReward: 90,
  prerequisites: ["the-greeks-delta"],
  sections: [
    {
      type: "text",
      content: "<h3>Beyond Delta: The Full Greek Alphabet</h3><p>Delta tells you how much an option moves when the stock moves, but three other forces are constantly acting on your option's price: the rate of delta change (gamma), the passage of time (theta), and shifts in implied volatility (vega). Understanding these Greeks together gives you a complete picture of the risks and opportunities in any options position.</p><p>Professional traders don't just manage delta — they manage all four Greeks simultaneously. A trade might look great from a delta perspective (strong directional exposure), but if theta is eating away $50 per day and gamma is working against you, the trade could be a slow bleed. Let's examine each Greek in detail.</p>"
    },
    {
      type: "text",
      content: "<h3>Gamma: The Rate of Delta Change</h3><p><strong>Gamma</strong> measures how much delta changes for every $1 move in the underlying stock. Think of delta as speed and gamma as acceleration. If an option has delta 0.50 and gamma 0.05, a $1 stock increase would push delta from 0.50 to approximately 0.55.</p><p>Gamma is highest for <strong>at-the-money options near expiration</strong>. This makes intuitive sense: when the stock is right at the strike price with little time left, a small move in either direction dramatically changes whether the option will expire ITM or OTM, causing delta to swing violently.</p><p><strong>Example:</strong> It's Friday morning (expiration day) and AAPL is at $180. The $180 Call has delta 0.50 and gamma 0.15. If AAPL moves to $181, delta jumps to 0.65. If AAPL moves to $182, delta is now 0.80. The option is accelerating in your favor. But the reverse is equally dramatic — a drop to $179 pushes delta down to 0.35, and your gains evaporate rapidly.</p><p><strong>Gamma risk</strong> is particularly dangerous for option sellers near expiration. If you sold an ATM option and the stock is hovering near your strike on expiration day, gamma can cause wild swings in your P&L. This is why many traders close short options positions before the final week.</p>"
    },
    {
      type: "key-concept",
      title: "Gamma: Friend to Buyers, Foe to Sellers",
      content: "Option buyers are \"long gamma\" — gamma works in their favor. When the stock moves in their direction, delta increases, accelerating their gains. When it moves against them, delta decreases, decelerating their losses. Option sellers are \"short gamma\" — the opposite applies. This asymmetry is a key reason why option buyers pay a premium (theta) for the privilege of being long gamma."
    },
    {
      type: "text",
      content: "<h3>Theta: Time Decay</h3><p><strong>Theta</strong> measures how much value an option loses each day due solely to the passage of time, assuming nothing else changes. It is expressed as a negative number for long options because time decay reduces an option's value.</p><p>If an option has theta of <strong>-0.08</strong>, it loses approximately $0.08 per share ($8 per contract) each day. Over a week, that's $56 gone — not because the stock moved against you, but simply because time passed.</p><p>Theta is not linear. It accelerates as expiration approaches:</p><ul><li><strong>90 days to expiration:</strong> Theta might be -$0.02 per day — barely noticeable.</li><li><strong>30 days to expiration:</strong> Theta increases to -$0.05 per day.</li><li><strong>7 days to expiration:</strong> Theta jumps to -$0.12 per day.</li><li><strong>1 day to expiration:</strong> Theta can be -$0.30 or more for ATM options.</li></ul><p>This acceleration follows a rough \"square root\" curve. An option loses about one-third of its time value in the first half of its life and two-thirds in the second half. This is why buying options with fewer than 14 days to expiration is risky — time decay is brutal.</p><p><strong>For option sellers,</strong> theta is your best friend. Every day that passes puts money in your pocket. This is why strategies like selling covered calls and cash-secured puts are popular among income-focused traders — they profit from the relentless decay of time value.</p>"
    },
    {
      type: "text",
      content: "<h3>Vega: Volatility Sensitivity</h3><p><strong>Vega</strong> measures how much an option's price changes for every <strong>1 percentage point change</strong> in implied volatility (IV). Unlike delta (which tracks stock price) and theta (which tracks time), vega tracks the market's <em>expectation</em> of future volatility.</p><p>If an option has vega of <strong>0.12</strong> and implied volatility rises from 30% to 31%, the option's price increases by approximately $0.12 per share ($12 per contract). If IV drops from 30% to 29%, the option loses $0.12.</p><p>Vega is highest for <strong>at-the-money, longer-dated options</strong>. A 90-day ATM call might have vega of 0.25, while a 7-day ATM call might have vega of only 0.05. This means longer-dated options are much more sensitive to volatility changes.</p><p><strong>Why vega matters in practice:</strong></p><ul><li><strong>Before earnings:</strong> IV typically rises as uncertainty increases. If you buy options two weeks before earnings, rising IV can add value to your position even if the stock doesn't move. But after earnings are announced, IV collapses — this is called <em>IV crush</em> — and your option can lose 20-40% of its value overnight even if the stock moves in your direction.</li><li><strong>Market fear events:</strong> When the market sells off sharply, the VIX (a measure of overall market IV) spikes. Put options gain value from both the stock decline (delta) and the IV increase (vega). This \"double boost\" is why puts can return 200-500% during market crashes.</li><li><strong>Low volatility environments:</strong> When IV is low, options are cheap. This can be a good time to buy options (you get more bang for your buck), but be aware that IV can stay low for extended periods.</li></ul>"
    },
    {
      type: "key-concept",
      title: "IV Crush — The Vega Trap",
      content: "Implied volatility routinely rises 50-100% before earnings announcements and collapses immediately after. If you buy a call before earnings and the stock rises 3%, you might still lose money because the IV crush (vega loss) exceeds the directional gain (delta gain). This is the most common way beginners lose money with options around earnings. Always check IV rank before buying options near a catalyst event."
    },
    {
      type: "text",
      content: "<h3>How the Greeks Interact</h3><p>In practice, all four Greeks act simultaneously on your position. Here is how to think about their interactions:</p><ul><li><strong>Delta vs. Theta (the core trade-off):</strong> As an option buyer, you need the stock to move (delta gains) fast enough to overcome daily time decay (theta losses). If you buy an ATM call with delta 0.50 and theta -0.08, the stock needs to rise about $0.16 per day just to break even against time decay.</li><li><strong>Gamma vs. Theta (the volatility trade-off):</strong> Gamma and theta are inversely related. Options with high gamma (ATM, near-expiration) also have high theta. You get the benefit of accelerating gains if the stock moves, but you pay dearly in time decay if it doesn't. This is why short-dated ATM options are high-risk, high-reward.</li><li><strong>Vega vs. Theta (the volatility bet):</strong> Long-dated options have high vega and low theta. Short-dated options have low vega and high theta. Buying long-dated options is partly a bet on volatility rising. Selling short-dated options is a bet on time decay overcoming any volatility shifts.</li></ul><p>The key takeaway: no Greek exists in isolation. Every options trade involves trade-offs between directional exposure (delta), acceleration (gamma), time cost (theta), and volatility sensitivity (vega). Understanding these trade-offs is what separates profitable options traders from unprofitable ones.</p>"
    },
    {
      type: "comparison-table",
      headers: ["Greek", "Measures", "Range", "Highest For", "Buyer Impact", "Seller Impact"],
      rows: [
        ["Delta", "Price change per $1 stock move", "0 to ±1.00", "Deep ITM options", "Positive (calls) / Negative (puts)", "Opposite of buyer"],
        ["Gamma", "Delta change per $1 stock move", "0 to ~0.15", "ATM options near expiration", "Positive — gains accelerate", "Negative — losses accelerate"],
        ["Theta", "Daily time decay", "-$0.01 to -$0.50+", "ATM options near expiration", "Negative — costs money daily", "Positive — earns money daily"],
        ["Vega", "Price change per 1% IV change", "0 to ~0.30", "ATM long-dated options", "Positive — rising IV helps", "Negative — rising IV hurts"]
      ]
    },
    {
      type: "key-concept",
      title: "Putting It All Together",
      content: "Before entering any options trade, check all four Greeks. Ask yourself: 1) How much directional exposure do I have? (Delta) 2) How will my exposure change if the stock moves? (Gamma) 3) How much am I paying per day to hold this position? (Theta) 4) Am I buying when IV is high or low? (Vega/IV Rank). If you can answer these four questions, you understand your risk profile better than 90% of retail options traders."
    }
  ]
};
