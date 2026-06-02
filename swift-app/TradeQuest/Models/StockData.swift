import Foundation

struct OHLCV: Codable, Identifiable {
    var id: String { time }
    let time: String
    let open: Double
    let high: Double
    let low: Double
    let close: Double
    let volume: Int
}

struct YahooChartResponse: Codable {
    let chart: YahooChart
}

struct YahooChart: Codable {
    let result: [YahooChartResult]?
}

struct YahooChartResult: Codable {
    let meta: YahooMeta?
    let timestamp: [Int]?
    let indicators: YahooIndicators?
}

struct YahooMeta: Codable {
    let symbol: String?
    let regularMarketPrice: Double?
    let previousClose: Double?
    let chartPreviousClose: Double?
}

struct YahooIndicators: Codable {
    let quote: [YahooQuote]?
}

struct YahooQuote: Codable {
    let open: [Double?]?
    let high: [Double?]?
    let low: [Double?]?
    let close: [Double?]?
    let volume: [Int?]?
}

extension YahooChartResponse {
    func toOHLCV() -> [OHLCV] {
        guard let result = chart.result?.first,
              let timestamps = result.timestamp,
              let quote = result.indicators?.quote?.first else {
            return []
        }

        let opens = quote.open ?? []
        let highs = quote.high ?? []
        let lows = quote.low ?? []
        let closes = quote.close ?? []
        let volumes = quote.volume ?? []

        let formatter = DateFormatter()
        formatter.dateFormat = "yyyy-MM-dd"

        var data: [OHLCV] = []
        for i in 0..<timestamps.count {
            guard let o = opens[safe: i] ?? nil,
                  let h = highs[safe: i] ?? nil,
                  let l = lows[safe: i] ?? nil,
                  let c = closes[safe: i] ?? nil else {
                continue
            }
            let v = (volumes[safe: i] ?? nil) ?? 0
            let date = Date(timeIntervalSince1970: TimeInterval(timestamps[i]))
            let dateString = formatter.string(from: date)
            guard o > 0, h > 0, l > 0, c > 0,
                  !o.isNaN, !h.isNaN, !l.isNaN, !c.isNaN,
                  !o.isInfinite, !h.isInfinite, !l.isInfinite, !c.isInfinite else {
                continue
            }
            data.append(OHLCV(time: dateString, open: o, high: h, low: l, close: c, volume: v))
        }
        return data
    }
}

private extension Array {
    subscript(safe index: Int) -> Element? {
        indices.contains(index) ? self[index] : nil
    }
}
