import SwiftUI

struct QuizActiveView: View {
    let categoryKey: String
    let categoryName: String

    @State private var viewModel = QuizViewModel()
    @State private var selectedAnswer: Int? = nil
    @State private var hasAnswered = false
    @State private var showResults = false

    var body: some View {
        Group {
            if showResults {
                QuizResultsView(
                    correctCount: viewModel.correctCount,
                    totalCount: viewModel.answers.count,
                    categoryName: categoryName,
                    score: viewModel.score,
                    onRetry: {
                        viewModel.startQuiz(key: categoryKey)
                        selectedAnswer = nil
                        hasAnswered = false
                        showResults = false
                    }
                )
            } else if let question = viewModel.currentQuestion {
                VStack(spacing: 0) {
                    progressSection
                    questionContent(question)
                }
            } else {
                VStack(spacing: 12) {
                    ProgressView()
                    Text("Loading quiz...")
                        .foregroundColor(.theme.textMuted)
                }
                .frame(maxWidth: .infinity, maxHeight: .infinity)
            }
        }
        .background(Color.theme.bgPrimary)
        .navigationTitle(categoryName)
        .navigationBarTitleDisplayMode(.inline)
        .task {
            viewModel.loadCategories()
            viewModel.startQuiz(key: categoryKey)
        }
    }

    private var progressSection: some View {
        VStack(spacing: 8) {
            ProgressView(value: viewModel.progressPercent)
                .tint(.theme.blue)

            HStack {
                Text("Question \(viewModel.currentQuestionIndex + 1) of \(viewModel.currentQuiz?.quiz.questions.count ?? 0)")
                    .font(.system(size: 12))
                    .foregroundColor(.theme.textMuted)
                Spacer()
                Text("\(viewModel.correctCount) correct")
                    .font(.system(size: 12, design: .monospaced))
                    .foregroundColor(.theme.green)
            }
        }
        .padding(.horizontal, 16)
        .padding(.vertical, 12)
    }

    private func questionContent(_ question: Question) -> some View {
        ScrollView {
            VStack(spacing: 20) {
                Text(questionText(question))
                    .font(.system(size: 16, weight: .medium))
                    .foregroundColor(.theme.textPrimary)
                    .multilineTextAlignment(.leading)
                    .frame(maxWidth: .infinity, alignment: .leading)

                questionView(question)

                if hasAnswered {
                    explanationSection(question)
                    nextButton
                }
            }
            .padding(.horizontal, 16)
            .padding(.vertical, 12)
        }
    }

    @ViewBuilder
    private func questionView(_ question: Question) -> some View {
        switch question {
        case .multipleChoice(let q):
            MultipleChoiceView(
                options: q.options,
                correctIndex: q.correct,
                selectedAnswer: $selectedAnswer,
                hasAnswered: $hasAnswered,
                onAnswer: { isCorrect in handleAnswer(isCorrect: isCorrect, question: question) }
            )
        case .trueFalse(let q):
            TrueFalseView(
                correctAnswer: q.correct,
                selectedAnswer: $selectedAnswer,
                hasAnswered: $hasAnswered,
                onAnswer: { isCorrect in handleAnswer(isCorrect: isCorrect, question: question) }
            )
        case .calculate(let q):
            CalculateView(
                correctAnswer: q.answer,
                tolerance: q.tolerance,
                hasAnswered: $hasAnswered,
                onAnswer: { isCorrect in handleAnswer(isCorrect: isCorrect, question: question) }
            )
        }
    }

    private func explanationSection(_ question: Question) -> some View {
        HStack(spacing: 0) {
            Rectangle()
                .fill(hasAnswered && isLastAnswerCorrect ? Color.theme.green : Color.theme.red)
                .frame(width: 4)

            VStack(alignment: .leading, spacing: 6) {
                Text(isLastAnswerCorrect ? "Correct!" : "Incorrect")
                    .font(.system(size: 14, weight: .semibold))
                    .foregroundColor(isLastAnswerCorrect ? .theme.green : .theme.red)

                Text(questionExplanation(question))
                    .font(.system(size: 14))
                    .foregroundColor(.theme.textSecondary)
                    .lineSpacing(2)
            }
            .padding(12)
        }
        .background(Color.theme.bgCard)
        .cornerRadius(8)
        .overlay(
            RoundedRectangle(cornerRadius: 8)
                .stroke(Color.theme.border, lineWidth: 1)
        )
    }

    private var isLastAnswerCorrect: Bool {
        viewModel.answers.last ?? false
    }

    private var nextButton: some View {
        let totalQuestions = viewModel.currentQuiz?.quiz.questions.count ?? 0
        let isLast = viewModel.currentQuestionIndex >= totalQuestions - 1

        return Button {
            if isLast {
                showResults = true
            } else {
                viewModel.nextQuestion()
                selectedAnswer = nil
                hasAnswered = false
            }
        } label: {
            Text(isLast ? "See Results" : "Next Question")
                .font(.system(size: 15, weight: .semibold))
                .foregroundColor(.white)
                .frame(maxWidth: .infinity)
                .padding(.vertical, 14)
                .background(Color.theme.blue)
                .cornerRadius(10)
        }
    }

    private func handleAnswer(isCorrect: Bool, question: Question) {
        switch question {
        case .multipleChoice:
            if let selected = selectedAnswer {
                viewModel.selectAnswer(selected)
            }
        case .trueFalse:
            if let selected = selectedAnswer {
                viewModel.selectTrueFalse(selected == 0)
            }
        case .calculate:
            // Already handled via CalculateView's onAnswer
            viewModel.answers.append(isCorrect)
        }
    }

    // MARK: - Question Helpers

    private func questionText(_ question: Question) -> String {
        switch question {
        case .multipleChoice(let q): return q.question
        case .trueFalse(let q): return q.question
        case .calculate(let q): return q.question
        }
    }

    private func questionExplanation(_ question: Question) -> String {
        switch question {
        case .multipleChoice(let q): return q.explanation
        case .trueFalse(let q): return q.explanation
        case .calculate(let q): return q.explanation
        }
    }
}

#Preview {
    NavigationStack {
        QuizActiveView(categoryKey: "fundamentals", categoryName: "Market Fundamentals")
    }
    .preferredColorScheme(.dark)
}
