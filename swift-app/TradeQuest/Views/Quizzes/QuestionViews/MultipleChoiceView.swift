import SwiftUI

struct MultipleChoiceView: View {
    let options: [String]
    let correctIndex: Int
    @Binding var selectedAnswer: Int?
    @Binding var hasAnswered: Bool
    let onAnswer: (Bool) -> Void

    private let labels = ["A", "B", "C", "D"]

    var body: some View {
        VStack(spacing: 10) {
            ForEach(Array(options.enumerated()), id: \.offset) { index, option in
                Button {
                    guard !hasAnswered else { return }
                    selectedAnswer = index
                    hasAnswered = true
                    onAnswer(index == correctIndex)
                } label: {
                    HStack(spacing: 12) {
                        Text(labels[index])
                            .font(.system(size: 14, weight: .bold, design: .monospaced))
                            .foregroundColor(labelColor(for: index))
                            .frame(width: 28, height: 28)
                            .background(labelBackground(for: index))
                            .cornerRadius(6)

                        Text(option)
                            .font(.system(size: 14))
                            .foregroundColor(.theme.textPrimary)
                            .multilineTextAlignment(.leading)

                        Spacer()

                        if hasAnswered && index == correctIndex {
                            Image(systemName: "checkmark.circle.fill")
                                .foregroundColor(.theme.green)
                        } else if hasAnswered && index == selectedAnswer && index != correctIndex {
                            Image(systemName: "xmark.circle.fill")
                                .foregroundColor(.theme.red)
                        }
                    }
                    .padding(12)
                    .background(optionBackground(for: index))
                    .cornerRadius(10)
                    .overlay(
                        RoundedRectangle(cornerRadius: 10)
                            .stroke(optionBorder(for: index), lineWidth: 1)
                    )
                }
                .disabled(hasAnswered)
            }
        }
    }

    private func labelColor(for index: Int) -> Color {
        if !hasAnswered { return .theme.textPrimary }
        if index == correctIndex { return .white }
        if index == selectedAnswer { return .white }
        return .theme.textMuted
    }

    private func labelBackground(for index: Int) -> Color {
        if !hasAnswered { return Color.theme.bgTertiary }
        if index == correctIndex { return Color.theme.green }
        if index == selectedAnswer { return Color.theme.red }
        return Color.theme.bgTertiary
    }

    private func optionBackground(for index: Int) -> Color {
        if !hasAnswered { return Color.theme.bgCard }
        if index == correctIndex { return Color.theme.green.opacity(0.1) }
        if index == selectedAnswer { return Color.theme.red.opacity(0.1) }
        return Color.theme.bgCard
    }

    private func optionBorder(for index: Int) -> Color {
        if !hasAnswered { return Color.theme.border }
        if index == correctIndex { return Color.theme.green.opacity(0.5) }
        if index == selectedAnswer && index != correctIndex { return Color.theme.red.opacity(0.5) }
        return Color.theme.border
    }
}

#Preview {
    struct PreviewWrapper: View {
        @State var selected: Int? = nil
        @State var answered = false

        var body: some View {
            MultipleChoiceView(
                options: ["Bearish reversal", "Bullish reversal", "Continuation", "Indecision"],
                correctIndex: 1,
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
