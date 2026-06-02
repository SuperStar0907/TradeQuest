import SwiftUI

struct LessonListView: View {
    @State private var viewModel = LessonViewModel()
    @State private var tracks: [Track] = []

    private let trackIcons: [String: String] = [
        "stock-markets": "building.columns.fill",
        "technical-analysis": "chart.line.uptrend.xyaxis",
        "options": "arrow.triangle.branch",
        "risk-management": "shield.fill"
    ]

    var body: some View {
        ScrollView {
            VStack(spacing: 12) {
                if tracks.isEmpty {
                    ContentUnavailableView(
                        "No Lessons Available",
                        systemImage: "book.closed",
                        description: Text("Lesson data could not be loaded.")
                    )
                } else {
                    ForEach(tracks) { track in
                        let lessons = viewModel.getLessonsForTrack(track.id)
                        if !lessons.isEmpty {
                            DisclosureGroup {
                                VStack(spacing: 0) {
                                    ForEach(lessons) { lesson in
                                        NavigationLink(destination: LessonDetailView(lesson: lesson)) {
                                            lessonRow(lesson)
                                        }
                                        if lesson.id != lessons.last?.id {
                                            Divider()
                                                .background(Color.theme.border)
                                        }
                                    }
                                }
                                .padding(.top, 8)
                            } label: {
                                HStack(spacing: 10) {
                                    Image(systemName: trackIcons[track.id] ?? "book.fill")
                                        .font(.system(size: 16))
                                        .foregroundColor(.theme.blue)

                                    Text(track.name)
                                        .font(.system(size: 15, weight: .semibold))
                                        .foregroundColor(.theme.textPrimary)

                                    Spacer()

                                    Text("\(lessons.filter { viewModel.isLessonCompleted($0.id) }.count)/\(lessons.count)")
                                        .font(.system(size: 12, design: .monospaced))
                                        .foregroundColor(.theme.textMuted)
                                }
                            }
                            .tint(.theme.textSecondary)
                            .padding(14)
                            .background(Color.theme.bgCard)
                            .cornerRadius(12)
                            .overlay(
                                RoundedRectangle(cornerRadius: 12)
                                    .stroke(Color.theme.border, lineWidth: 1)
                            )
                        }
                    }
                }
            }
            .padding(.horizontal, 16)
            .padding(.vertical, 12)
        }
        .background(Color.theme.bgPrimary)
        .navigationTitle("Lessons")
        .onAppear {
            viewModel.loadLessons()
            tracks = ContentService.shared.loadTracks()
        }
    }

    private func lessonRow(_ lesson: Lesson) -> some View {
        HStack(spacing: 12) {
            Circle()
                .fill(viewModel.isLessonCompleted(lesson.id) ? Color.theme.green : Color.theme.textMuted.opacity(0.3))
                .frame(width: 10, height: 10)

            VStack(alignment: .leading, spacing: 3) {
                Text(lesson.title)
                    .font(.system(size: 14, weight: .medium))
                    .foregroundColor(.theme.textPrimary)
                    .multilineTextAlignment(.leading)

                HStack(spacing: 8) {
                    DifficultyBadge(difficulty: Difficulty(rawValue: lesson.difficulty) ?? .beginner)

                    Text("\(lesson.estimatedMinutes) min")
                        .font(.system(size: 11))
                        .foregroundColor(.theme.textMuted)
                }
            }

            Spacer()

            Image(systemName: "chevron.right")
                .font(.system(size: 12))
                .foregroundColor(.theme.textMuted)
        }
        .padding(.vertical, 10)
        .padding(.horizontal, 4)
    }
}

#Preview {
    NavigationStack {
        LessonListView()
    }
    .preferredColorScheme(.dark)
}
