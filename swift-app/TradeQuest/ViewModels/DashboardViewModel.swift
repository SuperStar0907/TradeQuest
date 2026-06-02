import SwiftUI

struct DailyTip {
    let title: String
    let content: String
}

@Observable @MainActor
class DashboardViewModel {
    var tracks: [Track] = []
    var lessons: [Lesson] = []
    var progress: UserProgress = .empty
    var dailyTip: DailyTip = DailyTip(title: "", content: "")

    var completedCount: Int {
        progress.completedLessons.count
    }

    var totalLessons: Int {
        lessons.count
    }

    var quizAverage: Int? {
        let scores = progress.quizScores.values.map { $0 }
        guard !scores.isEmpty else { return nil }
        return Int(scores.reduce(0.0, +) / Double(scores.count))
    }

    var totalXP: Int {
        progress.xp
    }

    var streak: Int {
        progress.streak
    }

    var recentActivities: [Activity] {
        Array(progress.activities.prefix(5))
    }

    private let dailyTips: [DailyTip] = [
        DailyTip(title: "Risk Management", content: "Never risk more than 1-2% of your trading capital on a single trade. This helps preserve your capital during losing streaks."),
        DailyTip(title: "Trend Following", content: "The trend is your friend. Always identify the primary trend before entering a trade, and avoid trading against it."),
        DailyTip(title: "Position Sizing", content: "Calculate your position size based on your stop loss distance and risk tolerance, not on how much you want to make."),
        DailyTip(title: "Trading Journal", content: "Keep a detailed trading journal. Record your entries, exits, emotions, and lessons learned from each trade."),
        DailyTip(title: "Cut Losses Early", content: "Let your winners run and cut your losers short. A small loss is always better than a large one."),
        DailyTip(title: "Market Hours", content: "The first and last hours of trading tend to have the most volatility. Consider avoiding trades during the first 15 minutes."),
        DailyTip(title: "Diversification", content: "Don't put all your eggs in one basket. Spread your risk across different sectors and asset classes."),
        DailyTip(title: "Paper Trading", content: "Practice with paper trading before risking real money. It helps you test strategies without financial risk."),
        DailyTip(title: "Support & Resistance", content: "Price tends to respect previous support and resistance levels. Use them to plan your entries and exits."),
        DailyTip(title: "Volume Analysis", content: "Volume confirms price moves. A breakout on high volume is more reliable than one on low volume."),
        DailyTip(title: "Emotional Control", content: "Never trade when you're emotional. Fear and greed are the two biggest enemies of a trader."),
        DailyTip(title: "Stop Losses", content: "Always use stop losses. A trade without a stop loss is a gamble, not a trade."),
        DailyTip(title: "Market Correlation", content: "Understand how different markets correlate. Stocks, bonds, commodities, and currencies all influence each other."),
        DailyTip(title: "Technical Indicators", content: "Don't overload your charts. Pick 2-3 indicators that complement each other and master them."),
        DailyTip(title: "Fundamental Analysis", content: "Combine technical and fundamental analysis. Technicals tell you when to trade, fundamentals tell you what to trade."),
        DailyTip(title: "Patience", content: "Patience is a trader's greatest virtue. Wait for your setup, don't chase trades that have already moved.")
    ]

    func load() async {
        tracks = ContentService.shared.loadTracks()
        lessons = ContentService.shared.loadLessons()
        progress = ProgressService.shared.getProgress()
        let dayIndex = Calendar.current.ordinality(of: .day, in: .year, for: .now) ?? 0
        dailyTip = dailyTips[dayIndex % dailyTips.count]
    }
}
