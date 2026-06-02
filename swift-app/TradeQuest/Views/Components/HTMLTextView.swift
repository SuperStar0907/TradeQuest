import SwiftUI

struct HTMLTextView: View {
    let html: String

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            ForEach(Array(parseHTML(html).enumerated()), id: \.offset) { _, element in
                renderElement(element)
            }
        }
    }

    private func renderElement(_ element: HTMLElement) -> some View {
        Group {
            switch element.tag {
            case .h3:
                Text(element.text)
                    .font(.title3)
                    .fontWeight(.bold)
                    .foregroundColor(.theme.textPrimary)
                    .padding(.top, 4)
            case .h4:
                Text(element.text)
                    .font(.headline)
                    .fontWeight(.semibold)
                    .foregroundColor(.theme.textPrimary)
                    .padding(.top, 2)
            case .paragraph:
                Text(attributedText(element.text))
                    .font(.body)
                    .foregroundColor(.theme.textSecondary)
                    .lineSpacing(4)
            case .listItem:
                HStack(alignment: .top, spacing: 8) {
                    Text(element.ordered ? "\(element.index)." : "•")
                        .foregroundColor(.theme.textMuted)
                    Text(attributedText(element.text))
                        .font(.body)
                        .foregroundColor(.theme.textSecondary)
                }
                .padding(.leading, 12)
            }
        }
    }

    private func attributedText(_ text: String) -> AttributedString {
        var result = AttributedString()
        var remaining = text

        while !remaining.isEmpty {
            if let strongRange = remaining.range(of: "<strong>") {
                let before = String(remaining[remaining.startIndex..<strongRange.lowerBound])
                if !before.isEmpty {
                    result.append(AttributedString(before))
                }
                remaining = String(remaining[strongRange.upperBound...])

                if let endRange = remaining.range(of: "</strong>") {
                    let boldText = String(remaining[remaining.startIndex..<endRange.lowerBound])
                    var boldAttr = AttributedString(boldText)
                    boldAttr.font = .body.bold()
                    result.append(boldAttr)
                    remaining = String(remaining[endRange.upperBound...])
                }
            } else if let emRange = remaining.range(of: "<em>") {
                let before = String(remaining[remaining.startIndex..<emRange.lowerBound])
                if !before.isEmpty {
                    result.append(AttributedString(before))
                }
                remaining = String(remaining[emRange.upperBound...])

                if let endRange = remaining.range(of: "</em>") {
                    let italicText = String(remaining[remaining.startIndex..<endRange.lowerBound])
                    var italicAttr = AttributedString(italicText)
                    italicAttr.font = .body.italic()
                    result.append(italicAttr)
                    remaining = String(remaining[endRange.upperBound...])
                }
            } else {
                result.append(AttributedString(remaining))
                remaining = ""
            }
        }

        return result
    }
}

private enum HTMLTag {
    case h3, h4, paragraph, listItem
}

private struct HTMLElement {
    let tag: HTMLTag
    let text: String
    var ordered: Bool = false
    var index: Int = 0
}

private func parseHTML(_ html: String) -> [HTMLElement] {
    var elements: [HTMLElement] = []
    let content = html
        .replacingOccurrences(of: "<br>", with: "\n")
        .replacingOccurrences(of: "<br/>", with: "\n")
        .replacingOccurrences(of: "<br />", with: "\n")

    let blockPattern = #"<(h3|h4|p|ul|ol|li)(?:[^>]*)>(.*?)</\1>"#
    guard let regex = try? NSRegularExpression(pattern: blockPattern, options: [.dotMatchesLineSeparators]) else {
        let stripped = stripAllTags(content)
        if !stripped.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty {
            elements.append(HTMLElement(tag: .paragraph, text: stripped))
        }
        return elements
    }

    let nsContent = content as NSString
    let matches = regex.matches(in: content, range: NSRange(location: 0, length: nsContent.length))

    var isOrdered = false
    var listIndex = 0
    var lastMatchEnd = 0

    for match in matches {
        // Capture any text between the previous match end and this match start
        let gapStart = lastMatchEnd
        let gapEnd = match.range.location
        if gapEnd > gapStart {
            let gapText = nsContent.substring(with: NSRange(location: gapStart, length: gapEnd - gapStart))
            let stripped = stripAllTags(gapText).trimmingCharacters(in: .whitespacesAndNewlines)
            if !stripped.isEmpty {
                elements.append(HTMLElement(tag: .paragraph, text: stripped))
            }
        }
        lastMatchEnd = match.range.location + match.range.length

        let tag = nsContent.substring(with: match.range(at: 1))
        let inner = nsContent.substring(with: match.range(at: 2))
        let cleanText = stripAllTags(inner).trimmingCharacters(in: .whitespacesAndNewlines)

        guard !cleanText.isEmpty else { continue }

        switch tag {
        case "h3":
            elements.append(HTMLElement(tag: .h3, text: cleanText))
        case "h4":
            elements.append(HTMLElement(tag: .h4, text: cleanText))
        case "ol":
            isOrdered = true
            listIndex = 0
            let liElements = parseLiElements(inner, ordered: true)
            elements.append(contentsOf: liElements)
            isOrdered = false
        case "ul":
            isOrdered = false
            let liElements = parseLiElements(inner, ordered: false)
            elements.append(contentsOf: liElements)
        case "li":
            listIndex += 1
            elements.append(HTMLElement(tag: .listItem, text: cleanText, ordered: isOrdered, index: listIndex))
        default:
            elements.append(HTMLElement(tag: .paragraph, text: cleanText))
        }
    }

    // Capture trailing text after last match
    if lastMatchEnd < nsContent.length {
        let trailing = nsContent.substring(from: lastMatchEnd)
        let stripped = stripAllTags(trailing).trimmingCharacters(in: .whitespacesAndNewlines)
        if !stripped.isEmpty {
            elements.append(HTMLElement(tag: .paragraph, text: stripped))
        }
    }

    if elements.isEmpty {
        let stripped = stripAllTags(content).trimmingCharacters(in: .whitespacesAndNewlines)
        if !stripped.isEmpty {
            elements.append(HTMLElement(tag: .paragraph, text: stripped))
        }
    }

    return elements
}

private func parseLiElements(_ html: String, ordered: Bool) -> [HTMLElement] {
    var elements: [HTMLElement] = []
    let pattern = #"<li(?:[^>]*)>(.*?)</li>"#
    guard let regex = try? NSRegularExpression(pattern: pattern, options: [.dotMatchesLineSeparators]) else {
        return elements
    }

    let nsHTML = html as NSString
    let matches = regex.matches(in: html, range: NSRange(location: 0, length: nsHTML.length))

    for (index, match) in matches.enumerated() {
        let inner = nsHTML.substring(with: match.range(at: 1))
        let cleanText = stripAllTags(inner).trimmingCharacters(in: .whitespacesAndNewlines)
        guard !cleanText.isEmpty else { continue }
        elements.append(HTMLElement(tag: .listItem, text: cleanText, ordered: ordered, index: index + 1))
    }

    return elements
}

private func stripAllTags(_ html: String) -> String {
    html.replacingOccurrences(of: #"<[^>]+>"#, with: "", options: .regularExpression)
}

#Preview {
    ScrollView {
        HTMLTextView(html: """
        <h3>Understanding Markets</h3>
        <p>A <strong>stock market</strong> is where buyers and sellers trade shares of companies.</p>
        <h4>Key Concepts</h4>
        <ul>
            <li>Supply and <em>demand</em> drive prices</li>
            <li>Markets can be <strong>bullish</strong> or bearish</li>
        </ul>
        """)
        .padding()
    }
    .background(Color.theme.bgPrimary)
}
