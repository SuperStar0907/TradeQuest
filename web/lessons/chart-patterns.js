LESSON_REGISTRY["chart-patterns"] = {
  id: "chart-patterns",
  title: "Chart Patterns",
  track: "technical-analysis",
  category: "chart-analysis",
  difficulty: "advanced",
  order: 7,
  estimatedMinutes: 18,
  xpReward: 100,
  prerequisites: ["bollinger-bands"],
  sections: [
    {
      type: "text",
      content: `
        <h3>The Language of Price Patterns</h3>
        <p>Chart patterns are specific formations that appear on price charts, created by the collective behavior of market participants. They've been identified and studied for over a century, and they continue to work because they reflect universal human psychology — fear, greed, hope, and regret don't change.</p>
        <p>Chart patterns fall into two broad categories:</p>
        <ul>
          <li><strong>Reversal Patterns:</strong> These signal that the current trend is about to change direction. A reversal pattern at the top of an uptrend warns of a decline. A reversal pattern at the bottom of a downtrend suggests a rally is coming. Examples include head and shoulders, double tops/bottoms, and rounding tops/bottoms.</li>
          <li><strong>Continuation Patterns:</strong> These signal a temporary pause in the current trend before it resumes. They represent a brief consolidation where the market catches its breath. Examples include flags, pennants, triangles, and rectangles.</li>
        </ul>
        <p>Learning to recognize these patterns gives you an edge because they often provide specific entry points, stop loss levels, and price targets. However, no pattern works 100% of the time. Confirmation through volume and a breakout beyond the pattern's boundary is essential before acting.</p>
      `
    },
    {
      type: "key-concept",
      title: "Patterns Reflect Psychology",
      content: "Chart patterns work because they capture the psychological battle between buyers and sellers. A double top, for instance, shows that buyers tried twice to push the price higher but failed both times. The failure on the second attempt — when buyers had every reason to be confident — reveals that demand is exhausted at that level. Understanding the psychology behind each pattern makes you a better trader."
    },
    {
      type: "text",
      content: `
        <h3>Head and Shoulders — The Most Reliable Reversal Pattern</h3>
        <p>The <strong>head and shoulders</strong> pattern is considered the most reliable reversal pattern in technical analysis. It appears at the top of an uptrend and signals a bearish reversal. The pattern consists of three peaks:</p>
        <ul>
          <li><strong>Left Shoulder:</strong> The price rallies to a new high, then pulls back. Volume is typically high on this rally.</li>
          <li><strong>Head:</strong> The price rallies again, exceeding the left shoulder's peak (making a higher high). Then it pulls back again, ideally to a similar level as the first pullback. Volume is often slightly lower on the head's rally compared to the left shoulder — the first subtle warning.</li>
          <li><strong>Right Shoulder:</strong> The price rallies a third time but fails to reach the height of the head. This lower high is the critical failure. Volume is typically noticeably lower on the right shoulder — confirming weakening buying interest.</li>
          <li><strong>Neckline:</strong> A line drawn connecting the lows of the two pullbacks (between the left shoulder and head, and between the head and right shoulder). The pattern is confirmed when the price breaks below this neckline.</li>
        </ul>
        <p><strong>How to trade it:</strong> Enter short (or sell existing positions) when the price closes below the neckline on increased volume. Place your stop loss above the right shoulder. The price target is typically the distance from the head to the neckline, projected downward from the neckline breakout point.</p>
        <p><strong>Real-World Example:</strong> Bitcoin formed a textbook head and shoulders pattern from November 2021 to May 2022. The left shoulder peaked around $67,000, the head at $69,000, and the right shoulder at $48,000. When the neckline around $35,000 broke, Bitcoin subsequently fell to $16,000 — exceeding the pattern's measured move target.</p>
        <p><strong>Inverse Head and Shoulders:</strong> This is the mirror image, appearing at the bottom of a downtrend. Three troughs with the middle (head) being the deepest. It signals a bullish reversal. The same rules apply but inverted — buy when the price breaks above the neckline.</p>
      `
    },
    {
      type: "text",
      content: `
        <h3>Double Top and Double Bottom</h3>
        <p>The <strong>double top</strong> and <strong>double bottom</strong> are among the most common reversal patterns. They're simpler than head and shoulders and easier to identify.</p>
        <h4>Double Top (Bearish Reversal)</h4>
        <p>A double top looks like the letter "M." The price rallies to a high, pulls back, rallies again to approximately the same high, and then fails and declines. The two peaks should be at roughly the same level (within 1-3% of each other).</p>
        <ul>
          <li>The first peak establishes a resistance level.</li>
          <li>The pullback between peaks shows the first sign of selling interest.</li>
          <li>The second peak's failure to exceed the first is the key signal — buyers couldn't push higher despite a second attempt.</li>
          <li>Volume is typically lower on the second peak, confirming weakening demand.</li>
          <li>The pattern is confirmed when the price breaks below the trough between the two peaks (the "confirmation line").</li>
          <li>Price target: the height of the pattern (peaks to trough) projected downward from the confirmation line.</li>
        </ul>
        <h4>Double Bottom (Bullish Reversal)</h4>
        <p>A double bottom looks like the letter "W." The price falls to a low, bounces, falls again to approximately the same low, and then rallies. It signals that sellers tried to break below a support level twice and failed — demand is strong enough to hold.</p>
        <ul>
          <li>The second bottom should hold at or above the first bottom's level.</li>
          <li>Volume often spikes on the second bottom as buyers aggressively defend the support.</li>
          <li>Confirmed when the price breaks above the peak between the two bottoms.</li>
          <li>Price target: the depth of the pattern projected upward from the breakout point.</li>
        </ul>
        <p><strong>Practical Tip:</strong> The best double tops and bottoms take several weeks to months to form. Quick, narrow double tops/bottoms on intraday charts are less reliable. Also, the second peak/trough doesn't need to be at the exact same price as the first — within a few percent is fine. Markets aren't perfectly symmetrical.</p>
      `
    },
    {
      type: "text",
      content: `
        <h3>Triangles — Converging Pressure</h3>
        <p>Triangles are continuation patterns (though they sometimes act as reversal patterns) formed when the price consolidates within converging trend lines. They represent a period where buyers and sellers are in equilibrium, with the range narrowing over time. Eventually, one side wins and the price breaks out.</p>
        <h4>Ascending Triangle (Bullish Bias)</h4>
        <p>An ascending triangle has a flat horizontal resistance line on top and a rising support line (upward-sloping trend line) on the bottom. The highs are all at roughly the same level, but the lows are getting progressively higher. This suggests that buyers are becoming more aggressive with each pullback — they're willing to buy at higher and higher prices. Eventually, they overwhelm the sellers at resistance, and the price breaks out to the upside.</p>
        <p><strong>Breakout direction:</strong> Upward, approximately 75% of the time.</p>
        <h4>Descending Triangle (Bearish Bias)</h4>
        <p>A descending triangle has a flat horizontal support line on the bottom and a falling resistance line (downward-sloping trend line) on top. The lows are at roughly the same level, but the highs are getting lower. Sellers are getting more aggressive, and each rally attempt fizzles sooner. Eventually, the support breaks.</p>
        <p><strong>Breakout direction:</strong> Downward, approximately 64% of the time.</p>
        <h4>Symmetrical Triangle (Neutral)</h4>
        <p>A symmetrical triangle has both converging lines — a declining upper trend line and a rising lower trend line. It represents true indecision. The breakout can go either way, and you should wait for the price to break decisively out of one side before taking a position. Volume typically declines during the formation and then surges on the breakout.</p>
        <p><strong>Price Target for All Triangles:</strong> Measure the height of the triangle at its widest point (the start) and project that distance from the breakout point. For example, if the triangle is $10 wide at its base and the breakout is at $105, the target is $115 (for an upside breakout).</p>
      `
    },
    {
      type: "text",
      content: `
        <h3>Flags and Pennants — Brief Pauses in Strong Trends</h3>
        <p>Flags and pennants are short-duration continuation patterns that appear after a sharp price move (called the "flagpole"). They represent a brief consolidation before the trend resumes with similar velocity.</p>
        <h4>Bull Flag</h4>
        <p>A bull flag forms after a sharp rally (the flagpole). The price then consolidates in a slight downward-sloping channel (the flag). This downward drift is not a reversal — it's a healthy pause as short-term traders take profits and the stock digests its gains. Volume decreases during the flag formation. The pattern completes when the price breaks above the flag's upper boundary on increasing volume.</p>
        <p><strong>Target:</strong> The length of the flagpole projected upward from the breakout point.</p>
        <p><strong>Example:</strong> A stock runs from $50 to $60 (flagpole = $10). It then drifts down in a flag pattern to $57. When it breaks out of the flag, the target is $67 ($57 + $10).</p>
        <h4>Bear Flag</h4>
        <p>The mirror image — a sharp decline followed by a slight upward-sloping consolidation. It resolves to the downside. Bear flags in strong downtrends are some of the most reliable patterns in technical analysis.</p>
        <h4>Pennant</h4>
        <p>Similar to a flag but instead of a rectangular channel, the consolidation forms a small symmetrical triangle (converging lines). Pennants are typically shorter in duration than flags and are associated with very strong trends. The breakout and target rules are the same as flags.</p>
        <p><strong>Key Rule:</strong> Flags and pennants should be brief — typically lasting 1-3 weeks for daily charts. If the consolidation lasts too long, it's no longer a flag/pennant and may be forming a different pattern entirely.</p>
      `
    },
    {
      type: "text",
      content: `
        <h3>Cup and Handle — The Growth Stock Classic</h3>
        <p>The <strong>cup and handle</strong> pattern was popularized by William O'Neil, the founder of Investor's Business Daily and author of "How to Make Money in Stocks." It's a bullish continuation pattern that often appears in growth stocks before a major advance.</p>
        <p><strong>Structure:</strong></p>
        <ul>
          <li><strong>Cup:</strong> A rounded, U-shaped decline and recovery. The stock pulls back (typically 12-35% from its high), forms a rounded bottom over several weeks to months, and then rallies back to the prior high. The rounding nature is important — a V-shaped bottom is less ideal because it suggests the recovery was too fast and the stock needs more time to build a base. Volume should decrease during the decline and increase during the recovery.</li>
          <li><strong>Handle:</strong> After rallying back near the prior high, the stock drifts slightly downward or sideways for 1-3 weeks. This small pullback is the handle. It represents the final shakeout of weak holders before the breakout. The handle should not retrace more than 50% of the cup's depth, and volume should be low. A handle that drops too deeply or takes too long may indicate the pattern is failing.</li>
          <li><strong>Breakout:</strong> The pattern completes when the price breaks above the handle's resistance (the prior high / cup rim) on above-average volume.</li>
        </ul>
        <p><strong>Price Target:</strong> The depth of the cup projected upward from the breakout point. If the cup's bottom is $30 below the rim, the target is $30 above the breakout.</p>
        <p><strong>Real-World Example:</strong> Amazon (AMZN) formed a massive cup and handle from 1999 to 2009. The "cup" was the dot-com crash and recovery, and the "handle" formed in 2007-2009. After breaking out, Amazon went on to become one of the greatest growth stories in stock market history, rising from around $100 to over $3,000 in the subsequent decade.</p>
      `
    },
    {
      type: "key-concept",
      title: "Volume Confirms Pattern Breakouts",
      content: "The single most important confirmation for any chart pattern breakout is volume. A breakout on high volume (1.5x to 3x average or more) is far more likely to follow through than one on average or below-average volume. If you see a pattern breakout on low volume, be skeptical — it may be a false breakout (fakeout) that reverses back into the pattern."
    },
    {
      type: "text",
      content: `
        <h3>Rectangles (Trading Ranges)</h3>
        <p>A <strong>rectangle</strong> (or trading range) forms when the price bounces between a horizontal support and resistance level. It's the simplest continuation pattern and represents a period of equilibrium where buyers and sellers are evenly matched within defined boundaries.</p>
        <ul>
          <li>Rectangles can last weeks, months, or even years.</li>
          <li>The longer the rectangle, the more powerful the eventual breakout tends to be (stored energy theory).</li>
          <li>Volume typically decreases during the rectangle as traders wait for direction.</li>
          <li>The breakout direction depends on the prior trend — in an uptrend, rectangles usually break upward (continuation). In a downtrend, they usually break downward.</li>
          <li><strong>Target:</strong> The height of the rectangle projected from the breakout point.</li>
        </ul>
        <p><strong>Trading the range:</strong> While the rectangle is forming, range traders can buy at support and sell at resistance, profiting from the oscillation. However, this strategy becomes risky as the pattern matures and a breakout becomes imminent. Always have a stop loss to protect against the inevitable breakout in the wrong direction.</p>
      `
    },
    {
      type: "text",
      content: `
        <h3>Pattern Trading Best Practices</h3>
        <ul>
          <li><strong>Wait for confirmation.</strong> Never trade a pattern before it's confirmed by a breakout through the pattern's boundary on convincing volume. Acting too early means trading on hope rather than evidence.</li>
          <li><strong>Always set a price target AND a stop loss.</strong> Every pattern provides a natural stop loss level (the other side of the pattern) and a measured move target. Define both before entering the trade to calculate your risk/reward ratio. A good rule: only take pattern trades with at least a 2:1 reward-to-risk ratio.</li>
          <li><strong>Context matters.</strong> A head and shoulders at all-time highs after a massive rally is more significant than one in the middle of a trading range. Patterns that align with the larger trend direction are more reliable.</li>
          <li><strong>Volume is your confirmation tool.</strong> A breakout on volume above 1.5x the 50-day average is strong. Below-average volume breakouts fail far more often.</li>
          <li><strong>Timeframe matters.</strong> Patterns on daily and weekly charts are more reliable than those on intraday charts. A head and shoulders on the weekly chart trumps anything on the 5-minute chart.</li>
          <li><strong>Don't see patterns that aren't there.</strong> This is the biggest mistake new technical analysts make. If you have to squint and use your imagination to see a pattern, it's probably not there. The best patterns are obvious to anyone looking at the chart.</li>
          <li><strong>Failed patterns are powerful signals.</strong> When a pattern fails (e.g., a head and shoulders neckline breaks but the price quickly reverses back above it), the move in the opposite direction is often swift and powerful. Failed breakdowns are bullish; failed breakouts are bearish.</li>
        </ul>
      `
    },
    {
      type: "comparison-table",
      headers: ["Pattern", "Type", "Signal", "Reliability", "Typical Duration"],
      rows: [
        ["Head & Shoulders", "Reversal", "Bearish (top) / Bullish (bottom)", "High", "2-6 months"],
        ["Double Top/Bottom", "Reversal", "Bearish (top) / Bullish (bottom)", "Moderate-High", "1-3 months"],
        ["Ascending Triangle", "Continuation", "Bullish (~75%)", "Moderate-High", "1-3 months"],
        ["Descending Triangle", "Continuation", "Bearish (~64%)", "Moderate", "1-3 months"],
        ["Symmetrical Triangle", "Continuation", "Direction of prior trend", "Moderate", "1-3 months"],
        ["Bull/Bear Flag", "Continuation", "Direction of flagpole", "High", "1-3 weeks"],
        ["Cup and Handle", "Continuation", "Bullish", "High", "2-12 months"],
        ["Rectangle", "Continuation", "Direction of prior trend", "Moderate", "Weeks to months"]
      ]
    }
  ]
};
