import SwiftUI

struct TextSectionView: View {
    let content: String

    private var strippedText: String {
        content.replacingOccurrences(of: "<[^>]+>", with: "", options: .regularExpression)
            .replacingOccurrences(of: "&amp;", with: "&")
            .replacingOccurrences(of: "&lt;", with: "<")
            .replacingOccurrences(of: "&gt;", with: ">")
            .replacingOccurrences(of: "&nbsp;", with: " ")
            .replacingOccurrences(of: "&#39;", with: "'")
            .replacingOccurrences(of: "&quot;", with: "\"")
            .trimmingCharacters(in: .whitespacesAndNewlines)
    }

    var body: some View {
        Text(strippedText)
            .font(.system(size: 15))
            .foregroundColor(.theme.textPrimary)
            .lineSpacing(4)
    }
}

#Preview {
    TextSectionView(content: "<p>This is a <strong>sample</strong> paragraph with <em>HTML</em> tags that should be stripped.</p>")
        .padding()
        .background(Color.theme.bgPrimary)
}
