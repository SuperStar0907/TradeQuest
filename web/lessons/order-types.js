LESSON_REGISTRY["order-types"] = {
  id: "order-types",
  title: "Order Types",
  track: "stock-markets",
  category: "fundamentals",
  difficulty: "beginner",
  order: 4,
  estimatedMinutes: 10,
  xpReward: 60,
  prerequisites: ["understanding-volume"],
  sections: [
    {
      type: "text",
      content: `
        <h3>Understanding Order Types</h3>
        <p>When you want to buy or sell a stock, you submit an <strong>order</strong> to your broker. But not all orders are the same. The type of order you choose determines how, when, and at what price your trade gets executed. Using the right order type can mean the difference between getting a good fill and getting a bad one — or between managing risk effectively and taking unnecessary losses.</p>
        <p>Think of order types like instructions to your broker. A market order says "buy now, whatever the price." A limit order says "only buy if the price drops to this level." A stop order says "sell if the price falls to this level to protect me." Each instruction produces a very different outcome.</p>
        <p>Many new traders only use market orders, which is like driving a car with only the gas pedal. Learning to use limit orders, stop orders, and stop-limit orders gives you the brake pedal, steering wheel, and cruise control. They're essential tools for executing your trading plan with precision and discipline.</p>
      `
    },
    {
      type: "text",
      content: `
        <h3>Market Orders — Get It Done Now</h3>
        <p>A <strong>market order</strong> is the simplest order type. It tells your broker to buy or sell immediately at the best available price. It prioritizes speed over price — your order will be filled almost instantly, but you may not get the exact price you saw on your screen.</p>
        <p><strong>When to use market orders:</strong></p>
        <ul>
          <li>When you need to enter or exit a position immediately (e.g., responding to breaking news).</li>
          <li>When trading highly liquid stocks (like AAPL, MSFT, SPY) where the bid-ask spread is very tight (1-2 cents). In these cases, the price you get will be very close to the last quoted price.</li>
          <li>When the exact fill price is less important than getting the trade done.</li>
        </ul>
        <p><strong>When NOT to use market orders:</strong></p>
        <ul>
          <li><strong>Low-liquidity stocks:</strong> For thinly traded stocks, the bid-ask spread can be wide ($0.10, $0.50, or even dollars). A market order could fill at a much worse price than expected because there aren't enough shares at the current quoted price.</li>
          <li><strong>Pre-market or after-hours:</strong> Liquidity is much lower outside regular trading hours. A market order during these sessions can result in fills far from the last quoted price. Some brokers don't even allow market orders outside regular hours.</li>
          <li><strong>During extreme volatility:</strong> During market crashes or extreme news events, prices can change dramatically in milliseconds. A market order might fill at a price that's significantly different from what you intended — this is called <strong>slippage</strong>.</li>
          <li><strong>Large orders:</strong> If you're buying a large number of shares relative to the stock's volume, a market order can move the price against you as it consumes multiple levels of the order book.</li>
        </ul>
      `
    },
    {
      type: "text",
      content: `
        <h3>Limit Orders — Name Your Price</h3>
        <p>A <strong>limit order</strong> specifies the maximum price you're willing to pay (for a buy) or the minimum price you're willing to accept (for a sell). Your order will only be executed at your limit price or better. If the market never reaches your price, the order simply goes unfilled.</p>
        <p><strong>Buy Limit Order:</strong> "Buy 100 shares of AAPL at $170 or lower." This order sits on the order book waiting for the price to drop to $170. If AAPL is currently trading at $175, your order won't fill until the price comes down to your level. If it never drops to $170, you don't buy.</p>
        <p><strong>Sell Limit Order:</strong> "Sell 100 shares of AAPL at $190 or higher." This is used to take profits at a specific target. Your shares won't be sold until someone is willing to pay $190 or more.</p>
        <p><strong>Advantages:</strong></p>
        <ul>
          <li>You control the exact price you're willing to trade at — no slippage surprises.</li>
          <li>You can set the order and walk away. No need to watch the screen all day.</li>
          <li>Essential for trading illiquid stocks where slippage on a market order would be significant.</li>
        </ul>
        <p><strong>Disadvantages:</strong></p>
        <ul>
          <li>Your order might not get filled. The price might come within pennies of your limit and then reverse. This can be frustrating when you watch a stock rally after barely missing your buy limit.</li>
          <li>In fast-moving markets, using a limit order to exit a losing position might mean you don't get out at all. The price could blow through your limit and keep going.</li>
        </ul>
        <p><strong>Practical Tip:</strong> Most experienced traders use limit orders for entries (to ensure they get a good price) but use market orders for emergency exits (when protecting capital is more important than getting the perfect price).</p>
      `
    },
    {
      type: "key-concept",
      title: "Limit Orders = Price Guarantee, Not Execution Guarantee",
      content: "A limit order guarantees you won't pay more than your limit price (buy) or receive less than your limit price (sell). But it does NOT guarantee your order will be filled. If the market never reaches your price, your order remains open. This is the fundamental tradeoff: market orders guarantee execution but not price; limit orders guarantee price but not execution."
    },
    {
      type: "text",
      content: `
        <h3>Stop Orders (Stop-Loss Orders) — Protect Your Capital</h3>
        <p>A <strong>stop order</strong> (commonly called a stop-loss order) becomes a market order once the stock reaches a specified price (the "stop price"). It's primarily used to limit losses on existing positions or to enter positions on breakouts.</p>
        <p><strong>Sell Stop Order (Stop-Loss):</strong> "If AAPL drops to $165, sell my shares at market." You own AAPL at $175 and want to limit your loss. You place a sell stop at $165. If the price falls to $165, your stop triggers and your shares are sold at the best available market price. Without this stop, you'd need to watch the screen constantly to manually sell if the price drops.</p>
        <p><strong>Buy Stop Order (Breakout Entry):</strong> "If TSLA rises above $250, buy 50 shares at market." This is used to enter a long position on a breakout. You're waiting for TSLA to break above $250 (resistance), and if it does, your stop triggers and you buy at the market price.</p>
        <p><strong>Important Warning — Slippage on Stops:</strong> Because a stop order converts to a market order once triggered, there's no guarantee on the execution price. In fast-moving markets, the actual fill can be significantly worse than the stop price. For example, if you set a sell stop at $165 and the stock gaps down overnight to $155 (due to bad earnings), your stop triggers at the open but fills around $155 — not $165. This is called <strong>gap risk</strong> and is the biggest limitation of stop orders.</p>
        <p><strong>Trailing Stop:</strong> A <strong>trailing stop</strong> is a dynamic stop order that moves with the price. You set it as a percentage or dollar amount below the current price. As the stock rises, the stop rises with it. But if the stock falls, the stop stays in place. For example, a 5% trailing stop on a stock at $100 sets the stop at $95. If the stock rises to $120, the stop automatically moves to $114. If it then drops from $120, the stop triggers at $114, locking in a profit.</p>
      `
    },
    {
      type: "text",
      content: `
        <h3>Stop-Limit Orders — Combining Stop and Limit</h3>
        <p>A <strong>stop-limit order</strong> combines the features of a stop order and a limit order. It has two prices: a stop price (trigger) and a limit price (the worst price you'll accept). When the stock reaches the stop price, the order becomes a limit order (not a market order).</p>
        <p><strong>Example:</strong> "Sell AAPL with a stop price of $165 and a limit price of $162." If AAPL drops to $165, your order activates as a limit order to sell at $162 or better. This protects you from the slippage problem of regular stop orders — you won't sell for less than $162.</p>
        <p><strong>The catch:</strong> If the price drops so fast that it blows through both your stop AND your limit (say, it gaps from $170 to $155 overnight), your limit order at $162 will never fill because the market is already well below $162. You're left holding a losing position with no protection. This is the fundamental risk of stop-limit orders.</p>
        <p><strong>When to use stop-limit orders:</strong></p>
        <ul>
          <li>When you want stop-loss protection but refuse to sell at any price below a certain level.</li>
          <li>In stocks that are volatile but don't typically gap (large-cap, high-liquidity stocks during regular hours).</li>
          <li>For breakout entries where you want to buy above a level but not chase if the price spikes too far.</li>
        </ul>
        <p><strong>When NOT to use stop-limit orders:</strong></p>
        <ul>
          <li>As your only risk management tool during earnings or major events (when gaps are common).</li>
          <li>On illiquid stocks where the price might jump through your limit in a single trade.</li>
          <li>When getting out is more important than the price you get out at.</li>
        </ul>
      `
    },
    {
      type: "comparison-table",
      headers: ["Order Type", "Execution Guarantee", "Price Control", "Best For", "Risk"],
      rows: [
        ["Market Order", "Yes — fills immediately", "None — takes best available price", "Liquid stocks, urgent exits, high-volume trading", "Slippage in volatile or illiquid markets"],
        ["Limit Order", "No — only fills at limit or better", "Full — you set the exact price", "Entries at specific prices, profit targets, illiquid stocks", "Order may never fill if price doesn't reach limit"],
        ["Stop Order", "Yes — once triggered, fills at market", "None after trigger — becomes market order", "Stop-losses, breakout entries, protecting profits", "Gap risk — may fill far from stop price"],
        ["Stop-Limit Order", "No — only fills at limit or better after trigger", "Partial — sets a floor/ceiling after trigger", "Stop-loss with price protection, breakout entries with cap", "May not fill if price gaps through both stop and limit"]
      ]
    },
    {
      type: "text",
      content: `
        <h3>Time-in-Force — How Long Your Order Stays Active</h3>
        <p>When you place a limit or stop order, you also specify how long the order should remain active:</p>
        <ul>
          <li><strong>Day Order:</strong> The default for most brokers. The order is active only for the current trading day. If it's not filled by 4:00 PM ET, it's automatically cancelled. You'll need to re-enter it the next day if you still want it.</li>
          <li><strong>GTC (Good 'Til Cancelled):</strong> The order remains active until it's filled or you manually cancel it. Most brokers set a maximum of 60-90 days for GTC orders. Use GTC for limit orders at specific price levels you want to buy at if the stock pulls back over the coming weeks.</li>
          <li><strong>IOC (Immediate or Cancel):</strong> The order must be filled immediately, or any unfilled portion is cancelled. Used by institutional traders for large orders where partial fills are acceptable.</li>
          <li><strong>FOK (Fill or Kill):</strong> The entire order must be filled immediately, or the whole order is cancelled. No partial fills allowed. Used when you need a specific quantity or nothing at all.</li>
        </ul>
      `
    },
    {
      type: "text",
      content: `
        <h3>Practical Tips for Using Orders Effectively</h3>
        <ul>
          <li><strong>Use limit orders for entries, market orders for emergencies.</strong> When buying a stock you've researched, use a limit order to get the price you want. When cutting a losing position that's moving against you fast, use a market order to get out immediately.</li>
          <li><strong>Always have a stop-loss in place.</strong> Before you enter any trade, know where you'll exit if you're wrong. Place a stop order at that level. Trading without a stop-loss is like driving without a seatbelt — you might be fine most of the time, but one accident can be catastrophic.</li>
          <li><strong>Set your stop at a technical level.</strong> Don't just pick an arbitrary percentage. Place your stop below a key support level, below a moving average, or below the most recent swing low. This way, if your stop is hit, the trade's thesis is genuinely invalidated.</li>
          <li><strong>Be aware of the bid-ask spread.</strong> The "price" you see quoted is usually the last trade price. The bid (what buyers will pay) is typically a bit lower, and the ask (what sellers want) is a bit higher. A market buy order fills at the ask; a market sell fills at the bid. For liquid stocks, this difference is pennies. For illiquid stocks, it can be significant.</li>
          <li><strong>Don't place stop orders at obvious levels.</strong> If a stock has clear support at $100, many traders will set their stops just below $100 (at $99.90 or $99.50). Market makers know this and sometimes push the price just below $100 to trigger those stops before the stock bounces. Consider setting your stop a bit wider to avoid being stopped out by this "stop hunting."</li>
          <li><strong>Review your open orders regularly.</strong> If you have GTC orders from weeks ago, make sure they're still aligned with your current analysis. Market conditions change, and an order that made sense three weeks ago might not make sense today.</li>
        </ul>
      `
    }
  ]
};
