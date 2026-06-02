import SwiftUI

@Observable class ThemeManager {
    var colorScheme: ColorScheme? = .dark

    init() {
        if let saved = UserDefaults.standard.string(forKey: "tq_theme") {
            colorScheme = saved == "light" ? .light : saved == "dark" ? .dark : nil
        }
    }

    func setTheme(_ scheme: ColorScheme?) {
        colorScheme = scheme
        let value: String
        switch scheme {
        case .light: value = "light"
        case .dark: value = "dark"
        default: value = "system"
        }
        UserDefaults.standard.set(value, forKey: "tq_theme")
    }
}
