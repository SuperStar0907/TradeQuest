import SwiftUI

extension Color {
    static let theme = ThemeColors()
}

struct ThemeColors {
    let bgPrimary = Color(hex: "0d1117")
    let bgSecondary = Color(hex: "161b22")
    let bgCard = Color(hex: "161b22")
    let bgCardHover = Color(hex: "1c2129")
    let bgTertiary = Color(hex: "1c2129")

    let textPrimary = Color(hex: "e6edf3")
    let textSecondary = Color(hex: "8b949e")
    let textMuted = Color(hex: "484f58")

    let green = Color(hex: "00e676")
    let red = Color(hex: "ff1744")
    let blue = Color(hex: "58a6ff")
    let orange = Color(hex: "f0883e")
    let purple = Color(hex: "bc8cff")
    let cyan = Color(hex: "39d2e0")

    let border = Color(hex: "30363d")
}

extension Color {
    init(hex: String) {
        let hex = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted)
        var int: UInt64 = 0
        Scanner(string: hex).scanHexInt64(&int)

        let a, r, g, b: UInt64
        switch hex.count {
        case 3:
            (a, r, g, b) = (255, (int >> 8) * 17, (int >> 4 & 0xF) * 17, (int & 0xF) * 17)
        case 6:
            (a, r, g, b) = (255, int >> 16, int >> 8 & 0xFF, int & 0xFF)
        case 8:
            (a, r, g, b) = (int >> 24, int >> 16 & 0xFF, int >> 8 & 0xFF, int & 0xFF)
        default:
            (a, r, g, b) = (255, 0, 0, 0)
        }

        self.init(
            .sRGB,
            red: Double(r) / 255,
            green: Double(g) / 255,
            blue: Double(b) / 255,
            opacity: Double(a) / 255
        )
    }
}
