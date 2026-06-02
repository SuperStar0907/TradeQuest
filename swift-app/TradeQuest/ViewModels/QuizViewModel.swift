import SwiftUI
import Foundation

@Observable @MainActor
class QuizViewModel {
    var categories: [(key: String, value: QuizCategory)] = []
    var currentQuiz: (key: String, quiz: QuizCategory)?
    var currentQuestionIndex: Int = 0
    var answers: [Bool] = []
    var selectedAnswer: Int? = nil
    var isAnswered: Bool = false
    var showResults: Bool = false

    var currentQuestion: Question? {
        guard let quiz = currentQuiz else { return nil }
        guard currentQuestionIndex < quiz.quiz.questions.count else { return nil }
        return quiz.quiz.questions[currentQuestionIndex]
    }

    var progressPercent: Double {
        guard let quiz = currentQuiz else { return 0 }
        let total = quiz.quiz.questions.count
        guard total > 0 else { return 0 }
        return Double(currentQuestionIndex) / Double(total)
    }

    var score: Int {
        guard !answers.isEmpty else { return 0 }
        return Int((Double(correctCount) / Double(answers.count)) * 100)
    }

    var correctCount: Int {
        answers.filter { $0 }.count
    }

    func loadCategories() {
        let dict = ContentService.shared.loadQuizzes()
        categories = dict.map { (key: $0.key, value: $0.value) }.sorted { $0.key < $1.key }
    }

    func startQuiz(key: String) {
        guard let category = categories.first(where: { $0.key == key }) else { return }
        currentQuiz = (key: key, quiz: category.value)
        currentQuestionIndex = 0
        answers = []
        selectedAnswer = nil
        isAnswered = false
        showResults = false
    }

    func selectAnswer(_ index: Int) {
        guard !isAnswered else { return }
        guard let question = currentQuestion else { return }
        selectedAnswer = index
        isAnswered = true
        let isCorrect: Bool
        switch question {
        case .multipleChoice(let q): isCorrect = index == q.correct
        default: isCorrect = false
        }
        answers.append(isCorrect)
    }

    func selectTrueFalse(_ value: Bool) {
        guard !isAnswered else { return }
        guard let question = currentQuestion else { return }
        isAnswered = true
        let isCorrect: Bool
        switch question {
        case .trueFalse(let q): isCorrect = value == q.correct
        default: isCorrect = false
        }
        answers.append(isCorrect)
        selectedAnswer = value ? 0 : 1
    }

    func submitCalculation(_ value: Double) {
        guard !isAnswered else { return }
        guard let question = currentQuestion else { return }
        isAnswered = true
        let isCorrect: Bool
        switch question {
        case .calculate(let q):
            isCorrect = abs(value - q.answer) <= q.tolerance
        default: isCorrect = false
        }
        answers.append(isCorrect)
    }

    func nextQuestion() {
        guard let quiz = currentQuiz else { return }
        if currentQuestionIndex + 1 >= quiz.quiz.questions.count {
            showResults = true
            saveScore()
        } else {
            currentQuestionIndex += 1
            selectedAnswer = nil
            isAnswered = false
        }
    }

    func getBestScore(for key: String) -> Double? {
        ProgressService.shared.getProgress().quizScores[key]
    }

    private func saveScore() {
        guard let quiz = currentQuiz else { return }
        let percentage = Double(score)
        ProgressService.shared.recordQuizScore(category: quiz.key, percentage: percentage)
    }
}
