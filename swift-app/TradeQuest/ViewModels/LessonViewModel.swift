import SwiftUI

@Observable @MainActor
class LessonViewModel {
    var currentLesson: Lesson?
    var isCompleted: Bool = false
    var lessonsByTrack: [String: [Lesson]] = [:]

    func loadLessons() {
        let allLessons = ContentService.shared.loadLessons()
        lessonsByTrack = Dictionary(grouping: allLessons, by: { $0.track })
    }

    func selectLesson(_ id: String) {
        let allLessons = ContentService.shared.loadLessons()
        currentLesson = allLessons.first { $0.id == id }
        isCompleted = isLessonCompleted(id)
    }

    func completeLesson() {
        guard let lesson = currentLesson else { return }
        ProgressService.shared.markLessonComplete(id: lesson.id, xpReward: lesson.xpReward)
        isCompleted = true
    }

    func getLessonsForTrack(_ trackId: String) -> [Lesson] {
        lessonsByTrack[trackId] ?? []
    }

    func isLessonCompleted(_ id: String) -> Bool {
        ProgressService.shared.getProgress().completedLessons.contains(id)
    }
}
