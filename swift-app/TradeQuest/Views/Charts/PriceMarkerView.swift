import SwiftUI
import DGCharts

class PriceMarkerView: MarkerView {
    private let label: UILabel = {
        let label = UILabel()
        label.font = .monospacedDigitSystemFont(ofSize: 12, weight: .medium)
        label.textColor = .white
        label.textAlignment = .center
        label.backgroundColor = UIColor(Color(hex: "58a6ff"))
        label.layer.cornerRadius = 4
        label.layer.masksToBounds = true
        return label
    }()

    override init(frame: CGRect) {
        super.init(frame: frame)
        addSubview(label)
    }

    required init?(coder: NSCoder) {
        super.init(coder: coder)
        addSubview(label)
    }

    override func refreshContent(entry: ChartDataEntry, highlight: Highlight) {
        if let candleEntry = entry as? CandleChartDataEntry {
            label.text = String(format: " $%.2f ", candleEntry.close)
        } else {
            label.text = String(format: " $%.2f ", entry.y)
        }
        label.sizeToFit()
        let padding: CGFloat = 8
        label.frame = CGRect(
            x: 0,
            y: 0,
            width: label.frame.width + padding,
            height: label.frame.height + padding
        )
        self.frame.size = label.frame.size
        super.refreshContent(entry: entry, highlight: highlight)
    }

    override func offsetForDrawing(atPoint point: CGPoint) -> CGPoint {
        var offset = CGPoint(x: -self.frame.size.width / 2, y: -self.frame.size.height - 8)
        guard let chartView = chartView else { return offset }

        if point.x + offset.x < 0 {
            offset.x = -point.x
        } else if point.x + frame.size.width + offset.x > chartView.bounds.width {
            offset.x = chartView.bounds.width - point.x - frame.size.width
        }

        if point.y + offset.y < 0 {
            offset.y = 8
        }

        return offset
    }
}
