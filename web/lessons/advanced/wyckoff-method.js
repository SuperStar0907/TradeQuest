LESSON_REGISTRY["wyckoff-method"] = {
  id: "wyckoff-method",
  title: "The Wyckoff Method",
  track: "advanced",
  category: "advanced-strategies",
  difficulty: "advanced",
  order: 47,
  estimatedMinutes: 15,
  xpReward: 95,
  prerequisites: ["elliott-wave"],
  sections: [
    {
      type: "text",
      content: "<h3>The Composite Operator</h3><p>Richard Wyckoff, writing in the 1930s, introduced the concept of the Composite Operator (CO) — a hypothetical large participant (think: a syndicate of large institutions, funds, and informed traders) whose accumulated buying and selling drives price over time. The CO operates in a predictable cycle because it must accumulate large positions without moving price against itself, and distribute them at high prices without collapsing the market before exiting.</p><p>Wyckoff's key insight: the CO reveals its intentions through the relationship between <strong>price movement and volume</strong>. High volume with no price progress indicates absorption. Low volume on a pullback indicates weak selling. By reading this relationship, a trader can identify where the CO is in its cycle.</p>"
    },
    {
      type: "key-concept",
      title: "The Four Phases of the Wyckoff Cycle",
      content: "Every major market move passes through four phases: (1) Accumulation — the CO absorbs supply from discouraged sellers at low prices, building a large position. Price trades in a range; volatility decreases. (2) Markup — price trends upward as demand exceeds supply. The public begins to notice. (3) Distribution — the CO offloads its position to the eager public at high prices. Price again trades in a range but with higher volatility and failed breakouts. (4) Markdown — supply overwhelms demand, price falls, and the cycle resets. Understanding which phase a market is in determines whether you should be buying, holding, or selling."
    },
    {
      type: "text",
      content: "<h3>Accumulation Schematic: Key Events</h3><p>Wyckoff described specific events within the accumulation trading range that signal institutional buying:</p><ul><li><strong>Preliminary Support (PS):</strong> Buying appears after a prolonged downtrend, slowing the decline. Volume increases but price does not bounce strongly — supply is still being absorbed.</li><li><strong>Selling Climax (SC):</strong> A surge of panicked selling on very high volume. The CO is the dominant buyer. Wide spread down, but price often closes well off the low. This marks the bottom of the range.</li><li><strong>Automatic Rally (AR):</strong> Price bounces sharply from the SC as sellers are temporarily exhausted. The high of the AR defines the top of the trading range.</li><li><strong>Secondary Test (ST):</strong> Price revisits the SC area to test whether supply is exhausted. Volume should be significantly lower than the SC. Multiple STs are normal.</li><li><strong>Spring (or Shakeout):</strong> A brief, sharp move below the SC low on low-to-moderate volume that quickly reverses. This is designed to trigger stop-loss orders and test the conviction of remaining sellers. The spring is the CO's last accumulation opportunity — and the highest-probability long entry in the schematic.</li><li><strong>Sign of Strength (SOS):</strong> A rally on expanding volume that breaks above the top of the trading range, confirming that accumulation is complete and markup is beginning.</li></ul>"
    },
    {
      type: "text",
      content: "<h3>Distribution Schematic: The Mirror Image</h3><p>Distribution is the mirror of accumulation. Key events include:</p><ul><li><strong>Preliminary Supply (PSY):</strong> First significant selling after a prolonged uptrend. Volume surges but price does not fall sharply — demand still absorbs supply.</li><li><strong>Buying Climax (BC):</strong> Parabolic move on extreme volume, often driven by public enthusiasm. The CO is the dominant seller.</li><li><strong>Automatic Reaction (AR):</strong> Sharp decline from the BC as buyers are temporarily satiated. Defines the bottom of the distribution range.</li><li><strong>Upthrust After Distribution (UTAD):</strong> A brief push above the BC high on low-to-moderate volume that quickly fails and reverses back into the range. The mirror image of the spring — a final trap for late buyers and the CO's last distribution opportunity.</li><li><strong>Sign of Weakness (SOW):</strong> A break below the AR low on expanding volume, confirming distribution is complete and markdown is beginning.</li></ul>"
    },
    {
      type: "comparison-table",
      headers: ["Event", "Phase", "Volume Signature", "Price Signature", "Trading Implication"],
      rows: [
        ["Spring", "Accumulation", "Low to moderate on the break lower", "Brief breach below prior low, rapid reversal", "Highest-probability long entry; stop below spring low"],
        ["Upthrust (UTAD)", "Distribution", "Low to moderate on the push higher", "Brief breach above prior high, rapid reversal", "Highest-probability short entry; stop above UTAD high"],
        ["Selling Climax (SC)", "Accumulation", "Extremely high; widest spread down", "Close well off the low of the bar", "Signals potential bottom; wait for ST to confirm"],
        ["Buying Climax (BC)", "Distribution", "Extremely high; widest spread up", "Close near the high but follow-through fails", "Signals potential top; wait for UTAD/SOW to confirm"],
        ["Sign of Strength (SOS)", "Markup begins", "Expanding volume on advance", "Breaks top of accumulation range", "Confirms markup; enter on pullback (Last Point of Support)"],
        ["Sign of Weakness (SOW)", "Markdown begins", "Expanding volume on decline", "Breaks bottom of distribution range", "Confirms markdown; enter short on rally (Last Point of Supply)"]
      ]
    },
    {
      type: "key-concept",
      title: "Cause and Effect: The P&F Price Target Method",
      content: "Wyckoff used Point and Figure (P&F) charts to quantify the 'cause' built during accumulation or distribution and project the resulting 'effect' in the markup or markdown. The longer and wider the trading range, the larger the subsequent move. A narrow, brief accumulation base might only support a modest rally; a multi-month, wide-range accumulation can support a move of the same magnitude. The practical technique: count the columns in the P&F chart across the trading range at a relevant price level, multiply by the box size and reversal amount, and add to the low of accumulation (for upside targets) or subtract from the high of distribution (for downside targets). These are probabilistic targets, not guarantees, but they provide objective reference points for position sizing and profit-taking."
    }
  ]
};
