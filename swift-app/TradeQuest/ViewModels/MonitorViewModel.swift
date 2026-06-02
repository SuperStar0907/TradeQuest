import SwiftUI
import Combine

struct TickerInfo: Identifiable {
    let id: String
    let symbol: String
    let name: String
    let sector: String?
    let region: String?
}

struct KeyMetric: Identifiable {
    let id: String
    let label: String
    var value: String
    var color: Color
    var percent: Double
}

@Observable @MainActor
class MonitorViewModel {
    var quotes: [String: Quote] = [:]
    var activeFilter: String = "all"
    var activeRegion: String = "all"
    var isLoading: Bool = true

    private var refreshTimer: Timer?

    // MARK: - Ticker Definitions

    static let indices: [TickerInfo] = [
        TickerInfo(id: "^NSEI", symbol: "^NSEI", name: "NIFTY 50", sector: nil, region: "in"),
        TickerInfo(id: "^BSESN", symbol: "^BSESN", name: "SENSEX", sector: nil, region: "in"),
        TickerInfo(id: "^NSEBANK", symbol: "^NSEBANK", name: "BANK NIFTY", sector: nil, region: "in"),
        TickerInfo(id: "^GSPC", symbol: "^GSPC", name: "S&P 500", sector: nil, region: "global"),
        TickerInfo(id: "^DJI", symbol: "^DJI", name: "Dow Jones", sector: nil, region: "global"),
        TickerInfo(id: "^IXIC", symbol: "^IXIC", name: "NASDAQ", sector: nil, region: "global"),
        TickerInfo(id: "^RUT", symbol: "^RUT", name: "Russell 2000", sector: nil, region: "global"),
        TickerInfo(id: "^FTSE", symbol: "^FTSE", name: "FTSE 100", sector: nil, region: "global"),
        TickerInfo(id: "^N225", symbol: "^N225", name: "Nikkei 225", sector: nil, region: "global"),
        TickerInfo(id: "^HSI", symbol: "^HSI", name: "Hang Seng", sector: nil, region: "global"),
    ]

    static let stocks: [TickerInfo] = [
        TickerInfo(id: "RELIANCE.NS", symbol: "RELIANCE.NS", name: "Reliance Industries", sector: "Energy", region: "in"),
        TickerInfo(id: "TCS.NS", symbol: "TCS.NS", name: "Tata Consultancy", sector: "Technology", region: "in"),
        TickerInfo(id: "HDFCBANK.NS", symbol: "HDFCBANK.NS", name: "HDFC Bank", sector: "Banking", region: "in"),
        TickerInfo(id: "INFY.NS", symbol: "INFY.NS", name: "Infosys", sector: "Technology", region: "in"),
        TickerInfo(id: "ICICIBANK.NS", symbol: "ICICIBANK.NS", name: "ICICI Bank", sector: "Banking", region: "in"),
        TickerInfo(id: "HINDUNILVR.NS", symbol: "HINDUNILVR.NS", name: "Hindustan Unilever", sector: "FMCG", region: "in"),
        TickerInfo(id: "ITC.NS", symbol: "ITC.NS", name: "ITC Limited", sector: "FMCG", region: "in"),
        TickerInfo(id: "SBIN.NS", symbol: "SBIN.NS", name: "State Bank of India", sector: "Banking", region: "in"),
        TickerInfo(id: "BHARTIARTL.NS", symbol: "BHARTIARTL.NS", name: "Bharti Airtel", sector: "Telecom", region: "in"),
        TickerInfo(id: "KOTAKBANK.NS", symbol: "KOTAKBANK.NS", name: "Kotak Mahindra Bank", sector: "Banking", region: "in"),
        TickerInfo(id: "LT.NS", symbol: "LT.NS", name: "Larsen & Toubro", sector: "Infrastructure", region: "in"),
        TickerInfo(id: "AXISBANK.NS", symbol: "AXISBANK.NS", name: "Axis Bank", sector: "Banking", region: "in"),
        TickerInfo(id: "WIPRO.NS", symbol: "WIPRO.NS", name: "Wipro", sector: "Technology", region: "in"),
        TickerInfo(id: "ADANIENT.NS", symbol: "ADANIENT.NS", name: "Adani Enterprises", sector: "Conglomerate", region: "in"),
        TickerInfo(id: "TATAMOTORS.NS", symbol: "TATAMOTORS.NS", name: "Tata Motors", sector: "Automotive", region: "in"),
        TickerInfo(id: "AAPL", symbol: "AAPL", name: "Apple", sector: "Technology", region: "global"),
        TickerInfo(id: "MSFT", symbol: "MSFT", name: "Microsoft", sector: "Technology", region: "global"),
        TickerInfo(id: "GOOGL", symbol: "GOOGL", name: "Alphabet", sector: "Technology", region: "global"),
        TickerInfo(id: "AMZN", symbol: "AMZN", name: "Amazon", sector: "Technology", region: "global"),
        TickerInfo(id: "NVDA", symbol: "NVDA", name: "NVIDIA", sector: "Technology", region: "global"),
        TickerInfo(id: "META", symbol: "META", name: "Meta Platforms", sector: "Technology", region: "global"),
        TickerInfo(id: "TSLA", symbol: "TSLA", name: "Tesla", sector: "Automotive", region: "global"),
        TickerInfo(id: "JPM", symbol: "JPM", name: "JPMorgan Chase", sector: "Banking", region: "global"),
        TickerInfo(id: "V", symbol: "V", name: "Visa", sector: "Financial", region: "global"),
        TickerInfo(id: "JNJ", symbol: "JNJ", name: "Johnson & Johnson", sector: "Healthcare", region: "global"),
    ]

    static let etfs: [TickerInfo] = [
        TickerInfo(id: "SPY", symbol: "SPY", name: "SPDR S&P 500", sector: "Index", region: "global"),
        TickerInfo(id: "QQQ", symbol: "QQQ", name: "Invesco QQQ", sector: "Technology", region: "global"),
        TickerInfo(id: "IWM", symbol: "IWM", name: "iShares Russell 2000", sector: "Small Cap", region: "global"),
        TickerInfo(id: "DIA", symbol: "DIA", name: "SPDR Dow Jones", sector: "Index", region: "global"),
        TickerInfo(id: "GLD", symbol: "GLD", name: "SPDR Gold Shares", sector: "Commodity", region: "global"),
        TickerInfo(id: "SLV", symbol: "SLV", name: "iShares Silver", sector: "Commodity", region: "global"),
        TickerInfo(id: "TLT", symbol: "TLT", name: "iShares 20+ Year Treasury", sector: "Bond", region: "global"),
        TickerInfo(id: "XLF", symbol: "XLF", name: "Financial Select", sector: "Financial", region: "global"),
        TickerInfo(id: "XLE", symbol: "XLE", name: "Energy Select", sector: "Energy", region: "global"),
        TickerInfo(id: "XLK", symbol: "XLK", name: "Technology Select", sector: "Technology", region: "global"),
    ]

    static let volatility: [TickerInfo] = [
        TickerInfo(id: "^VIX", symbol: "^VIX", name: "VIX", sector: nil, region: "global"),
        TickerInfo(id: "^VXN", symbol: "^VXN", name: "VXN", sector: nil, region: "global"),
        TickerInfo(id: "UVXY", symbol: "UVXY", name: "UVXY", sector: nil, region: "global"),
        TickerInfo(id: "SVXY", symbol: "SVXY", name: "SVXY", sector: nil, region: "global"),
        TickerInfo(id: "^INDIAVIX", symbol: "^INDIAVIX", name: "India VIX", sector: nil, region: "in"),
    ]

    static let crypto: [TickerInfo] = [
        TickerInfo(id: "BTC-USD", symbol: "BTC-USD", name: "Bitcoin", sector: "Crypto", region: "global"),
        TickerInfo(id: "ETH-USD", symbol: "ETH-USD", name: "Ethereum", sector: "Crypto", region: "global"),
        TickerInfo(id: "SOL-USD", symbol: "SOL-USD", name: "Solana", sector: "Crypto", region: "global"),
        TickerInfo(id: "BNB-USD", symbol: "BNB-USD", name: "BNB", sector: "Crypto", region: "global"),
        TickerInfo(id: "XRP-USD", symbol: "XRP-USD", name: "XRP", sector: "Crypto", region: "global"),
        TickerInfo(id: "ADA-USD", symbol: "ADA-USD", name: "Cardano", sector: "Crypto", region: "global"),
        TickerInfo(id: "DOGE-USD", symbol: "DOGE-USD", name: "Dogecoin", sector: "Crypto", region: "global"),
    ]

    static let forex: [TickerInfo] = [
        TickerInfo(id: "USDINR=X", symbol: "USDINR=X", name: "USD/INR", sector: "Forex", region: "in"),
        TickerInfo(id: "EURINR=X", symbol: "EURINR=X", name: "EUR/INR", sector: "Forex", region: "in"),
        TickerInfo(id: "GBPINR=X", symbol: "GBPINR=X", name: "GBP/INR", sector: "Forex", region: "in"),
        TickerInfo(id: "EURUSD=X", symbol: "EURUSD=X", name: "EUR/USD", sector: "Forex", region: "global"),
        TickerInfo(id: "GBPUSD=X", symbol: "GBPUSD=X", name: "GBP/USD", sector: "Forex", region: "global"),
        TickerInfo(id: "USDJPY=X", symbol: "USDJPY=X", name: "USD/JPY", sector: "Forex", region: "global"),
        TickerInfo(id: "DX-Y.NYB", symbol: "DX-Y.NYB", name: "US Dollar Index", sector: "Forex", region: "global"),
    ]

    static let commodities: [TickerInfo] = [
        TickerInfo(id: "GC=F", symbol: "GC=F", name: "Gold", sector: "Metal", region: "global"),
        TickerInfo(id: "SI=F", symbol: "SI=F", name: "Silver", sector: "Metal", region: "global"),
        TickerInfo(id: "CL=F", symbol: "CL=F", name: "Crude Oil", sector: "Energy", region: "global"),
        TickerInfo(id: "NG=F", symbol: "NG=F", name: "Natural Gas", sector: "Energy", region: "global"),
        TickerInfo(id: "HG=F", symbol: "HG=F", name: "Copper", sector: "Metal", region: "global"),
    ]

    static let treasury: [TickerInfo] = [
        TickerInfo(id: "^IRX", symbol: "^IRX", name: "3-Month Treasury", sector: "Bond", region: "global"),
        TickerInfo(id: "^FVX", symbol: "^FVX", name: "5-Year Treasury", sector: "Bond", region: "global"),
        TickerInfo(id: "^TNX", symbol: "^TNX", name: "10-Year Treasury", sector: "Bond", region: "global"),
        TickerInfo(id: "^TYX", symbol: "^TYX", name: "30-Year Treasury", sector: "Bond", region: "global"),
    ]

    // MARK: - All Categories

    static var allCategories: [[TickerInfo]] {
        [indices, stocks, etfs, volatility, crypto, forex, commodities, treasury]
    }

    // MARK: - Filtered Computed Properties

    var filteredIndices: [TickerInfo] {
        filterByRegion(Self.indices)
    }

    var filteredStocks: [TickerInfo] {
        filterByRegion(Self.stocks)
    }

    var filteredETFs: [TickerInfo] {
        filterByRegion(Self.etfs)
    }

    var filteredVolatility: [TickerInfo] {
        filterByRegion(Self.volatility)
    }

    var filteredCrypto: [TickerInfo] {
        filterByRegion(Self.crypto)
    }

    var filteredForex: [TickerInfo] {
        filterByRegion(Self.forex)
    }

    var filteredCommodities: [TickerInfo] {
        filterByRegion(Self.commodities)
    }

    var filteredTreasury: [TickerInfo] {
        filterByRegion(Self.treasury)
    }

    var topMovers: [TickerInfo] {
        let allTickers = Self.indices + Self.stocks + Self.etfs + Self.crypto + Self.forex + Self.commodities
        return allTickers
            .filter { quotes[$0.symbol] != nil }
            .sorted { ticker1, ticker2 in
                let change1 = abs(quotes[ticker1.symbol]?.changePct ?? 0)
                let change2 = abs(quotes[ticker2.symbol]?.changePct ?? 0)
                return change1 > change2
            }
            .prefix(10)
            .map { $0 }
    }

    var keyMetrics: [KeyMetric] {
        [
            makeMetric(id: "nifty", label: "NIFTY", symbol: "^NSEI"),
            makeMetric(id: "sensex", label: "SENSEX", symbol: "^BSESN"),
            makeMetric(id: "usdinr", label: "USD/INR", symbol: "USDINR=X"),
            makeMetric(id: "sp500", label: "S&P 500", symbol: "^GSPC"),
            makeMetric(id: "vix", label: "VIX", symbol: "^VIX"),
            makeMetric(id: "btc", label: "BTC", symbol: "BTC-USD"),
            makeMetric(id: "gold", label: "Gold", symbol: "GC=F"),
            makeMetric(id: "10y", label: "10Y", symbol: "^TNX"),
            makeMetric(id: "dxy", label: "DXY", symbol: "DX-Y.NYB"),
        ]
    }

    // MARK: - Actions

    func loadAllData() async {
        isLoading = true
        defer { isLoading = false }

        let allSymbols = Self.allCategories.flatMap { $0 }.map { $0.symbol }
        let uniqueSymbols = Array(Set(allSymbols))

        quotes = await MarketService.shared.fetchQuotes(tickers: uniqueSymbols)
    }

    func refresh() async {
        await loadAllData()
    }

    func startAutoRefresh() {
        stopAutoRefresh()
        refreshTimer = Timer.scheduledTimer(withTimeInterval: 60, repeats: true) { [weak self] _ in
            guard let self else { return }
            Task { @MainActor in
                await self.refresh()
            }
        }
    }

    func stopAutoRefresh() {
        refreshTimer?.invalidate()
        refreshTimer = nil
    }

    func cancelFetches() {
        stopAutoRefresh()
    }

    // MARK: - Formatting Helpers

    func formattedPrice(for ticker: TickerInfo) -> String {
        guard let quote = quotes[ticker.symbol] else { return "--" }

        let symbol = ticker.symbol.uppercased()
        let isTreasury = Self.treasury.contains(where: { $0.symbol == ticker.symbol })
        let isForex = ticker.sector == "Forex"

        if isTreasury {
            return String(format: "%.3f%%", quote.price)
        }

        if isForex {
            return String(format: "%.4f", quote.price)
        }

        let currencySymbol = getCurrencySymbol(for: symbol)
        return quote.price.asCurrency(symbol: currencySymbol)
    }

    // MARK: - Private Helpers

    private func filterByRegion(_ tickers: [TickerInfo]) -> [TickerInfo] {
        guard activeRegion != "all" else { return tickers }
        return tickers.filter { $0.region == activeRegion }
    }

    private func makeMetric(id: String, label: String, symbol: String) -> KeyMetric {
        let quote = quotes[symbol]
        let pct = quote?.changePct ?? 0
        let color: Color = pct >= 0 ? .green : .red
        let valueString = quote.map { String(format: "%.2f", $0.price) } ?? "--"
        return KeyMetric(id: id, label: label, value: valueString, color: color, percent: pct)
    }
}
