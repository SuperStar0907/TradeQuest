LESSON_REGISTRY["fibonacci-retracements"] = {
  id: "fibonacci-retracements",
  title: "Fibonacci Retracements",
  category: "technical-analysis",
  difficulty: "intermediate",
  estimatedMinutes: 12,
  xpReward: 85,
  sections: [
    {
      type: "text",
      content: "<h3>The Golden Ratio in Markets</h3><p>Fibonacci retracements are horizontal lines that indicate where support and resistance are likely to occur. They are based on the Fibonacci sequence and the golden ratio (1.618).</p><p>Key Fibonacci levels:</p><ul><li><strong>23.6%</strong> — Shallow retracement (strong trend)</li><li><strong>38.2%</strong> — Moderate pullback</li><li><strong>50.0%</strong> — Not a Fibonacci number, but widely watched</li><li><strong>61.8%</strong> — The golden ratio. Most important level</li><li><strong>78.6%</strong> — Deep retracement (trend may be weakening)</li></ul>"
    },
    {
      type: "interactive-chart",
      config: {
        ticker: "NVDA",
        title: "NVIDIA (NVDA) — Fibonacci Levels",
        description: "In a strong uptrend, pullbacks often find support near the 38.2% or 61.8% retracement levels. These levels act as natural support zones."
      }
    },
    {
      type: "key-concept",
      title: "Confluence is Power",
      content: "A Fibonacci level alone is moderately useful. But when it aligns with other factors — a moving average, a support level, a round number, or high volume — it becomes very powerful. This alignment is called <strong>confluence</strong>. Always look for 2+ factors agreeing at the same price."
    },
    {
      type: "text",
      content: "<h3>How to Draw Fibonacci Retracements</h3><p>For an <strong>uptrend</strong>: Draw from the swing low to the swing high. The retracement levels show where pullbacks may find support.</p><p>For a <strong>downtrend</strong>: Draw from the swing high to the swing low. The levels show where bounces may find resistance.</p><p>Fibonacci extensions (127.2%, 161.8%) can project profit targets beyond the original move.</p>"
    }
  ],
  track: "stock-markets",
  order: 9,
  prerequisites: [
    "bollinger-bands"
  ]
};
