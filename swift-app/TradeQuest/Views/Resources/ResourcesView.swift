import SwiftUI

struct ResourcesView: View {
    @State private var viewModel = ResourcesViewModel()
    @State private var selectedTab = "books"
    @State private var searchText = ""
    @State private var selectedCategory = "all"

    private let tabs = ["books", "courses"]

    private let columns = [
        GridItem(.flexible(), spacing: 12),
        GridItem(.flexible(), spacing: 12)
    ]

    var body: some View {
        VStack(spacing: 0) {
            tabPicker
            searchBar
            categoryChips
            resourceGrid
        }
        .background(Color.theme.bgPrimary)
        .navigationTitle("Resources")
        .task {
            viewModel.load()
        }
        .onChange(of: selectedTab) { _, newValue in
            viewModel.currentTab = newValue
            selectedCategory = "all"
            viewModel.currentCategory = "all"
        }
        .onChange(of: searchText) { _, newValue in
            viewModel.searchText = newValue
        }
        .onChange(of: selectedCategory) { _, newValue in
            viewModel.currentCategory = newValue
        }
    }

    private var tabPicker: some View {
        Picker("Type", selection: $selectedTab) {
            Text("Books").tag("books")
            Text("Courses").tag("courses")
        }
        .pickerStyle(.segmented)
        .padding(.horizontal, 16)
        .padding(.top, 12)
    }

    private var searchBar: some View {
        HStack(spacing: 8) {
            Image(systemName: "magnifyingglass")
                .foregroundColor(.theme.textMuted)

            TextField("Search \(selectedTab)...", text: $searchText)
                .font(.system(size: 14))
                .foregroundColor(.theme.textPrimary)
        }
        .padding(10)
        .background(Color.theme.bgCard)
        .cornerRadius(8)
        .overlay(
            RoundedRectangle(cornerRadius: 8)
                .stroke(Color.theme.border, lineWidth: 1)
        )
        .padding(.horizontal, 16)
        .padding(.top, 12)
    }

    private var categoryChips: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack(spacing: 8) {
                ForEach(viewModel.categories, id: \.self) { category in
                    Button {
                        selectedCategory = category
                    } label: {
                        Text(category.capitalized)
                            .font(.system(size: 12, weight: .medium))
                            .foregroundColor(selectedCategory == category ? .white : .theme.textSecondary)
                            .padding(.horizontal, 12)
                            .padding(.vertical, 6)
                            .background(selectedCategory == category ? Color.theme.blue : Color.theme.bgCard)
                            .cornerRadius(14)
                            .overlay(
                                RoundedRectangle(cornerRadius: 14)
                                    .stroke(selectedCategory == category ? Color.clear : Color.theme.border, lineWidth: 1)
                            )
                    }
                }
            }
            .padding(.horizontal, 16)
        }
        .padding(.top, 10)
    }

    private var resourceGrid: some View {
        ScrollView {
            LazyVGrid(columns: columns, spacing: 12) {
                if selectedTab == "books" {
                    ForEach(viewModel.filteredBooks) { book in
                        NavigationLink(destination: ResourceDetailView(item: .book(book))) {
                            ResourceCardView(
                                title: book.title,
                                author: book.author,
                                difficulty: book.difficulty,
                                category: book.category,
                                description: book.description
                            )
                        }
                    }
                } else {
                    ForEach(viewModel.filteredCourses) { course in
                        NavigationLink(destination: ResourceDetailView(item: .course(course))) {
                            ResourceCardView(
                                title: course.name,
                                author: course.provider,
                                difficulty: course.difficulty,
                                category: course.category,
                                description: course.description
                            )
                        }
                    }
                }
            }
            .padding(.horizontal, 16)
            .padding(.vertical, 12)
        }
    }
}

#Preview {
    NavigationStack {
        ResourcesView()
    }
    .preferredColorScheme(.dark)
}
