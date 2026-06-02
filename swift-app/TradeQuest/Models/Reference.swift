import Foundation

struct GlossaryEntry: Codable, Identifiable {
    var id: String { term }
    let term: String
    let definition: String
}

struct Formula: Codable, Identifiable {
    var id: String { name }
    let name: String
    let formula: String
    let description: String
}

struct ChartPattern: Codable, Identifiable {
    var id: String { name }
    let name: String
    let type: String
    let description: String
}

struct TradingStrategy: Codable, Identifiable {
    var id: String { name }
    let name: String
    let outlook: String
    let description: String
    let risk: String
    let reward: String
}

struct ReferenceData: Codable {
    let glossary: [GlossaryEntry]
    let formulas: [Formula]
    let patterns: [ChartPattern]
    let strategies: [TradingStrategy]
}
