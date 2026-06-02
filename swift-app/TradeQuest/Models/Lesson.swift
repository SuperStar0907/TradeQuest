import Foundation

struct Track: Codable, Identifiable {
    let id: String
    let name: String
    let icon: String
    let description: String
    var lessons: [String]
}

struct Lesson: Codable, Identifiable {
    let id: String
    let title: String
    let track: String
    let category: String
    let difficulty: String
    let order: Int?
    let estimatedMinutes: Int
    let xpReward: Int
    let sections: [LessonSection]
}

enum LessonSection: Codable {
    case text(TextContent)
    case keyConcept(KeyConceptContent)
    case comparisonTable(ComparisonTableContent)
    case interactiveChart(InteractiveChartContent)
    case payoffDiagram(PayoffDiagramContent)

    private enum CodingKeys: String, CodingKey {
        case type
    }

    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let type = try container.decode(String.self, forKey: .type)

        switch type {
        case "text":
            let content = try TextContent(from: decoder)
            self = .text(content)
        case "key-concept":
            let content = try KeyConceptContent(from: decoder)
            self = .keyConcept(content)
        case "comparison-table":
            let content = try ComparisonTableContent(from: decoder)
            self = .comparisonTable(content)
        case "interactive-chart":
            let content = try InteractiveChartContent(from: decoder)
            self = .interactiveChart(content)
        case "payoff-diagram":
            let content = try PayoffDiagramContent(from: decoder)
            self = .payoffDiagram(content)
        default:
            throw DecodingError.dataCorruptedError(
                forKey: .type,
                in: container,
                debugDescription: "Unknown section type: \(type)"
            )
        }
    }

    func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)

        switch self {
        case .text(let content):
            try container.encode("text", forKey: .type)
            try content.encode(to: encoder)
        case .keyConcept(let content):
            try container.encode("key-concept", forKey: .type)
            try content.encode(to: encoder)
        case .comparisonTable(let content):
            try container.encode("comparison-table", forKey: .type)
            try content.encode(to: encoder)
        case .interactiveChart(let content):
            try container.encode("interactive-chart", forKey: .type)
            try content.encode(to: encoder)
        case .payoffDiagram(let content):
            try container.encode("payoff-diagram", forKey: .type)
            try content.encode(to: encoder)
        }
    }
}

struct TextContent: Codable {
    let content: String
}

struct KeyConceptContent: Codable {
    let title: String
    let content: String
}

struct ComparisonTableContent: Codable {
    let headers: [String]
    let rows: [[String]]
}

struct InteractiveChartContent: Codable {
    let config: ChartConfig
}

struct PayoffDiagramContent: Codable {
    let config: PayoffConfig
}

struct ChartConfig: Codable {
    let ticker: String
    let title: String
    let description: String
    let indicators: [String]?
    let showRSI: Bool?
    let showMACD: Bool?
    let controls: [SliderControl]?
}

struct PayoffConfig: Codable {
    let title: String
    let description: String
    let strategies: [OptionStrategy]?
    let stockPrice: Double?
    let controls: [SliderControl]?
}

struct OptionStrategy: Codable {
    let type: String
    let strike: Double
    let premium: Double
}

struct SliderControl: Codable {
    let type: String
    let label: String
    let id: String
    let min: Int
    let max: Int
    let step: Int?
    let defaultValue: Int

    enum CodingKeys: String, CodingKey {
        case type, label, id, min, max, step
        case defaultValue = "default"
    }
}
