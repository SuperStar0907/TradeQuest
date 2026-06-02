LESSON_REGISTRY["chart-patterns"] = {
  id: "chart-patterns",
  title: "Chart Patterns",
  category: "technical-analysis",
  difficulty: "intermediate",
  estimatedMinutes: 15,
  xpReward: 85,
  sections: [
    {
      type: "text",
      content: "<h3>Reversal Patterns</h3><p>These patterns signal that the current trend is about to reverse:</p><ul><li><strong>Head and Shoulders</strong> — Three peaks: middle (head) is highest. Neckline connects the troughs. Break below neckline confirms bearish reversal. Measured move = head-to-neckline distance.</li><li><strong>Inverse Head and Shoulders</strong> — Mirror image. Three troughs with middle lowest. Breakout above neckline signals bullish reversal.</li><li><strong>Double Top</strong> — M-shape. Price hits resistance twice and fails. Break below support between peaks confirms.</li><li><strong>Double Bottom</strong> — W-shape. Price hits support twice and bounces. Break above resistance confirms bullish reversal.</li></ul>"
    },
    {
      type: "text",
      content: "<h3>Continuation Patterns</h3><p>These signal a pause in the trend before it continues:</p><ul><li><strong>Ascending Triangle</strong> — Flat resistance + rising support (higher lows). Usually breaks up. Volume decreases during formation.</li><li><strong>Descending Triangle</strong> — Flat support + falling resistance (lower highs). Usually breaks down.</li><li><strong>Symmetrical Triangle</strong> — Converging trendlines. Can break either way — wait for confirmation with volume.</li><li><strong>Bull Flag</strong> — Sharp rally (pole) + small downward channel (flag). Breakout continues uptrend.</li><li><strong>Cup and Handle</strong> — U-shaped recovery (cup) + small pullback (handle). Breakout above handle is the entry.</li></ul>"
    },
    {
      type: "interactive-chart",
      config: {
        ticker: "MSFT",
        title: "Microsoft (MSFT) — Spot the Patterns",
        description: "Look for consolidation areas where price forms recognizable shapes. Volume typically decreases during pattern formation and spikes on breakout."
      }
    },
    {
      type: "key-concept",
      title: "Measured Moves",
      content: "Most chart patterns have a <strong>measured move</strong> — a projected price target based on the pattern height. For a double bottom at $100 with resistance at $110, the target is $120 ($10 above the breakout). This gives you a profit target for position management."
    },
    {
      type: "text",
      content: "<h3>Pattern Trading Rules</h3><ol><li>Wait for <strong>confirmation</strong> — a breakout with volume, not just a pattern forming.</li><li>Set stops below the pattern's key level (neckline, support, etc.).</li><li>Use the measured move for your profit target.</li><li>Higher timeframe patterns are more reliable than lower timeframe ones.</li><li>Not every pattern works — manage risk with proper position sizing.</li></ol>"
    }
  ],
  track: "stock-markets",
  order: 10,
  prerequisites: [
    "fibonacci-retracements"
  ]
};
