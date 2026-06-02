LESSON_REGISTRY["understanding-volume"] = {
  id: "understanding-volume",
  title: "Understanding Volume",
  track: "stock-markets",
  category: "fundamentals",
  difficulty: "beginner",
  order: 3,
  estimatedMinutes: 10,
  xpReward: 60,
  prerequisites: ["reading-price-charts"],
  sections: [
    {
      type: "text",
      content: `
        <h3>What Is Volume?</h3>
        <p><strong>Volume</strong> is the total number of shares traded during a given time period. If 10 million shares of Tesla (TSLA) change hands on a particular day, the daily volume is 10 million. Every transaction requires a buyer and a seller, so volume represents the level of activity and interest in a stock.</p>
        <p>Volume is typically displayed as a bar chart at the bottom of a price chart. Each bar corresponds to a candle on the price chart above it. Green volume bars indicate periods where the price closed higher than it opened, and red bars indicate periods where the price closed lower.</p>
        <p>Think of volume as the <strong>fuel</strong> behind a price move. A stock can move up or down on low volume, but that move is less trustworthy. When a price move is accompanied by high volume, it means many participants agree on the direction — and that conviction makes the move more significant and likely to continue.</p>
        <p>The legendary trader Richard Wyckoff, one of the pioneers of technical analysis, placed volume at the center of his methodology. He believed that volume reveals the intentions of "smart money" — institutional investors and market makers whose large trades leave footprints in the volume data.</p>
      `
    },
    {
      type: "key-concept",
      title: "Volume = Conviction",
      content: "Volume measures the strength behind a price move. High volume on an up day means strong buying conviction. High volume on a down day means strong selling conviction. Low volume on any move suggests the move lacks commitment and may reverse. Always check volume before trusting a breakout or breakdown."
    },
    {
      type: "text",
      content: `
        <h3>What Is Average Volume?</h3>
        <p>A single day's volume number is meaningless without context. Is 5 million shares a lot for a particular stock? For Apple (AAPL), which averages 50-70 million shares per day, 5 million is very low. For a small-cap biotech stock that usually trades 200,000 shares, 5 million is explosive.</p>
        <p>That's why traders use <strong>average volume</strong> — typically calculated over 20, 50, or 90 trading days. This gives you a baseline to compare against. When today's volume is significantly above the average, something unusual is happening. Common triggers for volume spikes include:</p>
        <ul>
          <li><strong>Earnings announcements:</strong> Volume often doubles or triples on earnings day as investors react to the results.</li>
          <li><strong>News events:</strong> FDA approvals, product launches, lawsuits, executive departures, or analyst upgrades/downgrades.</li>
          <li><strong>Technical breakouts:</strong> When a stock breaks above resistance or below support, volume surges as traders jump in.</li>
          <li><strong>Sector rotation:</strong> When institutional investors move money between sectors, volume in affected stocks increases dramatically.</li>
        </ul>
        <p><strong>Practical Tip:</strong> Many trading platforms let you overlay a moving average line on the volume bars (often a 20-day or 50-day moving average). This makes it easy to see at a glance whether today's volume is above or below normal.</p>
      `
    },
    {
      type: "text",
      content: `
        <h3>Volume Confirms Trends</h3>
        <p>One of the most important principles in technical analysis is that <strong>volume should confirm the trend</strong>. Here's what that means in practice:</p>
        <ul>
          <li><strong>In an uptrend:</strong> Volume should increase on up days and decrease on down days (pullbacks). This pattern shows that buyers are aggressive when pushing prices higher, while sellers are passive during pullbacks. The uptrend is healthy.</li>
          <li><strong>In a downtrend:</strong> Volume should increase on down days and decrease on up days (bounces). This shows sellers are in control, while the bounces lack conviction.</li>
        </ul>
        <p>When volume does <strong>not</strong> confirm the trend, it's a warning sign. For example, if a stock is making new highs but volume is declining with each new high, it suggests fewer and fewer buyers are willing to pay higher prices. This is called a <strong>volume divergence</strong>, and it often precedes a reversal.</p>
        <p>Consider a real-world example: In early 2021, GameStop (GME) surged from $20 to nearly $500. Volume went from about 10 million shares per day to over 190 million shares per day. That extreme volume confirmed the move's significance — this wasn't a quiet, unreliable drift higher. It was a massive, conviction-driven rally (driven by retail traders coordinating on social media).</p>
      `
    },
    {
      type: "text",
      content: `
        <h3>Volume Spikes — What They Tell You</h3>
        <p>A <strong>volume spike</strong> is a sudden, dramatic increase in trading volume — typically 2x to 10x (or more) the average daily volume. Volume spikes are some of the most important signals on a chart because they mark moments of high emotional intensity.</p>
        <p>How to interpret volume spikes depends on the context:</p>
        <ul>
          <li><strong>Volume spike on a breakout above resistance:</strong> This is bullish. It confirms that the breakout has institutional participation and is more likely to hold. Example: if AAPL has been stuck below $180 for weeks and then breaks above $180 on 3x average volume, that's a legitimate breakout.</li>
          <li><strong>Volume spike on a breakdown below support:</strong> This is bearish. It confirms that sellers have overwhelmed buyers at a key level. The move lower is likely to continue.</li>
          <li><strong>Volume spike at the end of a long downtrend (capitulation):</strong> This can actually be bullish. It often marks the point where the last sellers have given up (capitulated), and the selling pressure is finally exhausted. The stock may be forming a bottom. Capitulation volume is characterized by an extremely high-volume red candle, often with a long lower wick, where the price recovers significantly from its intraday low.</li>
          <li><strong>Volume spike with no significant price movement:</strong> This is called <strong>churning</strong>. It suggests that large players are distributing (selling) shares to unsuspecting buyers, or accumulating shares without moving the price. Churning at the top of a rally is a major warning sign.</li>
        </ul>
      `
    },
    {
      type: "key-concept",
      title: "Climax Volume",
      content: "Climax volume occurs when volume reaches an extreme — often the highest level in months or years. A buying climax (extreme volume on an up day near the top of a rally) often marks the end of the uptrend, as the last enthusiastic buyers pile in. A selling climax (extreme volume on a down day near the bottom of a decline) often marks the end of the downtrend, as panicked sellers capitulate. Climax volume events are potential reversal signals."
    },
    {
      type: "text",
      content: `
        <h3>On-Balance Volume (OBV)</h3>
        <p><strong>On-Balance Volume (OBV)</strong> is a cumulative volume indicator created by Joe Granville in the 1960s. It adds the day's volume when the price closes up and subtracts the day's volume when the price closes down. The result is a running total that rises and falls with buying and selling pressure.</p>
        <p>The actual OBV number doesn't matter — what matters is the <strong>direction</strong> and <strong>shape</strong> of the OBV line:</p>
        <ul>
          <li><strong>Rising OBV:</strong> More volume is flowing into the stock on up days than out on down days. This is bullish — it suggests accumulation by informed buyers.</li>
          <li><strong>Falling OBV:</strong> More volume is flowing out on down days than in on up days. This is bearish — it suggests distribution by informed sellers.</li>
          <li><strong>OBV Divergence:</strong> The most powerful OBV signal occurs when OBV diverges from price. If the stock price is making new highs but OBV is not, it means fewer shares are being traded on each new high — the rally is losing steam. Conversely, if the price is making new lows but OBV is rising, it suggests smart money is quietly accumulating shares at lower prices.</li>
        </ul>
        <p><strong>Practical Tip:</strong> OBV is best used as a confirming indicator. If you're thinking about buying a stock and OBV is in an uptrend, that's a positive sign. If OBV is diverging from price, be cautious — the price trend may not be sustainable.</p>
      `
    },
    {
      type: "interactive-chart",
      config: {
        ticker: "TSLA",
        title: "Explore TSLA Volume",
        description: "Study the volume bars below the TSLA price chart. Notice how volume spikes correspond to significant price moves. Look for days where the price moves sharply on high volume versus days where similar price moves happen on low volume. Which moves look more trustworthy?",
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
        <h3>Volume Rules Every Trader Should Know</h3>
        <p>Here are the essential volume rules to internalize:</p>
        <ul>
          <li><strong>Never trust a breakout on low volume.</strong> If a stock breaks above a key resistance level but volume is below average, the breakout is suspect. Wait for a retest or for volume to confirm before committing capital.</li>
          <li><strong>Volume precedes price.</strong> Often, volume will start increasing before a significant price move begins. If you notice a quiet stock suddenly showing above-average volume for several consecutive days (even without a big price change), something may be developing. Smart money often accumulates shares quietly before a move.</li>
          <li><strong>Exhaustion signals matter.</strong> After a long uptrend, if you see a huge volume spike with a wide-range candle that closes near its lows, this could be a blowoff top — a sign that the trend is exhausting itself. The same applies in reverse at market bottoms.</li>
          <li><strong>Low volume pullbacks are healthy.</strong> When a stock pulls back within an uptrend on declining volume, it suggests that the pullback is simply a pause, not a reversal. Buyers aren't aggressively selling — they're just taking a break. These pullbacks often provide the best buying opportunities.</li>
          <li><strong>Compare volume to average volume, not to other stocks.</strong> A stock's volume is only meaningful relative to its own history. Always compare a day's volume to the stock's average volume, not to volume in a different stock.</li>
        </ul>
      `
    }
  ]
};
