import SwiftUI
import DGCharts

struct PayoffLineChartUIView: UIViewRepresentable {
    let payoffPoints: [(price: Double, pnl: Double)]

    func makeUIView(context: Context) -> LineChartView {
        let chart = LineChartView()
        chart.backgroundColor = UIColor(Color(hex: "0d1117"))
        chart.gridBackgroundColor = .clear
        chart.legend.enabled = false

        chart.pinchZoomEnabled = true
        chart.doubleTapToZoomEnabled = true
        chart.dragEnabled = true
        chart.scaleXEnabled = true
        chart.scaleYEnabled = true
        chart.highlightPerTapEnabled = true

        let marker = PriceMarkerView()
        marker.chartView = chart
        chart.marker = marker

        chart.xAxis.labelPosition = .bottom
        chart.xAxis.labelTextColor = UIColor(Color(hex: "484f58"))
        chart.xAxis.gridColor = UIColor(Color(hex: "30363d"))
        chart.xAxis.axisLineColor = UIColor(Color(hex: "30363d"))
        chart.xAxis.labelFont = .monospacedDigitSystemFont(ofSize: 10, weight: .regular)

        chart.leftAxis.enabled = false
        chart.rightAxis.labelTextColor = UIColor(Color(hex: "484f58"))
        chart.rightAxis.gridColor = UIColor(Color(hex: "30363d"))
        chart.rightAxis.axisLineColor = UIColor(Color(hex: "30363d"))
        chart.rightAxis.labelFont = .monospacedDigitSystemFont(ofSize: 10, weight: .regular)

        // Zero line
        let zeroLine = ChartLimitLine(limit: 0, label: "")
        zeroLine.lineColor = UIColor(Color(hex: "484f58")).withAlphaComponent(0.5)
        zeroLine.lineDashLengths = [4, 4]
        zeroLine.lineWidth = 1
        chart.rightAxis.addLimitLine(zeroLine)

        return chart
    }

    func updateUIView(_ chart: LineChartView, context: Context) {
        guard !payoffPoints.isEmpty else {
            chart.data = nil
            return
        }

        let entries = payoffPoints.map { point in
            ChartDataEntry(x: point.price, y: point.pnl)
        }

        let dataSet = LineChartDataSet(entries: entries, label: "P&L")
        dataSet.colors = [UIColor(Color(hex: "58a6ff"))]
        dataSet.lineWidth = 2.5
        dataSet.drawCirclesEnabled = false
        dataSet.drawValuesEnabled = false
        dataSet.mode = .cubicBezier
        dataSet.highlightColor = UIColor(Color(hex: "58a6ff"))

        // Fill above zero with green, below with red
        dataSet.drawFilledEnabled = true
        dataSet.fillFormatter = ZeroLineFillFormatter()
        dataSet.fillColor = UIColor(Color(hex: "00e676"))
        dataSet.fillAlpha = 0.15

        let data = LineChartData(dataSet: dataSet)
        chart.data = data
        chart.notifyDataSetChanged()
    }
}

private class ZeroLineFillFormatter: FillFormatter {
    func getFillLinePosition(dataSet: LineChartDataSetProtocol, dataProvider: LineChartDataProvider) -> CGFloat {
        return 0
    }
}

struct PayoffDiagramView: View {
    let config: PayoffConfig
    @State private var sliderValues: [String: Double] = [:]

    var body: some View {
        VStack(alignment: .leading, spacing: 10) {
            Text(config.title)
                .font(.system(size: 15, weight: .semibold))
                .foregroundColor(.theme.textPrimary)

            Text(config.description)
                .font(.system(size: 13))
                .foregroundColor(.theme.textSecondary)

            PayoffLineChartUIView(payoffPoints: payoffPoints)
                .frame(height: 200)

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
            if let controls = config.controls {
                for control in controls {
                    sliderValues[control.id] = Double(control.defaultValue)
                }
            }
        }
    }

    private var currentPrice: Double {
        config.stockPrice ?? 100.0
    }

    private var payoffPoints: [(price: Double, pnl: Double)] {
        let minPrice = currentPrice * 0.7
        let maxPrice = currentPrice * 1.3
        let step = (maxPrice - minPrice) / 60.0

        return (0...60).map { i in
            let price = minPrice + Double(i) * step
            let totalPnL = (config.strategies ?? []).reduce(0.0) { acc, strategy in
                acc + computePayoff(strategy: strategy, atPrice: price)
            }
            return (price, totalPnL)
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

    private func computePayoff(strategy: OptionStrategy, atPrice price: Double) -> Double {
        switch strategy.type.lowercased() {
        case "long-call", "call":
            return max(price - strategy.strike, 0) - strategy.premium
        case "long-put", "put":
            return max(strategy.strike - price, 0) - strategy.premium
        case "short-call":
            return strategy.premium - max(price - strategy.strike, 0)
        case "short-put":
            return strategy.premium - max(strategy.strike - price, 0)
        default:
            return 0
        }
    }
}

#Preview {
    PayoffDiagramView(config: PayoffConfig(
        title: "Long Call Payoff",
        description: "Profit/loss at expiration for a long call option",
        strategies: [OptionStrategy(type: "long-call", strike: 150, premium: 5.0)],
        stockPrice: 155.0,
        controls: nil
    ))
    .padding()
    .background(Color.theme.bgPrimary)
}
