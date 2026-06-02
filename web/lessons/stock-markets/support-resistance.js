LESSON_REGISTRY["support-resistance"] = {
  id: "support-resistance",
  title: "Support & Resistance",
  category: "technical-analysis",
  difficulty: "beginner",
  estimatedMinutes: 12,
  xpReward: 75,
  sections: [
    {
      type: "text",
      content: "<h3>The Foundation of Technical Analysis</h3><p>Support and resistance are the most fundamental concepts in charting. Every other pattern builds on them.</p><ul><li><strong>Support</strong> — A price level where buying pressure prevents further decline. Think of it as a floor.</li><li><strong>Resistance</strong> — A price level where selling pressure prevents further advance. Think of it as a ceiling.</li></ul><p>These levels form because traders remember prices. If you bought at $150 and it dropped to $130, you might sell at $150 when it comes back — creating resistance.</p>"
    },
    {
      type: "interactive-chart",
      config: {
        ticker: "MSFT",
        title: "Microsoft (MSFT) — Support & Resistance",
        description: "Look for price levels where the stock bounces multiple times (support) or gets rejected multiple times (resistance). The more touches, the stronger the level."
      }
    },
    {
      type: "key-concept",
      title: "Role Reversal",
      content: "When support breaks, it often becomes resistance. When resistance breaks, it often becomes support. This is called <strong>role reversal</strong> and is one of the most reliable patterns in trading."
    },
    {
      type: "text",
      content: "<h3>How to Identify Key Levels</h3><ol><li><strong>Multiple touches</strong> — At least 2-3 bounces from the same level</li><li><strong>Round numbers</strong> — $100, $200, $500 act as psychological S/R</li><li><strong>Previous highs/lows</strong> — Last week high, 52-week high, all-time high</li><li><strong>Gap fills</strong> — Gaps in price often act as magnets</li></ol><p>Support and resistance are <em>zones</em>, not exact prices. A stock with support at $150 might bounce from $149.50 or $150.80.</p>"
    },
    {
      type: "text",
      content: "<h3>Common Mistakes with Support and Resistance</h3><ul><li><strong>Drawing too many levels</strong> — If your chart looks like a barcode, you have too many lines. Focus on the 2-3 most significant levels where price reacted strongly and recently. Quality matters more than quantity.</li><li><strong>Treating levels as exact prices</strong> — Support at $150 does not mean the stock will bounce at exactly $150.00. Think in zones of $1-2 around the level. Setting a stop at exactly $150.00 will get you stopped out on normal volatility.</li><li><strong>Ignoring the timeframe</strong> — A support level on a daily chart is far more significant than one on a 5-minute chart. Weekly and monthly levels carry the most weight because they represent decisions by the largest pool of market participants.</li><li><strong>Fighting a strong trend</strong> — Buying at support in a strong downtrend is called catching a falling knife. Support levels break in downtrends. Wait for confirmation that buyers have actually stepped in before committing capital.</li></ul>"
    },
    {
      type: "key-concept",
      title: "Pro Tips for Support and Resistance",
      content: "The strongest support and resistance levels are ones where multiple factors converge at the same price. For example, a round number ($200) that also aligns with the 200-day moving average and was a previous breakout level is a much stronger zone than any single factor alone. Also remember that the longer a support or resistance level holds, the more significant the eventual break will be. A resistance level that has rejected price five times over six months will produce a powerful move when it finally breaks."
    }
  ],
  track: "stock-markets",
  order: 4,
  prerequisites: [
    "volume-analysis"
  ]
};
