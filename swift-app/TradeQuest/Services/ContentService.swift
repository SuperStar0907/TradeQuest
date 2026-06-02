import Foundation

struct BookSummary: Codable {
    let summary: String
    let keyTakeaways: [String]
    let mindmap: MindMapData?
}

final class ContentService {
    static let shared = ContentService()
    private init() {}

    func loadTracks() -> [Track] {
        loadBundleJSON("tracks", subdirectory: "Data") ?? []
    }

    func loadLessons() -> [Lesson] {
        loadBundleJSON("lessons", subdirectory: "Data") ?? []
    }

    func loadQuizzes() -> [String: QuizCategory] {
        loadBundleJSON("quizzes", subdirectory: "Data") ?? [:]
    }

    func loadReference() -> ReferenceData {
        loadBundleJSON("reference", subdirectory: "Data") ?? ReferenceData(glossary: [], formulas: [], patterns: [], strategies: [])
    }

    func loadBooks() -> [Book] {
        loadBundleJSON("books", subdirectory: "Data") ?? []
    }

    func loadCourses() -> [Course] {
        loadBundleJSON("courses", subdirectory: "Data") ?? []
    }

    func loadSummaries() -> [String: BookSummary] {
        loadBundleJSON("summaries", subdirectory: "Data") ?? [:]
    }

    func loadStockData(ticker: String) -> [OHLCV] {
        guard let url = dataURL(for: ticker, extension: "json", subdirectory: "Data/StockData") else {
            return []
        }
        do {
            let data = try Data(contentsOf: url)
            let response = try JSONDecoder().decode(YahooChartResponse.self, from: data)
            return response.toOHLCV()
        } catch {
            print("ContentService: Failed to load stock data for \(ticker): \(error)")
            return []
        }
    }

    private func dataURL(for name: String, extension ext: String, subdirectory: String) -> URL? {
        // Try with subdirectory first (folder reference in bundle)
        if let url = Bundle.main.url(forResource: name, withExtension: ext, subdirectory: subdirectory) {
            return url
        }
        // Try without subdirectory (Xcode may flatten synchronized groups)
        if let url = Bundle.main.url(forResource: name, withExtension: ext) {
            return url
        }
        return nil
    }

    private func loadBundleJSON<T: Decodable>(_ name: String, subdirectory: String) -> T? {
        guard let url = dataURL(for: name, extension: "json", subdirectory: subdirectory) else {
            print("ContentService: File not found - \(subdirectory)/\(name).json")
            return nil
        }
        do {
            let data = try Data(contentsOf: url)
            return try JSONDecoder().decode(T.self, from: data)
        } catch {
            print("ContentService: Failed to decode \(name).json: \(error)")
            return nil
        }
    }
}
