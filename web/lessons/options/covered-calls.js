LESSON_REGISTRY["covered-calls"] = {
  id: "covered-calls",
  title: "Covered Calls",
  track: "options",
  category: "options-strategies",
  difficulty: "intermediate",
  order: 6,
  estimatedMinutes: 12,
  xpReward: 80,
  prerequisites: ["the-greeks-advanced"],
  sections: [
    {
      type: "text",
      content: "<h3>What Is a Covered Call?</h3><p>A <strong>covered call</strong> is one of the most popular and beginner-friendly options strategies. It involves two components: you <strong>own 100 shares</strong> of a stock, and you <strong>sell (write) one call option</strong> against those shares. The call you sell is \"covered\" because you already own the shares needed to fulfill the obligation if the buyer exercises.</p><p>By selling the call, you collect a premium — this is immediate income that is yours to keep regardless of what happens next. In exchange, you agree to sell your shares at the strike price if the stock rises above that level before expiration. You are essentially trading away some upside potential in exchange for guaranteed income now.</p><p>Covered calls are considered a conservative strategy because owning the underlying shares eliminates the unlimited risk that comes with selling naked calls. Many brokerage firms approve covered calls at the lowest options trading level, making them accessible to beginners.</p>"
    },
    {
      type: "text",
      content: "<h3>How It Works: Step by Step</h3><p>Let's walk through a complete covered call trade from start to finish:</p><p><strong>Step 1 — Own the stock:</strong> You own 100 shares of AAPL, purchased at $180 per share. Your investment is $18,000.</p><p><strong>Step 2 — Sell a call:</strong> You sell 1 AAPL $185 Call expiring in 30 days for a premium of $4.00. You immediately receive $4.00 x 100 = <strong>$400</strong> in your account. This money is yours no matter what happens.</p><p><strong>Step 3 — Wait for expiration.</strong> Three outcomes are possible:</p><ul><li><strong>AAPL stays below $185:</strong> The call expires worthless. You keep your 100 shares AND the $400 premium. Your effective cost basis drops from $180 to $176. You can sell another call next month and repeat the process.</li><li><strong>AAPL rises above $185:</strong> The call is exercised. You sell your 100 shares at $185, collecting $18,500. Your total profit is ($185 - $180) x 100 + $400 premium = <strong>$900</strong>. However, if AAPL rose to $200, you missed out on $1,500 of additional upside because you were obligated to sell at $185.</li><li><strong>AAPL drops significantly:</strong> The call expires worthless (you keep the $400), but your shares have lost value. The premium provides a $4.00 cushion — you don't start losing money until AAPL drops below $176 (your $180 cost basis minus the $4 premium received).</li></ul>"
    },
    {
      type: "key-concept",
      title: "The Covered Call Trade-Off",
      content: "A covered call generates income and reduces your cost basis, but it caps your upside at the strike price. You are exchanging potential future gains for certain income today. This trade-off is favorable when you believe the stock will stay relatively flat or rise only modestly. It is unfavorable when you expect a strong rally — in that case, you'd be giving away profits by being obligated to sell at the strike."
    },
    {
      type: "payoff-diagram",
      config: {
        title: "Covered Call Payoff at Expiration",
        description: "The covered call combines owning stock (upward-sloping line) with a short call (capped upside). Below the strike, you keep the premium as a cushion. Above the strike, profit is capped because your shares get called away.",
        strategies: [
          {
            type: "long-call",
            strike: 0,
            premium: 0
          },
          {
            type: "short-call",
            strike: 185,
            premium: 4
          }
        ],
        stockPrice: 180,
        controls: [
          {
            type: "range",
            id: "strikePrice",
            label: "Call Strike Price",
            min: 175,
            max: 200,
            default: 185,
            step: 1
          },
          {
            type: "range",
            id: "premium",
            label: "Premium Received",
            min: 1,
            max: 10,
            default: 4,
            step: 0.5
          }
        ]
      }
    },
    {
      type: "text",
      content: "<h3>When to Use Covered Calls</h3><p>Covered calls work best in specific market conditions:</p><ul><li><strong>Neutral to mildly bullish outlook:</strong> You think the stock will stay flat or rise slightly. The premium you collect enhances returns in a range-bound market where the stock alone would generate little profit.</li><li><strong>Income generation:</strong> If you are holding long-term positions and want to generate monthly or weekly income, selling covered calls is like collecting \"rent\" on your shares. Many traders target 1-3% monthly returns from premium collection.</li><li><strong>Reducing cost basis:</strong> Every premium you collect lowers your effective purchase price. If you bought at $180 and collect $4/month in premiums for three months, your effective cost basis drops to $168. This provides a meaningful downside cushion.</li><li><strong>Willing to sell at the strike:</strong> Only sell calls at strikes where you would be happy to sell your shares. If AAPL is at $180 and you'd be thrilled to sell at $195, the $195 strike is a natural covered call target.</li></ul><p><strong>When NOT to use covered calls:</strong> If you are strongly bullish and expect the stock to surge 20%+, do not sell covered calls — you will cap your gains. Also avoid selling covered calls right before earnings or major catalysts if you expect a big move upward.</p>"
    },
    {
      type: "text",
      content: "<h3>Selecting the Right Strike and Expiration</h3><p><strong>Strike selection</strong> involves balancing income against the risk of being called away:</p><ul><li><strong>Near-the-money strikes ($1-5 above current price):</strong> Higher premiums but greater chance of assignment. Use when you are comfortable selling at that price.</li><li><strong>Out-of-the-money strikes ($5-15 above current price):</strong> Lower premiums but more room for the stock to rise before you are called away. This is the \"sweet spot\" for most covered call writers.</li><li><strong>Deep out-of-the-money strikes ($15+ above):</strong> Very small premiums — often not worth the effort. The premium collected might not justify the commission and the capital tied up in shares.</li></ul><p><strong>Expiration selection:</strong></p><ul><li><strong>Weekly (7 days):</strong> Fastest time decay but requires active management. You are selling and rolling every week.</li><li><strong>Monthly (30-45 days):</strong> The most popular choice. Good balance of premium income and management effort. Theta decay is meaningful but not yet extreme.</li><li><strong>Quarterly (60-90 days):</strong> Higher total premium but slower decay rate. Ties up your shares for longer and increases the chance of a big move through your strike.</li></ul><p>A common approach: sell monthly calls at a strike that is 5-10% above the current price, targeting a premium that represents 1-2% of the stock's value. This generates 12-24% annualized returns from premium alone, on top of any dividends.</p>"
    },
    {
      type: "text",
      content: "<h3>Managing a Covered Call Position</h3><p>Covered calls are not \"set and forget\" trades. Here are common management techniques:</p><ul><li><strong>Rolling up and out:</strong> If the stock rallies and approaches your strike, you can buy back the current call (at a loss) and sell a higher-strike, later-expiration call (for a credit). This lets you capture more upside while maintaining the income stream.</li><li><strong>Buying to close early:</strong> If the stock drops and your call loses 80%+ of its value with weeks remaining, consider buying it back for pennies and selling a new one. This frees you to collect a fresh premium.</li><li><strong>Letting assignment happen:</strong> Sometimes the best move is to let your shares be called away at the strike price, take your profit, and move on to the next opportunity. Not every assignment is a loss — you still profited from the stock gain plus the premium.</li></ul>"
    },
    {
      type: "key-concept",
      title: "Covered Call Income Math",
      content: "If you own 100 shares of a $180 stock and sell a monthly covered call for $3.50, that's $350/month or $4,200/year. On an $18,000 stock position, that's a 23% annualized return from premium alone — before any stock appreciation or dividends. Even if you only capture half that (due to occasional assignment and rolling costs), 10-12% annual income from covered calls is realistic and significantly beats most dividend yields."
    }
  ]
};
