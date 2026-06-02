import SwiftUI

struct ChartsView: View {
    @State private var viewModel = ChartViewModel()
    @State private var showSMA20 = false
    @State private var showSMA50 = false
    @State private var showEMA12 = false
    @State private var showBollinger = false
    @State private var showRSI = false
    @State private var showMACD = false

    var body: some View {
        ScrollView {
            VStack(spacing: 16) {
                tickerPicker
                indicatorToggles
                candlestickChart
            }
            .padding(.horizontal, 16)
            .padding(.vertical, 12)
        }
        .background(Color.theme.bgPrimary)
        .navigationTitle("Charts")
        .task {
            viewModel.loadTickers()
            await viewModel.loadChartData()
        }
    }

    private var tickerPicker: some View {
        HStack {
            Text("Ticker")
                .font(.system(size: 14))
                .foregroundColor(.theme.textSecondary)

            Picker("Ticker", selection: $viewModel.selectedTicker) {
                ForEach(viewModel.availableTickers, id: \.self) { ticker in
                    Text(ticker).tag(ticker)
                }
            }
            .pickerStyle(.menu)
            .tint(.theme.blue)
            .onChange(of: viewModel.selectedTicker) { _, newValue in
                viewModel.selectTicker(newValue)
            }

            Spacer()
        }
        .padding(12)
        .background(Color.theme.bgCard)
        .cornerRadius(12)
        .overlay(
            RoundedRectangle(cornerRadius: 12)
                .stroke(Color.theme.border, lineWidth: 1)
        )
    }

    private var indicatorToggles: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack(spacing: 8) {
                indicatorToggle("SMA 20", isOn: $showSMA20)
                indicatorToggle("SMA 50", isOn: $showSMA50)
                indicatorToggle("EMA 12", isOn: $showEMA12)
                indicatorToggle("Bollinger", isOn: $showBollinger)
                indicatorToggle("RSI", isOn: $showRSI)
                indicatorToggle("MACD", isOn: $showMACD)
            }
        }
    }

    private func indicatorToggle(_ label: String, isOn: Binding<Bool>) -> some View {
        Button {
            isOn.wrappedValue.toggle()
        } label: {
            Text(label)
                .font(.system(size: 12, weight: .medium))
                .foregroundColor(isOn.wrappedValue ? .white : .theme.textSecondary)
                .padding(.horizontal, 12)
                .padding(.vertical, 7)
                .background(isOn.wrappedValue ? Color.theme.blue : Color.theme.bgCard)
                .cornerRadius(8)
                .overlay(
                    RoundedRectangle(cornerRadius: 8)
                        .stroke(isOn.wrappedValue ? Color.clear : Color.theme.border, lineWidth: 1)
                )
        }
    }

    private var candlestickChart: some View {
        VStack(alignment: .leading, spacing: 8) {
            if let last = viewModel.ohlcvData.last {
                HStack {
                    Text(viewModel.selectedTicker)
                        .font(.system(size: 16, weight: .bold, design: .monospaced))
                        .foregroundColor(.theme.textPrimary)

                    Spacer()

                    Text("$\(last.close, specifier: "%.2f")")
                        .font(.system(size: 16, weight: .semibold, design: .monospaced))
                        .foregroundColor(last.close >= last.open ? .theme.green : .theme.red)
                }
            }

            CandlestickChartUIView(
                ohlcvData: viewModel.ohlcvData,
                sma20: showSMA20 ? viewModel.sma(period: 20) : [],
                sma50: showSMA50 ? viewModel.sma(period: 50) : [],
                ema12: showEMA12 ? viewModel.ema(period: 12) : [],
                bollingerUpper: showBollinger ? viewModel.bollingerBands().upper : [],
                bollingerMiddle: showBollinger ? viewModel.bollingerBands().middle : [],
                bollingerLower: showBollinger ? viewModel.bollingerBands().lower : [],
                showVolume: true
            )
            .frame(height: 350)

            if showRSI {
                Text("RSI (14)")
                    .font(.system(size: 12, weight: .medium))
                    .foregroundColor(.theme.textSecondary)
                    .padding(.top, 4)

                RSIChartView(
                    rsiData: viewModel.rsi(),
                    ohlcvData: viewModel.ohlcvData
                )
                .frame(height: 150)
            }

            if showMACD {
                let macdData = viewModel.macd()
                Text("MACD (12, 26, 9)")
                    .font(.system(size: 12, weight: .medium))
                    .foregroundColor(.theme.textSecondary)
                    .padding(.top, 4)

                MACDChartView(
                    macdLine: macdData.macdLine,
                    signalLine: macdData.signalLine,
                    histogram: macdData.histogram,
                    ohlcvData: viewModel.ohlcvData
                )
                .frame(height: 150)
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
}

#Preview {
    NavigationStack {
        ChartsView()
    }
    .preferredColorScheme(.dark)
}
