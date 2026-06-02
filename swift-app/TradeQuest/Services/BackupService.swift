import Foundation

struct BackupService {
    static func exportBackup() -> AppBackup {
        let progress = ProgressService.shared.getProgress()
        let portfolio = PortfolioService.shared.getPortfolio()
        let version = Bundle.main.infoDictionary?["CFBundleShortVersionString"] as? String ?? "1.0.0"

        return AppBackup(
            version: version,
            exportDate: Date(),
            progress: progress,
            portfolio: portfolio
        )
    }

    static func importBackup(_ backup: AppBackup) {
        ProgressService.shared.saveProgress(backup.progress)
        PortfolioService.shared.savePortfolio(backup.portfolio)
        backupToKeychain(backup.progress)
    }

    static func exportAsJSON() -> Data {
        let backup = exportBackup()
        let encoder = JSONEncoder()
        encoder.dateEncodingStrategy = .iso8601
        encoder.outputFormatting = .prettyPrinted
        return (try? encoder.encode(backup)) ?? Data()
    }

    static func importFromJSON(_ data: Data) throws {
        let decoder = JSONDecoder()
        decoder.dateDecodingStrategy = .iso8601
        let backup = try decoder.decode(AppBackup.self, from: data)
        importBackup(backup)
    }

    static func resetAllData() {
        let keys = ["tq_progress", "tq_portfolio", "tq_firstLaunch"]
        for key in keys {
            UserDefaults.standard.removeObject(forKey: key)
        }
        KeychainBackup.delete()
    }

    // MARK: - Keychain Backup

    static func backupToKeychain(_ progress: UserProgress) {
        if let data = try? JSONEncoder().encode(progress) {
            KeychainBackup.save(data)
        }
    }

    static func autoRestoreIfNeeded() {
        let existingProgress = ProgressService.shared.getProgress()
        guard existingProgress.completedLessons.isEmpty,
              existingProgress.xp == 0 else { return }

        guard let data = KeychainBackup.load(),
              let restored = try? JSONDecoder().decode(UserProgress.self, from: data) else { return }

        ProgressService.shared.saveProgress(restored)
    }
}
