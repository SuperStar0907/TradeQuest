import Foundation

struct ChangelogEntry: Identifiable {
    let id = UUID()
    let version: String
    let date: String
    let summary: String
    let changes: [String]
}

let changelog: [ChangelogEntry] = [
    ChangelogEntry(
        version: "1.1.0",
        date: "2026-04-21",
        summary: "Major Update — DGCharts, Live Monitor, UI Polish",
        changes: [
            "Replaced Swift Charts with DGCharts — professional candlestick charts with pinch-to-zoom, pan, and crosshair",
            "Added Bollinger Bands, RSI sub-chart, and MACD sub-chart indicators",
            "Simulator now has full playback controls — play/pause, step forward/back, speed picker (1x-10x)",
            "Market Monitor fetches real-time data from Yahoo Finance",
            "Added Top Movers as horizontal scrolling red/green stock cards",
            "Key Metrics displayed as colored cards with arrows",
            "Region filter (All/India/Global) and category filters working",
            "IST/ET clock with market open/closed status",
            "Treasury yields, volatility (VIX), and commodity sections",
            "Books & Courses now loads all 39 books and 24 courses (fixed JSON decoding)",
            "Reference library shows real data — 89 glossary terms, 38 formulas with styled formula boxes, 31 patterns, 24 strategies",
            "Dashboard shows real progress — lesson completion, quiz scores, XP, streak",
            "HTML content rendering fixed — bold, italic, lists display properly in lessons",
            "Keychain auto-backup — progress survives app reinstall automatically",
            "Dark/Light/System theme toggle in Settings",
            "Haptic feedback on all interactions",
            "Formula display redesigned with orange-bordered monospaced boxes",
            "App icon — green uptrend arrow on dark background",
        ]
    ),
    ChangelogEntry(
        version: "1.0.0",
        date: "2026-04-20",
        summary: "Initial Release",
        changes: [
            "35 interactive lessons across 4 tracks",
            "7 quiz categories with 99 questions and ELO ratings",
            "Paper trading simulator with portfolio tracking",
            "Live market monitor with India/Global filter",
            "Reference library: glossary, formulas, patterns, strategies",
            "39 books and 24 courses with mind maps",
            "Data export/import for 7-day reinstall cycle",
            "Keychain auto-backup survives app deletion",
            "Dark theme optimized for OLED displays",
        ]
    ),
]
