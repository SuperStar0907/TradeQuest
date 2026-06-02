import SwiftUI

struct ResourceCardView: View {
    let title: String
    let author: String
    let difficulty: String
    let category: String
    let description: String

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            HStack(spacing: 6) {
                Text(category)
                    .font(.system(size: 10, weight: .medium))
                    .foregroundColor(.theme.blue)
                    .padding(.horizontal, 6)
                    .padding(.vertical, 2)
                    .background(Color.theme.blue.opacity(0.15))
                    .cornerRadius(4)

                DifficultyBadge(difficulty: Difficulty(rawValue: difficulty) ?? .beginner)
            }

            Text(title)
                .font(.system(size: 14, weight: .semibold))
                .foregroundColor(.theme.textPrimary)
                .multilineTextAlignment(.leading)
                .lineLimit(2)

            Text(author)
                .font(.system(size: 12))
                .foregroundColor(.theme.textMuted)

            Text(description)
                .font(.system(size: 12))
                .foregroundColor(.theme.textSecondary)
                .lineLimit(3)
                .multilineTextAlignment(.leading)

            Spacer(minLength: 0)

            Text("Tap for details")
                .font(.system(size: 11, weight: .medium))
                .foregroundColor(.theme.blue)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .padding(12)
        .background(Color.theme.bgCard)
        .cornerRadius(12)
        .overlay(
            RoundedRectangle(cornerRadius: 12)
                .stroke(Color.theme.border, lineWidth: 1)
        )
    }
}

#Preview {
    ResourceCardView(
        title: "A Random Walk Down Wall Street",
        author: "Burton Malkiel",
        difficulty: "beginner",
        category: "Beginner",
        description: "Classic guide to investing."
    )
    .frame(width: 180)
    .padding()
    .background(Color.theme.bgPrimary)
}
