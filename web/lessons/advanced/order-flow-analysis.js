LESSON_REGISTRY["order-flow-analysis"] = {
  id: "order-flow-analysis",
  title: "Order Flow Analysis",
  track: "advanced",
  category: "advanced-strategies",
  difficulty: "advanced",
  order: 48,
  estimatedMinutes: 14,
  xpReward: 95,
  prerequisites: ["wyckoff-method"],
  sections: [
    {
      type: "text",
      content: "<h3>Reading the Market's Raw Language</h3><p>Order flow analysis is the practice of reading the actual flow of buy and sell orders to infer the intentions of large participants. Unlike price-based indicators (which are derivatives of price), order flow tools examine the <em>mechanism</em> that creates price: the matching of aggressive market orders against passive limit orders at each price level.</p><p>The fundamental distinction is between:</p><ul><li><strong>Passive orders (limit orders):</strong> Orders resting on the book waiting to be filled at a specific price. These are the market makers and liquidity providers.</li><li><strong>Aggressive orders (market orders):</strong> Orders demanding immediate execution at the best available price. These are the initiators of price movement. When aggressive buyers overwhelm passive sellers, price rises.</li></ul><p>Order flow tools make this interaction visible, allowing traders to see not just <em>where</em> price went, but <em>how much effort</em> was required to get it there.</p>"
    },
    {
      type: "key-concept",
      title: "Cumulative Delta",
      content: "Cumulative Delta (CD) is the running total of the difference between buying volume (trades that executed at the ask) and selling volume (trades that executed at the bid) over a given period. A rising CD means buyers are being more aggressive than sellers — positive momentum in order flow. A falling CD means sellers are more aggressive. The most powerful signals come from divergences: if price makes a new high but CD fails to confirm (fails to make a new high), sellers are absorbing the buying and a reversal is likely. Conversely, price making a new low while CD holds above its prior low signals buying absorption — a potential floor."
    },
    {
      type: "text",
      content: "<h3>Footprint Charts</h3><p>A footprint chart (also called a Bid-Ask chart or Cluster chart) displays the volume traded at each price level within each candle, split by whether the trade was buyer-initiated (at the ask) or seller-initiated (at the bid). Each row in a candle shows: <code>[bid volume] x [ask volume]</code>.</p><p>Key patterns to identify in footprint charts:</p><ul><li><strong>Stacked imbalances:</strong> Consecutive price levels where ask volume dramatically exceeds bid volume (or vice versa). When three or more consecutive price levels show the same directional imbalance (typically a 3:1 or 4:1 ratio), it indicates a strong directional conviction from aggressive participants.</li><li><strong>Unfinished business / poor highs and lows:</strong> When the final price level in a candle's range shows very little volume, the market left quickly at that price — it is likely to revisit it.</li><li><strong>High volume nodes within a candle:</strong> Large volumes at a specific price within a candle indicate a contested area — both buyers and sellers were active. Price often returns to these levels.</li></ul>"
    },
    {
      type: "text",
      content: "<h3>Absorption and Exhaustion: The Two Core Signals</h3><p><strong>Absorption</strong> occurs when large passive limit orders absorb aggressive market orders without allowing price to move through them. Signs of absorption include: high volume at a price level with minimal price movement, delta divergence (many buy orders but price refuses to advance), and repeated tests of a level that fail to break it. Absorption identifies where large players have positioned their orders defensively — these become high-conviction support/resistance levels.</p><p><strong>Exhaustion</strong> occurs when the last aggressive buyers or sellers exhaust their capacity at the extreme of a move, leaving no continuation fuel. Signs of exhaustion include: very high volume on the final push in a trend with a small price increment (buying climax), negative delta at highs (sellers are winning the final battle), and a sudden collapse in aggressive order flow after a sustained trend. Exhaustion often precedes sharp reversals because the prior trend's participants have fully committed their capital.</p>"
    },
    {
      type: "comparison-table",
      headers: ["Tool", "What It Measures", "Primary Signal", "Best Used For"],
      rows: [
        ["Cumulative Delta", "Net difference between aggressive buying and selling volume", "Delta-price divergence signals reversals", "Identifying trend strength and early reversal signals"],
        ["Footprint Chart", "Bid vs ask volume at each price level within each bar", "Stacked imbalances, absorption clusters", "Pinpointing exact entry levels and identifying trapped participants"],
        ["Volume Profile (VPOC)", "Total volume traded at each price level over a period", "High-volume nodes as support/resistance, low-volume gaps", "Defining value areas and identifying price levels the market will revisit"],
        ["Time and Sales (Tape)", "Individual trade prints with price, size, and time", "Large block prints at key levels; speed of hitting bid vs ask", "Real-time confirmation of aggressive order flow at decision points"],
        ["Depth of Market (DOM)", "Resting limit orders on the bid and ask", "Large limit orders as potential support/resistance", "Short-term scalping; identifying iceberg orders and spoofed levels"]
      ]
    },
    {
      type: "key-concept",
      title: "Tape Reading in the Modern Market",
      content: "Traditional tape reading (reading the time and sales feed) remains relevant despite algorithmic markets. Key technique: watch for large block prints at price levels you have identified as significant through other analysis. A 10,000-contract print at a key support on the S&P futures, filled at the bid, is a very different signal from the same print filled at the ask. The former is aggressive selling into support; the latter is a large buyer lifting the offer at a key level. The combination of price context (support/resistance, trend), delta behavior, and large print analysis gives order flow traders an edge that pure price chart traders lack. The limitation: order flow tools require low-latency data feeds and significant screen time. They are better suited to intraday trading than swing or position trading."
    }
  ]
};
