import SwiftUI

struct XPBadge: View {
    let xp: Int

    var body: some View {
        HStack(spacing: 4) {
            Image(systemName: "star.fill")
                .font(.system(size: 10))
            Text("\(xp) XP")
                .font(.system(size: 12, design: .monospaced))
                .fontWeight(.semibold)
        }
        .foregroundColor(.theme.orange)
        .padding(.horizontal, 8)
        .padding(.vertical, 4)
        .background(Color.theme.orange.opacity(0.15))
        .cornerRadius(12)
    }
}

#Preview {
    XPBadge(xp: 1250)
        .padding()
        .background(Color.theme.bgPrimary)
}
