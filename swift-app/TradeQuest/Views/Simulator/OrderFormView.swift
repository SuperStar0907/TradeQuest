import SwiftUI

struct OrderFormView: View {
    @State private var isBuy = true
    @State private var orderType = "Market"
    @State private var ticker = "AAPL"
    @State private var shares = 10
    @State private var limitPrice = ""

    private let orderTypes = ["Market", "Limit"]
    private let currentPrice = 178.52

    private var estimatedCost: Double {
        if orderType == "Limit", let limit = Double(limitPrice) {
            return limit * Double(shares)
        }
        return currentPrice * Double(shares)
    }

    var body: some View {
        VStack(alignment: .leading, spacing: 14) {
            Text("Place Order")
                .font(.system(size: 15, weight: .semibold))
                .foregroundColor(.theme.textPrimary)

            buySellToggle
            orderTypeRow
            sharesRow

            if orderType == "Limit" {
                limitPriceRow
            }

            estimatedCostRow
            executeButton
        }
        .padding(14)
        .background(Color.theme.bgCard)
        .cornerRadius(12)
        .overlay(
            RoundedRectangle(cornerRadius: 12)
                .stroke(Color.theme.border, lineWidth: 1)
        )
    }

    private var buySellToggle: some View {
        HStack(spacing: 0) {
            Button {
                isBuy = true
            } label: {
                Text("Buy")
                    .font(.system(size: 14, weight: .semibold))
                    .foregroundColor(isBuy ? .white : .theme.textSecondary)
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 10)
                    .background(isBuy ? Color.theme.green : Color.clear)
            }

            Button {
                isBuy = false
            } label: {
                Text("Sell")
                    .font(.system(size: 14, weight: .semibold))
                    .foregroundColor(!isBuy ? .white : .theme.textSecondary)
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 10)
                    .background(!isBuy ? Color.theme.red : Color.clear)
            }
        }
        .background(Color.theme.bgTertiary)
        .cornerRadius(8)
    }

    private var orderTypeRow: some View {
        HStack {
            Text("Order Type")
                .font(.system(size: 13))
                .foregroundColor(.theme.textSecondary)
            Spacer()
            Picker("Order Type", selection: $orderType) {
                ForEach(orderTypes, id: \.self) { type in
                    Text(type).tag(type)
                }
            }
            .pickerStyle(.segmented)
            .frame(width: 160)
        }
    }

    private var sharesRow: some View {
        HStack {
            Text("Shares")
                .font(.system(size: 13))
                .foregroundColor(.theme.textSecondary)
            Spacer()
            HStack(spacing: 12) {
                Button {
                    if shares > 1 { shares -= 1 }
                } label: {
                    Image(systemName: "minus.circle.fill")
                        .foregroundColor(.theme.textMuted)
                }

                Text("\(shares)")
                    .font(.system(size: 15, weight: .medium, design: .monospaced))
                    .foregroundColor(.theme.textPrimary)
                    .frame(width: 40)

                Button {
                    shares += 1
                } label: {
                    Image(systemName: "plus.circle.fill")
                        .foregroundColor(.theme.blue)
                }
            }
        }
    }

    private var limitPriceRow: some View {
        HStack {
            Text("Limit Price")
                .font(.system(size: 13))
                .foregroundColor(.theme.textSecondary)
            Spacer()
            TextField("$0.00", text: $limitPrice)
                .font(.system(size: 14, design: .monospaced))
                .foregroundColor(.theme.textPrimary)
                .keyboardType(.decimalPad)
                .multilineTextAlignment(.trailing)
                .frame(width: 100)
                .padding(8)
                .background(Color.theme.bgTertiary)
                .cornerRadius(6)
        }
    }

    private var estimatedCostRow: some View {
        HStack {
            Text("Estimated Cost")
                .font(.system(size: 13))
                .foregroundColor(.theme.textSecondary)
            Spacer()
            Text(estimatedCost.asCurrency())
                .font(.system(size: 15, weight: .semibold, design: .monospaced))
                .foregroundColor(.theme.textPrimary)
        }
        .padding(.top, 4)
    }

    private var executeButton: some View {
        Button {
            // Execute trade action
        } label: {
            Text(isBuy ? "Buy \(ticker)" : "Sell \(ticker)")
                .font(.system(size: 15, weight: .semibold))
                .foregroundColor(.white)
                .frame(maxWidth: .infinity)
                .padding(.vertical, 12)
                .background(isBuy ? Color.theme.green : Color.theme.red)
                .cornerRadius(8)
        }
    }
}

#Preview {
    OrderFormView()
        .padding()
        .background(Color.theme.bgPrimary)
}
