import SwiftUI

enum ResourceItem {
    case book(Book)
    case course(Course)

    var title: String {
        switch self {
        case .book(let book): return book.title
        case .course(let course): return course.name
        }
    }

    var author: String {
        switch self {
        case .book(let book): return book.author
        case .course(let course): return course.provider
        }
    }

    var category: String {
        switch self {
        case .book(let book): return book.category
        case .course(let course): return course.category
        }
    }

    var difficulty: String {
        switch self {
        case .book(let book): return book.difficulty
        case .course(let course): return course.difficulty
        }
    }

    var description: String {
        switch self {
        case .book(let book): return book.description
        case .course(let course): return course.description
        }
    }
}

struct ResourceDetailView: View {
    let item: ResourceItem

    @Environment(\.dismiss) private var dismiss
    @State private var bookSummary: BookSummary?

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 20) {
                headerSection
                summarySection
                keyTakeawaysSection
                mindMapSection
            }
            .padding(.horizontal, 16)
            .padding(.vertical, 12)
        }
        .background(Color.theme.bgPrimary)
        .navigationTitle(item.title)
        .navigationBarTitleDisplayMode(.inline)
        .onAppear {
            loadSummaryData()
        }
    }

    private func loadSummaryData() {
        let summaries = ContentService.shared.loadSummaries()
        let key = item.title
            .lowercased()
            .replacingOccurrences(of: " ", with: "_")
            .replacingOccurrences(of: "'", with: "")
            .replacingOccurrences(of: ":", with: "")
            .replacingOccurrences(of: "-", with: "_")
            .replacingOccurrences(of: ",", with: "")
        bookSummary = summaries[key]
    }

    private var headerSection: some View {
        VStack(alignment: .leading, spacing: 8) {
            HStack(spacing: 8) {
                Text(item.category)
                    .font(.system(size: 11, weight: .medium))
                    .foregroundColor(.theme.blue)
                    .padding(.horizontal, 8)
                    .padding(.vertical, 3)
                    .background(Color.theme.blue.opacity(0.15))
                    .cornerRadius(6)

                DifficultyBadge(difficulty: Difficulty(rawValue: item.difficulty) ?? .beginner)
            }

            Text(item.title)
                .font(.system(size: 20, weight: .bold))
                .foregroundColor(.theme.textPrimary)

            Text("by \(item.author)")
                .font(.system(size: 14))
                .foregroundColor(.theme.textSecondary)

            Text(item.description)
                .font(.system(size: 14))
                .foregroundColor(.theme.textSecondary)
                .padding(.top, 2)
        }
    }

    private var summarySection: some View {
        let summaryText = bookSummary?.summary ?? item.description

        return HStack(spacing: 0) {
            Rectangle()
                .fill(Color.theme.blue)
                .frame(width: 4)

            VStack(alignment: .leading, spacing: 6) {
                Text("Summary")
                    .font(.system(size: 14, weight: .semibold))
                    .foregroundColor(.theme.blue)

                Text(summaryText)
                    .font(.system(size: 14))
                    .foregroundColor(.theme.textSecondary)
                    .lineSpacing(3)
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

    private var keyTakeawaysSection: some View {
        let takeaways = bookSummary?.keyTakeaways ?? []

        return Group {
            if !takeaways.isEmpty {
                VStack(alignment: .leading, spacing: 12) {
                    Text("Key Takeaways")
                        .font(.system(size: 16, weight: .semibold))
                        .foregroundColor(.theme.textPrimary)

                    VStack(alignment: .leading, spacing: 10) {
                        ForEach(Array(takeaways.enumerated()), id: \.offset) { index, takeaway in
                            HStack(alignment: .top, spacing: 10) {
                                Text("\(index + 1).")
                                    .font(.system(size: 14, weight: .bold, design: .monospaced))
                                    .foregroundColor(.theme.blue)
                                    .frame(width: 24)

                                Text(takeaway)
                                    .font(.system(size: 14))
                                    .foregroundColor(.theme.textSecondary)
                            }
                        }
                    }
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

    @ViewBuilder
    private var mindMapSection: some View {
        if let mindmap = bookSummary?.mindmap {
            VStack(alignment: .leading, spacing: 10) {
                Text("Mind Map")
                    .font(.system(size: 16, weight: .semibold))
                    .foregroundColor(.theme.textPrimary)

                MindMapView(mindMap: mindmap)
            }
            .padding(14)
            .background(Color.theme.bgCard)
            .cornerRadius(12)
            .overlay(
                RoundedRectangle(cornerRadius: 12)
                    .stroke(Color.theme.border, lineWidth: 1)
            )
        } else {
            VStack(alignment: .leading, spacing: 10) {
                Text("Mind Map")
                    .font(.system(size: 16, weight: .semibold))
                    .foregroundColor(.theme.textPrimary)

                RoundedRectangle(cornerRadius: 8)
                    .fill(Color.theme.bgTertiary)
                    .frame(height: 120)
                    .overlay(
                        VStack(spacing: 8) {
                            Image(systemName: "brain.head.profile")
                                .font(.system(size: 28))
                                .foregroundColor(.theme.textMuted)
                            Text("No mind map available")
                                .font(.system(size: 13))
                                .foregroundColor(.theme.textMuted)
                        }
                    )
                    .overlay(
                        RoundedRectangle(cornerRadius: 8)
                            .stroke(Color.theme.border, lineWidth: 1)
                    )
            }
        }
    }
}

#Preview {
    NavigationStack {
        ResourceDetailView(item: .book(Book(
            title: "A Random Walk Down Wall Street",
            author: "Burton Malkiel",
            difficulty: "beginner",
            category: "Beginner",
            description: "Classic guide to investing.",
            why: "Essential reading",
            rank: 1,
            featured: true
        )))
    }
    .preferredColorScheme(.dark)
}
