import Foundation

extension Date {
    func timeAgo() -> String {
        let seconds = Int(-self.timeIntervalSinceNow)

        if seconds < 60 {
            return "just now"
        }

        let minutes = seconds / 60
        if minutes < 60 {
            return "\(minutes)m ago"
        }

        let hours = minutes / 60
        if hours < 24 {
            return "\(hours)h ago"
        }

        let days = hours / 24
        if days < 30 {
            return "\(days)d ago"
        }

        let months = days / 30
        if months < 12 {
            return "\(months)mo ago"
        }

        let years = months / 12
        return "\(years)y ago"
    }

    var yyyymmdd: String {
        let formatter = DateFormatter()
        formatter.dateFormat = "yyyy-MM-dd"
        return formatter.string(from: self)
    }
}
