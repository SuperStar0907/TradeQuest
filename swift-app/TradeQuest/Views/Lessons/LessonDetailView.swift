import SwiftUI

struct LessonDetailView: View {
    let lesson: Lesson
    @State private var isCompleted = false

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 20) {
                headerSection

                ForEach(Array(lesson.sections.enumerated()), id: \.offset) { _, section in
                    sectionView(for: section)
                }

                completeButton
            }
            .padding(.horizontal, 16)
            .padding(.vertical, 12)
        }
        .background(Color.theme.bgPrimary)
        .navigationTitle(lesson.title)
        .navigationBarTitleDisplayMode(.inline)
    }

    private var headerSection: some View {
        VStack(alignment: .leading, spacing: 8) {
            HStack(spacing: 12) {
                DifficultyBadge(difficulty: Difficulty(rawValue: lesson.difficulty) ?? .beginner)

                Text("\(lesson.estimatedMinutes) min")
                    .font(.system(size: 12))
                    .foregroundColor(.theme.textMuted)

                Spacer()

                XPBadge(xp: lesson.xpReward)
            }

            Text(lesson.category)
                .font(.system(size: 13))
                .foregroundColor(.theme.textSecondary)
        }
        .padding(14)
        .background(Color.theme.bgCard)
        .cornerRadius(12)
        .overlay(
            RoundedRectangle(cornerRadius: 12)
                .stroke(Color.theme.border, lineWidth: 1)
        )
    }

    @ViewBuilder
    private func sectionView(for section: LessonSection) -> some View {
        switch section {
        case .text(let content):
            TextSectionView(content: content.content)
        case .keyConcept(let content):
            KeyConceptView(title: content.title, content: content.content)
        case .comparisonTable(let content):
            ComparisonTableView(headers: content.headers, rows: content.rows)
        case .interactiveChart(let content):
            InteractiveChartView(config: content.config)
        case .payoffDiagram(let content):
            PayoffDiagramView(config: content.config)
        }
    }

    private var completeButton: some View {
        Button {
            isCompleted = true
        } label: {
            HStack {
                Image(systemName: isCompleted ? "checkmark.circle.fill" : "checkmark.circle")
                Text(isCompleted ? "Completed" : "Complete Lesson")
            }
            .font(.system(size: 16, weight: .semibold))
            .foregroundColor(isCompleted ? .theme.green : .white)
            .frame(maxWidth: .infinity)
            .padding(.vertical, 14)
            .background(isCompleted ? Color.theme.green.opacity(0.15) : Color.theme.blue)
            .cornerRadius(12)
        }
        .disabled(isCompleted)
        .padding(.top, 8)
    }
}

#Preview {
    NavigationStack {
        LessonDetailView(lesson: Lesson(
            id: "preview",
            title: "Introduction to Candlestick Patterns",
            track: "technical",
            category: "Technical Analysis",
            difficulty: "beginner",
            order: 1,
            estimatedMinutes: 15,
            xpReward: 100,
            sections: [
                .text(TextContent(content: "<p>Candlestick patterns are one of the most powerful tools in technical analysis.</p>")),
                .keyConcept(KeyConceptContent(title: "Doji Pattern", content: "A doji forms when the open and close are virtually equal, indicating indecision."))
            ]
        ))
    }
    .preferredColorScheme(.dark)
}
