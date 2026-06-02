import SwiftUI

struct TrackCardView: View {
    let icon: String
    let name: String
    let completedCount: Int
    let totalCount: Int
    let lessonTitles: [String]

    private var progress: Double {
        guard totalCount > 0 else { return 0 }
        return Double(completedCount) / Double(totalCount)
    }

    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack(spacing: 10) {
                Image(systemName: icon)
                    .font(.system(size: 18))
                    .foregroundColor(.theme.blue)

                Text(name)
                    .font(.system(size: 16, weight: .semibold))
                    .foregroundColor(.theme.textPrimary)

                Spacer()

                Text("\(completedCount)/\(totalCount)")
                    .font(.system(size: 13, weight: .medium, design: .monospaced))
                    .foregroundColor(.theme.textSecondary)
            }

            ProgressView(value: progress)
                .tint(.theme.blue)

            VStack(alignment: .leading, spacing: 6) {
                ForEach(Array(lessonTitles.prefix(5).enumerated()), id: \.offset) { index, title in
                    HStack(spacing: 8) {
                        Circle()
                            .fill(index < completedCount ? Color.theme.green : Color.theme.textMuted)
                            .frame(width: 8, height: 8)

                        Text(title)
                            .font(.system(size: 13))
                            .foregroundColor(index < completedCount ? .theme.textSecondary : .theme.textPrimary)
                            .strikethrough(index < completedCount)
                    }
                }
            }
        }
        .padding(16)
        .background(Color.theme.bgCard)
        .cornerRadius(12)
        .overlay(
            RoundedRectangle(cornerRadius: 12)
                .stroke(Color.theme.border, lineWidth: 1)
        )
    }
}

#Preview {
    TrackCardView(
        icon: "chart.line.uptrend.xyaxis",
        name: "Technical Analysis",
        completedCount: 3,
        totalCount: 8,
        lessonTitles: ["Candlestick Patterns", "Support & Resistance", "Moving Averages", "RSI & MACD", "Volume Analysis"]
    )
    .padding()
    .background(Color.theme.bgPrimary)
}
