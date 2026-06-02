import SwiftUI

struct StatCard: View {
    let value: String
    let label: String
    var valueColor: Color = .theme.textPrimary

    var body: some View {
        VStack(spacing: 6) {
            Text(value)
                .font(.system(size: 20, weight: .bold, design: .monospaced))
                .foregroundColor(valueColor)
                .lineLimit(1)
                .minimumScaleFactor(0.7)

            Text(label)
                .font(.system(size: 12))
                .foregroundColor(.theme.textMuted)
                .lineLimit(1)
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 16)
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
    HStack(spacing: 12) {
        StatCard(value: "$12,450", label: "Portfolio Value", valueColor: .theme.green)
        StatCard(value: "72%", label: "Win Rate", valueColor: .theme.blue)
        StatCard(value: "15", label: "Trades")
    }
    .padding()
    .background(Color.theme.bgPrimary)
}
