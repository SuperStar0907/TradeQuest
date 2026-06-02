LESSON_REGISTRY["rsi-indicator"] = {
  id: "rsi-indicator",
  title: "RSI Indicator",
  track: "technical-analysis",
  category: "indicators",
  difficulty: "intermediate",
  order: 4,
  estimatedMinutes: 12,
  xpReward: 80,
  prerequisites: ["moving-averages"],
  sections: [
    {
      type: "text",
      content: `
        <h3>Introduction to the Relative Strength Index</h3>
        <p>The <strong>Relative Strength Index (RSI)</strong> is a momentum oscillator developed by J. Welles Wilder Jr. in 1978 and published in his landmark book "New Concepts in Technical Trading Systems." Despite being nearly 50 years old, it remains one of the most popular and widely used indicators among traders worldwide.</p>
        <p>RSI measures the speed and magnitude of recent price changes to evaluate whether a stock is <strong>overbought</strong> or <strong>oversold</strong>. It oscillates between 0 and 100, giving you a quick snapshot of a stock's momentum at any given time.</p>
        <p>The core idea is simple: if a stock has been going up consistently (many up days, few down days), the RSI will be high, suggesting the stock may be stretched and due for a pullback. If a stock has been going down consistently, the RSI will be low, suggesting selling may be overdone and a bounce could be near.</p>
        <p>RSI is classified as a <strong>leading indicator</strong> (unlike moving averages, which are lagging), meaning it often provides signals before the price actually reverses. This makes it a valuable tool for anticipating changes in direction rather than just confirming them.</p>
      `
    },
    {
      type: "key-concept",
      title: "RSI Ranges",
      content: "RSI oscillates between 0 and 100. Traditionally, readings above 70 are considered overbought (potential sell zone), and readings below 30 are considered oversold (potential buy zone). The 50 level acts as a midpoint — RSI above 50 indicates bullish momentum, while RSI below 50 indicates bearish momentum. However, these thresholds should be adjusted based on market conditions and the stock's typical behavior."
    },
    {
      type: "text",
      content: `
        <h3>How RSI Is Calculated</h3>
        <p>Understanding the calculation helps you interpret the indicator more effectively. RSI uses a two-step formula:</p>
        <p><strong>Step 1:</strong> Calculate the average gain and average loss over the lookback period (default is 14 periods). For the first calculation, simply average all the gains over 14 periods and all the losses over 14 periods.</p>
        <p><strong>Step 2:</strong> Calculate the Relative Strength (RS) = Average Gain / Average Loss.</p>
        <p><strong>Step 3:</strong> RSI = 100 - (100 / (1 + RS)).</p>
        <p>For subsequent periods, the averages are smoothed: Average Gain = (Previous Average Gain × 13 + Current Gain) / 14. This smoothing prevents the RSI from jumping around too erratically.</p>
        <p><strong>What does this mean practically?</strong></p>
        <ul>
          <li>If every single day in the last 14 was an up day, the average loss is 0, and RSI = 100.</li>
          <li>If every single day was a down day, the average gain is 0, and RSI = 0.</li>
          <li>If gains and losses are exactly equal, RS = 1, and RSI = 50.</li>
          <li>The 14-period default works well for daily charts. Some traders use 7 or 9 for shorter-term signals (more responsive but more noise) or 21-25 for longer-term signals (smoother but slower).</li>
        </ul>
      `
    },
    {
      type: "text",
      content: `
        <h3>Overbought and Oversold — Beyond the Basics</h3>
        <p>The simplest RSI strategy is buying when RSI drops below 30 (oversold) and selling when it rises above 70 (overbought). But experienced traders know it's more nuanced than that.</p>
        <p><strong>In strong uptrends, RSI can stay overbought for extended periods.</strong> During Tesla's massive rally in 2020, the 14-day RSI regularly exceeded 70 and even touched 90. Selling every time RSI hit 70 would have meant missing enormous gains. In bull markets, the RSI tends to oscillate between 40 and 80, rarely dipping below 40.</p>
        <p><strong>In strong downtrends, RSI can stay oversold for extended periods.</strong> During bear markets, RSI can hover below 30 for weeks. Buying every time RSI hits 30 during a genuine bear market is a recipe for catching falling knives. In bear markets, RSI tends to oscillate between 20 and 60, rarely exceeding 60.</p>
        <p><strong>Adjusted Thresholds:</strong></p>
        <ul>
          <li>In a confirmed uptrend: Use 40 as oversold (buying opportunity) and 80 as overbought.</li>
          <li>In a confirmed downtrend: Use 20 as oversold and 60 as overbought (shorting opportunity).</li>
          <li>In a range-bound market: The traditional 30/70 levels work best.</li>
        </ul>
        <p><strong>Practical Tip:</strong> RSI works best as a timing tool within the context of a larger trend analysis. First determine the trend using moving averages and trend lines, then use RSI to time your entries. Buy oversold readings in uptrends; short overbought readings in downtrends.</p>
      `
    },
    {
      type: "text",
      content: `
        <h3>RSI Divergence — The Most Powerful Signal</h3>
        <p><strong>Divergence</strong> occurs when the RSI and the price disagree — they're moving in opposite directions. This disagreement often signals an upcoming reversal and is considered the most reliable RSI signal.</p>
        <ul>
          <li><strong>Bullish Divergence:</strong> The price makes a <em>lower low</em>, but RSI makes a <em>higher low</em>. This means that even though the price is falling to new lows, the selling momentum is weakening. Fewer sellers are participating with each new low. It's like a ball bouncing — each bounce is lower, but the ball is losing downward force. This often precedes a reversal to the upside.</li>
          <li><strong>Bearish Divergence:</strong> The price makes a <em>higher high</em>, but RSI makes a <em>lower high</em>. This means that even though the price is reaching new highs, the buying momentum is fading. It's like a car accelerating up a hill — the speedometer is dropping even though you're still going forward. Eventually, the car stalls. This often precedes a reversal to the downside.</li>
        </ul>
        <p><strong>Real-World Example:</strong> In January 2022, the S&P 500 made a new all-time high above 4,800, but the 14-day RSI made a lower high compared to its November 2021 reading. This bearish divergence warned that the rally was losing steam. Over the following months, the S&P 500 declined over 25% into a bear market.</p>
        <p><strong>Important:</strong> Divergence is a warning signal, not an immediate action signal. It tells you that the trend is weakening, but it doesn't tell you exactly when it will reverse. Use divergence in conjunction with other signals (support/resistance breaks, candlestick patterns, volume) for better timing.</p>
      `
    },
    {
      type: "key-concept",
      title: "Divergence = Disagreement Between Price and Momentum",
      content: "When price makes a new high but RSI does not (bearish divergence), the uptrend is losing momentum and may reverse. When price makes a new low but RSI does not (bullish divergence), the downtrend is losing momentum and may reverse. Divergences are among the most reliable signals in technical analysis, but they require patience — the reversal may not happen immediately."
    },
    {
      type: "text",
      content: `
        <h3>RSI Failure Swings</h3>
        <p>A <strong>failure swing</strong> is a specific RSI pattern that Wilder himself considered more reliable than divergence. It's purely an RSI pattern — you don't even need to look at the price chart.</p>
        <ul>
          <li><strong>Bullish Failure Swing:</strong> RSI drops below 30 (oversold), bounces above 30, pulls back but stays above 30, then breaks above its previous bounce high. The key is that RSI "failed" to return to oversold territory on the second decline. This suggests the oversold condition has been resolved and upward momentum is building.</li>
          <li><strong>Bearish Failure Swing:</strong> RSI rises above 70 (overbought), drops below 70, rallies but stays below 70, then breaks below its previous pullback low. RSI "failed" to return to overbought territory on the second advance. This suggests the overbought condition has been resolved and downward momentum is building.</li>
        </ul>
        <p>Failure swings are significant because they show a shift in momentum. The market tried to push RSI back to an extreme but couldn't — indicating that the balance of power between buyers and sellers has shifted.</p>
        <p><strong>Practical Tip:</strong> Look for failure swings that coincide with key price levels (support, resistance, moving averages). When a bullish failure swing occurs while the price is sitting on a major support level, it's a high-probability buy signal.</p>
      `
    },
    {
      type: "interactive-chart",
      config: {
        ticker: "SPY",
        title: "Explore RSI on SPY",
        description: "The RSI indicator is displayed below the price chart. Watch for readings above 70 (overbought) and below 30 (oversold). Try to spot divergences — places where the price makes a new high or low but RSI does not confirm. Adjust the RSI period to see how shorter periods create more volatile readings.",
        indicators: ["sma"],
        controls: [
          { type: "range", id: "rsiPeriod", label: "RSI Period", min: 5, max: 30, default: 14, step: 1 }
        ],
        showRSI: true,
        showMACD: false
      }
    },
    {
      type: "text",
      content: `
        <h3>RSI Practical Tips and Common Mistakes</h3>
        <ul>
          <li><strong>Don't use RSI alone.</strong> RSI is a powerful tool, but no single indicator should be used in isolation. Combine RSI with trend analysis (moving averages, trend lines), volume, and price action (candlestick patterns, support/resistance) for a complete picture.</li>
          <li><strong>Don't blindly buy oversold or sell overbought.</strong> As discussed, in strong trends, RSI can stay extreme for extended periods. Always consider the larger trend context before acting on RSI signals.</li>
          <li><strong>The 50 level matters.</strong> Many traders overlook RSI's midline at 50. In an uptrend, RSI pulling back to 50 and bouncing is a sign of strength. In a downtrend, RSI rallying to 50 and getting rejected confirms weakness. The 50 level acts as the dividing line between bullish and bearish momentum.</li>
          <li><strong>Adjust the period to your trading style.</strong> Day traders might use 7 or 9-period RSI for faster signals. Swing traders typically use the default 14. Position traders might use 21 or higher. There's no "right" period — backtest different settings on the specific stocks you trade.</li>
          <li><strong>Multiple timeframe RSI.</strong> Check RSI on both a higher and lower timeframe. If the daily RSI is oversold AND the weekly RSI is near oversold, the buying signal is stronger. If the daily RSI is oversold but the weekly RSI is still falling from 70, be more cautious.</li>
        </ul>
      `
    }
  ]
};
