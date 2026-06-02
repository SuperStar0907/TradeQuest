LESSON_REGISTRY["macd-indicator"] = {
  id: "macd-indicator",
  title: "MACD Indicator",
  track: "technical-analysis",
  category: "indicators",
  difficulty: "intermediate",
  order: 5,
  estimatedMinutes: 12,
  xpReward: 80,
  prerequisites: ["rsi-indicator"],
  sections: [
    {
      type: "text",
      content: `
        <h3>What Is MACD?</h3>
        <p>The <strong>Moving Average Convergence Divergence (MACD)</strong> is a trend-following momentum indicator developed by Gerald Appel in the late 1970s. It reveals changes in the strength, direction, momentum, and duration of a trend by analyzing the relationship between two exponential moving averages.</p>
        <p>MACD is one of the most popular technical indicators in the world because it's versatile — it works as both a trend indicator and a momentum indicator. Whether you're a day trader, swing trader, or long-term investor, MACD provides actionable information about where a stock is heading.</p>
        <p>Unlike RSI, which oscillates between fixed boundaries (0-100), MACD has no fixed boundaries. It can rise or fall indefinitely based on the price action. This makes it better suited for identifying the direction and strength of a trend rather than absolute overbought/oversold conditions.</p>
      `
    },
    {
      type: "text",
      content: `
        <h3>MACD Components — Understanding the Parts</h3>
        <p>MACD consists of three components displayed together. Understanding each one is essential:</p>
        <ul>
          <li><strong>MACD Line (the fast line):</strong> This is the core of the indicator. It's calculated by subtracting the 26-period EMA from the 12-period EMA. When the 12 EMA is above the 26 EMA, the MACD line is positive (bullish momentum). When the 12 EMA is below the 26 EMA, the MACD line is negative (bearish momentum). The further apart these two EMAs are, the larger the MACD value — indicating stronger momentum.</li>
          <li><strong>Signal Line (the slow line):</strong> This is a 9-period EMA of the MACD line itself. It acts as a smoothed version of the MACD line and serves as a trigger for buy and sell signals. When the MACD line crosses above the signal line, it's bullish. When it crosses below, it's bearish.</li>
          <li><strong>Histogram:</strong> The histogram is a bar chart that visualizes the difference between the MACD line and the signal line. When the MACD line is above the signal line, the histogram bars are positive (typically green). When the MACD line is below the signal line, the bars are negative (typically red). The histogram makes it easy to see the momentum at a glance and spot when the MACD is about to cross the signal line.</li>
        </ul>
        <p><strong>Default Settings:</strong> The standard MACD settings are 12, 26, 9 (12-period EMA, 26-period EMA, 9-period signal line). These were chosen by Appel to work well on daily charts and have stood the test of time. However, some traders adjust these — using 8, 17, 9 for faster signals or 19, 39, 9 for slower, more reliable signals.</p>
      `
    },
    {
      type: "key-concept",
      title: "MACD = Trend + Momentum in One Indicator",
      content: "The MACD line (12 EMA minus 26 EMA) tells you the direction and strength of the trend. The signal line (9 EMA of MACD) acts as a trigger. The histogram (MACD minus signal) shows the momentum of the momentum. When all three align — MACD above zero, above the signal line, histogram growing — you have strong bullish momentum."
    },
    {
      type: "text",
      content: `
        <h3>Signal Line Crossovers — The Primary Trading Signal</h3>
        <p>The most common MACD trading signal is the <strong>signal line crossover</strong>:</p>
        <ul>
          <li><strong>Bullish Crossover:</strong> The MACD line crosses above the signal line. This suggests upward momentum is increasing and may be a good time to buy. The further below zero this crossover occurs, the more significant it tends to be — it means the stock was in bearish territory and is now turning bullish.</li>
          <li><strong>Bearish Crossover:</strong> The MACD line crosses below the signal line. This suggests downward momentum is increasing and may be a time to sell or short. Crossovers that occur well above zero tend to be more significant.</li>
        </ul>
        <p><strong>Real-World Example:</strong> In March 2020, when COVID-19 crashed the market, the MACD on the S&P 500 (SPY) went deeply negative. When the MACD line crossed above the signal line in early April 2020, it generated a bullish crossover signal. Traders who acted on that signal caught the beginning of one of the fastest market recoveries in history.</p>
        <p><strong>Important Warning:</strong> In sideways or choppy markets, MACD crossovers generate frequent false signals (whipsaws). The MACD line and signal line cross back and forth without the price going anywhere meaningful. To filter out these false signals:</p>
        <ul>
          <li>Only take bullish crossovers when the MACD line is below zero (buying the oversold bounce).</li>
          <li>Only take bearish crossovers when the MACD line is above zero (selling the overbought retreat).</li>
          <li>Require the histogram to show at least 2-3 bars of increasing momentum after the crossover before committing.</li>
          <li>Confirm the signal with volume, support/resistance, or other indicators.</li>
        </ul>
      `
    },
    {
      type: "text",
      content: `
        <h3>The Zero Line — Trend Direction</h3>
        <p>The <strong>zero line</strong> (also called the centerline) is an important feature of MACD that many traders overlook. The MACD line crosses zero when the 12 EMA equals the 26 EMA. This tells you something significant about the trend:</p>
        <ul>
          <li><strong>MACD above zero:</strong> The 12 EMA is above the 26 EMA, meaning the short-term trend is bullish. The higher above zero, the stronger the bullish momentum.</li>
          <li><strong>MACD below zero:</strong> The 12 EMA is below the 26 EMA, meaning the short-term trend is bearish. The lower below zero, the stronger the bearish momentum.</li>
          <li><strong>Zero line crossover:</strong> When the MACD line crosses above zero, it's a bullish signal similar to a golden cross (though using different MA periods). When it crosses below zero, it's bearish.</li>
        </ul>
        <p>Zero line crossovers are slower but generally more reliable than signal line crossovers. They represent a genuine shift in trend direction rather than just a momentum fluctuation.</p>
        <p><strong>Practical Tip:</strong> Use the zero line as a filter. In an uptrend (MACD above zero), only take bullish signal line crossovers. In a downtrend (MACD below zero), only take bearish signal line crossovers. This keeps you trading in the direction of the prevailing trend and avoids many false signals.</p>
      `
    },
    {
      type: "text",
      content: `
        <h3>The MACD Histogram — Momentum of Momentum</h3>
        <p>The histogram is the most underappreciated component of MACD, yet many experienced traders consider it the most useful. It visualizes the gap between the MACD line and the signal line, and its behavior reveals subtle momentum shifts before the actual crossover happens.</p>
        <p><strong>How to read the histogram:</strong></p>
        <ul>
          <li><strong>Growing positive histogram:</strong> The MACD is above the signal line and pulling further away. Bullish momentum is accelerating. This is the strongest bullish phase.</li>
          <li><strong>Shrinking positive histogram:</strong> The MACD is still above the signal line but converging. Bullish momentum is decelerating. A bearish crossover may be approaching. This is an early warning to tighten stops or take partial profits.</li>
          <li><strong>Growing negative histogram:</strong> The MACD is below the signal line and pulling further away. Bearish momentum is accelerating. This is the strongest bearish phase.</li>
          <li><strong>Shrinking negative histogram:</strong> The MACD is still below the signal line but converging. Bearish momentum is decelerating. A bullish crossover may be approaching. Watch for buying opportunities.</li>
        </ul>
        <p><strong>Key Insight:</strong> The histogram often peaks and starts declining <em>before</em> the MACD line crosses the signal line. This gives you a heads-up that the crossover is coming. Traders who watch the histogram can act earlier than those who wait for the actual crossover.</p>
      `
    },
    {
      type: "text",
      content: `
        <h3>MACD Divergence</h3>
        <p>Like RSI, MACD can show <strong>divergence</strong> with price, and it's one of the most powerful signals the indicator produces.</p>
        <ul>
          <li><strong>Bullish Divergence:</strong> Price makes a lower low, but the MACD line (or histogram) makes a higher low. This indicates that selling momentum is weakening even though prices are still falling — a potential bottom is forming.</li>
          <li><strong>Bearish Divergence:</strong> Price makes a higher high, but the MACD line (or histogram) makes a lower high. This indicates that buying momentum is weakening even though prices are still rising — a potential top is forming.</li>
        </ul>
        <p>MACD divergence tends to be more reliable on higher timeframes (daily, weekly) and less reliable on lower timeframes (5-minute, 15-minute) where noise can create misleading divergences.</p>
        <p><strong>Real-World Example:</strong> Before the 2022 bear market, many major tech stocks showed clear MACD bearish divergence on their weekly charts. Meta (META), for instance, made new highs in September 2021, but its weekly MACD was already making lower highs. The stock went on to decline over 75% from its peak.</p>
      `
    },
    {
      type: "key-concept",
      title: "MACD Divergence Signals Trend Exhaustion",
      content: "When the price makes a new extreme (higher high or lower low) but MACD does not confirm, the trend is losing internal momentum even though the price hasn't reversed yet. This is one of the earliest warnings of a potential trend change. MACD divergences on the weekly chart are particularly powerful for identifying major market turning points."
    },
    {
      type: "interactive-chart",
      config: {
        ticker: "SPY",
        title: "Explore MACD on SPY",
        description: "The MACD indicator is displayed below the price chart, showing the MACD line (blue), signal line (orange), and histogram (green/red bars). Watch for bullish crossovers (MACD crossing above signal) and bearish crossovers (MACD crossing below signal). Pay attention to the histogram — notice how it starts shrinking before crossovers actually occur.",
        indicators: ["sma"],
        controls: [
          { type: "range", id: "smaPeriod", label: "SMA Period", min: 5, max: 200, default: 20, step: 1 }
        ],
        showRSI: false,
        showMACD: true
      }
    },
    {
      type: "text",
      content: `
        <h3>MACD Best Practices</h3>
        <ul>
          <li><strong>Combine MACD with RSI.</strong> MACD tells you about trend direction and momentum. RSI tells you about overbought/oversold conditions. Together, they provide a more complete picture. A bullish MACD crossover combined with RSI rising from oversold territory is a strong buy signal.</li>
          <li><strong>Use the histogram for early entries.</strong> Instead of waiting for the full MACD/signal crossover, watch for the histogram to start shrinking. This earlier signal lets you enter with better risk/reward, though it's also more prone to false starts.</li>
          <li><strong>Weekly MACD for major trends.</strong> Check the weekly MACD for the big picture. If the weekly MACD is bullish, focus on buying opportunities on the daily chart. If the weekly MACD is bearish, be cautious with long positions.</li>
          <li><strong>Don't ignore zero-line crosses.</strong> Zero-line crosses are slower signals but represent more significant trend shifts. A MACD crossing above zero from deeply negative territory often marks the start of a major rally.</li>
          <li><strong>Adjust settings if needed.</strong> For faster-moving stocks or shorter timeframes, try 8, 17, 9. For slower stocks or weekly charts, try 19, 39, 9. The default 12, 26, 9 works well for most situations on daily charts.</li>
        </ul>
      `
    }
  ]
};
