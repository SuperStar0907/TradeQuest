import SwiftUI

// MARK: - Mind Map Data Models

struct MindMapData: Codable {
    let title: String
    let branches: [MindMapBranch]
}

struct MindMapBranch: Codable, Identifiable {
    var id: String { name }
    let name: String
    let leaves: [MindMapLeaf]
}

enum MindMapLeaf: Codable, Identifiable {
    case simple(String)
    case detailed(name: String, detail: String)

    var id: String {
        switch self {
        case .simple(let text): return text
        case .detailed(let name, _): return name
        }
    }

    var name: String {
        switch self {
        case .simple(let text): return text
        case .detailed(let name, _): return name
        }
    }

    var detail: String? {
        switch self {
        case .simple: return nil
        case .detailed(_, let detail): return detail
        }
    }

    init(from decoder: Decoder) throws {
        let container = try decoder.singleValueContainer()
        if let text = try? container.decode(String.self) {
            self = .simple(text)
        } else {
            let obj = try LeafObject(from: decoder)
            self = .detailed(name: obj.name, detail: obj.detail)
        }
    }

    func encode(to encoder: Encoder) throws {
        switch self {
        case .simple(let text):
            var container = encoder.singleValueContainer()
            try container.encode(text)
        case .detailed(let name, let detail):
            try LeafObject(name: name, detail: detail).encode(to: encoder)
        }
    }

    private struct LeafObject: Codable {
        let name: String
        let detail: String
    }
}

// MARK: - Mind Map View

struct MindMapView: View {
    let mindMap: MindMapData

    private let branchColors: [Color] = [
        .blue, .green, .orange, .purple, .cyan, .red
    ]

    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            rootNodeView
            branchesView
        }
    }

    private var rootNodeView: some View {
        HStack(spacing: 10) {
            Image(systemName: "brain.head.profile")
                .font(.system(size: 16, weight: .semibold))
                .foregroundColor(.white)
            Text(mindMap.title)
                .font(.system(size: 15, weight: .bold))
                .foregroundColor(.white)
        }
        .padding(.vertical, 10)
        .padding(.horizontal, 16)
        .background(
            Capsule()
                .fill(Color.theme.blue)
        )
    }

    private var branchesView: some View {
        VStack(alignment: .leading, spacing: 8) {
            ForEach(Array(mindMap.branches.enumerated()), id: \.element.id) { index, branch in
                MindMapBranchCardView(
                    branch: branch,
                    color: branchColors[index % branchColors.count]
                )
            }
        }
        .padding(.leading, 16)
    }
}

// MARK: - Branch Card View

struct MindMapBranchCardView: View {
    let branch: MindMapBranch
    let color: Color
    @State private var isExpanded = false

    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            DisclosureGroup(isExpanded: $isExpanded) {
                VStack(alignment: .leading, spacing: 6) {
                    ForEach(branch.leaves) { leaf in
                        MindMapLeafView(leaf: leaf, color: color)
                    }
                }
                .padding(.top, 8)
                .padding(.leading, 4)
            } label: {
                HStack(spacing: 10) {
                    Circle()
                        .fill(color)
                        .frame(width: 10, height: 10)
                    Text(branch.name)
                        .font(.system(size: 14, weight: .semibold))
                        .foregroundColor(.theme.textPrimary)
                }
            }
            .tint(color)
        }
        .padding(.vertical, 10)
        .padding(.horizontal, 14)
        .background(Color.theme.bgCard)
        .cornerRadius(10)
        .overlay(
            HStack(spacing: 0) {
                Rectangle()
                    .fill(color)
                    .frame(width: 4)
                Spacer()
            }
            .clipShape(RoundedRectangle(cornerRadius: 10))
        )
        .overlay(
            RoundedRectangle(cornerRadius: 10)
                .stroke(Color.theme.border, lineWidth: 1)
        )
    }
}

// MARK: - Leaf View

struct MindMapLeafView: View {
    let leaf: MindMapLeaf
    let color: Color
    @State private var showDetail = false

    var body: some View {
        VStack(alignment: .leading, spacing: 4) {
            Button {
                if leaf.detail != nil {
                    withAnimation(.easeInOut(duration: 0.2)) {
                        showDetail.toggle()
                    }
                }
            } label: {
                HStack(alignment: .top, spacing: 8) {
                    Circle()
                        .fill(color.opacity(0.6))
                        .frame(width: 6, height: 6)
                        .padding(.top, 5)
                    Text(leaf.name)
                        .font(.system(size: 13, weight: .medium))
                        .foregroundColor(.theme.textPrimary)
                        .multilineTextAlignment(.leading)
                    Spacer()
                    if leaf.detail != nil {
                        Image(systemName: showDetail ? "chevron.up" : "chevron.down")
                            .font(.system(size: 10))
                            .foregroundColor(.theme.textMuted)
                    }
                }
            }
            .buttonStyle(.plain)

            if showDetail, let detail = leaf.detail {
                Text(detail)
                    .font(.system(size: 12))
                    .foregroundColor(.theme.textSecondary)
                    .padding(.leading, 14)
                    .padding(.top, 2)
                    .transition(.opacity.combined(with: .move(edge: .top)))
            }
        }
        .padding(.vertical, 4)
    }
}

#Preview {
    let sampleMindMap = MindMapData(
        title: "Stock Market Basics",
        branches: [
            MindMapBranch(name: "Fundamental Analysis", leaves: [
                .detailed(name: "P/E Ratio", detail: "Price to earnings — measures how expensive a stock is"),
                .detailed(name: "Revenue Growth", detail: "Year-over-year increase in company sales"),
                .simple("Balance Sheet")
            ]),
            MindMapBranch(name: "Technical Analysis", leaves: [
                .detailed(name: "Moving Averages", detail: "Smoothed price data over a time period"),
                .simple("RSI"),
                .simple("MACD")
            ])
        ]
    )

    ScrollView {
        MindMapView(mindMap: sampleMindMap)
            .padding()
    }
    .background(Color.theme.bgPrimary)
    .preferredColorScheme(.dark)
}
