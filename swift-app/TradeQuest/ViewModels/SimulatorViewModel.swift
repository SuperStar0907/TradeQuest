import SwiftUI

@Observable @MainActor
class SimulatorViewModel {
    var portfolio: Portfolio = Portfolio.initial()
    var currentTicker: String = "AAPL"
    var dataIndex: Int = 100
    var ohlcvData: [OHLCV] = []
    var isPlaying: Bool = false
    var orderSide: String = "buy"
    var orderType: String = "market"
    var shares: Double = 10
    var limitPrice: Double = 0
    var playSpeed: Int = 5

    private var playbackTask: Task<Void, Never>?

    var currentPrice: Double {
        guard dataIndex >= 0, dataIndex < ohlcvData.count else { return 0 }
        return ohlcvData[dataIndex].close
    }

    var portfolioValue: Double {
        let positionsValue = portfolio.holdings.reduce(0.0) { total, entry in
            total + (entry.value.shares * currentPrice)
        }
        return portfolio.cash + positionsValue
    }

    var portfolioChange: Double {
        portfolioValue - portfolio.startingCash
    }

    var portfolioChangePct: Double {
        guard portfolio.startingCash > 0 else { return 0 }
        return (portfolioChange / portfolio.startingCash) * 100
    }

    var estimatedCost: Double {
        let price = orderType == "limit" ? limitPrice : currentPrice
        return price * shares
    }

    func loadChart() {
        ohlcvData = ContentService.shared.loadStockData(ticker: currentTicker)
        dataIndex = min(100, max(0, ohlcvData.count - 1))
        limitPrice = currentPrice
    }

    func stepForward() {
        guard dataIndex < ohlcvData.count - 1 else {
            isPlaying = false
            return
        }
        dataIndex += 1
    }

    func stepBack() {
        guard dataIndex > 0 else { return }
        dataIndex -= 1
    }

    func togglePlayback() {
        isPlaying.toggle()
        if isPlaying {
            startPlayback()
        } else {
            playbackTask?.cancel()
            playbackTask = nil
        }
    }

    func executeOrder() {
        let price = orderType == "limit" ? limitPrice : currentPrice
        let formatter = DateFormatter()
        formatter.dateFormat = "yyyy-MM-dd"
        let dateString = formatter.string(from: Date())

        if orderSide == "buy" {
            let cost = price * shares
            guard portfolio.cash >= cost else { return }
            portfolio.cash -= cost
            if let existing = portfolio.holdings[currentTicker] {
                let totalShares = existing.shares + shares
                let newAvg = (existing.avgCost * existing.shares + price * shares) / totalShares
                portfolio.holdings[currentTicker] = Position(shares: totalShares, avgCost: newAvg)
            } else {
                portfolio.holdings[currentTicker] = Position(shares: shares, avgCost: price)
            }
            portfolio.trades.append(Trade(
                date: dateString,
                side: "buy",
                ticker: currentTicker,
                shares: shares,
                price: price,
                total: cost,
                pl: nil
            ))
        } else {
            guard let existing = portfolio.holdings[currentTicker],
                  existing.shares >= shares else { return }
            let revenue = price * shares
            let pl = (price - existing.avgCost) * shares
            portfolio.cash += revenue
            let remaining = existing.shares - shares
            if remaining <= 0 {
                portfolio.holdings.removeValue(forKey: currentTicker)
            } else {
                portfolio.holdings[currentTicker] = Position(shares: remaining, avgCost: existing.avgCost)
            }
            portfolio.trades.append(Trade(
                date: dateString,
                side: "sell",
                ticker: currentTicker,
                shares: shares,
                price: price,
                total: revenue,
                pl: pl
            ))
        }
    }

    func resetPortfolio() {
        portfolio = Portfolio.initial()
        dataIndex = min(100, max(0, ohlcvData.count - 1))
        isPlaying = false
        playbackTask?.cancel()
        playbackTask = nil
    }

    // MARK: - Private

    private func startPlayback() {
        playbackTask = Task {
            while isPlaying && !Task.isCancelled {
                try? await Task.sleep(nanoseconds: UInt64(1_000_000_000 / playSpeed))
                guard !Task.isCancelled else { break }
                stepForward()
                if dataIndex >= ohlcvData.count - 1 {
                    isPlaying = false
                }
            }
        }
    }
}
