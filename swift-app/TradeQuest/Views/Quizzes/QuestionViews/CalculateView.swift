import SwiftUI

struct CalculateView: View {
    let correctAnswer: Double
    let tolerance: Double
    @Binding var hasAnswered: Bool
    let onAnswer: (Bool) -> Void

    @State private var userInput = ""
    @State private var isCorrect = false

    var body: some View {
        VStack(spacing: 14) {
            HStack(spacing: 12) {
                TextField("Enter your answer", text: $userInput)
                    .font(.system(size: 16, design: .monospaced))
                    .foregroundColor(.theme.textPrimary)
                    .keyboardType(.decimalPad)
                    .padding(12)
                    .background(Color.theme.bgCard)
                    .cornerRadius(8)
                    .overlay(
                        RoundedRectangle(cornerRadius: 8)
                            .stroke(inputBorderColor, lineWidth: 1)
                    )
                    .disabled(hasAnswered)

                Button {
                    submitAnswer()
                } label: {
                    Text("Submit")
                        .font(.system(size: 14, weight: .semibold))
                        .foregroundColor(.white)
                        .padding(.horizontal, 16)
                        .padding(.vertical, 12)
                        .background(hasAnswered ? Color.theme.textMuted : Color.theme.blue)
                        .cornerRadius(8)
                }
                .disabled(hasAnswered || userInput.isEmpty)
            }

            if hasAnswered {
                HStack(spacing: 8) {
                    Image(systemName: isCorrect ? "checkmark.circle.fill" : "xmark.circle.fill")
                        .foregroundColor(isCorrect ? .theme.green : .theme.red)

                    Text(isCorrect ? "Correct!" : "Incorrect. The answer is \(String(format: "%.2f", correctAnswer))")
                        .font(.system(size: 14))
                        .foregroundColor(isCorrect ? .theme.green : .theme.red)

                    Spacer()
                }
            }
        }
    }

    private var inputBorderColor: Color {
        if !hasAnswered { return Color.theme.border }
        return isCorrect ? Color.theme.green : Color.theme.red
    }

    private func submitAnswer() {
        guard let value = Double(userInput) else { return }
        isCorrect = abs(value - correctAnswer) <= tolerance * max(1, abs(correctAnswer))
        hasAnswered = true
        onAnswer(isCorrect)
    }
}

#Preview {
    struct PreviewWrapper: View {
        @State var answered = false

        var body: some View {
            CalculateView(
                correctAnswer: 10.0,
                tolerance: 0.01,
                hasAnswered: $answered,
                onAnswer: { _ in }
            )
            .padding()
            .background(Color.theme.bgPrimary)
        }
    }

    return PreviewWrapper()
}
