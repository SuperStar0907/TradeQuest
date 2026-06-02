import SwiftUI

struct ProgressRing: View {
    let progress: Double
    var color: Color = .theme.green
    var size: CGFloat = 60
    var lineWidth: CGFloat = 6

    private var clampedProgress: Double {
        min(max(progress, 0), 1)
    }

    var body: some View {
        ZStack {
            Circle()
                .stroke(color.opacity(0.2), lineWidth: lineWidth)

            Circle()
                .trim(from: 0, to: clampedProgress)
                .stroke(color, style: StrokeStyle(lineWidth: lineWidth, lineCap: .round))
                .rotationEffect(.degrees(-90))
                .animation(.easeInOut(duration: 0.5), value: clampedProgress)

            Text("\(Int(clampedProgress * 100))%")
                .font(.system(size: size * 0.22, weight: .bold, design: .monospaced))
                .foregroundColor(.theme.textPrimary)
        }
        .frame(width: size, height: size)
    }
}

#Preview {
    HStack(spacing: 20) {
        ProgressRing(progress: 0.75, color: .theme.green)
        ProgressRing(progress: 0.45, color: .theme.blue, size: 80)
        ProgressRing(progress: 0.2, color: .theme.orange, size: 40)
    }
    .padding()
    .background(Color.theme.bgPrimary)
}
