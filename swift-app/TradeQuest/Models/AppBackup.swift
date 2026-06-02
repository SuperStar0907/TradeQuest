import Foundation

struct AppBackup: Codable {
    let version: String
    let exportDate: Date
    let progress: UserProgress
    let portfolio: Portfolio
}
