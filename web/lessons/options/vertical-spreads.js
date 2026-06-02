LESSON_REGISTRY["vertical-spreads"] = {
  id: "vertical-spreads",
  title: "Vertical Spreads",
  track: "options",
  category: "options-strategies",
  difficulty: "advanced",
  order: 7,
  estimatedMinutes: 18,
  xpReward: 100,
  prerequisites: ["covered-calls"],
  sections: [
    {
      type: "text",
      content: "<h3>What Are Vertical Spreads?</h3><p>A <strong>vertical spread</strong> is a two-leg options strategy where you simultaneously buy one option and sell another option of the <em>same type</em> (both calls or both puts), with the <em>same expiration date</em> but at <em>different strike prices</em>. The term \"vertical\" comes from how options are displayed on a traditional options chain — strike prices are listed vertically, and a vertical spread involves selecting two strikes from the same column.</p><p>Vertical spreads are one of the most versatile and practical strategies in all of options trading. They allow you to:</p><ul><li>Define both your maximum profit and maximum loss before entering the trade</li><li>Reduce the cost of a directional bet by funding part of your purchase with premium from the sold leg</li><li>Precisely calibrate your risk-reward ratio by choosing different strike widths</li><li>Trade in any account size, since the margin requirement is limited to the spread width</li></ul><p>There are four types of vertical spreads, but we will focus on the two most common: the <strong>bull call spread</strong> (bullish) and the <strong>bear put spread</strong> (bearish).</p>"
    },
    {
      type: "text",
      content: "<h3>Bull Call Spread</h3><p>A <strong>bull call spread</strong> (also called a <em>call debit spread</em>) is a bullish strategy where you:</p><ul><li><strong>Buy a call</strong> at a lower strike price (this is your directional bet)</li><li><strong>Sell a call</strong> at a higher strike price (this offsets part of the cost)</li></ul><p><strong>Example:</strong> AAPL is at $180. You buy the $175 Call for $8.00 and sell the $185 Call for $3.00. Your net cost (debit) is $8.00 - $3.00 = <strong>$5.00 per share</strong>, or $500 per spread.</p><p><strong>Maximum profit:</strong> The spread width minus the debit paid = ($185 - $175) - $5.00 = <strong>$5.00 per share</strong> ($500 per spread). This occurs when AAPL is at or above $185 at expiration. Both options are ITM, and the spread reaches its maximum value of $10.00 (the distance between strikes).</p><p><strong>Maximum loss:</strong> The debit paid = <strong>$5.00 per share</strong> ($500 per spread). This occurs when AAPL is at or below $175 at expiration. Both options expire worthless, and you lose the entire premium.</p><p><strong>Breakeven:</strong> Lower strike + net debit = $175 + $5.00 = <strong>$180.00</strong>. The stock needs to be above $180 at expiration for the trade to be profitable.</p><p>Notice that the bull call spread costs $500 instead of $800 for the long call alone. The short call subsidizes the trade. The trade-off is that your profit is capped at $500 instead of being unlimited.</p>"
    },
    {
      type: "text",
      content: "<h3>Bear Put Spread</h3><p>A <strong>bear put spread</strong> (also called a <em>put debit spread</em>) is a bearish strategy where you:</p><ul><li><strong>Buy a put</strong> at a higher strike price (your directional bet)</li><li><strong>Sell a put</strong> at a lower strike price (offsets part of the cost)</li></ul><p><strong>Example:</strong> AAPL is at $180. You buy the $185 Put for $7.50 and sell the $175 Put for $3.00. Your net cost (debit) is $7.50 - $3.00 = <strong>$4.50 per share</strong>, or $450 per spread.</p><p><strong>Maximum profit:</strong> Spread width minus debit = ($185 - $175) - $4.50 = <strong>$5.50 per share</strong> ($550 per spread). This occurs when AAPL is at or below $175 at expiration.</p><p><strong>Maximum loss:</strong> The debit paid = <strong>$4.50 per share</strong> ($450 per spread). This occurs when AAPL is at or above $185 at expiration.</p><p><strong>Breakeven:</strong> Higher strike - net debit = $185 - $4.50 = <strong>$180.50</strong>. The stock needs to fall below $180.50 for the trade to be profitable.</p>"
    },
    {
      type: "key-concept",
      title: "The Vertical Spread Math",
      content: "For any vertical spread: Max Profit + Max Loss = Spread Width (distance between strikes). If the spread is $10 wide and costs $4.00, your max profit is $6.00 and max loss is $4.00. This means the risk-reward ratio is 4:6 or roughly 1:1.5. You can adjust this ratio by choosing different spread widths or different strike combinations. Wider spreads offer higher max profit but cost more (higher max loss)."
    },
    {
      type: "payoff-diagram",
      config: {
        title: "Bull Call Spread Payoff Diagram",
        description: "The bull call spread has a defined max profit (when stock is above the upper strike) and defined max loss (when stock is below the lower strike). The payoff line is kinked at both strikes, creating a bounded risk-reward profile.",
        strategies: [
          {
            type: "long-call",
            strike: 175,
            premium: 8
          },
          {
            type: "short-call",
            strike: 185,
            premium: 3
          }
        ],
        stockPrice: 180,
        controls: [
          {
            type: "range",
            id: "strikePrice",
            label: "Lower Strike (Long Call)",
            min: 160,
            max: 185,
            default: 175,
            step: 5
          },
          {
            type: "range",
            id: "premium",
            label: "Upper Strike (Short Call)",
            min: 180,
            max: 200,
            default: 185,
            step: 5
          }
        ]
      }
    },
    {
      type: "text",
      content: "<h3>Why Use Spreads Instead of Single Options?</h3><p>Vertical spreads solve several problems that plague single-leg option buyers:</p><ul><li><strong>Reduced cost and breakeven:</strong> The sold leg offsets 30-50% of the cost of the bought leg. This lowers your breakeven point, meaning the stock doesn't need to move as far for you to profit.</li><li><strong>Reduced theta decay:</strong> Both legs decay over time, but the short leg's decay partially offsets the long leg's decay. Your net theta is much lower than a standalone long option.</li><li><strong>Reduced vega sensitivity:</strong> The short leg's vega partially neutralizes the long leg's vega. This means your spread is less affected by IV crush — a major advantage around earnings.</li><li><strong>Defined risk in both directions:</strong> Your max loss is always the debit paid (or spread width minus credit received for credit spreads). There are no surprises.</li></ul><p>The main disadvantage: capped profits. If the stock has a massive move, a single long option would outperform the spread. Spreads are for traders who want consistent, controlled outcomes rather than home runs.</p>"
    },
    {
      type: "text",
      content: "<h3>Choosing Your Spread Width</h3><p>The distance between your two strikes determines the risk-reward profile:</p><ul><li><strong>Narrow spreads ($2-5 wide):</strong> Lower cost, lower max profit, but higher probability of max profit because the stock doesn't need to move as far past your short strike. Good for high-conviction trades where you expect a modest move.</li><li><strong>Standard spreads ($5-10 wide):</strong> The most popular choice. Balanced risk-reward with reasonable probability. A $5-wide spread might cost $2.00-$3.00 and offer $2.00-$3.00 max profit.</li><li><strong>Wide spreads ($10-20 wide):</strong> Higher cost, higher max profit, but lower probability. These start to behave more like a single long option with a distant hedge. Use when you expect a significant move and want more upside exposure.</li></ul><p>A practical rule: look for spreads where the debit is less than 50% of the spread width. A $10-wide spread costing $4.00 gives you a max profit of $6.00 — a 1.5:1 reward-to-risk ratio. If the debit exceeds 60% of the width, the risk-reward becomes unfavorable.</p>"
    },
    {
      type: "text",
      content: "<h3>Managing Vertical Spreads</h3><p>Most traders manage vertical spreads with simple rules:</p><ul><li><strong>Profit target:</strong> Close the spread when it reaches 50-75% of max profit. If your max profit is $5.00, sell the spread when it's worth $2.50-$3.75 more than you paid. Don't hold to expiration hoping for the last dollar — the final 25% of profit carries disproportionate risk.</li><li><strong>Stop loss:</strong> Close if the spread loses 50-100% of its initial value. If you paid $3.00, close at $1.50 loss or cut it entirely at $0. Cutting losses early preserves capital for future trades.</li><li><strong>Time-based exit:</strong> If the trade hasn't worked with less than 7 days to expiration, consider closing. Near-expiration spreads can swing dramatically on small stock moves, and the remaining time value may not justify the risk.</li><li><strong>Rolling:</strong> If your thesis is still intact but the spread is losing to time, you can roll to a later expiration. Buy back the current spread and sell a new one with the same strikes but a further-out expiration date.</li></ul>"
    },
    {
      type: "comparison-table",
      headers: ["", "Bull Call Spread", "Bear Put Spread", "Single Long Call"],
      rows: [
        ["Direction", "Bullish", "Bearish", "Bullish"],
        ["Cost", "Lower (subsidized)", "Lower (subsidized)", "Higher (full premium)"],
        ["Max Profit", "Spread width - debit", "Spread width - debit", "Unlimited"],
        ["Max Loss", "Debit paid", "Debit paid", "Premium paid"],
        ["Theta Impact", "Partially offset", "Partially offset", "Full decay"],
        ["Vega Impact", "Partially offset", "Partially offset", "Full exposure"],
        ["Best For", "Modest bullish moves", "Modest bearish moves", "Strong directional conviction"]
      ]
    }
  ]
};
