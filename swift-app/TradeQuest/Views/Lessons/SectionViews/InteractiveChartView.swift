import SwiftUI

struct InteractiveChartView: View {
    let config: ChartConfig
    @State private var ohlcvData: [OHLCV] = []
    @State private var sliderValues: [String: Double] = [:]

    var body: some View {
        VStack(alignment: .leading, spacing: 10) {
            Text(config.title)
                .font(.system(size: 15, weight: .semibold))
                .foregroundColor(.theme.textPrimary)

            Text(config.description)
                .font(.system(size: 13))
                .foregroundColor(.theme.textSecondary)

            chartContent

            if let controls = config.controls, !controls.isEmpty {
                controlsSection(controls)
            }
        }
        .padding(14)
        .background(Color.theme.bgCard)
        .cornerRadius(12)
        .overlay(
            RoundedRectangle(cornerRadius: 12)
                .stroke(Color.theme.border, lineWidth: 1)
        )
        .onAppear {
            ohlcvData = ContentService.shared.loadStockData(ticker: config.ticker)
            if let controls = config.controls {
                for control in controls {
                    sliderValues[control.id] = Double(control.defaultValue)
                }
            }
        }
    }

    private var displayData: [OHLCV] {
        Array(ohlcvData.suffix(60))
    }

    @ViewBuilder
    private var chartContent: some View {
        if displayData.isEmpty {
            RoundedRectangle(cornerRadius: 8)
                .fill(Color.theme.bgTertiary)
                .frame(height: 200)
                .overlay(
                    Text("No data for \(config.ticker)")
                        .font(.system(size: 13))
                        .foregroundColor(.theme.textMuted)
                )
        } else {
            CandlestickChartUIView(
                ohlcvData: displayData,
                sma20: indicatorData(for: "sma", period: 20),
                sma50: indicatorData(for: "sma", period: 50),
                ema12: indicatorData(for: "ema", period: 12),
                showVolume: false
            )
            .frame(height: 200)
        }
    }

    private func indicatorData(for type: String, period: Int) -> [(date: String, value: Double)] {
        guard let indicators = config.indicators else { return [] }
        let key = "\(type)\(period)"
        guard indicators.contains(where: { $0.lowercased().contains(key) }) else { return [] }

        if type == "ema" {
            return computeEMA(period: period)
        } else {
            return computeSMA(period: period)
        }
    }

    private func controlsSection(_ controls: [SliderControl]) -> some View {
        VStack(spacing: 8) {
            ForEach(controls, id: \.id) { control in
                VStack(alignment: .leading, spacing: 4) {
                    HStack {
                        Text(control.label)
                            .font(.system(size: 12))
                            .foregroundColor(.theme.textSecondary)
                        Spacer()
                        Text("\(Int(sliderValues[control.id] ?? Double(control.defaultValue)))")
                            .font(.system(size: 12, design: .monospaced))
                            .foregroundColor(.theme.blue)
                    }
                    Slider(
                        value: Binding(
                            get: { sliderValues[control.id] ?? Double(control.defaultValue) },
                            set: { sliderValues[control.id] = $0 }
                        ),
                        in: Double(control.min)...Double(control.max),
                        step: Double(control.step ?? 1)
                    )
                    .tint(.theme.blue)
                }
            }
        }
    }

    private func computeSMA(period: Int) -> [(date: String, value: Double)] {
        let data = displayData
        guard data.count >= period else { return [] }
        return (period - 1 ..< data.count).map { i in
            let slice = data[(i - period + 1)...i]
            let avg = slice.reduce(0.0) { $0 + $1.close } / Double(period)
            return (data[i].time, avg)
        }
    }

    private func computeEMA(period: Int) -> [(date: String, value: Double)] {
        let data = displayData
        guard data.count >= period else { return [] }
        let multiplier = 2.0 / Double(period + 1)
        var results: [(date: String, value: Double)] = []

        let initialSlice = data[0..<period]
        var emaValue = initialSlice.reduce(0.0) { $0 + $1.close } / Double(period)
        results.append((data[period - 1].time, emaValue))

        for i in period..<data.count {
            emaValue = (data[i].close - emaValue) * multiplier + emaValue
            results.append((data[i].time, emaValue))
        }
        return results
    }
}

#Preview {
    InteractiveChartView(config: ChartConfig(
        ticker: "AAPL",
        title: "Apple Stock Price",
        description: "Observe how moving averages smooth out price action",
        indicators: ["SMA20", "SMA50"],
        showRSI: true,
        showMACD: false,
        controls: nil
    ))
    .padding()
    .background(Color.theme.bgPrimary)
}
