import SwiftUI
import DGCharts

struct MACDChartView: UIViewRepresentable {
    let macdLine: [(date: String, value: Double)]
    let signalLine: [(date: String, value: Double)]
    let histogram: [(date: String, value: Double)]
    let ohlcvData: [OHLCV]

    func makeUIView(context: Context) -> CombinedChartView {
        let chart = CombinedChartView()
        chart.backgroundColor = UIColor(Color(hex: "0d1117"))
        chart.gridBackgroundColor = .clear
        chart.legend.enabled = false

        chart.pinchZoomEnabled = true
        chart.doubleTapToZoomEnabled = true
        chart.dragEnabled = true
        chart.scaleXEnabled = true
        chart.scaleYEnabled = true

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

        chart.setVisibleXRangeMaximum(60)

        return chart
    }

    func updateUIView(_ chart: CombinedChartView, context: Context) {
        guard !macdLine.isEmpty, !ohlcvData.isEmpty else {
            chart.data = nil
            return
        }

        let validData = ohlcvData.filter { d in
            d.open > 0 && d.high > 0 && d.low > 0 && d.close > 0
            && !d.open.isNaN && !d.close.isNaN
        }

        let data = CombinedChartData()

        // Histogram as bar data
        if !histogram.isEmpty {
            let barEntries = histogram.compactMap { point -> BarChartDataEntry? in
                guard let idx = validData.firstIndex(where: { $0.time == point.date }),
                      !point.value.isNaN, !point.value.isInfinite else { return nil }
                return BarChartDataEntry(x: Double(idx), y: point.value)
            }
            if !barEntries.isEmpty {
                let barSet = BarChartDataSet(entries: barEntries, label: "Histogram")
                barSet.colors = barEntries.map { entry in
                    entry.y >= 0
                        ? UIColor(Color(hex: "00e676")).withAlphaComponent(0.5)
                        : UIColor(Color(hex: "ff1744")).withAlphaComponent(0.5)
                }
                barSet.drawValuesEnabled = false
                data.barData = BarChartData(dataSet: barSet)
            }
        }

        // MACD and Signal lines
        var lineSets: [LineChartDataSet] = []

        func addLine(_ points: [(date: String, value: Double)], color: UIColor, label: String) {
            let entries = points.compactMap { point -> ChartDataEntry? in
                guard let idx = validData.firstIndex(where: { $0.time == point.date }),
                      !point.value.isNaN, !point.value.isInfinite else { return nil }
                return ChartDataEntry(x: Double(idx), y: point.value)
            }
            guard !entries.isEmpty else { return }
            let set = LineChartDataSet(entries: entries, label: label)
            set.colors = [color]
            set.lineWidth = 1.5
            set.drawCirclesEnabled = false
            set.drawValuesEnabled = false
            set.mode = .cubicBezier
            lineSets.append(set)
        }

        addLine(macdLine, color: UIColor(Color(hex: "58a6ff")), label: "MACD")
        addLine(signalLine, color: UIColor(Color(hex: "f0883e")), label: "Signal")

        if !lineSets.isEmpty {
            data.lineData = LineChartData(dataSets: lineSets)
        }

        chart.data = data
        chart.setVisibleXRangeMaximum(60)
        chart.moveViewToX(Double(max(0, validData.count - 60)))
        chart.notifyDataSetChanged()
    }
}
