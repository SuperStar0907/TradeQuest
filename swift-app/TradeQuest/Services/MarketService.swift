import Foundation

struct Quote {
    let symbol: String
    let price: Double
    let change: Double
    let changePct: Double
    let volume: Int
    let name: String
    let high: Double
    let low: Double
    let open: Double
    let prevClose: Double
}

struct SearchResult: Codable {
    let symbol: String
    let name: String
    let exchange: String
    let type: String
}

final class MarketService {
    static let shared = MarketService()
    private init() {}

    private let baseURL = "https://query1.finance.yahoo.com/v8/finance/chart/"
    private let searchURL = "https://query1.finance.yahoo.com/v1/finance/search"

    func fetchQuote(ticker: String) async throws -> Quote {
        let encoded = ticker.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ticker
        let urlString = "\(baseURL)\(encoded)?range=5d&interval=1d&includePrePost=false"
        guard let url = URL(string: urlString) else {
            throw MarketError.invalidURL
        }

        var request = URLRequest(url: url)
        request.setValue("Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)", forHTTPHeaderField: "User-Agent")
        request.timeoutInterval = 10

        let (data, response) = try await URLSession.shared.data(for: request)
        guard let httpResponse = response as? HTTPURLResponse,
              httpResponse.statusCode == 200 else {
            throw MarketError.requestFailed
        }

        let chartResponse = try JSONDecoder().decode(YahooChartResponse.self, from: data)
        guard let result = chartResponse.chart.result?.first,
              let meta = result.meta,
              let quote = result.indicators?.quote?.first,
              let closes = quote.close,
              let lastClose = closes.compactMap({ $0 }).last else {
            throw MarketError.parseError
        }

        let prevClose = meta.previousClose ?? meta.chartPreviousClose ?? lastClose
        let change = lastClose - prevClose
        let changePct = prevClose > 0 ? (change / prevClose) * 100 : 0

        let opens = quote.open?.compactMap { $0 } ?? []
        let highs = quote.high?.compactMap { $0 } ?? []
        let lows = quote.low?.compactMap { $0 } ?? []
        let volumes = quote.volume?.compactMap { $0 } ?? []

        return Quote(
            symbol: meta.symbol ?? ticker,
            price: lastClose,
            change: change,
            changePct: changePct,
            volume: volumes.last ?? 0,
            name: meta.symbol ?? ticker,
            high: highs.last ?? lastClose,
            low: lows.last ?? lastClose,
            open: opens.last ?? lastClose,
            prevClose: prevClose
        )
    }

    func fetchQuotes(tickers: [String]) async -> [String: Quote] {
        await withTaskGroup(of: (String, Quote?).self) { group in
            for ticker in tickers {
                group.addTask {
                    do {
                        let quote = try await self.fetchQuote(ticker: ticker)
                        return (ticker, quote)
                    } catch {
                        print("MarketService: Failed to fetch \(ticker): \(error.localizedDescription)")
                        return (ticker, nil)
                    }
                }
            }

            var results: [String: Quote] = [:]
            for await (ticker, quote) in group {
                if let quote {
                    results[ticker] = quote
                }
            }
            return results
        }
    }

    func fetchChart(ticker: String, range: String, interval: String) async throws -> [OHLCV] {
        let encoded = ticker.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ticker
        let urlString = "\(baseURL)\(encoded)?range=\(range)&interval=\(interval)&includePrePost=false"
        guard let url = URL(string: urlString) else {
            throw MarketError.invalidURL
        }

        var request = URLRequest(url: url)
        request.setValue("Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)", forHTTPHeaderField: "User-Agent")
        request.timeoutInterval = 15

        let (data, response) = try await URLSession.shared.data(for: request)
        guard let httpResponse = response as? HTTPURLResponse,
              httpResponse.statusCode == 200 else {
            throw MarketError.requestFailed
        }

        let chartResponse = try JSONDecoder().decode(YahooChartResponse.self, from: data)
        return chartResponse.toOHLCV()
    }

    func searchTicker(query: String) async -> [SearchResult] {
        guard var components = URLComponents(string: searchURL) else { return [] }
        components.queryItems = [
            URLQueryItem(name: "q", value: query),
            URLQueryItem(name: "quotesCount", value: "10"),
            URLQueryItem(name: "newsCount", value: "0")
        ]
        guard let url = components.url else { return [] }

        do {
            let (data, _) = try await URLSession.shared.data(from: url)
            let response = try JSONDecoder().decode(SearchResponse.self, from: data)
            return response.quotes.map { item in
                SearchResult(
                    symbol: item.symbol,
                    name: item.shortname ?? item.longname ?? item.symbol,
                    exchange: item.exchange ?? "",
                    type: item.quoteType ?? ""
                )
            }
        } catch {
            return []
        }
    }
}

enum MarketError: Error, LocalizedError {
    case invalidURL
    case requestFailed
    case parseError

    var errorDescription: String? {
        switch self {
        case .invalidURL: return "Invalid URL"
        case .requestFailed: return "Network request failed"
        case .parseError: return "Failed to parse market data"
        }
    }
}

private struct SearchResponse: Codable {
    let quotes: [SearchQuoteItem]
}

private struct SearchQuoteItem: Codable {
    let symbol: String
    let shortname: String?
    let longname: String?
    let exchange: String?
    let quoteType: String?
}
