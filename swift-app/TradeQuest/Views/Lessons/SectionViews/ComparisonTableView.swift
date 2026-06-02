import SwiftUI

struct ComparisonTableView: View {
    let headers: [String]
    let rows: [[String]]

    var body: some View {
        VStack(spacing: 0) {
            headerRow
            ForEach(Array(rows.enumerated()), id: \.offset) { index, row in
                dataRow(row, isEven: index % 2 == 0)
            }
        }
        .cornerRadius(12)
        .overlay(
            RoundedRectangle(cornerRadius: 12)
                .stroke(Color.theme.border, lineWidth: 1)
        )
    }

    private var headerRow: some View {
        HStack(spacing: 0) {
            ForEach(Array(headers.enumerated()), id: \.offset) { _, header in
                Text(header)
                    .font(.system(size: 12, weight: .bold))
                    .foregroundColor(.theme.textPrimary)
                    .frame(maxWidth: .infinity, alignment: .leading)
                    .padding(.horizontal, 10)
                    .padding(.vertical, 10)
            }
        }
        .background(Color.theme.bgTertiary)
    }

    private func dataRow(_ row: [String], isEven: Bool) -> some View {
        HStack(spacing: 0) {
            ForEach(Array(row.enumerated()), id: \.offset) { _, cell in
                Text(cell)
                    .font(.system(size: 13))
                    .foregroundColor(.theme.textSecondary)
                    .frame(maxWidth: .infinity, alignment: .leading)
                    .padding(.horizontal, 10)
                    .padding(.vertical, 8)
            }
        }
        .background(isEven ? Color.theme.bgCard : Color.theme.bgPrimary)
    }
}

#Preview {
    ComparisonTableView(
        headers: ["Pattern", "Signal", "Reliability"],
        rows: [
            ["Hammer", "Bullish", "High"],
            ["Shooting Star", "Bearish", "Medium"],
            ["Doji", "Neutral", "Low"]
        ]
    )
    .padding()
    .background(Color.theme.bgPrimary)
}
