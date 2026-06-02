LESSON_REGISTRY["reading-price-charts"] = {
  id: "reading-price-charts",
  title: "Reading Price Charts",
  track: "stock-markets",
  category: "fundamentals",
  difficulty: "beginner",
  order: 2,
  estimatedMinutes: 12,
  xpReward: 60,
  prerequisites: ["what-is-a-stock"],
  sections: [
    {
      type: "text",
      content: `
        <h3>Why Charts Matter</h3>
        <p>A price chart is the most fundamental tool in a trader's arsenal. It's a visual representation of a stock's price history over time, and it tells a story that numbers alone cannot. Every chart captures the collective emotions of millions of market participants — their fear, greed, hope, and uncertainty — encoded into price movements.</p>
        <p>Charts allow you to quickly assess whether a stock is trending up, trending down, or moving sideways. They help you identify patterns, spot potential entry and exit points, and understand the rhythm of a stock's movement. Whether you're a day trader making decisions in seconds or a long-term investor reviewing monthly trends, reading charts is an essential skill.</p>
        <p>The field of analyzing price charts is called <strong>technical analysis</strong>, and it operates on three core assumptions: (1) the market discounts everything (all known information is already reflected in the price), (2) prices move in trends, and (3) history tends to repeat itself because human psychology doesn't change.</p>
      `
    },
    {
      type: "key-concept",
      title: "Price Action Tells the Story",
      content: "Price action refers to the movement of a stock's price plotted over time. Technical analysts believe that all relevant information — earnings, news, sentiment — is already baked into the price. By studying price action, you can make informed trading decisions without needing to analyze financial statements or news headlines."
    },
    {
      type: "text",
      content: `
        <h3>Line Charts — The Simplest View</h3>
        <p>A <strong>line chart</strong> is the most basic type of price chart. It connects a series of closing prices with a single continuous line. If you look at a stock's performance on Google Finance or most news websites, you're seeing a line chart.</p>
        <p><strong>Advantages:</strong> Line charts are clean, easy to read, and great for getting a quick sense of the overall trend. They strip away the noise and show you the big picture. If you want to know "has this stock generally gone up or down over the past year?" — a line chart gives you the answer instantly.</p>
        <p><strong>Limitations:</strong> Line charts only show the closing price. They hide important intraday information: how high or low the price went during the day, where it opened, and the range of the day's trading. A stock could have crashed 10% during the day but recovered to close flat — the line chart would show nothing unusual. This missing information is critical for traders.</p>
        <p><strong>When to use them:</strong> Line charts work well for long-term trend analysis, comparing multiple stocks on the same chart, and presenting data to people who aren't familiar with more complex chart types. Many investors use line charts for their retirement portfolio reviews.</p>
      `
    },
    {
      type: "text",
      content: `
        <h3>Bar Charts (OHLC Charts)</h3>
        <p>A <strong>bar chart</strong> (also called an OHLC chart) provides much more information than a line chart. Each time period is represented by a vertical bar with two small horizontal ticks. The bar shows four key data points:</p>
        <ul>
          <li><strong>O — Open:</strong> The price at which the stock started trading for that period. Shown as a small horizontal tick on the left side of the bar.</li>
          <li><strong>H — High:</strong> The highest price reached during the period. This is the top of the vertical bar.</li>
          <li><strong>L — Low:</strong> The lowest price reached during the period. This is the bottom of the vertical bar.</li>
          <li><strong>C — Close:</strong> The price at which the stock finished trading for the period. Shown as a small horizontal tick on the right side of the bar.</li>
        </ul>
        <p>The length of the bar tells you the trading range — a tall bar means there was a lot of price movement (high volatility), while a short bar means the price didn't move much (low volatility). If the close is above the open, it was a bullish (up) period. If the close is below the open, it was a bearish (down) period.</p>
        <p>Bar charts were the standard for professional traders for decades before candlestick charts gained popularity. Some experienced traders still prefer them because they're slightly less visually cluttered.</p>
      `
    },
    {
      type: "key-concept",
      title: "OHLC — The Four Key Prices",
      content: "Every time period (1 minute, 1 hour, 1 day, 1 week) has four key prices: Open, High, Low, and Close. The Open tells you where the period started, the High and Low show the extremes, and the Close tells you where it ended. The relationship between these four prices reveals the battle between buyers and sellers during that period."
    },
    {
      type: "text",
      content: `
        <h3>Candlestick Charts — The Trader's Standard</h3>
        <p><strong>Candlestick charts</strong> display the same OHLC data as bar charts but in a visually richer format that makes patterns easier to spot. Developed by Japanese rice traders in the 18th century (attributed to Munehisa Homma), candlestick charting is now the most widely used chart type among traders worldwide.</p>
        <p>Each candlestick has two main components:</p>
        <ul>
          <li><strong>The Body (Real Body):</strong> The thick rectangular part of the candle. It represents the range between the open and close. A <em>green</em> (or white) body means the close was higher than the open — a bullish candle. A <em>red</em> (or black) body means the close was lower than the open — a bearish candle.</li>
          <li><strong>The Wicks (Shadows):</strong> The thin lines extending above and below the body. The upper wick shows how high the price went above the body (intraday high), and the lower wick shows how low it went below the body (intraday low). Long wicks indicate that the price tested extreme levels but was pushed back — a sign of rejection at those levels.</li>
        </ul>
        <p>A candle with a large body and short wicks shows conviction — buyers (green) or sellers (red) were firmly in control. A candle with a small body and long wicks shows indecision — neither side could maintain control.</p>
      `
    },
    {
      type: "text",
      content: `
        <h3>Reading the Wicks — Where the Real Story Lives</h3>
        <p>Experienced traders pay close attention to the wicks (shadows) of candlesticks because they reveal <strong>rejection</strong> — areas where the price tried to go but couldn't stay.</p>
        <ul>
          <li><strong>Long upper wick, short lower wick:</strong> The price spiked up during the period but sellers pushed it back down. This is bearish, especially after an uptrend. It suggests sellers are getting aggressive at higher prices. Example: a stock opens at $100, rallies to $108, but closes at $101. The upper wick tells you there was strong selling pressure at $108.</li>
          <li><strong>Long lower wick, short upper wick:</strong> The price dropped during the period but buyers stepped in and pushed it back up. This is bullish, especially after a downtrend. It suggests buyers are defending a price level. Example: a stock opens at $100, drops to $92, but closes at $99. Buyers clearly wanted the stock at $92.</li>
          <li><strong>Long wicks on both sides (Doji):</strong> The price went both up and down significantly but closed very near where it opened. This signals extreme indecision and often precedes a big move in one direction.</li>
        </ul>
        <p><strong>Practical Tip:</strong> When you see a candle with a very long wick, mark that wick's extreme as a potential support or resistance level. The market told you it doesn't want the price there — and that information is valuable.</p>
      `
    },
    {
      type: "comparison-table",
      headers: ["Chart Type", "Data Shown", "Best For", "Drawback"],
      rows: [
        ["Line Chart", "Closing price only", "Quick trend overview, simplicity", "Hides intraday range and open price"],
        ["Bar Chart (OHLC)", "Open, High, Low, Close", "Detailed analysis, professional trading", "Can look cluttered with many bars"],
        ["Candlestick", "Open, High, Low, Close (visual body/wick)", "Pattern recognition, most trading styles", "Requires learning candlestick patterns"]
      ]
    },
    {
      type: "text",
      content: `
        <h3>Timeframes — Zooming In and Out</h3>
        <p>Every chart has a <strong>timeframe</strong> — the amount of time each candle (or bar) represents. The timeframe you choose dramatically changes the story the chart tells.</p>
        <ul>
          <li><strong>1-Minute / 5-Minute Charts:</strong> Used by day traders and scalpers. Each candle represents 1 or 5 minutes of trading. These charts are extremely noisy and show every minor fluctuation. You'll see dozens of candles in a single trading session.</li>
          <li><strong>15-Minute / 1-Hour Charts:</strong> Used by intraday and swing traders. These smooth out some noise while still capturing the day's key moves. A 1-hour chart of a full trading day has about 7 candles.</li>
          <li><strong>Daily Charts:</strong> The most commonly used timeframe. Each candle represents one full trading day. Swing traders and position traders primarily use daily charts. Most technical analysis concepts (support, resistance, moving averages) were originally designed for daily charts.</li>
          <li><strong>Weekly / Monthly Charts:</strong> Used by long-term investors and position traders. Each candle represents an entire week or month of trading. These charts reveal major trends and long-term support/resistance levels, filtering out all short-term noise.</li>
        </ul>
        <p><strong>Pro Tip — Multiple Timeframe Analysis:</strong> The best traders don't rely on a single timeframe. They use a top-down approach: first check the weekly chart for the big trend, then the daily chart for the current move, and finally the hourly or 15-minute chart for precise entry timing. This way, they trade in the direction of the larger trend while timing entries on the smaller timeframe.</p>
      `
    },
    {
      type: "interactive-chart",
      config: {
        ticker: "SPY",
        title: "Explore SPY Price Chart",
        description: "This is a live chart of SPY (S&P 500 ETF). Practice identifying candlestick bodies, wicks, and the relationship between open, high, low, and close prices. Try switching between different timeframes to see how the same price data looks different at each zoom level.",
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
        <h3>Practical Tips for Chart Reading</h3>
        <p>Here are essential habits to develop as you begin reading charts:</p>
        <ul>
          <li><strong>Start with the daily chart.</strong> Before zooming into smaller timeframes, always check the daily chart to understand the overall trend. Are we in an uptrend, downtrend, or range?</li>
          <li><strong>Look left.</strong> When analyzing the current price, scroll left to see historical context. Has the stock been at this price before? What happened last time? Key levels from the past often matter again.</li>
          <li><strong>Note the big candles.</strong> Unusually large candles (especially with high volume) mark significant events. These candles often create support and resistance levels that the market respects for weeks or months.</li>
          <li><strong>Don't over-analyze.</strong> New traders often see patterns everywhere. Keep it simple: identify the trend, find key levels, and watch for candles that confirm or deny your thesis. Simplicity beats complexity in chart reading.</li>
          <li><strong>Practice on historical data.</strong> Cover up the right side of a chart and try to predict what happens next based on the patterns you see. Then uncover the next few candles to check. This builds intuition faster than any textbook.</li>
        </ul>
      `
    }
  ]
};
