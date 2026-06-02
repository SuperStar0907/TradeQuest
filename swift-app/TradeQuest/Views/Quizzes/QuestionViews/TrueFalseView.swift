import SwiftUI

struct TrueFalseView: View {
    let correctAnswer: Bool
    @Binding var selectedAnswer: Int?
    @Binding var hasAnswered: Bool
    let onAnswer: (Bool) -> Void

    var body: some View {
        HStack(spacing: 12) {
            answerButton(label: "True", index: 0)
            answerButton(label: "False", index: 1)
        }
    }

    private func answerButton(label: String, index: Int) -> some View {
        let isCorrectButton = (index == 0 && correctAnswer) || (index == 1 && !correctAnswer)

        return Button {
            guard !hasAnswered else { return }
            selectedAnswer = index
            hasAnswered = true
            let userChoseTrue = index == 0
            onAnswer(userChoseTrue == correctAnswer)
        } label: {
            VStack(spacing: 8) {
                Image(systemName: index == 0 ? "checkmark.circle" : "xmark.circle")
                    .font(.system(size: 24))
                    .foregroundColor(buttonIconColor(index: index, isCorrect: isCorrectButton))

                Text(label)
                    .font(.system(size: 15, weight: .semibold))
                    .foregroundColor(.theme.textPrimary)
            }
            .frame(maxWidth: .infinity)
            .padding(.vertical, 24)
            .background(buttonBackground(index: index, isCorrect: isCorrectButton))
            .cornerRadius(12)
            .overlay(
                RoundedRectangle(cornerRadius: 12)
                    .stroke(buttonBorder(index: index, isCorrect: isCorrectButton), lineWidth: 1)
            )
        }
        .disabled(hasAnswered)
    }

    private func buttonIconColor(index: Int, isCorrect: Bool) -> Color {
        if !hasAnswered { return .theme.textSecondary }
        if isCorrect { return .theme.green }
        if index == selectedAnswer { return .theme.red }
        return .theme.textMuted
    }

    private func buttonBackground(index: Int, isCorrect: Bool) -> Color {
        if !hasAnswered { return Color.theme.bgCard }
        if isCorrect { return Color.theme.green.opacity(0.1) }
        if index == selectedAnswer { return Color.theme.red.opacity(0.1) }
        return Color.theme.bgCard
    }

    private func buttonBorder(index: Int, isCorrect: Bool) -> Color {
        if !hasAnswered { return Color.theme.border }
        if isCorrect { return Color.theme.green.opacity(0.5) }
        if index == selectedAnswer && !isCorrect { return Color.theme.red.opacity(0.5) }
        return Color.theme.border
    }
}

#Preview {
    struct PreviewWrapper: View {
        @State var selected: Int? = nil
        @State var answered = false

        var body: some View {
            TrueFalseView(
                correctAnswer: true,
                selectedAnswer: $selected,
                hasAnswered: $answered,
                onAnswer: { _ in }
            )
            .padding()
            .background(Color.theme.bgPrimary)
        }
    }

    return PreviewWrapper()
}
