import Foundation

struct UserProgress: Codable {
    var completedLessons: [String]
    var startedLessons: [String]
    var xp: Int
    var streak: Int
    var lastVisit: String?
    var quizScores: [String: Double]
    var skillRatings: [String: Double]
    var activities: [Activity]

    static var empty: UserProgress {
        UserProgress(
            completedLessons: [],
            startedLessons: [],
            xp: 0,
            streak: 0,
            lastVisit: nil,
            quizScores: [:],
            skillRatings: [:],
            activities: []
        )
    }
}

struct Activity: Codable, Identifiable {
    var id: String { "\(time)-\(text)" }
    let text: String
    let time: String
}
