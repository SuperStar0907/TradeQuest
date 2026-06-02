import Foundation

final class ProgressService {
    static let shared = ProgressService()
    private let key = "tq_progress"
    private init() {}

    func getProgress() -> UserProgress {
        guard let data = UserDefaults.standard.data(forKey: key),
              let progress = try? JSONDecoder().decode(UserProgress.self, from: data) else {
            return .empty
        }
        return progress
    }

    func saveProgress(_ progress: UserProgress) {
        if let data = try? JSONEncoder().encode(progress) {
            UserDefaults.standard.set(data, forKey: key)
            KeychainBackup.save(data)
        }
    }

    func markLessonComplete(id: String, xpReward: Int) {
        var progress = getProgress()
        guard !progress.completedLessons.contains(id) else { return }
        progress.completedLessons.append(id)
        progress.startedLessons.removeAll { $0 == id }
        progress.xp += xpReward
        addActivity(text: "Completed lesson", to: &progress)
        saveProgress(progress)
    }

    func markLessonStarted(id: String) {
        var progress = getProgress()
        guard !progress.startedLessons.contains(id),
              !progress.completedLessons.contains(id) else { return }
        progress.startedLessons.append(id)
        saveProgress(progress)
    }

    func recordQuizScore(category: String, percentage: Double) {
        var progress = getProgress()
        progress.quizScores[category] = percentage
        addActivity(text: "Scored \(Int(percentage))% on \(category) quiz", to: &progress)
        saveProgress(progress)
    }

    func addActivity(text: String) {
        var progress = getProgress()
        addActivity(text: text, to: &progress)
        saveProgress(progress)
    }

    func updateStreak() {
        var progress = getProgress()
        let formatter = DateFormatter()
        formatter.dateFormat = "yyyy-MM-dd"
        let today = formatter.string(from: Date())

        if let lastVisit = progress.lastVisit {
            if lastVisit == today {
                return
            }
            let calendar = Calendar.current
            if let lastDate = formatter.date(from: lastVisit),
               let diff = calendar.dateComponents([.day], from: lastDate, to: Date()).day,
               diff == 1 {
                progress.streak += 1
            } else {
                progress.streak = 1
            }
        } else {
            progress.streak = 1
        }

        progress.lastVisit = today
        saveProgress(progress)
    }

    private func addActivity(text: String, to progress: inout UserProgress) {
        let formatter = ISO8601DateFormatter()
        let activity = Activity(text: text, time: formatter.string(from: Date()))
        progress.activities.insert(activity, at: 0)
        if progress.activities.count > 50 {
            progress.activities = Array(progress.activities.prefix(50))
        }
    }
}
