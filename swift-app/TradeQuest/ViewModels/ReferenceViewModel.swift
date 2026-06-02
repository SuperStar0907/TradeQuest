import SwiftUI

@Observable @MainActor
class ReferenceViewModel {
    var currentTab: String = "glossary"
    var searchText: String = ""
    var glossary: [GlossaryEntry] = []
    var formulas: [Formula] = []
    var patterns: [ChartPattern] = []
    var strategies: [TradingStrategy] = []

    var filteredGlossary: [GlossaryEntry] {
        guard !searchText.isEmpty else { return glossary }
        let query = searchText.lowercased()
        return glossary.filter {
            $0.term.lowercased().contains(query) ||
            $0.definition.lowercased().contains(query)
        }
    }

    var filteredFormulas: [Formula] {
        guard !searchText.isEmpty else { return formulas }
        let query = searchText.lowercased()
        return formulas.filter {
            $0.name.lowercased().contains(query) ||
            $0.description.lowercased().contains(query)
        }
    }

    var filteredPatterns: [ChartPattern] {
        guard !searchText.isEmpty else { return patterns }
        let query = searchText.lowercased()
        return patterns.filter {
            $0.name.lowercased().contains(query) ||
            $0.description.lowercased().contains(query)
        }
    }

    var filteredStrategies: [TradingStrategy] {
        guard !searchText.isEmpty else { return strategies }
        let query = searchText.lowercased()
        return strategies.filter {
            $0.name.lowercased().contains(query) ||
            $0.description.lowercased().contains(query)
        }
    }

    func load() {
        let ref = ContentService.shared.loadReference()
        glossary = ref.glossary
        formulas = ref.formulas
        patterns = ref.patterns
        strategies = ref.strategies
    }
}
