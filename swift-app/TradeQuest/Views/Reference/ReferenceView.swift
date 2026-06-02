import SwiftUI

struct ReferenceView: View {
    @State private var viewModel = ReferenceViewModel()

    private let tabs = ["Glossary", "Formulas", "Patterns", "Strategies"]

    var body: some View {
        VStack(spacing: 0) {
            tabPicker
            searchBar
            itemsList
        }
        .background(Color.theme.bgPrimary)
        .navigationTitle("Reference")
        .task {
            viewModel.load()
        }
    }

    private var tabPicker: some View {
        Picker("Category", selection: $viewModel.currentTab) {
            ForEach(tabs, id: \.self) { tab in
                Text(tab).tag(tab.lowercased())
            }
        }
        .pickerStyle(.segmented)
        .padding(.horizontal, 16)
        .padding(.vertical, 12)
    }

    private var searchBar: some View {
        HStack(spacing: 8) {
            Image(systemName: "magnifyingglass")
                .foregroundColor(.theme.textMuted)

            TextField("Search \(viewModel.currentTab)...", text: $viewModel.searchText)
                .font(.system(size: 14))
                .foregroundColor(.theme.textPrimary)

            if !viewModel.searchText.isEmpty {
                Button {
                    viewModel.searchText = ""
                } label: {
                    Image(systemName: "xmark.circle.fill")
                        .foregroundColor(.theme.textMuted)
                }
            }
        }
        .padding(10)
        .background(Color.theme.bgCard)
        .cornerRadius(8)
        .overlay(
            RoundedRectangle(cornerRadius: 8)
                .stroke(Color.theme.border, lineWidth: 1)
        )
        .padding(.horizontal, 16)
    }

    private var itemsList: some View {
        ScrollView {
            LazyVStack(spacing: 10) {
                switch viewModel.currentTab {
                case "glossary":
                    let items = filteredGlossary
                    if items.isEmpty { emptyState } else {
                        ForEach(items, id: \.term) { entry in
                            glossaryCard(entry)
                        }
                    }
                case "formulas":
                    let items = filteredFormulas
                    if items.isEmpty { emptyState } else {
                        ForEach(items, id: \.name) { entry in
                            formulaCard(entry)
                        }
                    }
                case "patterns":
                    let items = filteredPatterns
                    if items.isEmpty { emptyState } else {
                        ForEach(items, id: \.name) { entry in
                            patternCard(entry)
                        }
                    }
                case "strategies":
                    let items = filteredStrategies
                    if items.isEmpty { emptyState } else {
                        ForEach(items, id: \.name) { entry in
                            strategyCard(entry)
                        }
                    }
                default:
                    emptyState
                }
            }
            .padding(.horizontal, 16)
            .padding(.vertical, 12)
        }
    }

    // MARK: - Filtered Data

    private var filteredGlossary: [GlossaryEntry] {
        let q = viewModel.searchText.lowercased()
        if q.isEmpty { return viewModel.glossary }
        return viewModel.glossary.filter {
            $0.term.localizedCaseInsensitiveContains(q) ||
            $0.definition.localizedCaseInsensitiveContains(q)
        }
    }

    private var filteredFormulas: [Formula] {
        let q = viewModel.searchText.lowercased()
        if q.isEmpty { return viewModel.formulas }
        return viewModel.formulas.filter {
            $0.name.localizedCaseInsensitiveContains(q) ||
            $0.description.localizedCaseInsensitiveContains(q)
        }
    }

    private var filteredPatterns: [ChartPattern] {
        let q = viewModel.searchText.lowercased()
        if q.isEmpty { return viewModel.patterns }
        return viewModel.patterns.filter {
            $0.name.localizedCaseInsensitiveContains(q) ||
            $0.description.localizedCaseInsensitiveContains(q)
        }
    }

    private var filteredStrategies: [TradingStrategy] {
        let q = viewModel.searchText.lowercased()
        if q.isEmpty { return viewModel.strategies }
        return viewModel.strategies.filter {
            $0.name.localizedCaseInsensitiveContains(q) ||
            $0.description.localizedCaseInsensitiveContains(q)
        }
    }

    // MARK: - Cards

    private func glossaryCard(_ entry: GlossaryEntry) -> some View {
        VStack(alignment: .leading, spacing: 8) {
            Text(entry.term)
                .font(.system(size: 15, weight: .semibold))
                .foregroundColor(.theme.textPrimary)

            Text(entry.definition)
                .font(.system(size: 13))
                .foregroundColor(.theme.textSecondary)
                .lineSpacing(2)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .padding(14)
        .background(Color.theme.bgCard)
        .cornerRadius(12)
        .overlay(
            RoundedRectangle(cornerRadius: 12)
                .stroke(Color.theme.border, lineWidth: 1)
        )
    }

    private func formulaCard(_ entry: Formula) -> some View {
        VStack(alignment: .leading, spacing: 8) {
            Text(entry.name)
                .font(.system(size: 15, weight: .semibold))
                .foregroundColor(.theme.textPrimary)

            Text(entry.description)
                .font(.system(size: 13))
                .foregroundColor(.theme.textSecondary)
                .lineSpacing(2)

            styledFormula(entry.formula)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .padding(14)
        .background(Color.theme.bgCard)
        .cornerRadius(12)
        .overlay(
            RoundedRectangle(cornerRadius: 12)
                .stroke(Color.theme.border, lineWidth: 1)
        )
    }

    private func styledFormula(_ formula: String) -> some View {
        Text(formula)
            .font(.system(size: 15, weight: .medium, design: .monospaced))
            .foregroundColor(.theme.orange)
            .padding(.horizontal, 14)
            .padding(.vertical, 10)
            .frame(maxWidth: .infinity, alignment: .leading)
            .background(
                RoundedRectangle(cornerRadius: 8)
                    .fill(Color.theme.bgPrimary)
            )
            .overlay(
                HStack {
                    Rectangle().fill(Color.theme.orange).frame(width: 3)
                    Spacer()
                }
                .clipShape(RoundedRectangle(cornerRadius: 8))
            )
    }

    private func patternCard(_ entry: ChartPattern) -> some View {
        VStack(alignment: .leading, spacing: 8) {
            HStack {
                Text(entry.name)
                    .font(.system(size: 15, weight: .semibold))
                    .foregroundColor(.theme.textPrimary)
                Spacer()
                Text(entry.type)
                    .font(.system(size: 11, weight: .medium))
                    .foregroundColor(entry.type.lowercased().contains("bullish") ? .theme.green : entry.type.lowercased().contains("bearish") ? .theme.red : .theme.textMuted)
                    .padding(.horizontal, 8)
                    .padding(.vertical, 3)
                    .background((entry.type.lowercased().contains("bullish") ? Color.theme.green : entry.type.lowercased().contains("bearish") ? Color.theme.red : Color.theme.textMuted).opacity(0.15))
                    .cornerRadius(6)
            }

            Text(entry.description)
                .font(.system(size: 13))
                .foregroundColor(.theme.textSecondary)
                .lineSpacing(2)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .padding(14)
        .background(Color.theme.bgCard)
        .cornerRadius(12)
        .overlay(
            RoundedRectangle(cornerRadius: 12)
                .stroke(Color.theme.border, lineWidth: 1)
        )
    }

    private func strategyCard(_ entry: TradingStrategy) -> some View {
        VStack(alignment: .leading, spacing: 8) {
            HStack {
                Text(entry.name)
                    .font(.system(size: 15, weight: .semibold))
                    .foregroundColor(.theme.textPrimary)
                Spacer()
                Text(entry.outlook)
                    .font(.system(size: 11, weight: .medium))
                    .foregroundColor(.theme.blue)
                    .padding(.horizontal, 8)
                    .padding(.vertical, 3)
                    .background(Color.theme.blue.opacity(0.15))
                    .cornerRadius(6)
            }

            Text(entry.description)
                .font(.system(size: 13))
                .foregroundColor(.theme.textSecondary)
                .lineSpacing(2)

            HStack(spacing: 16) {
                HStack(spacing: 4) {
                    Image(systemName: "arrow.down.circle.fill")
                        .font(.system(size: 12))
                        .foregroundColor(.theme.red)
                    Text("Risk: \(entry.risk)")
                        .font(.system(size: 11))
                        .foregroundColor(.theme.red)
                }
                HStack(spacing: 4) {
                    Image(systemName: "arrow.up.circle.fill")
                        .font(.system(size: 12))
                        .foregroundColor(.theme.green)
                    Text("Reward: \(entry.reward)")
                        .font(.system(size: 11))
                        .foregroundColor(.theme.green)
                }
            }
            .padding(.top, 2)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .padding(14)
        .background(Color.theme.bgCard)
        .cornerRadius(12)
        .overlay(
            RoundedRectangle(cornerRadius: 12)
                .stroke(Color.theme.border, lineWidth: 1)
        )
    }

    private var emptyState: some View {
        VStack(spacing: 8) {
            Image(systemName: "doc.text.magnifyingglass")
                .font(.system(size: 32))
                .foregroundColor(.theme.textMuted)
            Text("No results found")
                .font(.system(size: 14))
                .foregroundColor(.theme.textMuted)
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 40)
    }
}

#Preview {
    NavigationStack {
        ReferenceView()
    }
    .preferredColorScheme(.dark)
}
