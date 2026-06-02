import SwiftUI

struct QuoteRow: View {
    let name: String
    let ticker: String
    let price: Double
    let changePercent: Double

    private var isPositive: Bool {
        changePercent >= 0
    }

    private var changeColor: Color {
        isPositive ? .theme.green : .theme.red
    }

    private var currencySymbol: String {
        getCurrencySymbol(for: ticker)
    }

    var body: some View {
        HStack {
            VStack(alignment: .leading, spacing: 2) {
                Text(name)
                    .font(.system(size: 14, weight: .medium))
                    .foregroundColor(.theme.textPrimary)
                    .lineLimit(1)
                Text(ticker)
                    .font(.system(size: 12))
                    .foregroundColor(.theme.textMuted)
            }

            Spacer()

            VStack(alignment: .trailing, spacing: 2) {
                Text(price.asCurrency(symbol: currencySymbol))
                    .font(.system(size: 14, weight: .semibold, design: .monospaced))
                    .foregroundColor(.theme.textPrimary)

                Text(changePercent.asPercent())
                    .font(.system(size: 12, weight: .medium, design: .monospaced))
                    .foregroundColor(changeColor)
            }
        }
        .padding(.vertical, 10)
        .padding(.horizontal, 12)
        .background(Color.theme.bgCard)
        .cornerRadius(8)
    }
}

#Preview {
    VStack(spacing: 8) {
        QuoteRow(name: "Apple Inc.", ticker: "AAPL", price: 178.52, changePercent: 1.23)
        QuoteRow(name: "Reliance Industries", ticker: "RELIANCE.NS", price: 2456.80, changePercent: -0.87)
        QuoteRow(name: "Tesla Inc.", ticker: "TSLA", price: 245.10, changePercent: 3.45)
    }
    .padding()
    .background(Color.theme.bgPrimary)
}
