import SwiftUI
import DGCharts

struct CandlestickChartUIView: UIViewRepresentable {
    let ohlcvData: [OHLCV]
    var sma20: [(date: String, value: Double)] = []
    var sma50: [(date: String, value: Double)] = []
    var ema12: [(date: String, value: Double)] = []
    var bollingerUpper: [(date: String, value: Double)] = []
    var bollingerMiddle: [(date: String, value: Double)] = []
    var bollingerLower: [(date: String, value: Double)] = []
    var showVolume: Bool = true

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

        chart.setVisibleXRangeMaximum(60)

        return chart
    }

    func updateUIView(_ chart: CombinedChartView, context: Context) {
        guard !ohlcvData.isEmpty else {
            chart.data = nil
            return
        }

        // Filter out invalid data points
        let validData = ohlcvData.filter { d in
            d.open > 0 && d.high > 0 && d.low > 0 && d.close > 0
            && !d.open.isNaN && !d.high.isNaN && !d.low.isNaN && !d.close.isNaN
            && !d.open.isInfinite && !d.high.isInfinite && !d.low.isInfinite && !d.close.isInfinite
        }
        guard !validData.isEmpty else {
            chart.data = nil
            return
        }

        let data = CombinedChartData()

        // Candlestick data
        let candleEntries = validData.enumerated().map { i, d in
            CandleChartDataEntry(x: Double(i), shadowH: d.high, shadowL: d.low, open: d.open, close: d.close)
        }
        let candleSet = CandleChartDataSet(entries: candleEntries, label: "Price")
        candleSet.increasingColor = UIColor(Color(hex: "00e676"))
        candleSet.decreasingColor = UIColor(Color(hex: "ff1744"))
        candleSet.increasingFilled = true
        candleSet.decreasingFilled = true
        candleSet.shadowColorSameAsCandle = true
        candleSet.shadowWidth = 1
        candleSet.drawValuesEnabled = false
        candleSet.highlightColor = UIColor(Color(hex: "58a6ff"))
        data.candleData = CandleChartData(dataSet: candleSet)

        // Volume as bar data — scale to bottom 20% of price range
        if showVolume {
            let minPrice = validData.map(\.low).min() ?? 0
            let maxPrice = validData.map(\.high).max() ?? 1
            let priceRange = maxPrice - minPrice
            let maxVolume = Double(validData.map(\.volume).max() ?? 1)

            let barEntries = validData.enumerated().map { i, d in
                // Scale volume to 20% of price range, anchored at bottom
                let scaledVolume = (Double(d.volume) / maxVolume) * priceRange * 0.2 + minPrice - priceRange * 0.05
                return BarChartDataEntry(x: Double(i), y: max(minPrice - priceRange * 0.05, scaledVolume))
            }
            let barSet = BarChartDataSet(entries: barEntries, label: "Volume")
            barSet.colors = validData.map { d in
                d.close >= d.open
                    ? UIColor(Color(hex: "00e676")).withAlphaComponent(0.3)
                    : UIColor(Color(hex: "ff1744")).withAlphaComponent(0.3)
            }
            barSet.drawValuesEnabled = false
            barSet.axisDependency = .left
            data.barData = BarChartData(dataSet: barSet)

            // Enable left axis just for volume scaling but hide labels
            chart.leftAxis.enabled = true
            chart.leftAxis.drawLabelsEnabled = false
            chart.leftAxis.drawGridLinesEnabled = false
            chart.leftAxis.drawAxisLineEnabled = false
        }

        // SMA/EMA line overlays
        var lineSets: [LineChartDataSet] = []
        func addLine(_ points: [(date: String, value: Double)], color: UIColor, label: String) {
            guard !points.isEmpty else { return }
            let entries = points.compactMap { point -> ChartDataEntry? in
                guard let idx = validData.firstIndex(where: { $0.time == point.date }),
                      !point.value.isNaN, !point.value.isInfinite, point.value > 0 else { return nil }
                return ChartDataEntry(x: Double(idx), y: point.value)
            }
            guard !entries.isEmpty else { return }
            lineSets.append(makeLineSet(entries: entries, color: color, label: label))
        }
        addLine(sma20, color: UIColor(Color(hex: "2196f3")), label: "SMA 20")
        addLine(sma50, color: UIColor(Color(hex: "ff9800")), label: "SMA 50")
        addLine(ema12, color: UIColor(Color(hex: "39d2e0")), label: "EMA 12")

        func addDashedLine(_ points: [(date: String, value: Double)], color: UIColor, label: String) {
            guard !points.isEmpty else { return }
            let entries = points.compactMap { point -> ChartDataEntry? in
                guard let idx = validData.firstIndex(where: { $0.time == point.date }),
                      !point.value.isNaN, !point.value.isInfinite, point.value > 0 else { return nil }
                return ChartDataEntry(x: Double(idx), y: point.value)
            }
            guard !entries.isEmpty else { return }
            let set = makeLineSet(entries: entries, color: color, label: label)
            set.lineDashLengths = [5, 3]
            lineSets.append(set)
        }

        addLine(bollingerMiddle, color: UIColor(Color(hex: "bc8cff")), label: "BB Mid")
        addDashedLine(bollingerUpper, color: UIColor(Color(hex: "bc8cff")).withAlphaComponent(0.7), label: "BB Upper")
        addDashedLine(bollingerLower, color: UIColor(Color(hex: "bc8cff")).withAlphaComponent(0.7), label: "BB Lower")

        if !lineSets.isEmpty {
            data.lineData = LineChartData(dataSets: lineSets)
        }

        chart.data = data
        chart.setVisibleXRangeMaximum(60)
        chart.moveViewToX(Double(max(0, validData.count - 60)))
        chart.notifyDataSetChanged()
    }

    private func makeLineSet(entries: [ChartDataEntry], color: UIColor, label: String) -> LineChartDataSet {
        let set = LineChartDataSet(entries: entries, label: label)
        set.colors = [color]
        set.lineWidth = 1.5
        set.drawCirclesEnabled = false
        set.drawValuesEnabled = false
        set.mode = .cubicBezier
        return set
    }
}
