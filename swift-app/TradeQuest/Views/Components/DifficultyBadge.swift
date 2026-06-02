import SwiftUI

enum Difficulty: String, CaseIterable {
    case beginner
    case intermediate
    case advanced

    var color: Color {
        switch self {
        case .beginner: return .theme.green
        case .intermediate: return .theme.orange
        case .advanced: return .theme.red
        }
    }

    var label: String {
        rawValue.capitalized
    }
}

struct DifficultyBadge: View {
    let difficulty: Difficulty

    var body: some View {
        Text(difficulty.label)
            .font(.system(size: 11, weight: .medium))
            .foregroundColor(difficulty.color)
            .padding(.horizontal, 8)
            .padding(.vertical, 3)
            .background(difficulty.color.opacity(0.15))
            .cornerRadius(10)
    }
}

#Preview {
    HStack(spacing: 8) {
        DifficultyBadge(difficulty: .beginner)
        DifficultyBadge(difficulty: .intermediate)
        DifficultyBadge(difficulty: .advanced)
    }
    .padding()
    .background(Color.theme.bgPrimary)
}
