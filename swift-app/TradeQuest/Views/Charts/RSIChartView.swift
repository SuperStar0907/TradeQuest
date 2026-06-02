import SwiftUI
import DGCharts

struct RSIChartView: UIViewRepresentable {
    let rsiData: [(date: String, value: Double)]
    let ohlcvData: [OHLCV]

    func makeUIView(context: Context) -> LineChartView {
        let chart = LineChartView()
        chart.backgroundColor = UIColor(Color(hex: "0d1117"))
        chart.gridBackgroundColor = .clear
        chart.legend.enabled = false

        chart.pinchZoomEnabled = true
        chart.doubleTapToZoomEnabled = true
        chart.dragEnabled = true
        chart.scaleXEnabled = true
        chart.scaleYEnabled = false

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
        chart.rightAxis.axisMinimum = 0
        chart.rightAxis.axisMaximum = 100

        chart.setVisibleXRangeMaximum(60)

        return chart
    }

    func updateUIView(_ chart: LineChartView, context: Context) {
        guard !rsiData.isEmpty, !ohlcvData.isEmpty else {
            chart.data = nil
            return
        }

        let validData = ohlcvData.filter { d in
            d.open > 0 && d.high > 0 && d.low > 0 && d.close > 0
            && !d.open.isNaN && !d.close.isNaN
        }

        let entries = rsiData.compactMap { point -> ChartDataEntry? in
            guard let idx = validData.firstIndex(where: { $0.time == point.date }),
                  !point.value.isNaN, !point.value.isInfinite else { return nil }
            return ChartDataEntry(x: Double(idx), y: point.value)
        }
        guard !entries.isEmpty else {
            chart.data = nil
            return
        }

        let rsiSet = LineChartDataSet(entries: entries, label: "RSI")
        rsiSet.colors = [UIColor(Color(hex: "bc8cff"))]
        rsiSet.lineWidth = 1.5
        rsiSet.drawCirclesEnabled = false
        rsiSet.drawValuesEnabled = false
        rsiSet.mode = .cubicBezier

        // Overbought line at 70
        let overboughtEntries = [
            ChartDataEntry(x: entries.first!.x, y: 70),
            ChartDataEntry(x: entries.last!.x, y: 70)
        ]
        let overboughtSet = LineChartDataSet(entries: overboughtEntries, label: "70")
        overboughtSet.colors = [UIColor(Color(hex: "ff1744")).withAlphaComponent(0.5)]
        overboughtSet.lineWidth = 1
        overboughtSet.lineDashLengths = [4, 3]
        overboughtSet.drawCirclesEnabled = false
        overboughtSet.drawValuesEnabled = false

        // Oversold line at 30
        let oversoldEntries = [
            ChartDataEntry(x: entries.first!.x, y: 30),
            ChartDataEntry(x: entries.last!.x, y: 30)
        ]
        let oversoldSet = LineChartDataSet(entries: oversoldEntries, label: "30")
        oversoldSet.colors = [UIColor(Color(hex: "00e676")).withAlphaComponent(0.5)]
        oversoldSet.lineWidth = 1
        oversoldSet.lineDashLengths = [4, 3]
        oversoldSet.drawCirclesEnabled = false
        oversoldSet.drawValuesEnabled = false

        chart.data = LineChartData(dataSets: [rsiSet, overboughtSet, oversoldSet])
        chart.setVisibleXRangeMaximum(60)
        chart.moveViewToX(Double(max(0, validData.count - 60)))
        chart.notifyDataSetChanged()
    }
}
