LESSON_REGISTRY["elliott-wave"] = {
  id: "elliott-wave",
  title: "Elliott Wave Theory",
  track: "advanced",
  category: "advanced-strategies",
  difficulty: "advanced",
  order: 46,
  estimatedMinutes: 15,
  xpReward: 95,
  prerequisites: [],
  sections: [
    {
      type: "text",
      content: "<h3>The Structure of Elliott Wave Theory</h3><p>Ralph Nelson Elliott observed in the 1930s that financial markets move in repetitive fractal patterns driven by collective investor psychology. The theory holds that price action unfolds in a five-wave impulse in the direction of the larger trend, followed by a three-wave corrective move against it.</p><p>The complete cycle looks like this:</p><ul><li><strong>Waves 1, 3, 5</strong> — Motive (impulse) waves moving in the trend direction</li><li><strong>Waves 2, 4</strong> — Corrective waves retracing the prior impulse</li><li><strong>Waves A, B, C</strong> — The three-wave correction following the five-wave impulse</li></ul><p>Each wave subdivides into smaller waves of the same structure, creating a self-similar (fractal) pattern across all timeframes — from tick charts to monthly charts.</p>"
    },
    {
      type: "key-concept",
      title: "The Three Inviolable Wave Rules",
      content: "These rules cannot be broken. If your count violates any of them, the count is wrong: (1) Wave 2 can never retrace more than 100% of Wave 1 — it cannot end below Wave 1's starting point. (2) Wave 3 can never be the shortest of Waves 1, 3, and 5 (it is most commonly the longest). (3) Wave 4 can never overlap Wave 1's price territory in an impulse wave. These rules immediately invalidate wave counts and force re-labeling."
    },
    {
      type: "text",
      content: "<h3>Fibonacci Relationships Between Waves</h3><p>Elliott noted that wave ratios consistently align with the Fibonacci sequence (1, 1, 2, 3, 5, 8, 13...) and its derived ratios (0.236, 0.382, 0.500, 0.618, 0.786, 1.000, 1.272, 1.618, 2.618).</p><p>Common Fibonacci targets for each wave:</p><ul><li><strong>Wave 2 retracement of Wave 1:</strong> Typically 50%, 61.8%, or 78.6%</li><li><strong>Wave 3 extension of Wave 1:</strong> Typically 161.8% — the most common and most powerful</li><li><strong>Wave 4 retracement of Wave 3:</strong> Typically 38.2% — shallower than Wave 2, respecting alternation</li><li><strong>Wave 5 equality with Wave 1:</strong> When Wave 3 extends strongly, Wave 5 often equals Wave 1 in length</li><li><strong>Wave C equality with Wave A:</strong> Most common corrective target; sometimes 161.8% of Wave A</li></ul><p>These are probabilistic guideline levels, not guarantees. Their value lies in defining entry zones and invalidation levels with precision.</p>"
    },
    {
      type: "text",
      content: "<h3>Corrective Patterns: The Alphabet Structures</h3><p>Corrections are far more complex than impulses. Elliott identified several corrective structures:</p><ul><li><strong>Zigzag (5-3-5):</strong> A sharp correction where Wave A has five sub-waves, Wave B has three, and Wave C has five. The most common simple correction.</li><li><strong>Flat (3-3-5):</strong> A sideways correction where Wave B retraces nearly all of Wave A, and Wave C terminates near Wave A's end. Indicates the larger trend is strong.</li><li><strong>Triangle (3-3-3-3-3):</strong> Five overlapping waves that converge. Almost always appears in Wave 4 or Wave B, and the breakout is explosive but often brief.</li><li><strong>Complex Corrections:</strong> Two or three simple corrections linked by intervening X waves. These are notoriously difficult to interpret in real time.</li></ul>"
    },
    {
      type: "comparison-table",
      headers: ["Wave", "Fibonacci Relationship", "Character", "Common Mistake"],
      rows: [
        ["Wave 1", "Starting point; often misidentified", "Small, news-driven reversal; short covering", "Labeling a counter-trend bounce as Wave 1"],
        ["Wave 2", "50%-78.6% retracement of Wave 1", "Deep, feels like the prior trend resuming", "Thinking the prior trend has resumed; fear of loss"],
        ["Wave 3", "161.8%-261.8% extension of Wave 1", "Strongest, broadest momentum; fundamentals confirm", "Selling too early due to the magnitude of the move"],
        ["Wave 4", "23.6%-38.2% retracement of Wave 3", "Shallow, sideways chop; alternates with Wave 2", "Trading the chop instead of holding for Wave 5"],
        ["Wave 5", "100% of Wave 1, or 61.8% of Waves 1+3", "Narrowing breadth; divergences on momentum indicators", "Aggressively buying into diminishing momentum"],
        ["Wave A/B/C", "C often equals A or 161.8% of A", "Feels corrective; many call it a 'dip to buy'", "Buying too early during Wave A or B of a correction"]
      ]
    },
    {
      type: "key-concept",
      title: "Practical Application and Limitations",
      content: "Elliott Wave is most useful for defining a high-probability scenario with a clear invalidation level, not for predicting exact price targets. The practical workflow: identify the most likely current wave position, define the Fibonacci level that would invalidate your count, set a stop just beyond that level, and target the next Fibonacci extension. The critical limitation is subjectivity — two experienced analysts can produce different valid counts on the same chart. Always use Elliott Wave in conjunction with other technical evidence (momentum, volume, sentiment) rather than in isolation. It is a framework for thinking about market structure, not a mechanical trading system."
    }
  ]
};
