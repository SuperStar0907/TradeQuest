import Foundation

struct Book: Codable, Identifiable {
    var id: String { title }
    let title: String
    let author: String
    let difficulty: String
    let category: String
    let description: String
    let why: String?
    let rank: Int?
    let featured: Bool?
}

struct Course: Codable, Identifiable {
    var id: String { name }
    let name: String
    let provider: String
    let difficulty: String
    let category: String
    let description: String
    let price: String?
    let url: String?
    let rank: Int?
    let featured: Bool?
}
