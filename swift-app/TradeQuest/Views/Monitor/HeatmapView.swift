import SwiftUI

struct HeatmapView: View {
    let quotes: [String: Quote]
    let tickers: [TickerInfo]

    private let columns = [
        GridItem(.flexible(), spacing: 4),
        GridItem(.flexible(), spacing: 4),
        GridItem(.flexible(), spacing: 4),
        GridItem(.flexible(), spacing: 4)
    ]

    private var cells: [(id: String, displayTicker: String, price: Double, changePct: Double, currencySymbol: String)] {
        tickers.compactMap { ticker in
            guard let quote = quotes[ticker.symbol] else { return nil }
            let display = stripTickerSuffix(ticker.symbol)
            let currency = getCurrencySymbol(for: ticker.symbol)
            return (id: ticker.id, displayTicker: display, price: quote.price, changePct: quote.changePct, currencySymbol: currency)
        }
    }

    var body: some View {
        LazyVGrid(columns: columns, spacing: 4) {
            ForEach(cells, id: \.id) { cell in
                cellView(cell)
            }
        }
    }

    private func cellView(_ cell: (id: String, displayTicker: String, price: Double, changePct: Double, currencySymbol: String)) -> some View {
        VStack(spacing: 2) {
            Text(cell.displayTicker)
                .font(.system(size: 11, weight: .bold, design: .monospaced))
                .foregroundColor(.white)

            Text(cell.price.asCurrency(symbol: cell.currencySymbol))
                .font(.system(size: 9, design: .monospaced))
                .foregroundColor(.white.opacity(0.85))
                .lineLimit(1)
                .minimumScaleFactor(0.7)

            Text(cell.changePct.asPercent())
                .font(.system(size: 10, design: .monospaced))
                .foregroundColor(.white.opacity(0.9))
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 14)
        .background(cellColor(for: cell.changePct))
        .cornerRadius(6)
    }

    private func cellColor(for change: Double) -> Color {
        if change > 3 { return Color.theme.green }
        if change >= 1 { return Color.theme.green.opacity(0.7) }
        if change > -1 { return Color.gray.opacity(0.5) }
        if change >= -3 { return Color.theme.red.opacity(0.7) }
        return Color.theme.red
    }

    private func stripTickerSuffix(_ symbol: String) -> String {
        var result = symbol
        for suffix in [".NS", ".BO", "-USD", "=X"] {
            if result.hasSuffix(suffix) {
                result = String(result.dropLast(suffix.count))
                break
            }
        }
        result = result.replacingOccurrences(of: "^", with: "")
        return result
    }
}

#Preview {
    HeatmapView(quotes: [:], tickers: [])
        .padding()
        .background(Color.theme.bgPrimary)
}
