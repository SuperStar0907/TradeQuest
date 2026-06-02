import Foundation

final class PortfolioService {
    static let shared = PortfolioService()
    private let key = "tq_portfolio"
    private init() {}

    func getPortfolio() -> Portfolio {
        guard let data = UserDefaults.standard.data(forKey: key),
              let portfolio = try? JSONDecoder().decode(Portfolio.self, from: data) else {
            return .initial()
        }
        return portfolio
    }

    func savePortfolio(_ portfolio: Portfolio) {
        if let data = try? JSONEncoder().encode(portfolio) {
            UserDefaults.standard.set(data, forKey: key)
        }
    }

    func resetPortfolio() {
        let portfolio = Portfolio.initial()
        savePortfolio(portfolio)
    }
}
