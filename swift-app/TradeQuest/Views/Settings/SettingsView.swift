import SwiftUI
import UniformTypeIdentifiers

struct SettingsView: View {
    @State private var showResetAlert = false
    @State private var showExportDocument = false
    @State private var showImportPicker = false
    @State private var exportDocument: JSONDocument?
    @State private var importSuccess = false
    @State private var importError: String?
    @State private var themeManager = ThemeManager()

    private var appVersion: String {
        Bundle.main.infoDictionary?["CFBundleShortVersionString"] as? String ?? "1.0.0"
    }

    private var daysSinceInstall: Int {
        guard let firstLaunch = UserDefaults.standard.object(forKey: "tq_firstLaunch") as? Date else {
            UserDefaults.standard.set(Date(), forKey: "tq_firstLaunch")
            return 0
        }
        return Calendar.current.dateComponents([.day], from: firstLaunch, to: Date()).day ?? 0
    }

    private var daysRemaining: Int {
        max(0, 7 - daysSinceInstall)
    }

    private var reinstallProgress: Double {
        Double(daysSinceInstall) / 7.0
    }

    var body: some View {
        ScrollView {
            VStack(spacing: 0) {
                appInfoSection
                daysUntilReinstallSection
                dataManagementSection
                themeSection
                changelogSection
                aboutSection
            }
            .padding(.horizontal, 16)
            .padding(.vertical, 12)
        }
        .background(Color.theme.bgPrimary)
        .navigationTitle("Settings")
        .alert("Reset All Data", isPresented: $showResetAlert) {
            Button("Cancel", role: .cancel) {}
            Button("Reset", role: .destructive) {
                HapticManager.notification(.warning)
                BackupService.resetAllData()
            }
        } message: {
            Text("This will permanently delete all your progress, portfolio, and settings. This cannot be undone.")
        }
        .alert("Import Successful", isPresented: $importSuccess) {
            Button("OK", role: .cancel) {}
        } message: {
            Text("Your progress has been restored successfully.")
        }
        .alert("Import Failed", isPresented: .init(
            get: { importError != nil },
            set: { if !$0 { importError = nil } }
        )) {
            Button("OK", role: .cancel) {}
        } message: {
            Text(importError ?? "Unknown error")
        }
        .fileExporter(
            isPresented: $showExportDocument,
            document: exportDocument,
            contentType: .json,
            defaultFilename: "tradequest-backup-\(formattedDate).json"
        ) { result in
            switch result {
            case .success:
                HapticManager.notification(.success)
            case .failure:
                HapticManager.notification(.error)
            }
        }
        .fileImporter(
            isPresented: $showImportPicker,
            allowedContentTypes: [.json],
            allowsMultipleSelection: false
        ) { result in
            handleImport(result)
        }
    }

    // MARK: - App Info

    private var appInfoSection: some View {
        VStack(spacing: 0) {
            sectionHeader("APP INFO")

            VStack(spacing: 12) {
                HStack(spacing: 14) {
                    RoundedRectangle(cornerRadius: 12)
                        .fill(Color.theme.blue.opacity(0.15))
                        .frame(width: 52, height: 52)
                        .overlay(
                            Image(systemName: "chart.line.uptrend.xyaxis")
                                .font(.title2)
                                .foregroundColor(Color.theme.blue)
                        )

                    VStack(alignment: .leading, spacing: 2) {
                        HStack(spacing: 8) {
                            Text("TradeQuest")
                                .font(.headline.monospaced())
                                .foregroundColor(Color.theme.textPrimary)
                            Text("v\(appVersion)")
                                .font(.caption.monospaced())
                                .foregroundColor(Color.theme.textMuted)
                                .padding(.horizontal, 6)
                                .padding(.vertical, 2)
                                .background(Color.theme.border.opacity(0.5))
                                .clipShape(Rectangle())
                        }
                        Text("Master trading through interactive lessons")
                            .font(.caption)
                            .foregroundColor(Color.theme.textSecondary)
                    }

                    Spacer()
                }
            }
            .padding(16)
            .background(Color.theme.bgSecondary)
            .clipShape(Rectangle())
        }
        .padding(.bottom, 20)
    }

    // MARK: - Days Until Reinstall

    private var daysUntilReinstallSection: some View {
        VStack(spacing: 0) {
            sectionHeader("DAYS UNTIL REINSTALL")

            VStack(spacing: 12) {
                HStack {
                    Text("\(daysRemaining) day\(daysRemaining == 1 ? "" : "s") remaining")
                        .font(.subheadline.monospaced())
                        .foregroundColor(daysRemaining <= 2 ? Color.theme.red : Color.theme.textPrimary)
                    Spacer()
                    Text("\(daysSinceInstall)/7")
                        .font(.caption.monospaced())
                        .foregroundColor(Color.theme.textMuted)
                }

                GeometryReader { geometry in
                    ZStack(alignment: .leading) {
                        Rectangle()
                            .fill(Color.theme.border)
                            .frame(height: 8)

                        Rectangle()
                            .fill(daysRemaining <= 2 ? Color.theme.red : Color.theme.orange)
                            .frame(width: geometry.size.width * reinstallProgress, height: 8)
                    }
                }
                .frame(height: 8)

                if daysRemaining <= 2 {
                    HStack(spacing: 6) {
                        Image(systemName: "exclamationmark.triangle.fill")
                            .font(.caption)
                            .foregroundColor(Color.theme.red)
                        Text("Export your data soon — certificate expiring")
                            .font(.caption)
                            .foregroundColor(Color.theme.red)
                        Spacer()
                    }
                }
            }
            .padding(16)
            .background(Color.theme.bgSecondary)
            .clipShape(Rectangle())
        }
        .padding(.bottom, 20)
    }

    // MARK: - Data Management

    private var dataManagementSection: some View {
        VStack(spacing: 0) {
            sectionHeader("DATA MANAGEMENT")

            VStack(spacing: 12) {
                // Auto-backup status
                HStack(spacing: 10) {
                    Image(systemName: "checkmark.shield.fill")
                        .font(.title3)
                        .foregroundColor(Color.theme.green)
                    VStack(alignment: .leading, spacing: 2) {
                        Text("Auto-Backup Active")
                            .font(.subheadline.monospaced().weight(.medium))
                            .foregroundColor(Color.theme.green)
                        Text("Your progress is saved to Keychain automatically. It will survive app deletion and restore on reinstall — no action needed.")
                            .font(.caption)
                            .foregroundColor(Color.theme.textMuted)
                    }
                }
                .padding(12)
                .background(Color.theme.green.opacity(0.08))
                .overlay(Rectangle().stroke(Color.theme.green.opacity(0.3), lineWidth: 1))

                Divider().background(Color.theme.border)

                // Manual backup section
                Text("MANUAL BACKUP")
                    .font(.system(size: 10, weight: .bold, design: .monospaced))
                    .foregroundColor(Color.theme.textMuted)
                    .frame(maxWidth: .infinity, alignment: .leading)
                    .tracking(1)

                Button {
                    HapticManager.impact(.light)
                    exportData()
                } label: {
                    HStack {
                        Image(systemName: "square.and.arrow.up")
                        Text("Export as JSON File")
                            .font(.subheadline.monospaced())
                    }
                    .foregroundColor(Color.theme.blue)
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 12)
                    .overlay(Rectangle().stroke(Color.theme.blue.opacity(0.5), lineWidth: 1))
                }

                Button {
                    HapticManager.impact(.light)
                    showImportPicker = true
                } label: {
                    HStack {
                        Image(systemName: "square.and.arrow.down")
                        Text("Import from JSON File")
                            .font(.subheadline.monospaced())
                    }
                    .foregroundColor(Color.theme.orange)
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 12)
                    .overlay(Rectangle().stroke(Color.theme.orange.opacity(0.5), lineWidth: 1))
                }

                Text("Manual export is optional — use it as an extra backup or to transfer data between devices.")
                    .font(.caption)
                    .foregroundColor(Color.theme.textMuted)
                    .frame(maxWidth: .infinity, alignment: .leading)

                Divider().background(Color.theme.border)

                // Reinstall guide
                VStack(alignment: .leading, spacing: 8) {
                    Text("QUICK REINSTALL GUIDE")
                        .font(.system(size: 10, weight: .bold, design: .monospaced))
                        .foregroundColor(Color.theme.textMuted)
                        .tracking(1)

                    VStack(alignment: .leading, spacing: 6) {
                        guideStep(number: "1", text: "Delete the old app from your iPhone")
                        guideStep(number: "2", text: "Open Xcode, connect phone, hit Run")
                        guideStep(number: "3", text: "Open TradeQuest — progress auto-restores from Keychain!")
                    }
                }

                Divider().background(Color.theme.border)

                Button {
                    HapticManager.impact(.heavy)
                    showResetAlert = true
                } label: {
                    HStack {
                        Image(systemName: "trash")
                        Text("Reset All Data")
                            .font(.subheadline.monospaced())
                    }
                    .foregroundColor(Color.theme.red)
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 12)
                    .overlay(Rectangle().stroke(Color.theme.red.opacity(0.5), lineWidth: 1))
                }
            }
            .padding(16)
            .background(Color.theme.bgSecondary)
            .clipShape(Rectangle())
        }
        .padding(.bottom, 20)
    }

    private func guideStep(number: String, text: String) -> some View {
        HStack(alignment: .top, spacing: 10) {
            Text(number)
                .font(.caption.monospaced().weight(.bold))
                .foregroundColor(.white)
                .frame(width: 20, height: 20)
                .background(Color.theme.blue)
                .clipShape(Circle())
            Text(text)
                .font(.caption)
                .foregroundColor(Color.theme.textSecondary)
        }
    }

    // MARK: - Theme

    private var themeSection: some View {
        VStack(spacing: 0) {
            sectionHeader("THEME")

            VStack(spacing: 12) {
                Picker("Appearance", selection: Binding(
                    get: {
                        switch themeManager.colorScheme {
                        case .dark: return 0
                        case .light: return 1
                        default: return 2
                        }
                    },
                    set: { value in
                        HapticManager.selection()
                        switch value {
                        case 0: themeManager.setTheme(.dark)
                        case 1: themeManager.setTheme(.light)
                        default: themeManager.setTheme(nil)
                        }
                    }
                )) {
                    Text("Dark").tag(0)
                    Text("Light").tag(1)
                    Text("System").tag(2)
                }
                .pickerStyle(.segmented)
            }
            .padding(16)
            .background(Color.theme.bgSecondary)
            .clipShape(Rectangle())
        }
        .padding(.bottom, 20)
    }

    // MARK: - Changelog

    private var changelogSection: some View {
        VStack(spacing: 0) {
            sectionHeader("CHANGELOG")

            VStack(spacing: 0) {
                ForEach(changelog) { entry in
                    DisclosureGroup {
                        VStack(alignment: .leading, spacing: 8) {
                            ForEach(entry.changes, id: \.self) { change in
                                HStack(alignment: .top, spacing: 8) {
                                    Image(systemName: "plus.circle.fill")
                                        .font(.caption)
                                        .foregroundColor(Color.theme.green)
                                        .padding(.top, 2)
                                    Text(change)
                                        .font(.caption)
                                        .foregroundColor(Color.theme.textSecondary)
                                }
                            }
                        }
                        .padding(.vertical, 8)
                    } label: {
                        HStack {
                            Text("v\(entry.version)")
                                .font(.subheadline.monospaced().weight(.medium))
                                .foregroundColor(Color.theme.textPrimary)
                            Text("— \(entry.summary)")
                                .font(.caption)
                                .foregroundColor(Color.theme.textSecondary)
                            Spacer()
                            Text(entry.date)
                                .font(.caption.monospaced())
                                .foregroundColor(Color.theme.textMuted)
                        }
                    }
                    .padding(12)
                }
            }
            .background(Color.theme.bgSecondary)
            .clipShape(Rectangle())
        }
        .padding(.bottom, 20)
    }

    // MARK: - About

    private var aboutSection: some View {
        VStack(spacing: 0) {
            sectionHeader("ABOUT")

            VStack(alignment: .leading, spacing: 8) {
                HStack(spacing: 8) {
                    Image(systemName: "hammer.fill")
                        .font(.caption)
                        .foregroundColor(Color.theme.textMuted)
                    Text("SwiftUI + DGCharts")
                        .font(.caption.monospaced())
                        .foregroundColor(Color.theme.textSecondary)
                }
            }
            .frame(maxWidth: .infinity, alignment: .leading)
            .padding(16)
            .background(Color.theme.bgSecondary)
            .clipShape(Rectangle())
        }
        .padding(.bottom, 20)
    }

    // MARK: - Helpers

    private func sectionHeader(_ title: String) -> some View {
        Text(title)
            .font(.caption.monospaced().bold())
            .foregroundColor(Color.theme.textMuted)
            .frame(maxWidth: .infinity, alignment: .leading)
            .padding(.bottom, 8)
    }

    private var formattedDate: String {
        let formatter = DateFormatter()
        formatter.dateFormat = "yyyy-MM-dd"
        return formatter.string(from: Date())
    }

    private func exportData() {
        let data = BackupService.exportAsJSON()
        exportDocument = JSONDocument(data: data)
        showExportDocument = true
    }

    private func handleImport(_ result: Result<[URL], Error>) {
        switch result {
        case .success(let urls):
            guard let url = urls.first else { return }
            guard url.startAccessingSecurityScopedResource() else {
                importError = "Unable to access the selected file."
                return
            }
            defer { url.stopAccessingSecurityScopedResource() }

            do {
                let data = try Data(contentsOf: url)
                try BackupService.importFromJSON(data)
                HapticManager.notification(.success)
                importSuccess = true
            } catch {
                HapticManager.notification(.error)
                importError = "Failed to import: \(error.localizedDescription)"
            }
        case .failure(let error):
            HapticManager.notification(.error)
            importError = "File picker error: \(error.localizedDescription)"
        }
    }
}

// MARK: - JSON Document for fileExporter

struct JSONDocument: FileDocument {
    static var readableContentTypes: [UTType] { [.json] }
    let data: Data

    init(data: Data) {
        self.data = data
    }

    init(configuration: ReadConfiguration) throws {
        data = configuration.file.regularFileContents ?? Data()
    }

    func fileWrapper(configuration: WriteConfiguration) throws -> FileWrapper {
        FileWrapper(regularFileWithContents: data)
    }
}

#Preview {
    NavigationStack {
        SettingsView()
    }
    .preferredColorScheme(.dark)
}
