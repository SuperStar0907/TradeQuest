LESSON_REGISTRY["market-profile"] = {
  id: "market-profile",
  title: "Market Profile",
  track: "advanced",
  category: "advanced-strategies",
  difficulty: "advanced",
  order: 49,
  estimatedMinutes: 14,
  xpReward: 90,
  prerequisites: ["order-flow-analysis"],
  sections: [
    {
      type: "text",
      content: "<h3>Market Profile: Time, Price, and Opportunity</h3><p>Market Profile was developed by J. Peter Steidlmayer at the Chicago Board of Trade in the 1980s as a way to organize price and time information into a statistical distribution. The core insight is that markets are auctions, and auctions seek to find prices that facilitate the most trade. Over time, markets spend the most time at <em>fair value</em> and less time at extremes.</p><p>The display tool is the <strong>TPO (Time Price Opportunity) chart</strong>: each price level is assigned a letter for each 30-minute period that price traded at that level. The resulting distribution — wide at frequently visited prices, narrow at extremes — resembles a bell curve (normal distribution) in a balanced market, or a skewed shape in a trending market.</p>"
    },
    {
      type: "key-concept",
      title: "Core Market Profile Concepts",
      content: "Value Area (VA): The price range containing 70% of the day's volume (or TPO count). Statistically, this is one standard deviation from the Point of Control. Price within the VA is 'fair.' Price outside the VA is 'unfair' and will either be rejected back into the VA or attract sufficient participants to expand the VA. Point of Control (POC): The single price level with the most TPOs (or volume) — the price at which the most trade facilitated. Price gravitates toward the POC in balanced conditions. Initial Balance (IB): The price range established in the first 60 minutes of the regular trading session. The IB represents the range where day timeframe traders are willing to trade. Extension beyond the IB signals that longer timeframe participants are entering and directional conviction exists."
    },
    {
      type: "text",
      content: "<h3>Single Prints and Excess</h3><p><strong>Single Prints</strong> are price levels where only one letter (one 30-minute period) traded. They appear as a single-column 'tail' at the top or bottom of the profile. Single prints represent fast, directional movement — the market moved through these prices so quickly that only one time period could be assigned. They often act as support/resistance because they identify price levels the market perceived as unfair and fled from quickly.</p><p><strong>Excess</strong> is the final rejection at an extreme of the day's range, characterized by multiple TPOs (at least two or three letters) at the high or low. Excess means the market confidently rejected a price — it spent time there, decided it was unfair, and reversed with conviction. This is a stronger rejection signal than a single print.</p><p><strong>Poor Highs and Lows</strong> are the opposite of excess: a flat, ledge-like top or bottom with many letters across multiple price levels at the extreme. This signals incomplete auctioning — the market ran out of time, not conviction. Poor highs and lows are targets for the next session to revisit and complete the auction.</p>"
    },
    {
      type: "text",
        content: "<h3>The Five Market Types</h3><p>Market Profile theory identifies five distinct market structures, each requiring a different trading approach:</p><ol><li><strong>Trend Day:</strong> Strong directional conviction from the open. The profile is elongated and narrow (like a narrow letter 'D' rotated). The market extends in one direction with minimal overlap. Strategy: trade with the trend, fade any counter-trend attempts.</li><li><strong>Double Distribution Trend Day:</strong> The market establishes a balance area, breaks out, establishes a second balance area higher or lower. Two distinct bell curves connected by a bridge of single prints. Strategy: look for entries on the breakout from the first distribution.</li><li><strong>Normal Day:</strong> Wide initial balance with minimal extension. The day's range is established in the first hour. Strategy: fade extremes of the IB range.</li><li><strong>Normal Variation Day:</strong> Narrow IB but with one significant extension in the afternoon. Common in a trending market. Strategy: identify the direction of the extension and trade with it.</li><li><strong>Non-Trend (Neutral) Day:</strong> Narrow IB, extensions in both directions, price returns to the IB by the close. The profile is wide and fat — a true bell curve. Strategy: fade both extremes, target the POC.</li></ol>"
    },
    {
      type: "comparison-table",
      headers: ["Market Profile Element", "Definition", "When Price Is Inside/At", "When Price Is Outside/Beyond"],
      rows: [
        ["Value Area (70% zone)", "Price range containing 70% of TPOs", "Price is at fair value; expect rotation and mean-reversion", "Price is at unfair value; watch for acceptance or rejection"],
        ["Point of Control (POC)", "Price level with most TPOs; peak of distribution", "Maximum area of agreement; high-probability rotation point", "Not applicable — POC is always inside the profile"],
        ["Initial Balance (IB)", "First 60-minute price range", "Balanced, rotational day expected; fade extremes", "Longer timeframe participants active; trade the extension direction"],
        ["Single Prints", "Price levels with one TPO only; fast-move areas", "Not applicable — single prints are by definition brief", "These levels act as support/resistance and are likely to be revisited"],
        ["Excess (rounded tail)", "Multiple TPOs at an extreme; confident rejection", "Not applicable", "Strong support/resistance; high-probability reversal zone"],
        ["Poor High/Low (flat tail)", "Multiple letters across top/bottom; incomplete auction", "Not applicable", "Target for re-auction in subsequent sessions; weak boundary"]
      ]
    },
    {
      type: "key-concept",
      title: "Using Market Profile Across Timeframes",
      content: "The most powerful application of Market Profile is not analyzing a single session but building a composite profile from multiple days or weeks. A composite profile reveals where the market has spent the most time at a higher timeframe — this becomes the major value area and POC for swing traders and position traders. When price breaks above or below a multi-week composite value area on expanding volume and time, it signals a genuine change in the market's assessment of fair value. The gap between the prior composite POC and the current price becomes a measured target for the developing trend. Experienced practitioners layer single-session profiles within the context of multi-day composites to align intraday entries with higher-timeframe structural signals."
    }
  ]
};
