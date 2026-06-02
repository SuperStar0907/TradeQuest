import SwiftUI

struct KeyConceptView: View {
    let title: String
    let content: String

    var body: some View {
        HStack(spacing: 0) {
            Rectangle()
                .fill(Color.theme.blue)
                .frame(width: 4)

            VStack(alignment: .leading, spacing: 8) {
                Text(title)
                    .font(.system(size: 15, weight: .semibold))
                    .foregroundColor(.theme.blue)

                HTMLTextView(html: content)
            }
            .padding(14)
        }
        .background(Color.theme.bgCard)
        .cornerRadius(12)
        .overlay(
            RoundedRectangle(cornerRadius: 12)
                .stroke(Color.theme.border, lineWidth: 1)
        )
    }
}

#Preview {
    KeyConceptView(
        title: "Key Concept",
        content: "A doji candlestick forms when the opening and closing prices are virtually equal."
    )
    .padding()
    .background(Color.theme.bgPrimary)
}
