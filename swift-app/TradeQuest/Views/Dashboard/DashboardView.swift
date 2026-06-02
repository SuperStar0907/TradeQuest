import SwiftUI

struct DashboardView: View {
    @State private var viewModel = DashboardViewModel()

    private let columns = [
        GridItem(.flexible(), spacing: 12),
        GridItem(.flexible(), spacing: 12)
    ]

    var body: some View {
        ScrollView {
            VStack(spacing: 24) {
                statsSection
                learningTracksSection
                recentActivitySection
                dailyTipSection
            }
            .padding(.horizontal, 16)
            .padding(.vertical, 12)
        }
        .background(Color.theme.bgPrimary)
        .navigationTitle("Dashboard")
        .task {
            await viewModel.load()
        }
    }

    // MARK: - Stats

    private var statsSection: some View {
        LazyVGrid(columns: columns, spacing: 12) {
            StatCard(
                value: "\(viewModel.completedCount)/\(viewModel.totalLessons)",
                label: "Lessons",
                valueColor: .theme.blue
            )
            StatCard(
                value: viewModel.quizAverage.map { "\($0)%" } ?? "--",
                label: "Quiz Avg",
                valueColor: .theme.green
            )
            StatCard(
                value: "\(viewModel.totalXP)",
                label: "Total XP",
                valueColor: .theme.purple
            )
            StatCard(
                value: "\(viewModel.streak)",
                label: "Day Streak",
                valueColor: .theme.orange
            )
        }
    }

    // MARK: - Learning Tracks

    private var learningTracksSection: some View {
        VStack(alignment: .leading, spacing: 12) {
            Text("Learning Tracks")
                .font(.system(size: 18, weight: .semibold))
                .foregroundColor(.theme.textPrimary)

            if viewModel.tracks.isEmpty {
                Text("Loading tracks...")
                    .font(.system(size: 13))
                    .foregroundColor(.theme.textMuted)
                    .padding(.vertical, 20)
                    .frame(maxWidth: .infinity)
            } else {
                ForEach(viewModel.tracks) { track in
                    let trackLessons = viewModel.lessons.filter { $0.track == track.id }
                    let completed = trackLessons.filter { viewModel.progress.completedLessons.contains($0.id) }.count

                    TrackCardView(
                        icon: iconForTrack(track.id),
                        name: track.name,
                        completedCount: completed,
                        totalCount: trackLessons.count,
                        lessonTitles: trackLessons.prefix(5).map { $0.title }
                    )
                }
            }
        }
    }

    // MARK: - Recent Activity

    private var recentActivitySection: some View {
        VStack(alignment: .leading, spacing: 12) {
            Text("Recent Activity")
                .font(.system(size: 18, weight: .semibold))
                .foregroundColor(.theme.textPrimary)

            if viewModel.recentActivities.isEmpty {
                HStack(spacing: 12) {
                    Image(systemName: "tray")
                        .foregroundColor(.theme.textMuted)
                    Text("No activity yet. Start a lesson!")
                        .font(.system(size: 13))
                        .foregroundColor(.theme.textMuted)
                }
                .padding(14)
                .frame(maxWidth: .infinity, alignment: .leading)
                .background(Color.theme.bgCard)
                .cornerRadius(12)
                .overlay(
                    RoundedRectangle(cornerRadius: 12)
                        .stroke(Color.theme.border, lineWidth: 1)
                )
            } else {
                VStack(spacing: 0) {
                    ForEach(Array(viewModel.recentActivities.enumerated()), id: \.offset) { index, activity in
                        activityRow(
                            icon: iconForActivity(activity.text),
                            iconColor: colorForActivity(activity.text),
                            text: activity.text,
                            time: activityTimeAgo(activity.time)
                        )
                        if index < viewModel.recentActivities.count - 1 {
                            Divider().background(Color.theme.border)
                        }
                    }
                }
                .background(Color.theme.bgCard)
                .cornerRadius(12)
                .overlay(
                    RoundedRectangle(cornerRadius: 12)
                        .stroke(Color.theme.border, lineWidth: 1)
                )
            }
        }
    }

    private func activityRow(icon: String, iconColor: Color, text: String, time: String) -> some View {
        HStack(spacing: 12) {
            Image(systemName: icon)
                .foregroundColor(iconColor)
                .font(.system(size: 16))

            Text(text)
                .font(.system(size: 14))
                .foregroundColor(.theme.textPrimary)
                .lineLimit(2)

            Spacer()

            Text(time)
                .font(.system(size: 12))
                .foregroundColor(.theme.textMuted)
        }
        .padding(.horizontal, 14)
        .padding(.vertical, 12)
    }

    // MARK: - Daily Tip

    private var dailyTipSection: some View {
        HStack(spacing: 0) {
            Rectangle()
                .fill(Color.theme.orange)
                .frame(width: 4)

            VStack(alignment: .leading, spacing: 6) {
                Text(viewModel.dailyTip.title)
                    .font(.system(size: 14, weight: .semibold))
                    .foregroundColor(.theme.orange)

                Text(viewModel.dailyTip.content)
                    .font(.system(size: 13))
                    .foregroundColor(.theme.textSecondary)
                    .lineSpacing(2)
            }
            .padding(14)
        }
        .background(Color.theme.bgCard)
        .cornerRadius(12)
        .overlay(
            RoundedRectangle(cornerRadius: 12)
                .stroke(Color.theme.border, lineWidth: 1)
        )
    }

    // MARK: - Helpers

    private func activityTimeAgo(_ timeString: String) -> String {
        if let ms = Double(timeString) {
            return Date(timeIntervalSince1970: ms / 1000.0).timeAgo()
        }
        return timeString
    }

    private func iconForTrack(_ trackId: String) -> String {
        switch trackId {
        case "stock-markets": return "chart.bar.fill"
        case "technical-analysis": return "chart.line.uptrend.xyaxis"
        case "options": return "target"
        case "risk-management": return "shield.fill"
        default: return "book.fill"
        }
    }

    private func iconForActivity(_ text: String) -> String {
        if text.contains("Completed") { return "checkmark.circle.fill" }
        if text.contains("Scored") { return "star.fill" }
        if text.contains("Bought") || text.contains("Sold") { return "arrow.left.arrow.right" }
        return "flame.fill"
    }

    private func colorForActivity(_ text: String) -> Color {
        if text.contains("Completed") { return .theme.green }
        if text.contains("Scored") { return .theme.orange }
        if text.contains("Bought") { return .theme.green }
        if text.contains("Sold") { return .theme.red }
        return .theme.blue
    }
}

#Preview {
    NavigationStack {
        DashboardView()
    }
    .preferredColorScheme(.dark)
}
