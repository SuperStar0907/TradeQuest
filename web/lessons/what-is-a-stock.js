LESSON_REGISTRY["what-is-a-stock"] = {
  id: "what-is-a-stock",
  title: "What Is a Stock?",
  track: "stock-markets",
  category: "fundamentals",
  difficulty: "beginner",
  order: 1,
  estimatedMinutes: 10,
  xpReward: 50,
  prerequisites: [],
  sections: [
    {
      type: "text",
      content: `
        <h3>Welcome to the World of Stocks</h3>
        <p>A <strong>stock</strong> (also called a <strong>share</strong> or <strong>equity</strong>) represents a tiny piece of ownership in a company. When you buy a share of Apple (AAPL), you literally become a part-owner of Apple Inc. You own a fraction of its factories, its intellectual property, its cash reserves, and its future earnings.</p>
        <p>Stocks are one of the most powerful wealth-building tools available to individual investors. Over the past century, the U.S. stock market has returned roughly 10% per year on average, outpacing inflation, bonds, and most other asset classes. Understanding how stocks work is the foundation of every successful trading and investing journey.</p>
        <p>Companies issue stock to raise money. Instead of borrowing from a bank (debt financing), they can sell pieces of the company to investors (equity financing). This is a win-win: the company gets capital to grow, and investors get the opportunity to profit as the company succeeds.</p>
      `
    },
    {
      type: "key-concept",
      title: "Stock = Ownership",
      content: "When you buy a stock, you are buying a small ownership stake in a real business. As a shareholder, you have a claim on the company's assets and earnings proportional to the number of shares you own."
    },
    {
      type: "text",
      content: `
        <h3>Why Do Companies Go Public?</h3>
        <p>A company "goes public" when it sells shares to the general public for the first time. Before going public, a company is <strong>privately held</strong> — its shares are owned by founders, employees, and early investors like venture capitalists. Going public opens the door to millions of new investors.</p>
        <p>There are several reasons a company decides to go public:</p>
        <ul>
          <li><strong>Raise Capital:</strong> Selling shares generates a large amount of money the company can use to expand operations, fund research, acquire other companies, or pay off debt. When Facebook (now Meta) went public in 2012, it raised over $16 billion.</li>
          <li><strong>Liquidity for Early Investors:</strong> Founders, employees, and venture capitalists who invested early finally get the chance to sell their shares on the open market and realize their profits.</li>
          <li><strong>Brand Visibility:</strong> Being a publicly traded company increases prestige and credibility. It puts the company name on ticker screens around the world.</li>
          <li><strong>Currency for Acquisitions:</strong> Public companies can use their stock as currency to acquire other businesses, rather than paying entirely in cash.</li>
        </ul>
        <p>However, going public also means the company must disclose its finances publicly every quarter, comply with SEC regulations, and deal with the pressure of meeting Wall Street's expectations. Not every company wants that scrutiny — which is why some large companies like SpaceX remain private.</p>
      `
    },
    {
      type: "text",
      content: `
        <h3>The IPO Process</h3>
        <p>The process of going public is called an <strong>Initial Public Offering (IPO)</strong>. Here's how it typically works:</p>
        <ul>
          <li><strong>Step 1 — Hire Investment Banks:</strong> The company selects one or more investment banks (like Goldman Sachs, Morgan Stanley, or JP Morgan) to underwrite the IPO. These banks help determine the offering price and buy the shares from the company to resell to the public.</li>
          <li><strong>Step 2 — File with the SEC:</strong> The company files an S-1 registration statement with the Securities and Exchange Commission. This document contains detailed financial information, risk factors, and the company's business model. It's publicly available, and savvy investors read these carefully.</li>
          <li><strong>Step 3 — The Roadshow:</strong> Company executives travel to meet institutional investors (pension funds, mutual funds, hedge funds) to pitch the investment opportunity and gauge demand.</li>
          <li><strong>Step 4 — Pricing:</strong> Based on investor demand, the underwriters set the IPO price. This is the price at which shares will be sold to initial investors.</li>
          <li><strong>Step 5 — First Day of Trading:</strong> Shares begin trading on a stock exchange. The opening price on the exchange may differ from the IPO price based on market demand. A big "pop" on the first day (like Snowflake's 112% first-day gain in 2020) means strong demand, but it also means the company may have left money on the table.</li>
        </ul>
      `
    },
    {
      type: "key-concept",
      title: "IPO vs. Direct Listing vs. SPAC",
      content: "A traditional IPO involves underwriters who buy and resell shares. A Direct Listing (used by Spotify and Coinbase) lets existing shareholders sell directly to the public without underwriters. A SPAC (Special Purpose Acquisition Company) is a 'blank check' company that goes public first, then merges with a private company to take it public. Each method has different implications for pricing, dilution, and insider lock-up periods."
    },
    {
      type: "text",
      content: `
        <h3>How Stock Exchanges Work</h3>
        <p>Stocks are bought and sold on <strong>stock exchanges</strong> — organized marketplaces that match buyers with sellers. Think of an exchange like a farmers' market, but instead of produce, people are trading ownership stakes in companies.</p>
        <p>The two most important U.S. stock exchanges are:</p>
        <ul>
          <li><strong>New York Stock Exchange (NYSE):</strong> The largest stock exchange in the world by market capitalization. Located on Wall Street in Manhattan. It lists blue-chip companies like Berkshire Hathaway (BRK.A), Johnson & Johnson (JNJ), and Walmart (WMT). The NYSE has a physical trading floor, though most trading is now electronic.</li>
          <li><strong>NASDAQ:</strong> The world's first electronic stock exchange, founded in 1971. It's known for listing technology companies like Apple (AAPL), Microsoft (MSFT), Amazon (AMZN), and Google/Alphabet (GOOGL). There's no physical trading floor — everything is electronic.</li>
        </ul>
        <p>Other major global exchanges include the London Stock Exchange (LSE), Tokyo Stock Exchange (TSE), Shanghai Stock Exchange (SSE), and Hong Kong Stock Exchange (HKEX). Together, the world's stock exchanges represent over $100 trillion in market value.</p>
      `
    },
    {
      type: "text",
      content: `
        <h3>Market Hours and Trading Sessions</h3>
        <p>U.S. stock markets follow a regular schedule:</p>
        <ul>
          <li><strong>Pre-Market Trading:</strong> 4:00 AM – 9:30 AM Eastern Time. Volume is low and spreads are wide. Prices can be volatile due to overnight news, earnings announcements, or economic data releases.</li>
          <li><strong>Regular Trading Hours:</strong> 9:30 AM – 4:00 PM Eastern Time, Monday through Friday. This is when the vast majority of trading occurs. The opening and closing 30 minutes tend to be the most volatile and highest-volume periods.</li>
          <li><strong>After-Hours Trading:</strong> 4:00 PM – 8:00 PM Eastern Time. Like pre-market, volume is lower and prices can gap significantly. Many companies report earnings after the close, which can cause big moves in after-hours trading.</li>
        </ul>
        <p>Markets are closed on weekends and specific holidays including New Year's Day, Martin Luther King Jr. Day, Presidents' Day, Good Friday, Memorial Day, Juneteenth, Independence Day, Labor Day, Thanksgiving, and Christmas. Some days have early closings at 1:00 PM ET.</p>
        <p><strong>Practical Tip:</strong> As a beginner, stick to regular trading hours. The liquidity is better, spreads are tighter, and price discovery is more reliable. Pre-market and after-hours trading can be unpredictable and is generally used by experienced traders reacting to specific catalysts.</p>
      `
    },
    {
      type: "text",
      content: `
        <h3>Types of Stocks</h3>
        <p>Not all stocks are created equal. Companies differ in size, growth potential, dividend policy, and risk level. Understanding these categories helps you build a diversified portfolio:</p>
        <ul>
          <li><strong>Common Stock vs. Preferred Stock:</strong> Common stock gives you voting rights at shareholder meetings and a share of profits through dividends (if the company pays them). Preferred stock typically has no voting rights but offers a fixed dividend and priority over common shareholders if the company goes bankrupt.</li>
          <li><strong>Large-Cap, Mid-Cap, Small-Cap:</strong> Market capitalization (share price × number of shares) categorizes companies by size. Large-cap stocks (over $10 billion) like Apple and Microsoft are more stable. Small-cap stocks (under $2 billion) are more volatile but may offer higher growth potential.</li>
          <li><strong>Growth Stocks vs. Value Stocks:</strong> Growth stocks (like Tesla or NVIDIA) reinvest profits into expansion rather than paying dividends. They're priced for future potential. Value stocks (like Coca-Cola or Procter & Gamble) trade at lower valuations relative to their earnings and often pay steady dividends.</li>
          <li><strong>Dividend Stocks:</strong> Companies like Johnson & Johnson and AT&T pay regular dividends — quarterly cash payments to shareholders. Dividend investors focus on income generation and often reinvest dividends to compound returns.</li>
        </ul>
      `
    },
    {
      type: "key-concept",
      title: "Market Capitalization",
      content: "Market cap = Share Price × Total Shares Outstanding. A company with 1 billion shares trading at $150 has a market cap of $150 billion. Market cap tells you the total value the market places on a company. It's more meaningful than share price alone — a $10 stock isn't necessarily 'cheaper' than a $500 stock if it has billions of shares outstanding."
    },
    {
      type: "text",
      content: `
        <h3>How Stock Prices Move</h3>
        <p>Stock prices are determined by <strong>supply and demand</strong>. If more people want to buy a stock than sell it, the price goes up. If more people want to sell than buy, the price goes down. It's that simple at its core — though the factors driving that supply and demand are infinitely complex.</p>
        <p>Key factors that move stock prices include:</p>
        <ul>
          <li><strong>Earnings Reports:</strong> Every quarter, public companies report their revenue, earnings, and guidance. Beating expectations usually pushes the stock up; missing expectations pushes it down. But it's not always that straightforward — sometimes a stock drops after beating earnings because the guidance for the next quarter was weak.</li>
          <li><strong>Economic Data:</strong> Reports on employment, inflation (CPI), interest rates, GDP growth, and consumer spending affect the entire market. A surprise rate hike by the Federal Reserve, for example, can send the whole market lower.</li>
          <li><strong>Company News:</strong> Product launches, executive changes, lawsuits, FDA approvals (for biotech companies), and mergers & acquisitions all create price movement.</li>
          <li><strong>Market Sentiment:</strong> Fear and greed drive short-term price movements more than fundamentals. During market panics, even great companies can see their stock prices fall dramatically.</li>
        </ul>
        <p><strong>Remember:</strong> In the short term, the stock market is a voting machine (driven by sentiment). In the long term, it's a weighing machine (driven by fundamentals). This insight, attributed to Benjamin Graham, is one of the most important concepts in investing.</p>
      `
    }
  ]
};
