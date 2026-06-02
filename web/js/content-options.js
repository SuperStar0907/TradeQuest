const OPTION_LESSONS = [
  // ─── Lesson 1: What Are Options? ───────────────────────────────────────────
  {
    id: 'what-are-options',
    title: 'What Are Options?',
    category: 'options-basics',
    difficulty: 'beginner',
    estimatedMinutes: 10,
    xpReward: 50,
    sections: [
      {
        type: 'text',
        content: `<h3>Calls and Puts: The Two Building Blocks</h3>
<p>An option is a contract that gives you the <strong>right, but not the obligation</strong>, to buy or sell a stock at a specific price (the <em>strike price</em>) before a specific date (the <em>expiration date</em>).</p>
<ul>
  <li><strong>Call Option</strong> &mdash; gives you the right to <em>buy</em> 100 shares at the strike price.</li>
  <li><strong>Put Option</strong> &mdash; gives you the right to <em>sell</em> 100 shares at the strike price.</li>
</ul>
<p>Every single options contract controls <strong>100 shares</strong> of the underlying stock. When you see a premium quoted at $3.00, the actual cost is $3.00 x 100 = <strong>$300</strong>.</p>`
      },
      {
        type: 'key-concept',
        title: 'Right vs. Obligation',
        content: 'Option buyers pay a premium and receive the RIGHT to act. Option sellers collect a premium and take on the OBLIGATION to fulfill the contract if the buyer exercises. This asymmetry is the foundation of all options trading.'
      },
      {
        type: 'text',
        content: `<h3>Why Trade Options?</h3>
<ol>
  <li><strong>Leverage</strong> &mdash; Control 100 shares of a $180 stock ($18,000) for a fraction of the cost. A $5 call costs only $500.</li>
  <li><strong>Defined Risk</strong> &mdash; When buying options, your maximum loss is the premium you paid. No margin calls, no surprises.</li>
  <li><strong>Flexibility</strong> &mdash; Profit in up, down, or sideways markets depending on your strategy.</li>
  <li><strong>Income Generation</strong> &mdash; Sell options to collect premium and generate consistent income on stocks you own.</li>
</ol>`
      },
      {
        type: 'comparison-table',
        headers: ['', 'Buying 100 Shares of AAPL at $180', 'Buying 1 AAPL $180 Call at $5'],
        rows: [
          ['Capital Required', '$18,000', '$500'],
          ['Max Loss', '$18,000 (stock goes to $0)', '$500 (premium paid)'],
          ['If AAPL rises to $200', 'Profit: $2,000 (11.1%)', 'Profit: $1,500 (300%)'],
          ['If AAPL drops to $160', 'Loss: $2,000 (11.1%)', 'Loss: $500 (100%)'],
          ['Time Limit', 'None', 'Expires on expiration date']
        ]
      },
      {
        type: 'interactive-chart',
        config: {
          ticker: 'AAPL',
          title: 'AAPL Stock Price',
          description: 'Observe how AAPL stock moves. Options derive their value from this underlying price action.'
        }
      },
      {
        type: 'payoff-diagram',
        config: {
          title: 'Long Call — Your First Payoff Diagram',
          description: 'This shows profit/loss at expiration. Above the breakeven point, profits are unlimited. Below it, you lose only the premium.',
          strategies: [
            { type: 'long-call', strike: 180, premium: 5 }
          ],
          stockPrice: 180,
          controls: [
            { type: 'slider', label: 'Strike Price', min: 150, max: 210, default: 180, id: 'strikePrice', step: 5 }
          ]
        }
      },
      {
        type: 'text',
        content: `<h3>Common Mistakes Beginners Make with Options</h3>
<ul>
  <li><strong>Buying far out-of-the-money options because they are "cheap"</strong> &mdash; A $0.10 call seems like a bargain, but its probability of expiring in the money might be 2%. Buying 50 of them is not a strategy, it is a lottery ticket. The vast majority expire worthless.</li>
  <li><strong>Ignoring time decay</strong> &mdash; Options are wasting assets. Every day that passes, your option loses a small amount of value even if the stock does not move. Beginners often buy options with only a few days to expiration because they are cheap, then watch the premium evaporate.</li>
  <li><strong>Not understanding that each contract controls 100 shares</strong> &mdash; Buying 10 contracts is not the same as buying 10 shares. Ten contracts control 1,000 shares. A $2 move in the stock can mean a $2,000 swing in your position.</li>
  <li><strong>Confusing the premium with the strike price</strong> &mdash; The premium is what you pay for the option. The strike price is the price at which you can buy (call) or sell (put) the stock. These are two different numbers and both affect your breakeven.</li>
</ul>`
      },
      {
        type: 'key-concept',
        title: 'Pro Tips for Getting Started with Options',
        content: 'Start by paper trading options for at least 2-4 weeks before risking real money. Focus on liquid, well-known stocks like AAPL, MSFT, or SPY where bid-ask spreads are tight. Buy options with at least 30-45 days to expiration to give your thesis time to play out without excessive time decay. And always know your maximum loss before entering a trade — with long options, that number is simply the premium you paid, which makes them a good starting point for beginners.'
      }
    ]
  },

  // ─── Lesson 2: Options Pricing & Intrinsic Value ───────────────────────────
  {
    id: 'options-pricing-intrinsic-value',
    title: 'Options Pricing & Intrinsic Value',
    category: 'options-basics',
    difficulty: 'beginner',
    estimatedMinutes: 10,
    xpReward: 55,
    sections: [
      {
        type: 'text',
        content: `<h3>The Two Components of an Option's Price</h3>
<p>Every option premium can be broken into two parts:</p>
<p><strong>Premium = Intrinsic Value + Extrinsic Value (Time Value)</strong></p>
<ul>
  <li><strong>Intrinsic Value</strong> &mdash; The amount the option is "in the money." This is real, tangible value you could capture right now by exercising.</li>
  <li><strong>Extrinsic Value (Time Value)</strong> &mdash; The extra amount traders pay for the <em>possibility</em> that the option could become more valuable before expiration. This portion decays to zero by expiration.</li>
</ul>`
      },
      {
        type: 'key-concept',
        title: 'Intrinsic Value Formulas',
        content: 'Call Intrinsic Value = max(Stock Price - Strike Price, 0). Put Intrinsic Value = max(Strike Price - Stock Price, 0). Intrinsic value can never be negative -- if the formula yields a negative number, intrinsic value is simply zero.'
      },
      {
        type: 'text',
        content: `<h3>In the Money, At the Money, Out of the Money</h3>
<ul>
  <li><strong>In the Money (ITM)</strong> &mdash; The option has intrinsic value. A $170 call on a $180 stock is $10 ITM.</li>
  <li><strong>At the Money (ATM)</strong> &mdash; Strike price equals the current stock price. All value is extrinsic.</li>
  <li><strong>Out of the Money (OTM)</strong> &mdash; The option has zero intrinsic value. A $190 call on a $180 stock is OTM.</li>
</ul>
<p>Example: AAPL is at $180. A $170 call is trading at $14.50.</p>
<ul>
  <li>Intrinsic value = $180 - $170 = <strong>$10.00</strong></li>
  <li>Extrinsic value = $14.50 - $10.00 = <strong>$4.50</strong></li>
</ul>`
      },
      {
        type: 'comparison-table',
        headers: ['Factor', 'Effect on Call Price', 'Effect on Put Price'],
        rows: [
          ['Stock Price Rises', 'Increases', 'Decreases'],
          ['Stock Price Falls', 'Decreases', 'Increases'],
          ['More Time to Expiry', 'Increases', 'Increases'],
          ['Higher Implied Volatility', 'Increases', 'Increases'],
          ['Higher Strike Price', 'Decreases', 'Increases']
        ]
      },
      {
        type: 'text',
        content: `<h3>Time Decay: The Option Buyer's Enemy</h3>
<p>Every day that passes, the extrinsic value of your option shrinks a little. This is called <strong>time decay</strong> (measured by the Greek "Theta").</p>
<p>Time decay is not linear &mdash; it <em>accelerates</em> as expiration approaches. An option loses roughly one-third of its time value in the first half of its life and two-thirds in the second half. The last 30 days are brutal for buyers.</p>
<p>This is why experienced traders say: <strong>"Option buyers need to be right about direction AND timing. Option sellers just need to be patient."</strong></p>`
      },
      {
        type: 'payoff-diagram',
        config: {
          title: 'Long Put Payoff',
          description: 'A long put profits when the stock falls below the strike price minus the premium. Your maximum loss is the premium paid. Use puts to hedge downside or bet on a decline.',
          strategies: [
            { type: 'long-put', strike: 170, premium: 4 }
          ],
          stockPrice: 180,
          controls: [
            { type: 'slider', label: 'Strike Price', min: 150, max: 200, default: 170, id: 'strikePrice', step: 5 },
            { type: 'slider', label: 'Premium Paid', min: 1, max: 12, default: 4, id: 'premium', step: 1 }
          ]
        }
      },
      {
        type: 'text',
        content: `<h3>How a Real Trader Thinks About Options Pricing</h3>
<p>Imagine AAPL is trading at $180 and you are considering a $185 call expiring in 30 days for $3.50. Before buying, an experienced trader asks three questions:</p>
<ol>
  <li><strong>What move do I need?</strong> The breakeven is $188.50. That is a 4.7% move in 30 days. Is that realistic given AAPL's typical range?</li>
  <li><strong>How much is time value?</strong> The entire $3.50 is extrinsic value since the option is out of the money. All of it will decay to zero by expiration unless AAPL moves above $185.</li>
  <li><strong>Is volatility inflated?</strong> If earnings are next week, implied volatility may be pumping up this premium. After earnings, IV will collapse and the option could lose 30-40% of its value overnight even if AAPL does not move.</li>
</ol>
<p>This kind of thinking separates informed traders from gamblers. The premium is not just a price — it encodes the market's expectations about magnitude, timing, and uncertainty.</p>`
      },
      {
        type: 'key-concept',
        title: 'Pro Tips for Options Pricing',
        content: 'Always compare the cost of the option to the expected move. If an ATM straddle costs $12, the market is pricing in a $12 move (roughly). If you think the stock will only move $8, buying that straddle is a losing proposition. Also remember that deep in-the-money options have very little extrinsic value, which means minimal time decay. They behave almost like stock but require less capital. This makes them useful as stock replacement positions for traders who want leverage with less time decay risk.'
      }
    ]
  },

  // ─── Lesson 3: The Greeks: Delta ──────────────────────────────────────────
  {
    id: 'the-greeks-delta',
    title: 'The Greeks: Delta',
    category: 'options-greeks',
    difficulty: 'intermediate',
    estimatedMinutes: 12,
    xpReward: 70,
    sections: [
      {
        type: 'text',
        content: `<h3>What Is Delta?</h3>
<p>Delta measures <strong>how much an option's price changes for every $1 move in the underlying stock</strong>. It is the most important Greek for everyday trading.</p>
<ul>
  <li><strong>Call deltas</strong> range from <strong>0 to +1.00</strong>. A delta of 0.60 means the call gains $0.60 for every $1 the stock rises.</li>
  <li><strong>Put deltas</strong> range from <strong>-1.00 to 0</strong>. A delta of -0.40 means the put gains $0.40 for every $1 the stock falls.</li>
</ul>
<p>An at-the-money option has a delta near <strong>0.50</strong> (calls) or <strong>-0.50</strong> (puts). Deep in-the-money options approach 1.00 (or -1.00), and far out-of-the-money options approach 0.</p>`
      },
      {
        type: 'key-concept',
        title: 'Delta as a Probability Proxy',
        content: 'Delta roughly approximates the probability that an option will expire in the money. A 0.30 delta call has approximately a 30% chance of finishing ITM at expiration. This is not exact, but it is a useful mental shortcut for evaluating trades.'
      },
      {
        type: 'comparison-table',
        headers: ['Option Moneyness', 'Call Delta', 'Put Delta', 'Approx. Probability ITM'],
        rows: [
          ['Deep ITM', '0.80 - 1.00', '-0.80 to -1.00', '80-100%'],
          ['Slightly ITM', '0.55 - 0.80', '-0.55 to -0.80', '55-80%'],
          ['ATM', '~0.50', '~-0.50', '~50%'],
          ['Slightly OTM', '0.20 - 0.45', '-0.20 to -0.45', '20-45%'],
          ['Deep OTM', '0.00 - 0.20', '-0.00 to -0.20', '0-20%']
        ]
      },
      {
        type: 'text',
        content: `<h3>Delta Hedging</h3>
<p>Market makers and institutional traders use delta to create <strong>delta-neutral</strong> positions &mdash; positions that do not gain or lose money from small stock movements.</p>
<p>Example: You sell 10 call contracts with a delta of 0.50. Your total delta exposure is -500 shares (10 contracts x 100 shares x 0.50). To hedge, you buy 500 shares of stock. Now your position is delta neutral: stock gains offset option losses, and vice versa.</p>
<p>As the stock moves, delta changes (because of Gamma), so delta hedges need continuous adjustment. This is called <strong>dynamic hedging</strong>.</p>`
      },
      {
        type: 'interactive-chart',
        config: {
          ticker: 'AAPL',
          title: 'Watch Delta in Action',
          description: 'As AAPL moves up, call deltas increase toward 1.00 and put deltas move toward 0. As AAPL drops, the reverse happens. ATM options experience the most delta change.'
        }
      },
      {
        type: 'text',
        content: `<h3>Common Mistakes with Delta</h3>
<ul>
  <li><strong>Thinking delta is constant</strong> &mdash; Delta changes as the stock moves (that change is measured by Gamma). A 0.30 delta call might become a 0.60 delta call after a $10 rally. Your position's risk profile shifts as the trade progresses.</li>
  <li><strong>Ignoring portfolio delta</strong> &mdash; If you have three long call positions on tech stocks, each with 0.50 delta, your total portfolio delta is heavily long. A market pullback will hit all three positions simultaneously. Track your overall portfolio delta to understand your net directional exposure.</li>
  <li><strong>Confusing delta with probability</strong> &mdash; While delta approximates the probability of finishing ITM, it is not exact. Deep OTM options occasionally have outsized moves due to news or volatility spikes that delta alone does not account for.</li>
</ul>`
      },
      {
        type: 'key-concept',
        title: 'Pro Tips for Using Delta',
        content: 'Use delta to quickly estimate your profit on a directional move. If you own 5 contracts with a 0.40 delta, your position behaves like 200 shares (5 x 100 x 0.40). A $3 stock move means roughly $600 in profit. This mental math helps you size positions appropriately. Also, when selling options for income, many traders target the 0.20-0.30 delta range. This corresponds to roughly a 70-80% probability of the option expiring worthless, giving the seller a statistical edge on each trade.'
      }
    ]
  },

  // ─── Lesson 4: Gamma, Theta, Vega ─────────────────────────────────────────
  {
    id: 'gamma-theta-vega',
    title: 'Gamma, Theta, Vega',
    category: 'options-greeks',
    difficulty: 'intermediate',
    estimatedMinutes: 14,
    xpReward: 75,
    sections: [
      {
        type: 'text',
        content: `<h3>Gamma: The Accelerator</h3>
<p><strong>Gamma</strong> measures the rate of change of delta for every $1 move in the stock. Think of delta as speed and gamma as acceleration.</p>
<ul>
  <li>Gamma is <strong>highest for ATM options</strong> near expiration. These options have the most "explosive" delta changes.</li>
  <li>Gamma is <strong>lowest for deep ITM or deep OTM</strong> options, because their deltas are already near their extremes.</li>
  <li>Long options have <strong>positive gamma</strong> (delta moves in your favor). Short options have <strong>negative gamma</strong> (delta moves against you).</li>
</ul>
<p>High gamma near expiration is why short-dated ATM options can swing wildly in value. A stock that crosses through your strike price in the last few days can cause enormous P&amp;L swings.</p>`
      },
      {
        type: 'text',
        content: `<h3>Theta: The Clock Is Ticking</h3>
<p><strong>Theta</strong> measures how much value an option loses each day, all else being equal. It is expressed as a negative number for option buyers.</p>
<ul>
  <li>An option with theta of -0.05 loses <strong>$5 per contract per day</strong> ($0.05 x 100 shares).</li>
  <li>Theta <strong>accelerates in the last 30 days</strong> before expiration. An option that took 60 days to lose half its time value might lose the other half in just 15 days.</li>
  <li>ATM options have the <strong>highest theta</strong> in dollar terms because they have the most extrinsic value to lose.</li>
</ul>
<p>This is why option sellers love time &mdash; every day that passes puts money in their pocket. Option buyers are fighting the clock.</p>`
      },
      {
        type: 'text',
        content: `<h3>Vega: Volatility Sensitivity</h3>
<p><strong>Vega</strong> measures how much an option's price changes for every 1% change in implied volatility (IV).</p>
<ul>
  <li>A vega of 0.15 means the option gains <strong>$15 per contract</strong> if IV rises 1% and loses $15 if IV drops 1%.</li>
  <li>Higher IV means <strong>higher premiums</strong> for all options. This is why options become expensive before earnings.</li>
  <li>Longer-dated options have <strong>higher vega</strong> because there is more time for volatility to impact the stock.</li>
</ul>`
      },
      {
        type: 'comparison-table',
        headers: ['Greek', 'Measures', 'Buyer Impact', 'Seller Impact', 'Highest When'],
        rows: [
          ['Delta', 'Price sensitivity per $1 stock move', 'Positive (calls) / Negative (puts)', 'Opposite of buyer', 'Deep ITM'],
          ['Gamma', 'Rate of delta change', 'Positive (good)', 'Negative (risky)', 'ATM, near expiration'],
          ['Theta', 'Daily time decay', 'Negative (cost)', 'Positive (income)', 'ATM, near expiration'],
          ['Vega', 'IV sensitivity per 1%', 'Positive (benefits from IV rise)', 'Negative (hurt by IV rise)', 'ATM, long-dated']
        ]
      },
      {
        type: 'key-concept',
        title: 'The Gamma-Theta Tradeoff',
        content: 'Gamma and theta are two sides of the same coin. Long option positions have positive gamma (delta moves in your favor during big moves) but negative theta (you pay time decay daily). Short option positions earn theta but carry negative gamma risk. You cannot have one without the other.'
      }
    ]
  },

  // ─── Lesson 5: Payoff Diagrams: Calls & Puts ─────────────────────────────
  {
    id: 'payoff-diagrams-calls-puts',
    title: 'Payoff Diagrams: Calls & Puts',
    category: 'options-basics',
    difficulty: 'beginner',
    estimatedMinutes: 10,
    xpReward: 55,
    sections: [
      {
        type: 'text',
        content: `<h3>How to Read a Payoff Diagram</h3>
<p>A payoff diagram is the single most important visual tool in options trading. It shows your profit or loss at expiration for every possible stock price.</p>
<ul>
  <li><strong>X-axis (horizontal)</strong> = stock price at expiration</li>
  <li><strong>Y-axis (vertical)</strong> = your profit or loss</li>
  <li>The <strong>breakeven point</strong> is where the line crosses zero</li>
</ul>
<p>Once you can read payoff diagrams fluently, you can instantly evaluate any options strategy at a glance.</p>`
      },
      {
        type: 'key-concept',
        title: 'Maximum Loss for Buyers',
        content: 'When you buy a call or a put, your maximum loss is always the premium you paid -- nothing more. The payoff line flattens out below the strike price (for calls) or above the strike price (for puts), sitting at the negative premium amount.'
      },
      {
        type: 'payoff-diagram',
        config: {
          title: 'Long Call Payoff',
          description: 'Buy a call option: you profit when the stock rises above your strike price plus the premium paid. Below the strike, your loss is limited to the premium. Drag the sliders to see how strike price and premium affect the payoff shape.',
          strategies: [
            { type: 'long-call', strike: 180, premium: 5 }
          ],
          stockPrice: 180,
          controls: [
            { type: 'slider', label: 'Strike Price', min: 150, max: 210, default: 180, id: 'strikePrice', step: 5 },
            { type: 'slider', label: 'Premium Paid', min: 1, max: 15, default: 5, id: 'premium', step: 1 }
          ]
        }
      },
      {
        type: 'payoff-diagram',
        config: {
          title: 'Long Put Payoff',
          description: 'Buy a put option: you profit when the stock falls below your strike price minus the premium paid. Above the strike, your loss is limited to the premium. This is the classic way to hedge or bet on a decline.',
          strategies: [
            { type: 'long-put', strike: 180, premium: 5 }
          ],
          stockPrice: 180,
          controls: [
            { type: 'slider', label: 'Strike Price', min: 150, max: 210, default: 180, id: 'strikePrice', step: 5 },
            { type: 'slider', label: 'Premium Paid', min: 1, max: 15, default: 5, id: 'premium', step: 1 }
          ]
        }
      },
      {
        type: 'comparison-table',
        headers: ['', 'Long Call', 'Long Put'],
        rows: [
          ['Market Outlook', 'Bullish', 'Bearish'],
          ['Max Profit', 'Unlimited', 'Strike - Premium (stock goes to $0)'],
          ['Max Loss', 'Premium paid', 'Premium paid'],
          ['Breakeven', 'Strike + Premium', 'Strike - Premium'],
          ['Example Breakeven', '$180 + $5 = $185', '$180 - $5 = $175']
        ]
      }
    ]
  },

  // ─── Lesson 6: Reading an Options Chain ────────────────────────────────────
  {
    id: 'reading-an-options-chain',
    title: 'Reading an Options Chain',
    category: 'options-basics',
    difficulty: 'intermediate',
    estimatedMinutes: 12,
    xpReward: 65,
    sections: [
      {
        type: 'text',
        content: `<h3>The Options Chain Layout</h3>
<p>An options chain is a table displaying all available options for a stock at a given expiration date. Understanding the layout is essential before placing any trade.</p>
<ul>
  <li><strong>Calls</strong> are displayed on the <strong>left side</strong> of the chain.</li>
  <li><strong>Puts</strong> are displayed on the <strong>right side</strong>.</li>
  <li><strong>Strike prices</strong> run down the center column, typically in $1, $2.50, or $5 increments.</li>
  <li>The current stock price falls somewhere between the strikes, with ITM options highlighted or shaded.</li>
</ul>`
      },
      {
        type: 'comparison-table',
        headers: ['Column', 'What It Tells You', 'What to Look For'],
        rows: [
          ['Bid', 'Price someone will pay to buy your option', 'Tight bid/ask spread = good liquidity'],
          ['Ask', 'Price you must pay to buy the option', 'Wide spreads mean higher entry cost'],
          ['Last', 'Last traded price', 'May be stale if volume is low'],
          ['Volume', 'Contracts traded today', 'Higher volume = easier to fill orders'],
          ['Open Interest (OI)', 'Total open contracts', 'High OI = established interest at that strike']
        ]
      },
      {
        type: 'key-concept',
        title: 'Liquidity Matters More Than You Think',
        content: 'Always check the bid-ask spread before trading. A $0.05 spread on a $3.00 option means you lose 1.7% immediately. A $0.50 spread on the same option means you lose 16.7% just entering the trade. Stick to options with high volume and tight spreads -- typically ATM strikes on liquid stocks like AAPL, SPY, or MSFT.'
      },
      {
        type: 'text',
        content: `<h3>Picking the Right Strike</h3>
<p>Your strike selection determines your risk/reward profile:</p>
<ul>
  <li><strong>ITM options</strong> &mdash; Higher premium, higher delta, more expensive but more likely to profit. Behave more like stock.</li>
  <li><strong>ATM options</strong> &mdash; Moderate premium, ~0.50 delta. Balanced risk/reward and the most liquid.</li>
  <li><strong>OTM options</strong> &mdash; Cheap, low delta, low probability of profit. Only suitable when you expect a large move.</li>
</ul>
<h3>Choosing Your Expiration</h3>
<ul>
  <li><strong>Weeklys (0-7 DTE)</strong> &mdash; Very high theta decay. Used for short-term directional bets or premium selling.</li>
  <li><strong>Monthlys (30-60 DTE)</strong> &mdash; The sweet spot for most strategies. Enough time for your thesis to play out without excessive time decay.</li>
  <li><strong>LEAPS (6-24 months)</strong> &mdash; Minimal theta, but expensive. Used as a stock replacement strategy.</li>
</ul>`
      },
      {
        type: 'interactive-chart',
        config: {
          ticker: 'MSFT',
          title: 'MSFT Options Context',
          description: 'Review the current MSFT price level to understand which strikes would be ITM, ATM, or OTM on a real options chain.'
        }
      },
      {
        type: 'payoff-diagram',
        config: {
          title: 'Long Call Payoff — Strike Selection',
          description: 'See how choosing different strikes affects your risk and reward. A lower strike costs more premium but has a higher probability of profit. A higher strike is cheaper but needs a bigger move.',
          strategies: [
            { type: 'long-call', strike: 420, premium: 8 }
          ],
          stockPrice: 420,
          controls: [
            { type: 'slider', label: 'Strike Price', min: 390, max: 450, default: 420, id: 'strikePrice', step: 5 },
            { type: 'slider', label: 'Premium Paid', min: 1, max: 20, default: 8, id: 'premium', step: 1 }
          ]
        }
      }
    ]
  },

  // ─── Lesson 7: Covered Calls ──────────────────────────────────────────────
  {
    id: 'covered-calls',
    title: 'Covered Calls',
    category: 'options-strategies',
    difficulty: 'intermediate',
    estimatedMinutes: 13,
    xpReward: 75,
    sections: [
      {
        type: 'text',
        content: `<h3>What Is a Covered Call?</h3>
<p>A covered call is the most popular options income strategy. You <strong>own 100 shares</strong> of a stock and <strong>sell 1 call option</strong> against those shares.</p>
<ul>
  <li>You collect the option premium as immediate income.</li>
  <li>In exchange, you agree to sell your shares at the strike price if the stock rises above it by expiration.</li>
  <li>Your shares "cover" the short call obligation &mdash; hence the name <em>covered</em> call.</li>
</ul>
<h3>When to Use Covered Calls</h3>
<p>This strategy works best when you are <strong>neutral to slightly bullish</strong> on the stock. You still want to hold your shares, but you do not expect a massive rally in the near term. The premium you collect reduces your cost basis and provides income while you wait.</p>`
      },
      {
        type: 'key-concept',
        title: 'Strike Selection for Covered Calls',
        content: 'OTM strikes (above current price) allow for stock appreciation plus premium income, but collect less premium. ATM strikes collect maximum premium but cap your upside immediately. A common approach is selling calls 5-10% OTM with 30-45 days to expiration, aiming to collect premium while giving the stock some room to run.'
      },
      {
        type: 'payoff-diagram',
        config: {
          title: 'Covered Call Payoff',
          description: 'The covered call payoff combines a long stock position with a short call. Below the strike, you keep the premium and the stock. Above the strike, your profit is capped at (Strike - Purchase Price + Premium). Your downside is stock ownership minus the premium cushion.',
          strategies: [
            { type: 'long-call', strike: 0, premium: -170 },
            { type: 'short-call', strike: 190, premium: 5 }
          ],
          stockPrice: 180,
          controls: [
            { type: 'slider', label: 'Short Call Strike', min: 175, max: 210, default: 190, id: 'strikePrice', step: 5 },
            { type: 'slider', label: 'Premium Collected', min: 1, max: 10, default: 5, id: 'premium', step: 1 }
          ]
        }
      },
      {
        type: 'text',
        content: `<h3>Managing Assignment and Rolling</h3>
<p><strong>Assignment risk:</strong> If the stock is above your strike at expiration, your shares will likely be called away (sold at the strike price). This is not a disaster &mdash; you planned for it &mdash; but it can trigger a taxable event.</p>
<p><strong>Rolling a covered call:</strong> If the stock rallies and you want to keep your shares, you can "roll" the call by buying back the current call and selling a new one at a higher strike and/or later expiration. This costs money (the roll debit), but lets you stay in the trade.</p>
<ul>
  <li><strong>Roll up</strong> &mdash; Same expiration, higher strike. Costs a debit.</li>
  <li><strong>Roll out</strong> &mdash; Same strike, later expiration. Usually a credit.</li>
  <li><strong>Roll up and out</strong> &mdash; Higher strike, later expiration. May be credit or debit depending on the move.</li>
</ul>`
      },
      {
        type: 'interactive-chart',
        config: {
          ticker: 'AAPL',
          title: 'AAPL Covered Call Analysis',
          description: 'Consider selling a call 5-10% above the current AAPL price with 30-45 DTE. The premium collected reduces your cost basis on the shares.'
        }
      }
    ]
  },

  // ─── Lesson 8: Cash-Secured Puts ──────────────────────────────────────────
  {
    id: 'cash-secured-puts',
    title: 'Cash-Secured Puts',
    category: 'options-strategies',
    difficulty: 'intermediate',
    estimatedMinutes: 12,
    xpReward: 70,
    sections: [
      {
        type: 'text',
        content: `<h3>What Is a Cash-Secured Put?</h3>
<p>A cash-secured put (CSP) involves <strong>selling a put option</strong> while holding enough cash in your account to buy 100 shares at the strike price if assigned.</p>
<ul>
  <li>You collect premium upfront as income.</li>
  <li>If the stock stays above the strike, the put expires worthless and you keep the premium.</li>
  <li>If the stock drops below the strike, you are assigned and buy 100 shares at the strike price &mdash; effectively purchasing the stock at a <strong>discount</strong> (strike price minus premium collected).</li>
</ul>
<p>This strategy is ideal when you <strong>want to own the stock but at a lower price</strong>. You get paid to wait for the dip.</p>`
      },
      {
        type: 'key-concept',
        title: 'Buying Stock at a Discount',
        content: 'If you sell a $170 put on AAPL for $3.00 and get assigned, your effective purchase price is $170 - $3 = $167. Compare that to simply buying at the current $180 market price. You saved $13 per share. The tradeoff: if AAPL rockets to $200, you only collected $300 in premium instead of capturing $2,000 in stock gains.'
      },
      {
        type: 'payoff-diagram',
        config: {
          title: 'Cash-Secured Put Payoff',
          description: 'Selling a put: you keep the premium if the stock stays above the strike. Below the strike, you are effectively long the stock from the strike price minus the premium collected. Your maximum profit is the premium; your maximum loss is if the stock goes to zero.',
          strategies: [
            { type: 'short-put', strike: 170, premium: 4 }
          ],
          stockPrice: 180,
          controls: [
            { type: 'slider', label: 'Strike Price', min: 150, max: 185, default: 170, id: 'strikePrice', step: 5 },
            { type: 'slider', label: 'Premium Collected', min: 1, max: 10, default: 4, id: 'premium', step: 1 }
          ]
        }
      },
      {
        type: 'text',
        content: `<h3>Strike Selection and Income Generation</h3>
<p>Choose your strike based on where you would <em>genuinely want to own</em> the stock:</p>
<ul>
  <li><strong>Conservative (deep OTM)</strong>: Sell puts 10-15% below current price. Low premium but high probability of expiring worthless. Good for income generation.</li>
  <li><strong>Moderate (slightly OTM)</strong>: Sell puts 3-7% below current price. Better premium, reasonable chance of assignment.</li>
  <li><strong>Aggressive (ATM)</strong>: Sell ATM puts for maximum premium. High probability of assignment. Only do this if you want the stock right now.</li>
</ul>
<h3>When Assignment Is a Good Thing</h3>
<p>If you picked a great company at a great price, getting assigned is <em>exactly what you wanted</em>. Now you own 100 shares at a discount, and you can start selling covered calls on those shares for additional income. This leads directly to the Wheel Strategy (covered in Lesson 12).</p>`
      },
      {
        type: 'interactive-chart',
        config: {
          ticker: 'AAPL',
          title: 'Finding Your CSP Strike',
          description: 'Look at where AAPL is trading. Where would you be happy to buy it? That is your target strike for selling a cash-secured put.'
        }
      }
    ]
  },

  // ─── Lesson 9: Vertical Spreads ───────────────────────────────────────────
  {
    id: 'vertical-spreads',
    title: 'Vertical Spreads',
    category: 'options-strategies',
    difficulty: 'intermediate',
    estimatedMinutes: 14,
    xpReward: 80,
    sections: [
      {
        type: 'text',
        content: `<h3>What Is a Vertical Spread?</h3>
<p>A vertical spread involves buying one option and selling another option of the <strong>same type</strong> (both calls or both puts) with the <strong>same expiration</strong> but <strong>different strike prices</strong>.</p>
<p>Vertical spreads reduce your cost and cap your risk, but they also cap your maximum profit.</p>
<h3>Bull Call Spread (Debit Spread)</h3>
<ul>
  <li><strong>Buy</strong> a lower-strike call (e.g., $175 call for $8)</li>
  <li><strong>Sell</strong> a higher-strike call (e.g., $185 call for $3)</li>
  <li><strong>Net debit</strong> = $8 - $3 = $5 ($500 per contract)</li>
  <li><strong>Max profit</strong> = Spread width - Net debit = $10 - $5 = $5 ($500)</li>
  <li><strong>Max loss</strong> = Net debit = $5 ($500)</li>
  <li><strong>Breakeven</strong> = Lower strike + Net debit = $175 + $5 = $180</li>
</ul>`
      },
      {
        type: 'payoff-diagram',
        config: {
          title: 'Bull Call Spread Payoff',
          description: 'The bull call spread profits when the stock rises above the breakeven (lower strike + debit). Max profit is achieved when the stock is at or above the upper strike at expiration. Max loss is the net debit paid.',
          strategies: [
            { type: 'long-call', strike: 175, premium: 8 },
            { type: 'short-call', strike: 185, premium: 3 }
          ],
          stockPrice: 180,
          controls: [
            { type: 'slider', label: 'Lower Strike', min: 160, max: 180, default: 175, id: 'lowerStrike', step: 5 },
            { type: 'slider', label: 'Upper Strike', min: 180, max: 200, default: 185, id: 'upperStrike', step: 5 }
          ]
        }
      },
      {
        type: 'text',
        content: `<h3>Bear Put Spread (Debit Spread)</h3>
<ul>
  <li><strong>Buy</strong> a higher-strike put (e.g., $185 put for $7)</li>
  <li><strong>Sell</strong> a lower-strike put (e.g., $175 put for $2)</li>
  <li><strong>Net debit</strong> = $7 - $2 = $5 ($500 per contract)</li>
  <li><strong>Max profit</strong> = Spread width - Net debit = $10 - $5 = $5 ($500)</li>
  <li><strong>Max loss</strong> = Net debit = $5 ($500)</li>
  <li><strong>Breakeven</strong> = Higher strike - Net debit = $185 - $5 = $180</li>
</ul>
<p>Bear put spreads are the mirror image of bull call spreads &mdash; you profit when the stock declines.</p>`
      },
      {
        type: 'payoff-diagram',
        config: {
          title: 'Bear Put Spread Payoff',
          description: 'The bear put spread profits when the stock falls below the breakeven (upper strike - debit). Max profit is achieved when the stock is at or below the lower strike at expiration.',
          strategies: [
            { type: 'long-put', strike: 185, premium: 7 },
            { type: 'short-put', strike: 175, premium: 2 }
          ],
          stockPrice: 180,
          controls: [
            { type: 'slider', label: 'Upper Strike', min: 180, max: 200, default: 185, id: 'upperStrike', step: 5 },
            { type: 'slider', label: 'Lower Strike', min: 160, max: 180, default: 175, id: 'lowerStrike', step: 5 }
          ]
        }
      },
      {
        type: 'key-concept',
        title: 'Vertical Spread Math',
        content: 'For any vertical debit spread: Max Risk = Net Debit Paid. Max Profit = Width of Strikes - Net Debit. Breakeven = Long Strike +/- Net Debit (add for calls, subtract for puts). A 2:1 reward-to-risk ratio means pay $3 to potentially make $7. Always know these numbers before entering.'
      }
    ]
  },

  // ─── Lesson 10: Iron Condors ──────────────────────────────────────────────
  {
    id: 'iron-condors',
    title: 'Iron Condors',
    category: 'options-strategies',
    difficulty: 'advanced',
    estimatedMinutes: 14,
    xpReward: 90,
    sections: [
      {
        type: 'text',
        content: `<h3>What Is an Iron Condor?</h3>
<p>An iron condor is a <strong>four-leg, market-neutral strategy</strong> that profits when the stock stays within a range. It combines a <strong>short put spread</strong> (bull put spread) with a <strong>short call spread</strong> (bear call spread).</p>
<h3>The Four Legs</h3>
<ol>
  <li><strong>Buy</strong> an OTM put (lowest strike) &mdash; protection</li>
  <li><strong>Sell</strong> an OTM put (higher strike) &mdash; income</li>
  <li><strong>Sell</strong> an OTM call (lower strike) &mdash; income</li>
  <li><strong>Buy</strong> an OTM call (highest strike) &mdash; protection</li>
</ol>
<p>Example on a $180 stock:</p>
<ul>
  <li>Buy $160 put, Sell $170 put, Sell $190 call, Buy $200 call</li>
  <li>Net credit received: $3.00 ($300 per iron condor)</li>
  <li>Profit zone: stock stays between $167 and $193 at expiration</li>
</ul>`
      },
      {
        type: 'key-concept',
        title: 'Iron Condor Risk and Reward',
        content: 'Max Profit = Net Credit Received. Max Loss = Width of the wider spread minus Net Credit. Breakeven points: Lower short strike minus net credit (put side) and Upper short strike plus net credit (call side). You profit as long as the stock stays between the two breakeven points. Ideal setup: IV Rank above 50%, 30-45 DTE, collect at least one-third of the width of the spreads.'
      },
      {
        type: 'payoff-diagram',
        config: {
          title: 'Iron Condor Payoff',
          description: 'The iron condor profits when the stock stays inside the short strikes. The "wings" (long options) cap your maximum loss. The wider the short strikes, the higher the probability of profit but the lower the premium collected.',
          strategies: [
            { type: 'long-put', strike: 160, premium: 1 },
            { type: 'short-put', strike: 170, premium: 3 },
            { type: 'short-call', strike: 190, premium: 3 },
            { type: 'long-call', strike: 200, premium: 1 }
          ],
          stockPrice: 180,
          controls: [
            { type: 'slider', label: 'Lower Short Strike (Put)', min: 160, max: 178, default: 170, id: 'putShortStrike', step: 2 },
            { type: 'slider', label: 'Upper Short Strike (Call)', min: 182, max: 200, default: 190, id: 'callShortStrike', step: 2 }
          ]
        }
      },
      {
        type: 'text',
        content: `<h3>When to Trade Iron Condors</h3>
<ul>
  <li><strong>High IV environment</strong> &mdash; When IV Rank is above 50%, premiums are inflated and more likely to contract, benefiting sellers.</li>
  <li><strong>Range-bound markets</strong> &mdash; No strong directional catalyst expected before expiration.</li>
  <li><strong>30-45 DTE</strong> &mdash; Enough time for theta to work in your favor without excessive gamma risk.</li>
</ul>
<h3>Managing Iron Condors</h3>
<p>Common management rules:</p>
<ul>
  <li><strong>Take profit</strong> at 50% of max profit. If you collected $3.00, close when you can buy it back for $1.50.</li>
  <li><strong>Cut losses</strong> at 2x the credit received. If you collected $3.00, close if the position reaches $6.00 loss.</li>
  <li><strong>Roll the tested side</strong> if one short strike is threatened, but only if the overall position remains sound.</li>
</ul>`
      },
      {
        type: 'comparison-table',
        headers: ['Metric', 'Value (Example)'],
        rows: [
          ['Structure', 'Buy 160P / Sell 170P / Sell 190C / Buy 200C'],
          ['Net Credit', '$3.00 ($300)'],
          ['Max Profit', '$300 (credit received)'],
          ['Max Loss', '$700 (spread width $10 - credit $3)'],
          ['Lower Breakeven', '$167 (170 - 3)'],
          ['Upper Breakeven', '$193 (190 + 3)'],
          ['Probability of Profit', '~60-70% (depends on strike selection)']
        ]
      }
    ]
  },

  // ─── Lesson 11: Straddles & Strangles ─────────────────────────────────────
  {
    id: 'straddles-and-strangles',
    title: 'Straddles & Strangles',
    category: 'options-strategies',
    difficulty: 'advanced',
    estimatedMinutes: 13,
    xpReward: 85,
    sections: [
      {
        type: 'text',
        content: `<h3>The Long Straddle</h3>
<p>A long straddle involves buying <strong>both an ATM call and an ATM put</strong> with the same strike and expiration.</p>
<ul>
  <li>You profit from a <strong>large move in either direction</strong>.</li>
  <li>You do not need to predict which way the stock moves &mdash; only that it moves <em>a lot</em>.</li>
  <li>Max loss = total premium paid (both options).</li>
  <li>Breakeven points: Strike +/- total premium paid.</li>
</ul>
<p>Example: Buy $180 call for $6 and $180 put for $5 = $11 total cost. Breakevens at $169 and $191. The stock must move more than $11 from the strike for you to profit.</p>`
      },
      {
        type: 'payoff-diagram',
        config: {
          title: 'Long Straddle Payoff',
          description: 'The straddle forms a V-shaped payoff. You profit when the stock moves far enough in either direction to overcome the combined premium paid. The bottom of the V is your max loss (total premium) at the strike price.',
          strategies: [
            { type: 'long-call', strike: 180, premium: 6 },
            { type: 'long-put', strike: 180, premium: 5 }
          ],
          stockPrice: 180,
          controls: [
            { type: 'slider', label: 'Strike Price', min: 160, max: 200, default: 180, id: 'strikePrice', step: 5 }
          ]
        }
      },
      {
        type: 'text',
        content: `<h3>The Long Strangle</h3>
<p>A long strangle is similar but uses <strong>OTM options</strong> &mdash; an OTM call (above current price) and an OTM put (below current price).</p>
<ul>
  <li><strong>Cheaper</strong> than a straddle because both options are OTM.</li>
  <li>Requires a <strong>bigger move</strong> to become profitable.</li>
  <li>Often used when you expect a massive move but want to reduce capital at risk.</li>
</ul>
<p>Example: Buy $190 call for $3 and $170 put for $2.50 = $5.50 total cost. Breakevens at $164.50 and $195.50.</p>
<h3>When to Use These Strategies</h3>
<ul>
  <li><strong>Before earnings announcements</strong> &mdash; Stocks often make their biggest moves after earnings.</li>
  <li><strong>Before binary events</strong> &mdash; FDA approvals, court rulings, election results.</li>
  <li><strong>When IV is low</strong> &mdash; Cheap options can explode in value if volatility spikes.</li>
</ul>`
      },
      {
        type: 'comparison-table',
        headers: ['', 'Long Straddle', 'Long Strangle'],
        rows: [
          ['Legs', 'ATM call + ATM put (same strike)', 'OTM call + OTM put (different strikes)'],
          ['Cost', 'Higher (both ATM = max extrinsic)', 'Lower (both OTM)'],
          ['Breakeven Range', 'Narrower', 'Wider'],
          ['Move Required', 'Smaller move to profit', 'Larger move to profit'],
          ['Max Loss', 'Total premium (higher $)', 'Total premium (lower $)'],
          ['Best When', 'Expecting big move, unsure of direction', 'Expecting very large move, want cheaper entry']
        ]
      },
      {
        type: 'key-concept',
        title: 'The IV Trap with Straddles',
        content: 'Before earnings, implied volatility rises because the market expects a big move. This inflates the straddle price. After earnings, IV collapses ("IV crush") even if the stock moves your way. The stock might move $8, but if the straddle was priced for a $12 move, you still lose. Always compare the straddle price to the expected move before buying.'
      }
    ]
  },

  // ─── Lesson 12: The Wheel Strategy ────────────────────────────────────────
  {
    id: 'the-wheel-strategy',
    title: 'The Wheel Strategy',
    category: 'options-strategies',
    difficulty: 'advanced',
    estimatedMinutes: 15,
    xpReward: 95,
    sections: [
      {
        type: 'text',
        content: `<h3>The Wheel: Systematic Options Income</h3>
<p>The Wheel Strategy is a <strong>repeatable income cycle</strong> that combines cash-secured puts and covered calls into a single, ongoing system. Here is the cycle:</p>
<ol>
  <li><strong>Sell a cash-secured put</strong> on a stock you want to own at a price you like.</li>
  <li><strong>If assigned</strong>, you now own 100 shares at a discount (strike minus premium).</li>
  <li><strong>Sell a covered call</strong> on your 100 shares, collecting more premium.</li>
  <li><strong>If called away</strong>, your shares are sold at the strike price plus you kept the premium.</li>
  <li><strong>Repeat</strong> from step 1 with the cash from the sale.</li>
</ol>
<p>Each cycle generates premium income. Whether the stock goes up, down, or sideways, you are collecting premium at every stage.</p>`
      },
      {
        type: 'key-concept',
        title: 'Ideal Stocks for the Wheel',
        content: 'The Wheel works best on stocks you would happily own for years. Look for: (1) Stable, established companies with predictable earnings. (2) Stocks with good options liquidity (tight bid-ask spreads). (3) Dividend-paying stocks provide additional income while you hold shares. (4) Moderate IV to collect reasonable premiums. Avoid highly volatile meme stocks or biotech -- assignment on a 50% drop is painful.'
      },
      {
        type: 'text',
        content: `<h3>Step-by-Step Walkthrough</h3>
<p>Let us walk through a complete wheel cycle on a $50 stock with $50,000 in capital:</p>
<ol>
  <li><strong>Week 1: Sell $48 put for $1.20</strong> &mdash; Collect $120. Stock stays above $48. Put expires worthless.</li>
  <li><strong>Week 5: Sell $47 put for $0.90</strong> &mdash; Collect $90. Stock drops to $45. You are assigned 100 shares at $47.</li>
  <li>Your effective cost basis: $47 - $1.20 - $0.90 = <strong>$44.90</strong> (below current price of $45).</li>
  <li><strong>Week 9: Sell $50 call for $1.00</strong> &mdash; Collect $100. Stock rises to $51. Your shares are called away at $50.</li>
  <li>Total profit from this cycle: ($50 - $44.90) x 100 + premiums = <strong>$510 + $310 = $820</strong></li>
  <li><strong>Repeat</strong> with your $5,000 cash + $820 profit.</li>
</ol>
<h3>Expected Returns and Risks</h3>
<ul>
  <li><strong>Realistic annual return</strong>: 15-30% on capital deployed, depending on stock selection and market conditions.</li>
  <li><strong>Primary risk</strong>: Stock drops significantly after assignment. You are holding shares at a loss and covered call premiums may not be enough to compensate.</li>
  <li><strong>Opportunity cost</strong>: If the stock rallies hard, you miss the upside because your calls cap your gains.</li>
</ul>`
      },
      {
        type: 'comparison-table',
        headers: ['Wheel Phase', 'Action', 'You Collect', 'Outcome if Assigned/Called'],
        rows: [
          ['Phase 1: CSP', 'Sell cash-secured put', 'Put premium', 'Buy 100 shares at strike'],
          ['Phase 2: CC', 'Sell covered call on shares', 'Call premium', 'Sell 100 shares at strike'],
          ['Phase 3: Reset', 'Return to Phase 1 with cash', 'Start again', 'Continuous income cycle']
        ]
      },
      {
        type: 'interactive-chart',
        config: {
          ticker: 'KO',
          title: 'Coca-Cola: Classic Wheel Stock',
          description: 'KO is a textbook Wheel stock -- stable, dividend-paying, moderate volatility, high options liquidity. Observe how it trades in a relatively tight range, making it ideal for selling premium.'
        }
      }
    ]
  },

  // ─── Lesson 13: Implied Volatility & IV Rank ──────────────────────────────
  {
    id: 'implied-volatility-iv-rank',
    title: 'Implied Volatility & IV Rank',
    category: 'options-greeks',
    difficulty: 'advanced',
    estimatedMinutes: 14,
    xpReward: 85,
    sections: [
      {
        type: 'text',
        content: `<h3>What Is Implied Volatility?</h3>
<p><strong>Implied Volatility (IV)</strong> is the market's forecast of how much a stock is likely to move over a given period. It is derived from current option prices using the Black-Scholes model.</p>
<ul>
  <li>IV is expressed as an <strong>annualized percentage</strong>. An IV of 30% means the market expects the stock to move roughly 30% over the next year (one standard deviation).</li>
  <li>IV does <strong>not predict direction</strong> &mdash; only the <em>magnitude</em> of the expected move.</li>
  <li>Higher IV = higher option premiums. Lower IV = cheaper options.</li>
</ul>
<h3>Historical Volatility vs. Implied Volatility</h3>
<ul>
  <li><strong>Historical Volatility (HV)</strong> looks backward &mdash; how much the stock actually moved over a past period.</li>
  <li><strong>Implied Volatility (IV)</strong> looks forward &mdash; how much the market expects the stock to move.</li>
  <li>When IV > HV, options are "expensive" relative to actual movement. When IV < HV, options are "cheap."</li>
</ul>`
      },
      {
        type: 'key-concept',
        title: 'IV Rank and IV Percentile',
        content: 'IV Rank = (Current IV - 52-week Low IV) / (52-week High IV - 52-week Low IV) x 100. If IV ranged from 20% to 60% over the past year and current IV is 40%, IV Rank = (40-20)/(60-20) = 50%. IV Percentile measures the percentage of days in the past year that IV was below the current level. Both help you determine whether options are relatively cheap or expensive compared to recent history.'
      },
      {
        type: 'text',
        content: `<h3>Trading Rules Based on IV</h3>
<ul>
  <li><strong>High IV (IV Rank > 50%)</strong>: Favor <em>selling premium</em> strategies -- covered calls, cash-secured puts, iron condors, credit spreads. Premiums are inflated and likely to contract.</li>
  <li><strong>Low IV (IV Rank < 30%)</strong>: Favor <em>buying options</em> strategies -- long calls/puts, debit spreads, straddles. Options are cheap relative to history.</li>
  <li><strong>Middle IV (IV Rank 30-50%)</strong>: Either approach can work. Focus on directional conviction rather than volatility edge.</li>
</ul>
<h3>The Volatility Smile and Skew</h3>
<p>If you plot IV across different strike prices at the same expiration, you will notice it is <strong>not a flat line</strong>:</p>
<ul>
  <li><strong>Volatility Smile</strong> &mdash; OTM puts and OTM calls have higher IV than ATM options. Common in indices and during uncertain markets.</li>
  <li><strong>Volatility Skew</strong> &mdash; OTM puts have higher IV than OTM calls. This is the typical pattern for equities because markets fear crashes more than rallies.</li>
</ul>
<p>Skew exists because demand for protective puts (portfolio insurance) drives up their prices, while covered call selling suppresses call premiums.</p>`
      },
      {
        type: 'comparison-table',
        headers: ['IV Environment', 'IV Rank', 'Strategy Bias', 'Example Strategies'],
        rows: [
          ['Low IV', '< 30%', 'Buy premium', 'Long calls/puts, debit spreads, straddles'],
          ['Normal IV', '30% - 50%', 'Neutral', 'Direction-dependent; spreads preferred'],
          ['High IV', '> 50%', 'Sell premium', 'Iron condors, credit spreads, CSPs, covered calls'],
          ['Extreme IV', '> 80%', 'Aggressively sell premium', 'Strangles, wide iron condors (with strict risk management)']
        ]
      },
      {
        type: 'interactive-chart',
        config: {
          ticker: 'SPY',
          title: 'SPY and Volatility Context',
          description: 'SPY is the most liquid options market in the world. Watch how its price action relates to volatility expansion (sharp drops) and contraction (grinding rallies).'
        }
      }
    ]
  },

  // ─── Lesson 14: Earnings Plays & IV Crush ─────────────────────────────────
  {
    id: 'earnings-plays-iv-crush',
    title: 'Earnings Plays & IV Crush',
    category: 'options-strategies',
    difficulty: 'advanced',
    estimatedMinutes: 13,
    xpReward: 85,
    sections: [
      {
        type: 'text',
        content: `<h3>IV Expansion Before Earnings</h3>
<p>In the weeks leading up to an earnings announcement, implied volatility <strong>rises steadily</strong>. The market is pricing in uncertainty &mdash; nobody knows if the company will beat or miss estimates.</p>
<ul>
  <li>IV can increase by <strong>50-200%</strong> above its normal level heading into earnings.</li>
  <li>This makes all options more expensive &mdash; calls and puts alike.</li>
  <li>The closer to earnings, the faster IV climbs, especially in the final week.</li>
</ul>
<h3>IV Crush: The Morning After</h3>
<p>Immediately after earnings are announced, the uncertainty is gone. IV <strong>collapses overnight</strong>, often dropping 30-60% in a single session. This is called <strong>IV crush</strong>.</p>
<p>The critical insight: <em>even if the stock moves in your direction</em>, you can still lose money if the IV crush is severe enough to offset your directional gains.</p>`
      },
      {
        type: 'key-concept',
        title: 'Expected Move Calculation',
        content: 'The expected move is the market-priced range for the stock after earnings. Approximate formula: Expected Move = ATM Straddle Price x 0.85. If the ATM straddle costs $12, the expected move is roughly $10.20. The stock is expected to land within +/- $10.20 of its current price about 68% of the time. If you buy a straddle, you need the stock to move MORE than the expected move to profit.'
      },
      {
        type: 'text',
        content: `<h3>Buying Premium Into Earnings</h3>
<p>Buying straddles or strangles before earnings is a popular but <strong>difficult</strong> strategy:</p>
<ul>
  <li><strong>The math is against you</strong> &mdash; You pay inflated IV and need the stock to move beyond the expected range to profit.</li>
  <li><strong>Better approach</strong> &mdash; Buy the straddle 1-2 weeks before earnings when IV is still ramping up. Sell before the announcement to capture the IV expansion, not the earnings move itself.</li>
  <li><strong>Worst approach</strong> &mdash; Buying weekly options the day before earnings. Maximum IV crush exposure.</li>
</ul>
<h3>Selling Premium Into Earnings</h3>
<p>Many professional traders prefer to <em>sell</em> premium into earnings:</p>
<ul>
  <li><strong>Iron condors</strong> &mdash; Sell an iron condor using the expected move as your short strikes. Collect rich premiums.</li>
  <li><strong>Short strangles</strong> &mdash; Sell OTM put + OTM call. Higher risk (undefined) but higher premium.</li>
  <li><strong>Advantage</strong> &mdash; IV crush is your friend. After earnings, IV drops and your short options lose value rapidly.</li>
  <li><strong>Risk</strong> &mdash; If the stock gaps beyond your strikes, losses can be large and sudden.</li>
</ul>`
      },
      {
        type: 'comparison-table',
        headers: ['Strategy', 'Pre-Earnings Action', 'Post-Earnings Outcome', 'IV Crush Impact'],
        rows: [
          ['Buy Straddle (hold)', 'Buy ATM call + put', 'Need move > expected move', 'Hurts you (lose extrinsic)'],
          ['Buy Straddle (sell early)', 'Buy 1-2 weeks before, sell day of', 'Profit from IV expansion', 'Avoid it entirely'],
          ['Sell Iron Condor', 'Sell IC at expected move range', 'Keep premium if stock stays in range', 'Helps you (short options lose value)'],
          ['Sell Strangle', 'Sell OTM call + put', 'Keep premium, undefined risk', 'Helps you significantly']
        ]
      },
      {
        type: 'interactive-chart',
        config: {
          ticker: 'TSLA',
          title: 'TSLA Earnings Volatility',
          description: 'TSLA is known for large post-earnings moves. Observe the gaps on the chart -- these are earnings reactions. Notice how some gaps are larger than others, illustrating why earnings trades are inherently risky.'
        }
      }
    ]
  },

  // ─── Lesson 15: Options Risk Management ───────────────────────────────────
  {
    id: 'options-risk-management',
    title: 'Options Risk Management',
    category: 'options-basics',
    difficulty: 'advanced',
    estimatedMinutes: 14,
    xpReward: 100,
    sections: [
      {
        type: 'text',
        content: `<h3>Position Sizing for Options</h3>
<p>Options can produce outsized gains, but they can also go to zero. Proper position sizing is non-negotiable.</p>
<ul>
  <li><strong>Never risk more than 2-5% of your total account on a single options trade.</strong> If your account is $50,000, your maximum risk per trade should be $1,000-$2,500.</li>
  <li>For defined-risk strategies (debit spreads, iron condors), your risk is the max loss of the position.</li>
  <li>For long options, your risk is the total premium paid.</li>
  <li>Start with <strong>1 contract</strong>. Scaling up is easy once you have a proven process. Scaling down from a blown-up account is not.</li>
</ul>`
      },
      {
        type: 'key-concept',
        title: 'Defined Risk vs. Undefined Risk',
        content: 'Defined risk strategies (debit spreads, iron condors, long options) have a known maximum loss. Undefined risk strategies (naked calls, naked puts, short strangles) have theoretically unlimited loss. Beginners should ONLY trade defined risk. Even experienced traders should limit undefined risk positions and always have a stop-loss plan.'
      },
      {
        type: 'text',
        content: `<h3>Rolling Options</h3>
<p>"Rolling" means closing your current position and opening a new one at a different strike and/or expiration. Common rolling scenarios:</p>
<ul>
  <li><strong>Roll out in time</strong> &mdash; Move to a later expiration when you need more time for your thesis to play out.</li>
  <li><strong>Roll up/down in strike</strong> &mdash; Adjust your strike after a big move to lock in profits or reduce risk.</li>
  <li><strong>When to roll</strong> &mdash; Roll when the trade thesis is still intact but the position needs adjustment. Do NOT roll a bad trade just to avoid taking a loss &mdash; that turns one loss into a bigger one.</li>
</ul>
<h3>Early Assignment Risk</h3>
<p>American-style options can be exercised at any time before expiration. Early assignment is most common:</p>
<ul>
  <li>On <strong>short calls</strong> right before an ex-dividend date (the call buyer wants the dividend).</li>
  <li>On <strong>deep ITM short puts</strong> when extrinsic value is near zero.</li>
  <li>Early assignment is an <strong>inconvenience, not a catastrophe</strong>. You are simply fulfilling your obligation early.</li>
</ul>`
      },
      {
        type: 'text',
        content: `<h3>Common Mistakes to Avoid</h3>
<ol>
  <li><strong>Oversizing positions</strong> &mdash; "Going all in" on a single options trade. One bad trade can wipe out months of gains.</li>
  <li><strong>Ignoring the Greeks</strong> &mdash; Buying options without understanding theta decay or vega exposure.</li>
  <li><strong>Holding to expiration</strong> &mdash; Most profitable trades should be closed early. Take 50-75% of max profit and move on.</li>
  <li><strong>Revenge trading</strong> &mdash; Doubling down on a losing position to "make it back." Cut losses and find a new trade.</li>
  <li><strong>Trading illiquid options</strong> &mdash; Wide bid-ask spreads silently eat your profits. Stick to liquid names.</li>
  <li><strong>No exit plan</strong> &mdash; Define your profit target and max loss BEFORE entering. Write it down.</li>
</ol>`
      },
      {
        type: 'comparison-table',
        headers: ['Risk Category', 'Rule', 'Why It Matters'],
        rows: [
          ['Position Size', 'Max 2-5% of account per trade', 'Survive losing streaks without account destruction'],
          ['Strategy Selection', 'Beginners: defined risk only', 'Known max loss prevents catastrophic surprises'],
          ['Profit Taking', 'Close at 50-75% of max profit', 'Locking in gains avoids round-tripping winners'],
          ['Loss Cutting', 'Exit at 1.5-2x premium (debit) or 2x credit (credit spreads)', 'Small losses are recoverable; large ones are not'],
          ['Margin', 'Never use more than 50% of available margin', 'Leaves room for adjustments and avoids margin calls'],
          ['Diversification', 'No more than 3-5 positions in same sector', 'Sector events can hit all correlated positions at once']
        ]
      },
      {
        type: 'payoff-diagram',
        config: {
          title: 'Iron Condor — Defined Risk, Range-Bound Strategy',
          description: 'An iron condor profits when the stock stays within a range. You collect premium from selling both a put and a call, with defined risk on both sides. This diagram shows the short strikes — your profit zone is between them.',
          strategies: [
            { type: 'short-put', strike: 160, premium: 3 },
            { type: 'short-call', strike: 200, premium: 3 }
          ],
          stockPrice: 180,
          controls: [
            { type: 'slider', label: 'Short Put Strike', min: 140, max: 175, default: 160, id: 'putStrike', step: 5 },
            { type: 'slider', label: 'Short Call Strike', min: 185, max: 220, default: 200, id: 'callStrike', step: 5 }
          ]
        }
      }
    ]
  }
];

// Auto-register into LESSON_REGISTRY
(function() {
  const categoryToTrack = {
    'options-basics': 'options',
    'options-greeks': 'options',
    'options-strategies': 'options',
  };
  OPTION_LESSONS.forEach((lesson, i) => {
    LESSON_REGISTRY[lesson.id] = Object.assign({}, lesson, {
      track: categoryToTrack[lesson.category] || 'options',
      order: i,
    });
  });
})();
