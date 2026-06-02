LESSON_REGISTRY["risk-management"] = {
  id: "risk-management",
  title: "Risk Management",
  track: "risk-management",
  category: "risk",
  difficulty: "intermediate",
  order: 1,
  estimatedMinutes: 15,
  xpReward: 90,
  prerequisites: ["order-types"],
  sections: [
    {
      type: "text",
      content: `
        <h3>Why Risk Management Is Everything</h3>
        <p>Risk management is the single most important skill in trading — more important than finding the perfect entry, choosing the right indicator, or identifying chart patterns. You can have a mediocre strategy with excellent risk management and still make money. But a brilliant strategy with poor risk management will eventually blow up your account.</p>
        <p>Consider this: even the best professional traders are only right about 50-60% of the time. What separates winners from losers is not how often they're right, but <strong>how much they make when they're right versus how much they lose when they're wrong</strong>. Risk management is the discipline that controls the "when wrong" side of that equation.</p>
        <p>The legendary trader Paul Tudor Jones said it best: "The most important rule of trading is to play great defense, not great offense." Every dollar you lose requires more than a dollar of gains to recover. If you lose 50% of your account, you need a 100% gain just to break even. If you lose 90%, you need a 900% gain. Protecting your capital is not optional — it's the foundation everything else is built on.</p>
        <p>Risk management encompasses several key concepts: position sizing, the risk percentage rule, risk/reward ratios, stop-loss placement, and understanding maximum drawdown. We'll cover each in detail.</p>
      `
    },
    {
      type: "key-concept",
      title: "The Math of Losses",
      content: "A 10% loss requires an 11.1% gain to recover. A 25% loss requires a 33% gain. A 50% loss requires a 100% gain. A 75% loss requires a 300% gain. This asymmetry is why preventing large losses is the number one priority. It's mathematically easier to avoid deep drawdowns than to recover from them."
    },
    {
      type: "text",
      content: `
        <h3>The 1-2% Rule — Risk Per Trade</h3>
        <p>The most fundamental rule of risk management is the <strong>percentage risk rule</strong>: never risk more than 1-2% of your total trading account on a single trade. This means that if you're wrong and your stop-loss is hit, the maximum loss on that trade is 1-2% of your account value.</p>
        <p><strong>Why 1-2%?</strong> Because even a long losing streak won't destroy your account. If you risk 2% per trade and lose 10 trades in a row (which happens more often than you think), you lose about 18% of your account — painful but recoverable. If you risk 10% per trade and lose 10 in a row, you lose 65% of your account — catastrophic.</p>
        <p><strong>Example Calculation:</strong></p>
        <ul>
          <li>Account size: $50,000</li>
          <li>Maximum risk per trade (2%): $1,000</li>
          <li>You want to buy AAPL at $175 with a stop loss at $170 (risk = $5 per share)</li>
          <li>Maximum position size: $1,000 / $5 = 200 shares</li>
          <li>Position value: 200 × $175 = $35,000</li>
        </ul>
        <p>Notice that the position size ($35,000 or 70% of the account) is determined by the stop-loss distance, not by some fixed dollar amount. A tighter stop allows a larger position; a wider stop requires a smaller position. This is why stop-loss placement and position sizing are intimately connected.</p>
        <p><strong>Practical Tip:</strong> Beginners should start with 0.5-1% risk per trade. As you gain experience and prove your strategy works, you can gradually increase to 2%. Professional traders rarely risk more than 2% on a single trade, and many keep it at 0.5-1% even with decades of experience.</p>
      `
    },
    {
      type: "text",
      content: `
        <h3>Position Sizing — How Many Shares to Buy</h3>
        <p><strong>Position sizing</strong> is the process of determining exactly how many shares to buy or sell on a given trade. It's the practical application of the risk percentage rule. Most amateur traders decide position size based on how much money they want to invest ("I'll buy $5,000 worth of TSLA"). Professionals do it differently — they start with how much they're willing to lose.</p>
        <p><strong>The Position Sizing Formula:</strong></p>
        <p><em>Number of Shares = Dollar Risk Per Trade / Risk Per Share</em></p>
        <p>Where:</p>
        <ul>
          <li><strong>Dollar Risk Per Trade</strong> = Account Size × Risk Percentage (e.g., $100,000 × 1% = $1,000)</li>
          <li><strong>Risk Per Share</strong> = Entry Price - Stop Loss Price (e.g., $150 entry - $145 stop = $5 risk per share)</li>
        </ul>
        <p><strong>Example 1:</strong></p>
        <ul>
          <li>Account: $100,000, Risk: 1% = $1,000 max loss</li>
          <li>Buy MSFT at $380, stop at $370 → Risk per share = $10</li>
          <li>Position size: $1,000 / $10 = 100 shares</li>
          <li>Total investment: 100 × $380 = $38,000 (38% of account)</li>
        </ul>
        <p><strong>Example 2:</strong></p>
        <ul>
          <li>Account: $100,000, Risk: 1% = $1,000 max loss</li>
          <li>Buy NVDA at $450, stop at $425 → Risk per share = $25</li>
          <li>Position size: $1,000 / $25 = 40 shares</li>
          <li>Total investment: 40 × $450 = $18,000 (18% of account)</li>
        </ul>
        <p>Notice how the wider stop on NVDA ($25 vs. $10) results in a smaller position. This is proper position sizing — your risk in dollars stays constant regardless of the stock price or stop distance.</p>
      `
    },
    {
      type: "key-concept",
      title: "Position Size Is Determined by Risk, Not by Conviction",
      content: "Never increase your position size because you 'feel confident' about a trade. Every trade that goes wrong started as a confident idea. Position sizing should be mechanical: (1) determine your dollar risk (account × risk %), (2) determine your per-share risk (entry - stop), (3) divide to get the number of shares. This formula keeps you disciplined when emotions try to take over."
    },
    {
      type: "text",
      content: `
        <h3>Risk/Reward Ratio — The Edge That Makes You Profitable</h3>
        <p>The <strong>risk/reward ratio (R:R)</strong> compares how much you stand to lose on a trade (risk) versus how much you stand to gain (reward). It's expressed as a ratio like 1:2 or 1:3, meaning for every $1 you risk, you expect to make $2 or $3.</p>
        <p><strong>Why it matters:</strong> If your risk/reward ratio is 1:3 and you're right only 30% of the time, you're still profitable. Let's prove it with 10 trades risking $100 each with a 1:3 R:R:</p>
        <ul>
          <li>7 losing trades: 7 × -$100 = -$700</li>
          <li>3 winning trades: 3 × +$300 = +$900</li>
          <li>Net profit: +$200 (profitable even with 30% win rate!)</li>
        </ul>
        <p>With a 1:2 R:R, you need to be right about 34% of the time to break even. With a 1:3 R:R, you only need 25%. Most traders are right about 40-50% of the time, so a solid R:R ratio creates a significant mathematical edge.</p>
        <p><strong>How to calculate R:R before entering a trade:</strong></p>
        <ul>
          <li><strong>Risk:</strong> Entry price - stop-loss price = your risk per share.</li>
          <li><strong>Reward:</strong> Target price - entry price = your potential reward per share.</li>
          <li><strong>R:R Ratio:</strong> Risk : Reward (e.g., $5 risk, $15 reward = 1:3)</li>
        </ul>
        <p><strong>Minimum R:R Rule:</strong> Most professionals won't take a trade with less than a 1:2 risk/reward ratio. This means the potential reward must be at least twice the potential risk. If you can't find a trade setup with 1:2 or better, pass on the trade and wait for a better opportunity.</p>
      `
    },
    {
      type: "text",
      content: `
        <h3>Stop-Loss Placement — Where to Draw the Line</h3>
        <p>Knowing you need a stop loss is one thing. Knowing where to place it is another. A stop loss that's too tight will get triggered by normal market noise before your trade has a chance to work. A stop that's too wide defeats the purpose of risk management because the loss when triggered is too large.</p>
        <p><strong>Technical Stop-Loss Methods:</strong></p>
        <ul>
          <li><strong>Below Support:</strong> Place your stop just below a significant support level. If the support breaks, your trade thesis is invalidated. Give it a buffer — if support is at $100, your stop might be at $98.50. The buffer depends on the stock's typical volatility.</li>
          <li><strong>Below a Moving Average:</strong> In an uptrend, a stop below the 20 or 50-day moving average is effective. If the stock is respecting the 50 MA and then breaks below it, the trend may be changing.</li>
          <li><strong>Below the Most Recent Swing Low:</strong> In an uptrend, each pullback creates a swing low. Placing your stop below the most recent swing low means the pattern of higher lows is still intact as long as your stop isn't hit.</li>
          <li><strong>ATR-Based Stop:</strong> The Average True Range (ATR) measures a stock's typical daily price movement. An ATR stop is placed 1.5x to 3x the ATR below your entry. If a stock has a 14-day ATR of $3 and you enter at $100, a 2x ATR stop would be at $94. This adapts to the stock's natural volatility — volatile stocks get wider stops, calm stocks get tighter stops.</li>
        </ul>
        <p><strong>Common Mistake:</strong> Don't place stops at round numbers ($100, $50) or at obvious levels where everyone else's stops are. Market makers and algorithms often push prices to these levels to trigger a cluster of stops, then reverse. Place your stop slightly beyond the obvious level.</p>
      `
    },
    {
      type: "text",
      content: `
        <h3>Maximum Drawdown — Surviving the Worst Case</h3>
        <p><strong>Maximum drawdown</strong> is the largest peak-to-trough decline in your account balance. It measures the worst stretch you've experienced (or could experience). Understanding and planning for drawdowns is essential for long-term survival.</p>
        <p><strong>Why drawdowns matter:</strong></p>
        <ul>
          <li>A 10% drawdown is normal and happens regularly even for great traders.</li>
          <li>A 20% drawdown is uncomfortable but manageable. It requires a 25% gain to recover.</li>
          <li>A 30% drawdown is painful and starts to create psychological damage. Recovery requires a 43% gain.</li>
          <li>A 50% drawdown is devastating and takes most traders out of the game. Recovery requires a 100% gain.</li>
        </ul>
        <p><strong>Setting a Maximum Drawdown Limit:</strong> Before you start trading, decide on your maximum acceptable drawdown — the point at which you stop trading and reassess. Many traders set this at 15-20% of their account. If you hit this level, stop trading live, switch to paper trading, and review your strategy. Something is wrong, and you need to figure out what before losing more money.</p>
        <p><strong>Daily Loss Limits:</strong> In addition to an overall drawdown limit, many traders set daily loss limits. A common rule is to stop trading for the day after losing 3-5% of your account. This prevents "revenge trading" — the tendency to make increasingly reckless trades trying to make back losses, which usually makes things worse.</p>
      `
    },
    {
      type: "comparison-table",
      headers: ["Account Loss", "Gain Required to Recover", "Difficulty"],
      rows: [
        ["5%", "5.3%", "Easy — normal fluctuation"],
        ["10%", "11.1%", "Manageable — a bad week or two"],
        ["20%", "25.0%", "Uncomfortable — months to recover"],
        ["30%", "42.9%", "Painful — may take a year"],
        ["50%", "100.0%", "Devastating — most traders quit"],
        ["75%", "300.0%", "Nearly impossible to recover"],
        ["90%", "900.0%", "Account effectively destroyed"]
      ]
    },
    {
      type: "text",
      content: `
        <h3>Portfolio Risk — Correlation and Diversification</h3>
        <p>Risk management isn't just about individual trades — it's about your entire portfolio. Even if each trade risks only 1%, having ten similar trades on at the same time effectively creates 10% risk in a single direction.</p>
        <ul>
          <li><strong>Correlation risk:</strong> If you're long AAPL, MSFT, GOOGL, and AMZN, you might think you have four diversified positions. But these are all tech stocks that tend to move together. A tech sell-off could hit all four at once. Your real risk is much higher than the sum of individual risks suggests.</li>
          <li><strong>Sector exposure:</strong> Limit your exposure to any single sector or theme. A common rule is no more than 20-25% of your portfolio in one sector.</li>
          <li><strong>Maximum total risk:</strong> Limit the total number of open risk units. If you're risking 1% per trade, consider capping total open risk at 5-6%. This means a maximum of 5-6 positions at full risk at any given time.</li>
          <li><strong>Hedging:</strong> Consider offsetting positions. If you're heavily long tech stocks, a small short position in a tech ETF or a put option hedge can reduce your portfolio's directional risk.</li>
        </ul>
      `
    },
    {
      type: "text",
      content: `
        <h3>The Complete Risk Management Checklist</h3>
        <p>Before entering any trade, run through this checklist:</p>
        <ul>
          <li><strong>1. Where is my stop loss?</strong> Define the exact price at which you'll exit if wrong. This should be based on technical levels, not arbitrary numbers.</li>
          <li><strong>2. How much am I risking?</strong> Calculate: (Entry Price - Stop Price) × Number of Shares. Make sure this number is ≤ 1-2% of your account.</li>
          <li><strong>3. What's my position size?</strong> Use the formula: Shares = Dollar Risk / Per-Share Risk. Don't override this with emotional sizing.</li>
          <li><strong>4. What's my target?</strong> Define a realistic price target based on resistance levels, measured moves from chart patterns, or other technical analysis.</li>
          <li><strong>5. What's my risk/reward ratio?</strong> If it's less than 1:2, pass on the trade.</li>
          <li><strong>6. What's my total portfolio risk?</strong> How many other positions do I have? Am I overexposed to a single sector, theme, or direction?</li>
          <li><strong>7. Am I within my drawdown limits?</strong> If I'm already down significantly this week/month, should I be taking new risk?</li>
        </ul>
        <p>This checklist takes 30 seconds to run through mentally, and it will save you from the vast majority of costly mistakes. The traders who survive long-term are not the ones who find the best trades — they're the ones who manage their risk most effectively.</p>
        <p><strong>Final Thought:</strong> Risk management is not exciting. It doesn't make for interesting stories. Nobody brags about the trade they didn't take or the position they sized conservatively. But it is the single biggest differentiator between traders who last and those who don't. Master risk management first, and let everything else follow.</p>
      `
    }
  ]
};
