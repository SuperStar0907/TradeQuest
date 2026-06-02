LESSON_REGISTRY["moving-averages"] = {
  id: "moving-averages",
  title: "Moving Averages",
  track: "technical-analysis",
  category: "indicators",
  difficulty: "intermediate",
  order: 3,
  estimatedMinutes: 15,
  xpReward: 80,
  prerequisites: ["trend-lines"],
  sections: [
    {
      type: "text",
      content: `
        <h3>What Are Moving Averages?</h3>
        <p>A <strong>moving average (MA)</strong> is one of the most widely used indicators in all of technical analysis. It smooths out price data by calculating the average price over a specific number of periods, creating a single flowing line on the chart. This line filters out short-term noise and reveals the underlying trend direction.</p>
        <p>The concept is simple: if you take the last 20 closing prices and calculate their average, you get the 20-day moving average. Tomorrow, you drop the oldest price, add the newest one, and recalculate. The average "moves" forward over time — hence the name.</p>
        <p>Moving averages serve multiple purposes:</p>
        <ul>
          <li><strong>Trend identification:</strong> If the price is above the moving average, the trend is generally up. If below, the trend is generally down. The slope of the MA tells you the trend's direction.</li>
          <li><strong>Dynamic support and resistance:</strong> Moving averages act as moving floors (in uptrends) and ceilings (in downtrends) that the price often bounces off.</li>
          <li><strong>Trade signals:</strong> Crossovers between different moving averages or between the price and a moving average generate buy and sell signals.</li>
          <li><strong>Measuring momentum:</strong> The distance between the price and its moving average indicates momentum. A price far above its MA is showing strong bullish momentum but may also be overextended.</li>
        </ul>
      `
    },
    {
      type: "text",
      content: `
        <h3>Simple Moving Average (SMA)</h3>
        <p>The <strong>Simple Moving Average (SMA)</strong> is the most basic type. It calculates the arithmetic mean of a set number of closing prices. For example, a 20-day SMA adds up the last 20 closing prices and divides by 20.</p>
        <p><strong>Formula:</strong> SMA = (P1 + P2 + P3 + ... + Pn) / n, where P is the closing price and n is the number of periods.</p>
        <p>The SMA treats every data point equally — the price from 20 days ago has the same weight as yesterday's price. This creates a smooth, stable line that's easy to interpret. However, it also means the SMA reacts slowly to recent price changes because it's being "dragged" by older data.</p>
        <p><strong>Common SMA Periods:</strong></p>
        <ul>
          <li><strong>10-day SMA:</strong> Very short-term, used by active day traders. Hugs price closely and reacts quickly.</li>
          <li><strong>20-day SMA:</strong> Roughly one trading month. Popular with swing traders. A good balance between responsiveness and smoothness.</li>
          <li><strong>50-day SMA:</strong> One of the most watched moving averages on Wall Street. Institutional traders and algorithms use it heavily. A stock breaking below its 50-day SMA often triggers automated selling.</li>
          <li><strong>100-day SMA:</strong> A medium-term gauge used by position traders.</li>
          <li><strong>200-day SMA:</strong> The king of moving averages. It represents roughly one year of trading data. The 200-day SMA is watched by virtually every professional trader and investor. A stock above its 200-day SMA is considered to be in a long-term uptrend; below it, a long-term downtrend. Warren Buffett-style investors often won't buy stocks below the 200-day SMA.</li>
        </ul>
      `
    },
    {
      type: "text",
      content: `
        <h3>Exponential Moving Average (EMA)</h3>
        <p>The <strong>Exponential Moving Average (EMA)</strong> addresses the SMA's biggest weakness: its slow reaction to recent price changes. The EMA applies more weight to recent prices and less weight to older prices, using an exponential weighting factor.</p>
        <p>The most recent price has the highest weight, and each older price has progressively less influence. The result is a moving average that reacts more quickly to recent price changes while still smoothing out noise.</p>
        <p><strong>Key Differences from SMA:</strong></p>
        <ul>
          <li>The EMA reacts faster to price changes, which is both a strength and a weakness. It catches trend changes earlier but is also more susceptible to generating false signals in choppy markets.</li>
          <li>The EMA stays closer to the current price than the SMA. In a strong trend, the EMA will be between the price and the SMA.</li>
          <li>The EMA never truly "forgets" old data — it just gives it exponentially decreasing weight. In contrast, the SMA completely drops old data after n periods.</li>
        </ul>
        <p><strong>When to use which?</strong> There's no universally "better" choice. Shorter-term traders tend to prefer EMAs because they react faster. Longer-term investors often prefer SMAs because they're smoother and generate fewer false signals. Many traders use both — for example, using the 200-day SMA for the long-term trend and the 9 or 21-day EMA for short-term signals.</p>
      `
    },
    {
      type: "comparison-table",
      headers: ["Feature", "Simple Moving Average (SMA)", "Exponential Moving Average (EMA)"],
      rows: [
        ["Calculation", "Equal weight to all prices in the period", "More weight to recent prices, exponentially decreasing for older prices"],
        ["Responsiveness", "Slower to react to new price data", "Faster to react, catches trend changes earlier"],
        ["Smoothness", "Smoother, less noise, fewer false signals", "Less smooth, more responsive, more prone to whipsaws"],
        ["Lag", "Higher lag — signals come later", "Lower lag — signals come earlier"],
        ["Best For", "Long-term trend analysis, position trading", "Short-term trading, fast-moving markets"],
        ["Popular Periods", "50-day, 100-day, 200-day", "9-day, 12-day, 21-day, 26-day"],
        ["Used In", "Standalone analysis, golden/death cross", "MACD indicator, swing trading signals"]
      ]
    },
    {
      type: "text",
      content: `
        <h3>Golden Cross and Death Cross</h3>
        <p>The <strong>Golden Cross</strong> and <strong>Death Cross</strong> are two of the most famous moving average signals in trading. They involve the crossover of two specific moving averages: the 50-day and the 200-day.</p>
        <ul>
          <li><strong>Golden Cross:</strong> The 50-day SMA crosses <em>above</em> the 200-day SMA. This is a bullish signal, suggesting the short-term trend has turned positive and may lead to a sustained uptrend. The term "golden" reflects the positive outlook. Historically, golden crosses in the S&P 500 have preceded significant bull runs. The golden cross after the March 2020 COVID crash occurred in July 2020, and the S&P 500 went on to rally for over a year.</li>
          <li><strong>Death Cross:</strong> The 50-day SMA crosses <em>below</em> the 200-day SMA. This is a bearish signal, suggesting the short-term trend has turned negative and a sustained downtrend may follow. The term "death" reflects the negative outlook. The death cross appeared in the S&P 500 in December 2018 and again in March 2022, both preceding further declines.</li>
        </ul>
        <p><strong>Important Caveat:</strong> Both the golden cross and death cross are <strong>lagging signals</strong>. By the time the 50-day MA crosses the 200-day MA, a significant portion of the move has already happened. They're better used as confirmation of a trend change rather than as precise timing tools. In choppy, sideways markets, they can generate false signals (whipsaws) where the MAs cross back and forth repeatedly.</p>
      `
    },
    {
      type: "key-concept",
      title: "Golden Cross = Bullish, Death Cross = Bearish",
      content: "A Golden Cross (50-day SMA crossing above the 200-day SMA) is one of the most bullish signals in technical analysis. A Death Cross (50-day SMA crossing below the 200-day SMA) is one of the most bearish. These signals are powerful but lag the actual trend change. Use them for confirmation, not prediction."
    },
    {
      type: "text",
      content: `
        <h3>Moving Averages as Dynamic Support and Resistance</h3>
        <p>One of the most practical uses of moving averages is treating them as <strong>dynamic support and resistance levels</strong> — "dynamic" because they move with the price, unlike horizontal support/resistance which stays fixed.</p>
        <p>In a strong uptrend, the price tends to pull back to its moving average and then bounce. The MA acts as a moving floor:</p>
        <ul>
          <li>Aggressive uptrends respect the <strong>10 or 20-day MA</strong>. If the price pulls back to the 10 or 20 MA and bounces, the trend is very strong. Tesla in late 2020 barely touched its 10-day EMA during its parabolic rally.</li>
          <li>Moderate uptrends respect the <strong>50-day MA</strong>. Most healthy uptrends see regular pullbacks to the 50-day MA. Apple, Microsoft, and other large-cap leaders frequently bounce off their 50-day MA during bull markets.</li>
          <li>Slow uptrends and corrections respect the <strong>200-day MA</strong>. The 200-day MA is often the "last line of defense" for a bull trend. If the price falls below the 200-day MA, many institutional investors reduce their exposure.</li>
        </ul>
        <p>In downtrends, the moving averages flip and act as resistance (a moving ceiling). Stocks below their 50-day and 200-day MAs often rally to those levels and get rejected, confirming the bearish trend.</p>
        <p><strong>Practical Tip:</strong> In a clear uptrend, buying on pullbacks to a rising 50-day SMA is one of the most reliable trading strategies. Set your stop loss just below the 50-day SMA. If the MA breaks on a closing basis, the uptrend may be over and it's time to step aside.</p>
      `
    },
    {
      type: "interactive-chart",
      config: {
        ticker: "SPY",
        title: "Explore Moving Averages on SPY",
        description: "Use the slider below to change the SMA period. Start with 20 to see how a short-term MA hugs the price, then increase to 50 and 200 to see how longer-term MAs smooth out the trend. Notice how the price bounces off the MA in strong trends and cuts through it in choppy markets.",
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
        <h3>Moving Average Strategies and Practical Tips</h3>
        <ul>
          <li><strong>Use multiple MAs together.</strong> Many traders overlay 2-3 moving averages on their chart (e.g., 20, 50, and 200). When these MAs are stacked in order (20 above 50 above 200), the trend is strongly bullish. When they're inverted (20 below 50 below 200), the trend is strongly bearish. When they're tangled together, the market is directionless.</li>
          <li><strong>MA ribbon.</strong> Some traders plot a "ribbon" of multiple MAs (10, 20, 30, 40, 50, etc.) to visualize the trend's strength. When the ribbon fans out (MAs are spread apart), the trend is strong. When it contracts (MAs converge), the trend is weakening.</li>
          <li><strong>Don't use MAs in isolation.</strong> Moving averages are lagging indicators — they tell you where the price has been, not where it's going. Combine them with leading indicators (RSI, volume), candlestick patterns, and support/resistance levels for better results.</li>
          <li><strong>Adapt periods to the stock.</strong> Not every stock responds to the same MA period. Some stocks respect the 21 EMA beautifully; others respond better to the 50 SMA. Backtest different periods on the specific stock you're trading to find what works best.</li>
          <li><strong>Beware of "MA soup."</strong> Putting too many moving averages on your chart creates confusion. Stick to 2-3 that you understand well. Most professional traders use some combination of 20/50/200 or 9/21/50.</li>
        </ul>
      `
    }
  ]
};
