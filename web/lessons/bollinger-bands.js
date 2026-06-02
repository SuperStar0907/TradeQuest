LESSON_REGISTRY["bollinger-bands"] = {
  id: "bollinger-bands",
  title: "Bollinger Bands",
  track: "technical-analysis",
  category: "indicators",
  difficulty: "intermediate",
  order: 6,
  estimatedMinutes: 12,
  xpReward: 80,
  prerequisites: ["macd-indicator"],
  sections: [
    {
      type: "text",
      content: `
        <h3>What Are Bollinger Bands?</h3>
        <p><strong>Bollinger Bands</strong> are a volatility indicator developed by John Bollinger in the 1980s. They consist of three lines plotted on top of a price chart: a middle band (a simple moving average) and two outer bands that expand and contract based on the stock's volatility.</p>
        <p>The genius of Bollinger Bands is that they automatically adapt to market conditions. In calm, low-volatility markets, the bands narrow. In volatile markets, the bands widen. This dynamic behavior makes them far more useful than fixed-width channels or static overbought/oversold levels.</p>
        <p>Bollinger Bands are used by traders to:</p>
        <ul>
          <li>Identify periods of high and low volatility</li>
          <li>Spot potential reversals when the price reaches the outer bands</li>
          <li>Anticipate breakouts when the bands squeeze together</li>
          <li>Confirm trend strength when the price "walks" along a band</li>
        </ul>
        <p>They are one of the few indicators that work equally well in trending and range-bound markets, making them a favorite among professional traders.</p>
      `
    },
    {
      type: "text",
      content: `
        <h3>How Bollinger Bands Are Constructed</h3>
        <p>Bollinger Bands use three components:</p>
        <ul>
          <li><strong>Middle Band:</strong> A 20-period Simple Moving Average (SMA). This is the baseline of the indicator and represents the "fair value" of the stock based on recent prices.</li>
          <li><strong>Upper Band:</strong> Middle Band + (2 × standard deviation of the last 20 closing prices). This represents the upper boundary — approximately 2 standard deviations above the mean.</li>
          <li><strong>Lower Band:</strong> Middle Band - (2 × standard deviation of the last 20 closing prices). This represents the lower boundary — approximately 2 standard deviations below the mean.</li>
        </ul>
        <p><strong>Why Standard Deviation?</strong> Standard deviation is a statistical measure of how spread out a set of data is. In the context of stock prices, high standard deviation means prices are swinging wildly (high volatility), and low standard deviation means prices are moving in a tight range (low volatility). By using standard deviation, Bollinger Bands automatically adjust their width based on actual market behavior.</p>
        <p><strong>Statistical Significance:</strong> With 2 standard deviations, approximately 95% of price action falls within the bands under normal distribution. This means that when the price touches or exceeds a band, it's a statistically unusual event — the price is at an extreme. However, stock prices don't follow a perfect normal distribution, so this is a guideline, not an absolute rule.</p>
        <p>The default settings (20 period, 2 standard deviations) work well for most situations. Bollinger himself recommends adjusting the period for different timeframes: 10 for short-term trading, 20 for medium-term (default), and 50 for longer-term analysis. When you change the period, consider adjusting the standard deviation multiplier as well.</p>
      `
    },
    {
      type: "key-concept",
      title: "Bands Measure Volatility, Not Direction",
      content: "Bollinger Bands primarily measure volatility, not trend direction. Wide bands mean high volatility; narrow bands mean low volatility. The price touching the upper band doesn't automatically mean 'sell,' and touching the lower band doesn't mean 'buy.' Context matters — in a strong uptrend, the price can ride the upper band for extended periods."
    },
    {
      type: "text",
      content: `
        <h3>The Bollinger Squeeze — Anticipating Breakouts</h3>
        <p>The <strong>Bollinger Squeeze</strong> is one of the most valuable signals the bands provide. It occurs when the bands contract to their narrowest width in a significant period (usually the narrowest in 6 months or more). This extreme narrowing indicates that volatility has compressed like a coiled spring — and a big move is likely coming.</p>
        <p><strong>Why it works:</strong> Markets naturally cycle between periods of low volatility and high volatility. After a period of quiet consolidation (narrow bands), the price eventually breaks out in one direction. The squeeze identifies the "calm before the storm."</p>
        <p><strong>How to trade the squeeze:</strong></p>
        <ul>
          <li>Identify the squeeze: Look for bands that are exceptionally narrow compared to their recent history. Many charting platforms have a "Bandwidth" indicator that quantifies this.</li>
          <li>Wait for the breakout direction: The squeeze tells you a big move is coming but not the direction. Wait for the price to close outside the bands (or above/below a key support/resistance level) before committing.</li>
          <li>Enter on the breakout with a stop on the other side of the consolidation range.</li>
          <li>Target: The initial move after a squeeze often covers a distance equal to the width of the consolidation range (a measured move).</li>
        </ul>
        <p><strong>Real-World Example:</strong> In late 2022, Apple (AAPL) experienced a pronounced Bollinger Squeeze on the weekly chart as it consolidated in the $130-$145 range for several months. The bandwidth reached its lowest level in over a year. When the bands finally expanded in January 2023, AAPL broke to the upside and rallied to $180+ over the following months.</p>
      `
    },
    {
      type: "text",
      content: `
        <h3>Band Walks — Riding the Trend</h3>
        <p>A <strong>band walk</strong> occurs when the price "walks" along one of the outer bands, repeatedly touching or hovering near it. This is actually a sign of strength, not weakness — it means the trend has strong momentum.</p>
        <ul>
          <li><strong>Walking the upper band:</strong> In a strong uptrend, the price will hug the upper band. Candles will close near or above the upper band, and pullbacks will only go as far as the middle band (20 SMA) before bouncing. This is a bullish pattern — do not short just because the price is at the upper band.</li>
          <li><strong>Walking the lower band:</strong> In a strong downtrend, the price will hug the lower band. Rallies will fizzle at or before the middle band. This is a bearish pattern — do not buy just because the price is at the lower band.</li>
        </ul>
        <p>Band walks are one of the most misunderstood Bollinger Band concepts. Many beginners see the price at the upper band and assume it must come back down. In reality, a stock in a strong uptrend can walk the upper band for weeks or even months. Tesla walked the upper band for much of its 2020 rally, rewarding those who held and punishing those who tried to short "overbought" levels.</p>
        <p><strong>Key Rule:</strong> A band walk only ends when the price closes convincingly below the middle band (for an upper band walk) or above the middle band (for a lower band walk). Until that happens, respect the trend.</p>
      `
    },
    {
      type: "key-concept",
      title: "The Squeeze Predicts Volatility Expansion",
      content: "When Bollinger Bands squeeze to their narrowest point, it signals that a big move is imminent. Volatility is cyclical — periods of low volatility are always followed by periods of high volatility, and vice versa. The squeeze doesn't predict direction, only that a significant move is coming. Wait for the breakout direction before taking a position."
    },
    {
      type: "text",
      content: `
        <h3>%B Indicator — Quantifying Band Position</h3>
        <p>The <strong>%B indicator</strong> (percent B) is a companion to Bollinger Bands that tells you exactly where the price is relative to the bands. It normalizes the price position into a 0-to-1 scale:</p>
        <ul>
          <li><strong>%B = 1.0:</strong> Price is at the upper band.</li>
          <li><strong>%B = 0.5:</strong> Price is at the middle band (20 SMA).</li>
          <li><strong>%B = 0.0:</strong> Price is at the lower band.</li>
          <li><strong>%B > 1.0:</strong> Price is above the upper band (extreme strength or potential overextension).</li>
          <li><strong>%B < 0.0:</strong> Price is below the lower band (extreme weakness or potential capitulation).</li>
        </ul>
        <p><strong>Formula:</strong> %B = (Price - Lower Band) / (Upper Band - Lower Band)</p>
        <p>%B is useful for system builders because it turns the visual Bollinger Band analysis into a numerical value that can be programmed and backtested. For example, you might create a rule: "Buy when %B drops below 0.05 and then crosses back above 0.05, while the price is above the 200-day SMA."</p>
        <p>You can also use %B to spot divergences, similar to RSI. If the price makes a new low but %B makes a higher low, it's a bullish divergence — the price is at a lower absolute level but is actually stronger relative to its Bollinger Band.</p>
      `
    },
    {
      type: "text",
      content: `
        <h3>Bollinger Bands Trading Strategies</h3>
        <p>Here are proven strategies that traders use with Bollinger Bands:</p>
        <ul>
          <li><strong>Mean Reversion (Range Markets):</strong> When the market is range-bound (no clear trend), buy when the price touches the lower band and sell when it touches the upper band. Use the middle band as your target. This works because in a range, the price tends to oscillate around the mean. Confirm with RSI — buy when %B is low AND RSI is oversold.</li>
          <li><strong>Breakout Strategy (after Squeeze):</strong> When the bands squeeze, wait for the breakout. Enter when the price closes outside the bands on high volume. Place your stop inside the squeeze range. This strategy captures the beginning of new trends.</li>
          <li><strong>Trend Following (Band Walk):</strong> In a clear trend, buy pullbacks to the middle band (in an uptrend) or sell rallies to the middle band (in a downtrend). The middle band acts as dynamic support/resistance during trends. Stop loss goes below the lower band (in an uptrend) or above the upper band (in a downtrend).</li>
          <li><strong>W-Bottom and M-Top Patterns:</strong> Bollinger himself identified specific patterns: a W-bottom forms when the price touches the lower band, bounces, then retests the low but %B is higher on the second test (bullish). An M-top forms when the price touches the upper band, pulls back, then retests the high but %B is lower (bearish). These are essentially divergence patterns using %B.</li>
        </ul>
      `
    },
    {
      type: "interactive-chart",
      config: {
        ticker: "SPY",
        title: "Explore Bollinger Bands on SPY",
        description: "Observe how the Bollinger Bands expand during volatile periods and contract during quiet periods. Look for squeezes (bands at their narrowest) and the breakouts that follow. Notice how in uptrends, the price tends to stay in the upper half of the bands, and in downtrends, in the lower half.",
        indicators: ["sma"],
        controls: [
          { type: "range", id: "smaPeriod", label: "SMA Period", min: 5, max: 200, default: 20, step: 1 }
        ],
        showRSI: false,
        showMACD: false
      }
    },
    {
      type: "text",
      content: `
        <h3>Common Mistakes and Pro Tips</h3>
        <ul>
          <li><strong>Mistake: Treating band touches as automatic signals.</strong> Touching the upper band is not a sell signal, and touching the lower band is not a buy signal. You must consider the trend. In a strong trend, band touches in the trend direction are signs of strength.</li>
          <li><strong>Mistake: Using Bollinger Bands alone.</strong> Like all indicators, Bollinger Bands work best when combined with other tools. Volume is particularly important — a band breakout on high volume is far more reliable than one on low volume.</li>
          <li><strong>Pro Tip: Watch for candle closes, not just wicks.</strong> A wick poking outside the band but closing inside is less significant than a full candle close outside the band. The close tells you about conviction.</li>
          <li><strong>Pro Tip: Use bandwidth to compare volatility across time.</strong> Bandwidth = (Upper Band - Lower Band) / Middle Band. Plotting bandwidth as a separate indicator helps you objectively identify squeezes and compare current volatility to historical levels.</li>
          <li><strong>Pro Tip: Double Bollinger Bands.</strong> Some traders overlay two sets of Bollinger Bands — one at 2 standard deviations and one at 1 standard deviation. This creates three zones: a "buy zone" (between the lower 1σ and 2σ bands), a "sell zone" (between the upper 1σ and 2σ bands), and a "neutral zone" (between the two 1σ bands). This multi-zone approach helps with position sizing and risk assessment.</li>
        </ul>
      `
    }
  ]
};
