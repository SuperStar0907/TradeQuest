import Foundation

struct Portfolio: Codable {
    var cash: Double
    let startingCash: Double
    var holdings: [String: Position]
    var trades: [Trade]
    var history: [PortfolioSnapshot]

    static func initial(cash: Double = 100_000) -> Portfolio {
        Portfolio(
            cash: cash,
            startingCash: cash,
            holdings: [:],
            trades: [],
            history: []
        )
    }
}

struct Position: Codable {
    var shares: Double
    var avgCost: Double
}

struct Trade: Codable, Identifiable {
    var id: String { "\(date)-\(ticker)-\(side)" }
    let date: String
    let side: String
    let ticker: String
    let shares: Double
    let price: Double
    let total: Double
    let pl: Double?
}

struct PortfolioSnapshot: Codable {
    let date: String
    let value: Double
}
