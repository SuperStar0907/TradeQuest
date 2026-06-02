import Foundation

extension Double {
    func asCurrency(symbol: String = "$") -> String {
        let formatter = NumberFormatter()
        formatter.numberStyle = .decimal
        formatter.minimumFractionDigits = 2
        formatter.maximumFractionDigits = 2
        formatter.groupingSeparator = ","
        let formatted = formatter.string(from: NSNumber(value: self)) ?? "0.00"
        return "\(symbol)\(formatted)"
    }

    func asCompactCurrency(symbol: String = "$") -> String {
        let absValue = abs(self)
        let sign = self < 0 ? "-" : ""

        if absValue >= 1_000_000_000 {
            let value = absValue / 1_000_000_000
            return "\(sign)\(symbol)\(String(format: "%.1f", value))B"
        } else if absValue >= 1_000_000 {
            let value = absValue / 1_000_000
            return "\(sign)\(symbol)\(String(format: "%.1f", value))M"
        } else if absValue >= 1_000 {
            let value = absValue / 1_000
            return "\(sign)\(symbol)\(String(format: "%.1f", value))K"
        } else {
            return asCurrency(symbol: symbol)
        }
    }

    func asPercent() -> String {
        let sign = self >= 0 ? "+" : ""
        return "\(sign)\(String(format: "%.2f", self))%"
    }
}

func getCurrencySymbol(for ticker: String) -> String {
    let uppercased = ticker.uppercased()

    if uppercased.hasSuffix(".NS") || uppercased.hasSuffix(".BO") {
        return "₹"
    }

    let indianIndices = ["^NSEI", "^BSESN", "^NSEBANK"]
    if indianIndices.contains(uppercased) {
        return "₹"
    }

    if uppercased.contains("INR") {
        return "₹"
    }

    return "$"
}
