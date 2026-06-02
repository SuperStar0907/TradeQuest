const LESSON_REGISTRY = {};
const QUIZ_REGISTRY = {};
const LESSON_MANIFEST = {
  tracks: [
    {
      id: 'stock-markets',
      name: 'Stock Market Fundamentals',
      icon: '📊',
      description: 'Learn the basics of stocks, exchanges, and how markets work',
      lessons: []
    },
    {
      id: 'technical-analysis',
      name: 'Technical Analysis',
      icon: '📈',
      description: 'Master chart reading, indicators, and pattern recognition',
      lessons: []
    },
    {
      id: 'options',
      name: 'Options Trading',
      icon: '🎯',
      description: 'Understand options contracts, Greeks, and strategies',
      lessons: []
    },
    {
      id: 'risk-management',
      name: 'Risk Management',
      icon: '🛡️',
      description: 'Position sizing, stop losses, and portfolio protection',
      lessons: []
    }
  ]
};

// Static lesson index for sidebar rendering before content files load
const LESSON_INDEX = [
  { id: 'what-is-a-stock', title: 'What is a Stock?', track: 'stock-markets', order: 0 },
  { id: 'reading-price-charts', title: 'Reading Price Charts', track: 'technical-analysis', order: 1 },
  { id: 'volume-analysis', title: 'Volume & What It Tells You', track: 'technical-analysis', order: 2 },
  { id: 'support-resistance', title: 'Support & Resistance', track: 'technical-analysis', order: 3 },
  { id: 'moving-averages', title: 'Moving Averages (SMA & EMA)', track: 'technical-analysis', order: 4 },
  { id: 'rsi-indicator', title: 'RSI (Relative Strength Index)', track: 'technical-analysis', order: 5 },
  { id: 'macd-indicator', title: 'MACD — Trend & Momentum', track: 'technical-analysis', order: 6 },
  { id: 'bollinger-bands', title: 'Bollinger Bands', track: 'technical-analysis', order: 7 },
  { id: 'fibonacci-retracements', title: 'Fibonacci Retracements', track: 'technical-analysis', order: 8 },
  { id: 'chart-patterns', title: 'Chart Patterns', track: 'technical-analysis', order: 9 },
  { id: 'candlestick-patterns', title: 'Candlestick Patterns', track: 'technical-analysis', order: 10 },
  { id: 'order-types', title: 'Order Types', track: 'risk-management', order: 11 },
  { id: 'risk-management', title: 'Risk Management & Position Sizing', track: 'risk-management', order: 12 },
  { id: 'fundamental-analysis', title: 'Fundamental Analysis', track: 'stock-markets', order: 13 },
  { id: 'sector-analysis', title: 'Sector Analysis & Correlation', track: 'stock-markets', order: 14 },
  { id: 'market-microstructure', title: 'Market Microstructure', track: 'risk-management', order: 15 },
  { id: 'trading-psychology', title: 'Trading Psychology', track: 'risk-management', order: 16 },
  { id: 'backtesting-strategies', title: 'Backtesting & Strategy Development', track: 'risk-management', order: 17 },
  { id: 'portfolio-construction', title: 'Portfolio Construction & Diversification', track: 'risk-management', order: 18 },
  { id: 'tax-regulatory', title: 'Tax & Regulatory Basics', track: 'stock-markets', order: 19 },
  { id: 'what-are-options', title: 'What Are Options?', track: 'options', order: 0 },
  { id: 'options-pricing-intrinsic-value', title: 'Options Pricing & Intrinsic Value', track: 'options', order: 1 },
  { id: 'the-greeks-delta', title: 'The Greeks: Delta', track: 'options', order: 2 },
  { id: 'gamma-theta-vega', title: 'Gamma, Theta, Vega', track: 'options', order: 3 },
  { id: 'payoff-diagrams-calls-puts', title: 'Payoff Diagrams: Calls & Puts', track: 'options', order: 4 },
  { id: 'reading-an-options-chain', title: 'Reading an Options Chain', track: 'options', order: 5 },
  { id: 'covered-calls', title: 'Covered Calls', track: 'options', order: 6 },
  { id: 'cash-secured-puts', title: 'Cash-Secured Puts', track: 'options', order: 7 },
  { id: 'vertical-spreads', title: 'Vertical Spreads', track: 'options', order: 8 },
  { id: 'iron-condors', title: 'Iron Condors', track: 'options', order: 9 },
  { id: 'straddles-and-strangles', title: 'Straddles & Strangles', track: 'options', order: 10 },
  { id: 'the-wheel-strategy', title: 'The Wheel Strategy', track: 'options', order: 11 },
  { id: 'implied-volatility-iv-rank', title: 'Implied Volatility & IV Rank', track: 'options', order: 12 },
  { id: 'earnings-plays-iv-crush', title: 'Earnings Plays & IV Crush', track: 'options', order: 13 },
  { id: 'options-risk-management', title: 'Options Risk Management', track: 'options', order: 14 },
];
