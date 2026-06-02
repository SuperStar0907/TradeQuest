import SwiftUI

struct QuizCategoriesView: View {
    @State private var viewModel = QuizViewModel()

    private let columns = [
        GridItem(.flexible(), spacing: 12),
        GridItem(.flexible(), spacing: 12)
    ]

    var body: some View {
        ScrollView {
            if viewModel.categories.isEmpty {
                VStack(spacing: 12) {
                    Image(systemName: "questionmark.circle")
                        .font(.system(size: 40))
                        .foregroundColor(.theme.textMuted)
                    Text("No quizzes available")
                        .font(.system(size: 15))
                        .foregroundColor(.theme.textMuted)
                }
                .frame(maxWidth: .infinity)
                .padding(.vertical, 60)
            } else {
                LazyVGrid(columns: columns, spacing: 12) {
                    ForEach(viewModel.categories, id: \.key) { item in
                        NavigationLink(destination: QuizActiveView(
                            categoryKey: item.key,
                            categoryName: item.value.name
                        )) {
                            quizCategoryCard(key: item.key, category: item.value)
                        }
                    }
                }
                .padding(.horizontal, 16)
                .padding(.vertical, 12)
            }
        }
        .background(Color.theme.bgPrimary)
        .navigationTitle("Quizzes")
        .task {
            viewModel.loadCategories()
        }
    }

    private func quizCategoryCard(key: String, category: QuizCategory) -> some View {
        let bestScore = viewModel.getBestScore(for: key)

        return VStack(spacing: 10) {
            Text(category.icon)
                .font(.system(size: 28))

            Text(category.name)
                .font(.system(size: 14, weight: .semibold))
                .foregroundColor(.theme.textPrimary)
                .multilineTextAlignment(.center)
                .lineLimit(2)

            Text("\(category.questions.count) questions")
                .font(.system(size: 12))
                .foregroundColor(.theme.textMuted)

            if let score = bestScore, score > 0 {
                Text("Best: \(score)%")
                    .font(.system(size: 12, weight: .medium, design: .monospaced))
                    .foregroundColor(.theme.green)
            } else {
                Text("Not attempted")
                    .font(.system(size: 12))
                    .foregroundColor(.theme.textMuted)
            }
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 20)
        .padding(.horizontal, 12)
        .background(Color.theme.bgCard)
        .cornerRadius(12)
        .overlay(
            RoundedRectangle(cornerRadius: 12)
                .stroke(Color.theme.border, lineWidth: 1)
        )
    }
}

#Preview {
    NavigationStack {
        QuizCategoriesView()
    }
    .preferredColorScheme(.dark)
}
