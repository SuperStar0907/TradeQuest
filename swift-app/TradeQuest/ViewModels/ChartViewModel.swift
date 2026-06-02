import SwiftUI

@Observable @MainActor
class ChartViewModel {
    var availableTickers: [String] = []
    var selectedTicker: String = "SPY"
    var ohlcvData: [OHLCV] = []
    var indicators: Set<String> = []
    var isLoading: Bool = false

    private let supportedIndicators = ["sma20", "sma50", "ema12", "bollinger", "rsi", "macd"]

    func loadTickers() {
        availableTickers = [
            "SPY", "TSLA", "AAPL", "MSFT", "GOOG", "AMZN", "NVDA", "ORCL",
            "RELIANCE.NS", "TCS.NS", "HDFCBANK.NS", "INFY.NS",
            "BTC-USD", "ETH-USD",
        ]
    }

    func selectTicker(_ ticker: String) {
        selectedTicker = ticker
        Task {
            await loadChartData()
        }
    }

    func toggleIndicator(_ name: String) {
        guard supportedIndicators.contains(name) else { return }
        if indicators.contains(name) {
            indicators.remove(name)
        } else {
            indicators.insert(name)
        }
    }

    func loadChartData() async {
        isLoading = true
        defer { isLoading = false }

        // Try live API first
        do {
            let liveData = try await MarketService.shared.fetchChart(
                ticker: selectedTicker,
                range: "1y",
                interval: "1d"
            )
            if !liveData.isEmpty {
                ohlcvData = liveData
                return
            }
        } catch {
            print("ChartViewModel: Live fetch failed for \(selectedTicker): \(error.localizedDescription)")
        }

        // Fallback to bundled data
        ohlcvData = ContentService.shared.loadStockData(ticker: selectedTicker)
    }

    func sma(period: Int) -> [(date: String, value: Double)] {
        guard ohlcvData.count >= period else { return [] }
        return (period - 1 ..< ohlcvData.count).map { i in
            let slice = ohlcvData[(i - period + 1)...i]
            let avg = slice.reduce(0.0) { $0 + $1.close } / Double(period)
            return (ohlcvData[i].time, avg)
        }
    }

    func ema(period: Int) -> [(date: String, value: Double)] {
        guard ohlcvData.count >= period else { return [] }
        let multiplier = 2.0 / Double(period + 1)
        var results: [(date: String, value: Double)] = []

        let initialSlice = ohlcvData[0..<period]
        var emaValue = initialSlice.reduce(0.0) { $0 + $1.close } / Double(period)
        results.append((ohlcvData[period - 1].time, emaValue))

        for i in period..<ohlcvData.count {
            emaValue = (ohlcvData[i].close - emaValue) * multiplier + emaValue
            results.append((ohlcvData[i].time, emaValue))
        }
        return results
    }

    func bollingerBands(period: Int = 20, stdDev: Double = 2) -> (upper: [(date: String, value: Double)], middle: [(date: String, value: Double)], lower: [(date: String, value: Double)]) {
        guard ohlcvData.count >= period else { return ([], [], []) }
        var upper: [(date: String, value: Double)] = []
        var middle: [(date: String, value: Double)] = []
        var lower: [(date: String, value: Double)] = []

        for i in (period - 1)..<ohlcvData.count {
            let slice = ohlcvData[(i - period + 1)...i]
            let avg = slice.reduce(0.0) { $0 + $1.close } / Double(period)
            let variance = slice.reduce(0.0) { $0 + ($1.close - avg) * ($1.close - avg) } / Double(period)
            let sd = sqrt(variance)
            let date = ohlcvData[i].time
            middle.append((date, avg))
            upper.append((date, avg + stdDev * sd))
            lower.append((date, avg - stdDev * sd))
        }
        return (upper, middle, lower)
    }

    func rsi(period: Int = 14) -> [(date: String, value: Double)] {
        guard ohlcvData.count > period else { return [] }
        var gains: [Double] = []
        var losses: [Double] = []

        for i in 1..<ohlcvData.count {
            let change = ohlcvData[i].close - ohlcvData[i - 1].close
            gains.append(max(0, change))
            losses.append(max(0, -change))
        }

        guard gains.count >= period else { return [] }

        var avgGain = gains[0..<period].reduce(0, +) / Double(period)
        var avgLoss = losses[0..<period].reduce(0, +) / Double(period)

        var results: [(date: String, value: Double)] = []
        let rs = avgLoss == 0 ? 100 : avgGain / avgLoss
        results.append((ohlcvData[period].time, 100 - 100 / (1 + rs)))

        for i in period..<gains.count {
            avgGain = (avgGain * Double(period - 1) + gains[i]) / Double(period)
            avgLoss = (avgLoss * Double(period - 1) + losses[i]) / Double(period)
            let rs = avgLoss == 0 ? 100 : avgGain / avgLoss
            results.append((ohlcvData[i + 1].time, 100 - 100 / (1 + rs)))
        }
        return results
    }

    func macd() -> (macdLine: [(date: String, value: Double)], signalLine: [(date: String, value: Double)], histogram: [(date: String, value: Double)]) {
        let ema12Data = ema(period: 12)
        let ema26Data = ema(period: 26)
        guard !ema12Data.isEmpty, !ema26Data.isEmpty else { return ([], [], []) }

        let ema12Map = Dictionary(uniqueKeysWithValues: ema12Data.map { ($0.date, $0.value) })

        var macdLine: [(date: String, value: Double)] = []
        for point in ema26Data {
            if let ema12Val = ema12Map[point.date] {
                macdLine.append((point.date, ema12Val - point.value))
            }
        }

        guard macdLine.count >= 9 else { return (macdLine, [], []) }

        let signalPeriod = 9
        let multiplier = 2.0 / Double(signalPeriod + 1)
        var signalLine: [(date: String, value: Double)] = []
        var histogram: [(date: String, value: Double)] = []

        var signalValue = macdLine[0..<signalPeriod].reduce(0.0) { $0 + $1.value } / Double(signalPeriod)
        signalLine.append((macdLine[signalPeriod - 1].date, signalValue))
        histogram.append((macdLine[signalPeriod - 1].date, macdLine[signalPeriod - 1].value - signalValue))

        for i in signalPeriod..<macdLine.count {
            signalValue = (macdLine[i].value - signalValue) * multiplier + signalValue
            signalLine.append((macdLine[i].date, signalValue))
            histogram.append((macdLine[i].date, macdLine[i].value - signalValue))
        }

        return (macdLine, signalLine, histogram)
    }
}
