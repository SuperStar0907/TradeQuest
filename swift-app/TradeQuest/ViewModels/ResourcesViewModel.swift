import SwiftUI

@Observable @MainActor
class ResourcesViewModel {
    var currentTab: String = "books"
    var searchText: String = ""
    var books: [Book] = []
    var courses: [Course] = []
    var selectedItem: AnyIdentifiable?
    var showDetail: Bool = false
    var currentCategory: String = "all"

    var categories: [String] {
        var items: [String] = ["all"]
        switch currentTab {
        case "books":
            let unique = Set(books.map { $0.category })
            items.append(contentsOf: unique.sorted())
        case "courses":
            let unique = Set(courses.map { $0.category })
            items.append(contentsOf: unique.sorted())
        default:
            break
        }
        return items
    }

    var filteredBooks: [Book] {
        var result = books
        if currentCategory != "all" {
            result = result.filter { $0.category == currentCategory }
        }
        if !searchText.isEmpty {
            let query = searchText.lowercased()
            result = result.filter {
                $0.title.lowercased().contains(query) ||
                $0.author.lowercased().contains(query)
            }
        }
        return result
    }

    var filteredCourses: [Course] {
        var result = courses
        if currentCategory != "all" {
            result = result.filter { $0.category == currentCategory }
        }
        if !searchText.isEmpty {
            let query = searchText.lowercased()
            result = result.filter {
                $0.name.lowercased().contains(query) ||
                $0.provider.lowercased().contains(query)
            }
        }
        return result
    }

    func load() {
        books = ContentService.shared.loadBooks()
        courses = ContentService.shared.loadCourses()
    }

    func selectBook(_ book: Book) {
        selectedItem = AnyIdentifiable(book)
        showDetail = true
    }

    func selectCourse(_ course: Course) {
        selectedItem = AnyIdentifiable(course)
        showDetail = true
    }
}

struct AnyIdentifiable: Identifiable {
    let id: String
    let wrapped: Any

    init<T: Identifiable>(_ item: T) where T.ID == String {
        self.id = item.id
        self.wrapped = item
    }
}
