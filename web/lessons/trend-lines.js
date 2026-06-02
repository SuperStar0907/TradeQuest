LESSON_REGISTRY["trend-lines"] = {
  id: "trend-lines",
  title: "Trend Lines and Channels",
  track: "technical-analysis",
  category: "chart-analysis",
  difficulty: "beginner",
  order: 2,
  estimatedMinutes: 12,
  xpReward: 70,
  prerequisites: ["support-and-resistance"],
  sections: [
    {
      type: "text",
      content: `
        <h3>The Trend Is Your Friend</h3>
        <p>"The trend is your friend" is the most quoted saying in trading — and for good reason. Trading in the direction of the prevailing trend dramatically increases your odds of success. A stock in a strong uptrend is more likely to continue rising than to suddenly reverse, and vice versa for downtrends.</p>
        <p>But how do you objectively define a trend? That's where <strong>trend lines</strong> come in. A trend line is a straight line drawn on a chart that connects two or more price points, creating a visual representation of the trend's direction and speed.</p>
        <p>There are three types of trends:</p>
        <ul>
          <li><strong>Uptrend:</strong> A series of higher highs and higher lows. Each peak is higher than the previous peak, and each trough is higher than the previous trough. Buyers are in control.</li>
          <li><strong>Downtrend:</strong> A series of lower highs and lower lows. Each peak is lower than the previous peak, and each trough is lower than the previous trough. Sellers are in control.</li>
          <li><strong>Sideways (Range-bound):</strong> The price oscillates between a horizontal support and resistance level without making a clear series of higher highs/lows or lower highs/lows. Neither buyers nor sellers are in control.</li>
        </ul>
      `
    },
    {
      type: "key-concept",
      title: "Higher Highs + Higher Lows = Uptrend",
      content: "An uptrend is defined by a series of higher highs and higher lows. A downtrend is defined by lower highs and lower lows. This simple framework tells you who is in control — buyers or sellers. When the pattern breaks (e.g., an uptrend makes a lower low), it's the first warning sign of a potential trend change."
    },
    {
      type: "text",
      content: `
        <h3>How to Draw Trend Lines</h3>
        <p>Drawing trend lines correctly is a skill that improves with practice. Here are the rules:</p>
        <ul>
          <li><strong>For an uptrend line:</strong> Connect two or more significant swing lows (troughs) with a straight line. The line should slope upward from left to right. The more swing lows that touch the line, the more valid the trend line is. You need a minimum of two points to draw a line, but three or more touches confirm it.</li>
          <li><strong>For a downtrend line:</strong> Connect two or more significant swing highs (peaks) with a straight line. The line should slope downward from left to right. Again, more touches mean a stronger, more reliable trend line.</li>
          <li><strong>Use wicks or bodies?</strong> This is debated among traders. Some draw trend lines connecting the exact lows (wick tips), while others use candle bodies (closing prices). Both approaches have merit. A practical approach is to treat the trend line as a zone rather than an exact line. If the price comes close to your trend line, consider it "touching" even if it doesn't hit the exact level.</li>
        </ul>
        <p><strong>Common Mistakes:</strong></p>
        <ul>
          <li>Don't force trend lines. If you have to stretch or bend the line to make it fit, the trend line isn't valid. Good trend lines are obvious.</li>
          <li>Don't use too many trend lines. Having a dozen lines on your chart creates confusion. Focus on the two or three most significant ones.</li>
          <li>Don't draw trend lines on very short-term noise. A trend line should connect meaningful swing points, not every minor wiggle.</li>
        </ul>
      `
    },
    {
      type: "text",
      content: `
        <h3>Trend Line Validity and Significance</h3>
        <p>Not all trend lines are equally meaningful. Here's how to assess the quality of a trend line:</p>
        <ul>
          <li><strong>Number of touches:</strong> A trend line with 3-4 touches is considered well-established. A trend line with only 2 touches is tentative — it needs a third touch to confirm. Each additional touch strengthens the line's significance.</li>
          <li><strong>Length/Duration:</strong> A trend line that spans several months or years is more significant than one that covers a few days. Longer trend lines represent bigger trends and attract more market attention.</li>
          <li><strong>Angle:</strong> Sustainable trend lines tend to have moderate angles — roughly 30 to 45 degrees. A very steep trend line (60+ degrees) is usually unsustainable and will eventually break as the pace of the trend slows. Very flat trend lines indicate a weak trend that may not be worth trading.</li>
          <li><strong>Volume behavior at the trend line:</strong> When the price bounces off a trend line on increasing volume, it confirms the trend line's validity. When it approaches the trend line on decreasing volume, the bounce may be weaker.</li>
        </ul>
        <p><strong>Real-World Example:</strong> Apple (AAPL) had a beautiful uptrend line from 2019 to 2021 that connected the December 2018 low, March 2020 COVID low, and several other swing lows. This trend line held for over two years and provided excellent buying opportunities every time the price pulled back to it. When it finally broke in early 2022, it signaled the beginning of a significant correction.</p>
      `
    },
    {
      type: "text",
      content: `
        <h3>Channels — Parallel Trend Lines</h3>
        <p>A <strong>channel</strong> (or price channel) is formed by drawing two parallel trend lines — one connecting the highs and one connecting the lows. Channels create a "highway" that the price travels within, bouncing between the upper and lower boundaries.</p>
        <ul>
          <li><strong>Ascending Channel:</strong> Both lines slope upward. The price makes higher highs and higher lows within the channel. This is an uptrend contained within parallel boundaries. Traders buy near the lower channel line and sell near the upper channel line.</li>
          <li><strong>Descending Channel:</strong> Both lines slope downward. The price makes lower highs and lower lows within the channel. This is a downtrend. Short sellers enter near the upper channel line and cover near the lower channel line.</li>
          <li><strong>Horizontal Channel (Rectangle):</strong> Both lines are roughly flat. The price oscillates between horizontal support and resistance. This is a range-bound market, and traders buy at the bottom and sell at the top until the range breaks.</li>
        </ul>
        <p>To draw a channel, first draw the primary trend line (connecting lows in an uptrend or highs in a downtrend). Then draw a parallel line on the opposite side of the price action. The channel is valid if the price respects both lines reasonably well.</p>
        <p><strong>Practical Tip:</strong> The midline of a channel (halfway between the upper and lower lines) often acts as a minor support or resistance level. Watch how the price behaves around the channel's midline — it frequently causes small bounces or pauses.</p>
      `
    },
    {
      type: "key-concept",
      title: "Channel Trading",
      content: "A price channel is formed by two parallel trend lines. In an ascending channel, buy near the lower line (support) and consider selling near the upper line (resistance). In a descending channel, sell near the upper line and consider buying near the lower line. The strongest signals occur when the price breaks out of the channel on high volume."
    },
    {
      type: "text",
      content: `
        <h3>Trend Breaks — When Trends End</h3>
        <p>All trends eventually end. Recognizing when a trend line breaks is crucial for protecting profits and avoiding losses. Here's how to evaluate a trend line break:</p>
        <ul>
          <li><strong>Close beyond the line, not just a wick:</strong> A candle's wick briefly poking through a trend line is not a confirmed break. Wait for the candle to <em>close</em> beyond the trend line. A close below an uptrend line or above a downtrend line is the basic requirement for a break.</li>
          <li><strong>Volume on the break:</strong> A trend line break on high volume is far more significant than one on low volume. High volume indicates that many participants are committing to the new direction.</li>
          <li><strong>The 3% rule:</strong> Some traders require the price to break the trend line by at least 3% (of the stock price) before confirming the break. This filters out minor violations and false breakouts.</li>
          <li><strong>Follow-through:</strong> A legitimate trend break is usually followed by continued movement in the new direction. If the price breaks the trend line but then quickly reverses back, it was likely a false break (or "fakeout").</li>
        </ul>
        <p>After a trend line breaks, the broken line often becomes a level of interest. A broken uptrend line may become resistance on a subsequent rally. A broken downtrend line may become support on a subsequent pullback. This is similar to the role reversal concept we covered with horizontal support and resistance.</p>
      `
    },
    {
      type: "interactive-chart",
      config: {
        ticker: "TSLA",
        title: "Practice Drawing Trend Lines on TSLA",
        description: "Study this TSLA chart and mentally draw trend lines connecting the swing lows (for uptrends) or swing highs (for downtrends). Look for channels where parallel lines could contain the price action. Notice how trend line breaks often lead to significant moves.",
        indicators: ["sma"],
        controls: [
          { type: "range", id: "smaPeriod", label: "SMA Period", min: 5, max: 200, default: 50, step: 1 }
        ],
        showRSI: false,
        showMACD: false
      }
    },
    {
      type: "text",
      content: `
        <h3>Practical Tips for Trend Line Trading</h3>
        <ul>
          <li><strong>Trade in the direction of the trend.</strong> In an uptrend, look for buying opportunities on pullbacks to the uptrend line. In a downtrend, look for shorting opportunities on rallies to the downtrend line. Fighting the trend is a recipe for losses.</li>
          <li><strong>Combine with other tools.</strong> Trend lines work best when combined with other analysis. A trend line bounce that also aligns with a horizontal support level, a moving average, or a Fibonacci level is a much stronger signal than a trend line bounce alone.</li>
          <li><strong>Be flexible.</strong> Sometimes a trend line needs to be redrawn. If the price slightly violates the line but the trend clearly continues, adjust your line. Markets don't always move in perfectly straight lines.</li>
          <li><strong>Watch for fan lines.</strong> As a trend accelerates, you may need to draw steeper trend lines. When these steeper lines break, the price often falls back to the original, less steep trend line. This creates a "fan" of trend lines that can help you gauge the trend's maturity.</li>
          <li><strong>Channel breakouts are powerful.</strong> When the price breaks out of a well-defined channel, the resulting move is often equal to the width of the channel. This "measured move" concept can help you set price targets.</li>
        </ul>
      `
    }
  ]
};
