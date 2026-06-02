import SwiftUI

struct QuizResultsView: View {
    let correctCount: Int
    let totalCount: Int
    let categoryName: String
    var score: Int = 0
    var onRetry: (() -> Void)? = nil

    @Environment(\.dismiss) private var dismiss

    private var percentage: Int {
        guard totalCount > 0 else { return 0 }
        return Int((Double(correctCount) / Double(totalCount)) * 100)
    }

    private var scoreColor: Color {
        if percentage >= 80 { return .theme.green }
        if percentage >= 60 { return .theme.orange }
        return .theme.red
    }

    private var xpEarned: Int {
        correctCount * 25
    }

    var body: some View {
        VStack(spacing: 28) {
            Spacer()

            scoreSection
            statsSection
            actionButtons

            Spacer()
        }
        .padding(.horizontal, 24)
        .background(Color.theme.bgPrimary)
        .navigationBarBackButtonHidden(true)
    }

    private var scoreSection: some View {
        VStack(spacing: 12) {
            Text("\(percentage)%")
                .font(.system(size: 64, weight: .bold, design: .monospaced))
                .foregroundColor(scoreColor)

            Text(scoreMessage)
                .font(.system(size: 18, weight: .medium))
                .foregroundColor(.theme.textPrimary)

            Text(categoryName)
                .font(.system(size: 14))
                .foregroundColor(.theme.textMuted)
        }
    }

    private var scoreMessage: String {
        if percentage >= 90 { return "Excellent!" }
        if percentage >= 80 { return "Great Job!" }
        if percentage >= 60 { return "Good Effort" }
        if percentage >= 40 { return "Keep Practicing" }
        return "Need More Study"
    }

    private var statsSection: some View {
        HStack(spacing: 16) {
            statItem(value: "\(correctCount)/\(totalCount)", label: "Correct", color: .theme.green)
            statItem(value: "+\(xpEarned)", label: "XP Earned", color: .theme.purple)
            statItem(value: ratingChange, label: "Rating", color: .theme.blue)
        }
        .padding(16)
        .background(Color.theme.bgCard)
        .cornerRadius(12)
        .overlay(
            RoundedRectangle(cornerRadius: 12)
                .stroke(Color.theme.border, lineWidth: 1)
        )
    }

    private var ratingChange: String {
        let change = percentage >= 60 ? "+\(percentage / 10)" : "-5"
        return change
    }

    private func statItem(value: String, label: String, color: Color) -> some View {
        VStack(spacing: 4) {
            Text(value)
                .font(.system(size: 18, weight: .bold, design: .monospaced))
                .foregroundColor(color)
            Text(label)
                .font(.system(size: 12))
                .foregroundColor(.theme.textMuted)
        }
        .frame(maxWidth: .infinity)
    }

    private var actionButtons: some View {
        VStack(spacing: 12) {
            Button {
                if let onRetry {
                    onRetry()
                } else {
                    dismiss()
                }
            } label: {
                Text("Try Again")
                    .font(.system(size: 15, weight: .semibold))
                    .foregroundColor(.white)
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 14)
                    .background(Color.theme.blue)
                    .cornerRadius(10)
            }

            Button {
                dismiss()
            } label: {
                Text("Back to Quizzes")
                    .font(.system(size: 15, weight: .medium))
                    .foregroundColor(.theme.textSecondary)
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 14)
                    .background(Color.theme.bgCard)
                    .cornerRadius(10)
                    .overlay(
                        RoundedRectangle(cornerRadius: 10)
                            .stroke(Color.theme.border, lineWidth: 1)
                    )
            }
        }
    }
}

#Preview {
    NavigationStack {
        QuizResultsView(correctCount: 7, totalCount: 10, categoryName: "Technical Analysis")
    }
    .preferredColorScheme(.dark)
}
