import SwiftUI

struct SimulatorView: View {
    @State private var holdings: [SimHolding] = []
    @State private var tradeHistory: [SimTrade] = []
    @State private var portfolioValue: Double = 100000
    @State private var cashBalance: Double = 100000
    @State private var ohlcvData: [OHLCV] = []
    @State private var dataIndex: Int = 30
    @State private var isPlaying = false
    @State private var playSpeed = 5
    @State private var playTimer: Timer?

    var body: some View {
        ScrollView {
            VStack(spacing: 16) {
                portfolioHeader
                simulatorChart
                playbackControls
                OrderFormView()
                holdingsSection
                tradeHistorySection
            }
            .padding(.horizontal, 16)
            .padding(.vertical, 12)
        }
        .background(Color.theme.bgPrimary)
        .navigationTitle("Simulator")
        .onAppear {
            ohlcvData = ContentService.shared.loadStockData(ticker: "SPY")
        }
    }

    private var displayData: [OHLCV] {
        guard !ohlcvData.isEmpty else { return [] }
        let end = min(dataIndex, ohlcvData.count)
        return Array(ohlcvData.prefix(end))
    }

    private var portfolioHeader: some View {
        HStack(spacing: 16) {
            StatCard(value: portfolioValue.asCompactCurrency(), label: "Portfolio", valueColor: .theme.green)
            StatCard(value: cashBalance.asCompactCurrency(), label: "Cash", valueColor: .theme.blue)
        }
    }

    private var simulatorChart: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("Portfolio Performance")
                .font(.system(size: 14, weight: .medium))
                .foregroundColor(.theme.textSecondary)

            if let candle = displayData.last {
                HStack {
                    Text(candle.time)
                        .font(.caption)
                        .foregroundColor(.theme.textMuted)
                    Spacer()
                    Text("$\(candle.close, specifier: "%.2f")")
                        .font(.system(.body, design: .monospaced))
                        .bold()
                        .foregroundColor(.theme.textPrimary)
                }
            }

            if displayData.isEmpty {
                RoundedRectangle(cornerRadius: 8)
                    .fill(Color.theme.bgTertiary)
                    .frame(height: 220)
                    .overlay(
                        Text("Loading chart...")
                            .font(.system(size: 13))
                            .foregroundColor(.theme.textMuted)
                    )
            } else {
                CandlestickChartUIView(
                    ohlcvData: displayData,
                    showVolume: true
                )
                .frame(height: 220)
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

    private var playbackControls: some View {
        HStack(spacing: 12) {
            Button { stepBack() } label: {
                Image(systemName: "backward.frame.fill")
                    .font(.system(size: 18))
                    .foregroundColor(.theme.textPrimary)
            }

            Button { togglePlayback() } label: {
                Image(systemName: isPlaying ? "pause.fill" : "play.fill")
                    .font(.system(size: 20))
                    .foregroundColor(.theme.blue)
            }

            Button { stepForward() } label: {
                Image(systemName: "forward.frame.fill")
                    .font(.system(size: 18))
                    .foregroundColor(.theme.textPrimary)
            }

            Spacer()

            Picker("Speed", selection: $playSpeed) {
                Text("1x").tag(1)
                Text("2x").tag(2)
                Text("5x").tag(5)
                Text("10x").tag(10)
            }
            .pickerStyle(.segmented)
            .frame(width: 200)
        }
        .padding(.horizontal, 14)
        .padding(.vertical, 10)
        .background(Color.theme.bgCard)
        .cornerRadius(12)
        .overlay(
            RoundedRectangle(cornerRadius: 12)
                .stroke(Color.theme.border, lineWidth: 1)
        )
    }

    private func stepForward() {
        if dataIndex < ohlcvData.count { dataIndex += 1 }
    }

    private func stepBack() {
        if dataIndex > 10 { dataIndex -= 1 }
    }

    private func togglePlayback() {
        isPlaying.toggle()
        if isPlaying {
            let interval = 1.0 / Double(playSpeed)
            playTimer = Timer.scheduledTimer(withTimeInterval: interval, repeats: true) { _ in
                if dataIndex >= ohlcvData.count { stopPlayback(); return }
                dataIndex += 1
            }
        } else {
            stopPlayback()
        }
    }

    private func stopPlayback() {
        isPlaying = false
        playTimer?.invalidate()
        playTimer = nil
    }

    private var holdingsSection: some View {
        VStack(alignment: .leading, spacing: 10) {
            Text("Holdings")
                .font(.system(size: 15, weight: .semibold))
                .foregroundColor(.theme.textPrimary)

            if holdings.isEmpty {
                Text("No holdings yet. Place a trade to get started!")
                    .font(.system(size: 13))
                    .foregroundColor(.theme.textMuted)
                    .padding(.vertical, 20)
                    .frame(maxWidth: .infinity)
            } else {
                VStack(spacing: 4) {
                    ForEach(holdings) { holding in
                        holdingRow(holding)
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

    private func holdingRow(_ holding: SimHolding) -> some View {
        HStack {
            VStack(alignment: .leading, spacing: 2) {
                Text(holding.ticker)
                    .font(.system(size: 14, weight: .semibold, design: .monospaced))
                    .foregroundColor(.theme.textPrimary)
                Text("\(holding.shares) shares")
                    .font(.system(size: 12))
                    .foregroundColor(.theme.textMuted)
            }

            Spacer()

            VStack(alignment: .trailing, spacing: 2) {
                Text(holding.currentValue.asCurrency())
                    .font(.system(size: 14, weight: .medium, design: .monospaced))
                    .foregroundColor(.theme.textPrimary)
                Text(holding.pnlPercent.asPercent())
                    .font(.system(size: 12, design: .monospaced))
                    .foregroundColor(holding.pnlPercent >= 0 ? .theme.green : .theme.red)
            }
        }
        .padding(.vertical, 8)
    }

    private var tradeHistorySection: some View {
        VStack(alignment: .leading, spacing: 10) {
            Text("Trade History")
                .font(.system(size: 15, weight: .semibold))
                .foregroundColor(.theme.textPrimary)

            if tradeHistory.isEmpty {
                Text("No trades yet.")
                    .font(.system(size: 13))
                    .foregroundColor(.theme.textMuted)
                    .padding(.vertical, 20)
                    .frame(maxWidth: .infinity)
            } else {
                VStack(spacing: 0) {
                    ForEach(tradeHistory) { trade in
                        tradeRow(trade)
                        if trade.id != tradeHistory.last?.id {
                            Divider().background(Color.theme.border)
                        }
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

    private func tradeRow(_ trade: SimTrade) -> some View {
        HStack {
            Text(trade.isBuy ? "BUY" : "SELL")
                .font(.system(size: 11, weight: .bold))
                .foregroundColor(trade.isBuy ? .theme.green : .theme.red)
                .padding(.horizontal, 6)
                .padding(.vertical, 3)
                .background((trade.isBuy ? Color.theme.green : Color.theme.red).opacity(0.15))
                .cornerRadius(4)

            VStack(alignment: .leading, spacing: 2) {
                Text(trade.ticker)
                    .font(.system(size: 13, weight: .medium))
                    .foregroundColor(.theme.textPrimary)
                Text("\(trade.shares) @ \(trade.price.asCurrency())")
                    .font(.system(size: 11))
                    .foregroundColor(.theme.textMuted)
            }

            Spacer()

            Text(trade.total.asCurrency())
                .font(.system(size: 13, design: .monospaced))
                .foregroundColor(.theme.textSecondary)
        }
        .padding(.vertical, 8)
    }
}

struct SimHolding: Identifiable {
    let id = UUID()
    let ticker: String
    let shares: Int
    let avgCost: Double
    let currentPrice: Double

    var currentValue: Double { Double(shares) * currentPrice }
    var pnlPercent: Double { ((currentPrice - avgCost) / avgCost) * 100 }
}

struct SimTrade: Identifiable {
    let id = UUID()
    let ticker: String
    let isBuy: Bool
    let shares: Int
    let price: Double

    var total: Double { Double(shares) * price }
}

#Preview {
    NavigationStack {
        SimulatorView()
    }
    .preferredColorScheme(.dark)
}
