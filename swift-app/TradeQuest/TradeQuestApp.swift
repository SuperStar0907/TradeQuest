import SwiftUI

@main
struct TradeQuestApp: App {
    @State private var themeManager = ThemeManager()

    init() {
        BackupService.autoRestoreIfNeeded()
        ProgressService.shared.updateStreak()
    }

    var body: some Scene {
        WindowGroup {
            MainTabView()
                .preferredColorScheme(themeManager.colorScheme)
        }
    }
}
