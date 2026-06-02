import SwiftUI

struct MonitorView: View {
    @State private var viewModel = MonitorViewModel()
    @State private var region: String = "all"
    @State private var category: String = "all"

    @State private var istTime = ""
    @State private var etTime = ""
    @State private var openMarkets: [String] = []
    @State private var clockTimer: Timer?

    // MARK: - Filtering

    private func filtered(_ tickers: [TickerInfo]) -> [TickerInfo] {
        if region == "all" { return tickers }
        return tickers.filter { $0.region == region }
    }

    private func showCategory(_ cat: String) -> Bool {
        category == "all" || category == cat
    }

    // MARK: - Body

    var body: some View {
        ScrollView {
            VStack(spacing: 16) {
                clockBar
                regionButtons
                categoryButtons

                if viewModel.quotes.isEmpty {
                    if viewModel.isLoading {
                        loadingView
                    } else {
                        emptyStateView
                    }
                } else {
                    let filterId = "\(region)-\(category)"

                    // Heatmap first (the colored grid cards)
                    HeatmapView(
                        quotes: viewModel.quotes,
                        tickers: filtered(MonitorViewModel.stocks)
                    )
                    .id("heatmap-\(filterId)")

                    topMoversSection

                    if showCategory("indices") {
                        tickerSection(title: "Indices", tickers: filtered(MonitorViewModel.indices))
                    }
                    if showCategory("stocks") {
                        tickerSection(title: "Stocks", tickers: filtered(MonitorViewModel.stocks))
                    }
                    if showCategory("etfs") {
                        tickerSection(title: "ETFs", tickers: filtered(MonitorViewModel.etfs))
                    }
                    if showCategory("volatility") {
                        tickerSection(title: "Volatility", tickers: filtered(MonitorViewModel.volatility))
                    }
                    if showCategory("crypto") {
                        tickerSection(title: "Crypto", tickers: filtered(MonitorViewModel.crypto))
                    }
                    if showCategory("forex") {
                        tickerSection(title: "Forex", tickers: filtered(MonitorViewModel.forex))
                    }
                    if showCategory("commodities") {
                        tickerSection(title: "Commodities", tickers: filtered(MonitorViewModel.commodities))
                    }
                    if showCategory("treasury") {
                        treasurySection(tickers: filtered(MonitorViewModel.treasury))
                            .id("treasury-\(filterId)")
                    }

                    if showCategory("metrics") {
                        keyMetricsSection
                    }
                }
            }
            .padding(.horizontal, 16)
            .padding(.vertical, 12)
        }
        .background(Color.theme.bgPrimary)
        .navigationTitle("Market Monitor")
        .task {
            await viewModel.loadAllData()
            viewModel.startAutoRefresh()
            startClock()
        }
        .onDisappear {
            viewModel.stopAutoRefresh()
            clockTimer?.invalidate()
        }
        .refreshable {
            await viewModel.refresh()
        }
    }

    // MARK: - Clock Bar

    private var clockBar: some View {
        HStack {
            Text("IST")
                .foregroundColor(.theme.textMuted)
                .font(.caption)
            Text(istTime)
                .font(.system(.caption, design: .monospaced))
                .foregroundColor(.theme.textPrimary)
            Text("/")
                .foregroundColor(.theme.textMuted)
                .font(.caption)
            Text("ET")
                .foregroundColor(.theme.textMuted)
                .font(.caption)
            Text(etTime)
                .font(.system(.caption, design: .monospaced))
                .foregroundColor(.theme.textPrimary)

            Spacer()

            if openMarkets.isEmpty {
                Text("ALL CLOSED")
                    .font(.system(.caption2, design: .monospaced)).bold()
                    .foregroundColor(.theme.orange)
            } else {
                HStack(spacing: 4) {
                    Circle()
                        .fill(Color.theme.green)
                        .frame(width: 6, height: 6)
                    Text(openMarkets.joined(separator: " · "))
                        .font(.system(.caption2, design: .monospaced)).bold()
                        .foregroundColor(.theme.green)
                }
            }
        }
        .padding(.horizontal, 14)
        .padding(.vertical, 10)
        .background(Color.theme.bgCard)
        .cornerRadius(10)
        .overlay(
            RoundedRectangle(cornerRadius: 10)
                .stroke(Color.theme.border, lineWidth: 1)
        )
    }

    private func startClock() {
        updateClock()
        clockTimer = Timer.scheduledTimer(withTimeInterval: 1, repeats: true) { _ in
            updateClock()
        }
    }

    private func updateClock() {
        let now = Date()

        let istFormatter = DateFormatter()
        istFormatter.dateFormat = "HH:mm:ss"
        istFormatter.timeZone = TimeZone(identifier: "Asia/Kolkata")
        istTime = istFormatter.string(from: now)

        let etFormatter = DateFormatter()
        etFormatter.dateFormat = "HH:mm"
        etFormatter.timeZone = TimeZone(identifier: "America/New_York")
        etTime = etFormatter.string(from: now)

        // Check which markets are open
        openMarkets = []

        // India (NSE/BSE): Mon-Fri 9:15 AM - 3:30 PM IST
        let istComp = Calendar.current.dateComponents(in: TimeZone(identifier: "Asia/Kolkata")!, from: now)
        let istMin = (istComp.hour ?? 0) * 60 + (istComp.minute ?? 0)
        let istWeekday = istComp.weekday ?? 1
        if istWeekday >= 2 && istWeekday <= 6 && istMin >= 555 && istMin < 930 {
            openMarkets.append("🇮🇳 India")
        }

        // US (NYSE/NASDAQ): Mon-Fri 9:30 AM - 4:00 PM ET
        let etComp = Calendar.current.dateComponents(in: TimeZone(identifier: "America/New_York")!, from: now)
        let etMin = (etComp.hour ?? 0) * 60 + (etComp.minute ?? 0)
        let etWeekday = etComp.weekday ?? 1
        if etWeekday >= 2 && etWeekday <= 6 && etMin >= 570 && etMin < 960 {
            openMarkets.append("🇺🇸 US")
        }

        // Japan (TSE): Mon-Fri 9:00 AM - 3:00 PM JST (lunch break 11:30-12:30)
        let jstComp = Calendar.current.dateComponents(in: TimeZone(identifier: "Asia/Tokyo")!, from: now)
        let jstMin = (jstComp.hour ?? 0) * 60 + (jstComp.minute ?? 0)
        let jstWeekday = jstComp.weekday ?? 1
        if jstWeekday >= 2 && jstWeekday <= 6 && jstMin >= 540 && jstMin < 900 && !(jstMin >= 690 && jstMin < 750) {
            openMarkets.append("🇯🇵 Japan")
        }

        // Europe (LSE/Euronext): Mon-Fri 8:00 AM - 4:30 PM GMT/CET
        let lonComp = Calendar.current.dateComponents(in: TimeZone(identifier: "Europe/London")!, from: now)
        let lonMin = (lonComp.hour ?? 0) * 60 + (lonComp.minute ?? 0)
        let lonWeekday = lonComp.weekday ?? 1
        if lonWeekday >= 2 && lonWeekday <= 6 && lonMin >= 480 && lonMin < 990 {
            openMarkets.append("🇪🇺 Europe")
        }
    }

    // MARK: - Region Buttons

    private var regionButtons: some View {
        HStack(spacing: 8) {
            regionButton(label: "All Markets", value: "all")
            regionButton(label: "India", value: "in")
            regionButton(label: "Global", value: "global")
        }
    }

    private func regionButton(label: String, value: String) -> some View {
        Button {
            withAnimation(.easeInOut(duration: 0.2)) {
                region = value
            }
        } label: {
            Text(label)
                .font(.system(size: 13, weight: .semibold))
                .foregroundColor(region == value ? .white : .theme.textSecondary)
                .frame(maxWidth: .infinity)
                .padding(.vertical, 10)
                .background(region == value ? Color.theme.blue : Color.theme.bgCard)
                .cornerRadius(8)
                .overlay(
                    RoundedRectangle(cornerRadius: 8)
                        .stroke(region == value ? Color.clear : Color.theme.border, lineWidth: 1)
                )
        }
    }

    // MARK: - Category Buttons

    private let categoryOptions: [(label: String, value: String)] = [
        ("All", "all"),
        ("Indices", "indices"),
        ("Stocks", "stocks"),
        ("ETFs", "etfs"),
        ("Volatility", "volatility"),
        ("Crypto", "crypto"),
        ("Forex", "forex"),
        ("Commodities", "commodities"),
        ("Treasury", "treasury"),
        ("Key Metrics", "metrics"),
    ]

    private var categoryButtons: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack(spacing: 8) {
                ForEach(categoryOptions, id: \.value) { option in
                    Button {
                        withAnimation(.easeInOut(duration: 0.2)) {
                            category = option.value
                        }
                    } label: {
                        Text(option.label)
                            .font(.system(size: 12, weight: .medium))
                            .foregroundColor(category == option.value ? .white : .theme.textSecondary)
                            .padding(.horizontal, 12)
                            .padding(.vertical, 7)
                            .background(category == option.value ? Color.theme.blue : Color.theme.bgCard)
                            .cornerRadius(8)
                            .overlay(
                                RoundedRectangle(cornerRadius: 8)
                                    .stroke(category == option.value ? Color.clear : Color.theme.border, lineWidth: 1)
                            )
                    }
                }
            }
        }
    }

    // MARK: - Loading & Empty States

    private var loadingView: some View {
        VStack(spacing: 12) {
            ProgressView()
                .tint(.theme.blue)
            Text("Loading market data...")
                .font(.system(size: 13))
                .foregroundColor(.theme.textMuted)
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 60)
    }

    private var emptyStateView: some View {
        VStack(spacing: 12) {
            Image(systemName: "wifi.exclamationmark")
                .font(.system(size: 40))
                .foregroundColor(.theme.textMuted)
            Text("Could not fetch market data")
                .font(.system(size: 15, weight: .medium))
                .foregroundColor(.theme.textSecondary)
            Text("Check your internet connection and pull to refresh")
                .font(.system(size: 13))
                .foregroundColor(.theme.textMuted)
                .multilineTextAlignment(.center)
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 60)
    }

    // MARK: - Key Metrics (compact cards)

    private var keyMetricsSection: some View {
        VStack(alignment: .leading, spacing: 10) {
            Text("KEY METRICS")
                .font(.system(size: 11, weight: .bold, design: .monospaced))
                .foregroundColor(.theme.textMuted)
                .tracking(1)

            LazyVGrid(columns: [
                GridItem(.flexible(), spacing: 8),
                GridItem(.flexible(), spacing: 8),
                GridItem(.flexible(), spacing: 8),
            ], spacing: 8) {
                ForEach(viewModel.keyMetrics) { metric in
                    VStack(alignment: .leading, spacing: 4) {
                        Text(metric.label)
                            .font(.system(size: 10, weight: .medium))
                            .foregroundColor(.theme.textMuted)
                            .lineLimit(1)

                        Text(metric.value)
                            .font(.system(size: 13, weight: .semibold, design: .monospaced))
                            .foregroundColor(.theme.textPrimary)
                            .lineLimit(1)

                        Text(metric.percent.asPercent())
                            .font(.system(size: 10, weight: .medium, design: .monospaced))
                            .foregroundColor(metric.percent >= 0 ? .theme.green : .theme.red)

                        GeometryReader { geometry in
                            ZStack(alignment: .leading) {
                                Rectangle()
                                    .fill(Color.theme.border)
                                    .frame(height: 3)
                                    .cornerRadius(1.5)

                                Rectangle()
                                    .fill(metric.percent >= 0 ? Color.theme.green : Color.theme.red)
                                    .frame(width: geometry.size.width * min(abs(metric.percent) / 5.0, 1.0), height: 3)
                                    .cornerRadius(1.5)
                            }
                        }
                        .frame(height: 3)
                    }
                    .padding(10)
                    .background(Color.theme.bgTertiary)
                    .cornerRadius(8)
                }
            }
        }
        .padding(14)
        .background(Color.theme.bgCard)
        .cornerRadius(12)
        .overlay(
            RoundedRectangle(cornerRadius: 12)
                .stroke(Color.theme.border, lineWidth: 1)
        )
        .id("metrics-\(region)")
    }

    // MARK: - Top Movers (stock cards, red/green)

    private var topMoversSection: some View {
        VStack(alignment: .leading, spacing: 10) {
            Text("TOP MOVERS")
                .font(.system(size: 11, weight: .bold, design: .monospaced))
                .foregroundColor(.theme.textMuted)
                .tracking(1)

            if viewModel.topMovers.isEmpty {
                Text("Loading...")
                    .font(.system(size: 13))
                    .foregroundColor(.theme.textMuted)
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 12)
            } else {
                let movers = filtered(viewModel.topMovers)
                ScrollView(.horizontal, showsIndicators: false) {
                    HStack(spacing: 10) {
                        ForEach(movers) { ticker in
                            moverCard(ticker)
                        }
                    }
                }
            }
        }
        .id("movers-\(region)")
    }

    private func moverCard(_ ticker: TickerInfo) -> some View {
        let quote = viewModel.quotes[ticker.symbol]
        let price = quote?.price ?? 0
        let changePct = quote?.changePct ?? 0
        let isUp = changePct >= 0
        let currSymbol = getCurrencySymbol(for: ticker.symbol)

        return VStack(alignment: .leading, spacing: 6) {
            Text(ticker.symbol.replacingOccurrences(of: ".NS", with: ""))
                .font(.system(size: 13, weight: .bold, design: .monospaced))
                .foregroundColor(.white)
                .lineLimit(1)

            Text(ticker.name)
                .font(.system(size: 10))
                .foregroundColor(.white.opacity(0.6))
                .lineLimit(1)

            Spacer()

            Text("\(currSymbol)\(price, specifier: price > 1000 ? "%.0f" : "%.2f")")
                .font(.system(size: 15, weight: .semibold, design: .monospaced))
                .foregroundColor(.white)

            HStack(spacing: 3) {
                Image(systemName: isUp ? "arrowtriangle.up.fill" : "arrowtriangle.down.fill")
                    .font(.system(size: 8))
                Text(changePct.asPercent())
                    .font(.system(size: 11, weight: .semibold, design: .monospaced))
            }
            .foregroundColor(.white.opacity(0.9))
        }
        .frame(width: 120, height: 120, alignment: .leading)
        .padding(12)
        .background(
            RoundedRectangle(cornerRadius: 12)
                .fill(isUp
                    ? Color(hex: "00e676").opacity(0.18)
                    : Color(hex: "ff1744").opacity(0.18))
        )
        .overlay(
            RoundedRectangle(cornerRadius: 12)
                .stroke(isUp
                    ? Color(hex: "00e676").opacity(0.35)
                    : Color(hex: "ff1744").opacity(0.35), lineWidth: 1)
        )
    }

    // MARK: - Ticker Sections

    // MARK: - Ticker Section

    private func tickerSection(title: String, tickers: [TickerInfo]) -> some View {
        let sectionId = "\(title)-\(region)-\(category)-\(tickers.count)"
        return VStack(alignment: .leading, spacing: 8) {
            Text(title)
                .font(.system(size: 15, weight: .semibold))
                .foregroundColor(.theme.textPrimary)

            if tickers.isEmpty {
                Text("No tickers for this filter")
                    .font(.system(size: 13))
                    .foregroundColor(.theme.textMuted)
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 12)
            } else {
                VStack(spacing: 4) {
                    ForEach(tickers) { ticker in
                        quoteRow(ticker)
                    }
                }
            }
        }
        .id(sectionId)
        .padding(14)
        .background(Color.theme.bgCard)
        .cornerRadius(12)
        .overlay(
            RoundedRectangle(cornerRadius: 12)
                .stroke(Color.theme.border, lineWidth: 1)
        )
    }

    // MARK: - Treasury Section

    private func treasurySection(tickers: [TickerInfo]) -> some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("Treasury Yields")
                .font(.system(size: 15, weight: .semibold))
                .foregroundColor(.theme.textPrimary)

            if tickers.isEmpty {
                Text("No tickers for this filter")
                    .font(.system(size: 13))
                    .foregroundColor(.theme.textMuted)
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 12)
            } else {
                VStack(spacing: 4) {
                    ForEach(tickers) { ticker in
                        treasuryRow(ticker)
                    }
                }
            }
        }
        .padding(14)
        .background(Color.theme.bgCard)
        .cornerRadius(12)
        .overlay(
            RoundedRectangle(cornerRadius: 12)
                .stroke(Color.theme.border, lineWidth: 1)
        )
    }

    private func treasuryRow(_ ticker: TickerInfo) -> some View {
        let quote = viewModel.quotes[ticker.symbol]
        let changePct = quote?.changePct ?? 0
        let changeColor: Color = changePct >= 0 ? .theme.green : .theme.red

        return HStack {
            VStack(alignment: .leading, spacing: 2) {
                Text(ticker.name)
                    .font(.system(size: 14, weight: .medium))
                    .foregroundColor(.theme.textPrimary)
                    .lineLimit(1)
                Text(ticker.symbol)
                    .font(.system(size: 12))
                    .foregroundColor(.theme.textMuted)
            }

            Spacer()

            VStack(alignment: .trailing, spacing: 2) {
                Text(quote.map { String(format: "%.3f%%", $0.price) } ?? "--")
                    .font(.system(size: 14, weight: .semibold, design: .monospaced))
                    .foregroundColor(.theme.textPrimary)

                Text(changePct.asPercent())
                    .font(.system(size: 12, weight: .medium, design: .monospaced))
                    .foregroundColor(changeColor)
            }
        }
        .padding(.vertical, 10)
        .padding(.horizontal, 12)
        .background(Color.theme.bgCard)
        .cornerRadius(8)
    }

    // MARK: - Quote Row

    private func quoteRow(_ ticker: TickerInfo) -> some View {
        let quote = viewModel.quotes[ticker.symbol]
        let changePct = quote?.changePct ?? 0
        let displayPrice = viewModel.formattedPrice(for: ticker)

        return HStack {
            VStack(alignment: .leading, spacing: 2) {
                Text(ticker.name)
                    .font(.system(size: 14, weight: .medium))
                    .foregroundColor(.theme.textPrimary)
                    .lineLimit(1)
                Text(ticker.symbol)
                    .font(.system(size: 12))
                    .foregroundColor(.theme.textMuted)
            }

            Spacer()

            if quote != nil {
                VStack(alignment: .trailing, spacing: 2) {
                    Text(displayPrice)
                        .font(.system(size: 14, weight: .semibold, design: .monospaced))
                        .foregroundColor(.theme.textPrimary)

                    Text(changePct.asPercent())
                        .font(.system(size: 12, weight: .medium, design: .monospaced))
                        .foregroundColor(changePct >= 0 ? .theme.green : .theme.red)
                }
            } else {
                Text("--")
                    .font(.system(size: 14, weight: .semibold, design: .monospaced))
                    .foregroundColor(.theme.textMuted)
            }
        }
        .padding(.vertical, 10)
        .padding(.horizontal, 12)
        .background(Color.theme.bgCard)
        .cornerRadius(8)
    }

    // MARK: - Heatmap

    private var heatmapSection: some View {
        VStack(alignment: .leading, spacing: 12) {
            Text("Market Heatmap")
                .font(.system(size: 15, weight: .semibold))
                .foregroundColor(.theme.textPrimary)

            HeatmapView(
                quotes: viewModel.quotes,
                tickers: filtered(MonitorViewModel.stocks)
            )
        }
        .padding(14)
        .background(Color.theme.bgCard)
        .cornerRadius(12)
        .overlay(
            RoundedRectangle(cornerRadius: 12)
                .stroke(Color.theme.border, lineWidth: 1)
        )
    }
}

#Preview {
    NavigationStack {
        MonitorView()
    }
    .preferredColorScheme(.dark)
}
