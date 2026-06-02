import SwiftUI

struct MainTabView: View {
    @State private var selectedTab = 0

    var body: some View {
        TabView(selection: $selectedTab) {
            NavigationStack {
                DashboardView()
            }
            .tabItem {
                Image(systemName: "chart.bar.fill")
                Text("Dashboard")
            }
            .tag(0)

            NavigationStack {
                LessonListView()
            }
            .tabItem {
                Image(systemName: "book.fill")
                Text("Learn")
            }
            .tag(1)

            NavigationStack {
                MonitorView()
            }
            .tabItem {
                Image(systemName: "chart.xyaxis.line")
                Text("Markets")
            }
            .tag(2)

            NavigationStack {
                SimulatorView()
            }
            .tabItem {
                Image(systemName: "gamecontroller.fill")
                Text("Simulator")
            }
            .tag(3)

            NavigationStack {
                MoreView()
            }
            .tabItem {
                Image(systemName: "ellipsis.circle.fill")
                Text("More")
            }
            .tag(4)
        }
        .tint(Color(hex: "58a6ff"))
    }
}

struct MoreView: View {
    var body: some View {
        List {
            NavigationLink {
                QuizCategoriesView()
            } label: {
                Label("Quizzes", systemImage: "questionmark.circle.fill")
            }

            NavigationLink {
                ChartsView()
            } label: {
                Label("Interactive Charts", systemImage: "chart.bar.xaxis")
            }

            NavigationLink {
                ReferenceView()
            } label: {
                Label("Reference Library", systemImage: "books.vertical.fill")
            }

            NavigationLink {
                ResourcesView()
            } label: {
                Label("Books & Courses", systemImage: "text.book.closed.fill")
            }

            NavigationLink {
                SettingsView()
            } label: {
                Label("Settings & Backup", systemImage: "gearshape.fill")
            }
        }
        .navigationTitle("More")
        .listStyle(.insetGrouped)
    }
}

#Preview {
    MainTabView()
        .preferredColorScheme(.dark)
}
