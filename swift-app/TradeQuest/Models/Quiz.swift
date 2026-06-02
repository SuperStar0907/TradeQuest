import Foundation

struct QuizCategory: Codable {
    let name: String
    let icon: String
    let questions: [Question]
}

enum Question: Codable {
    case multipleChoice(MultipleChoiceQuestion)
    case trueFalse(TrueFalseQuestion)
    case calculate(CalculateQuestion)

    private enum CodingKeys: String, CodingKey {
        case type
    }

    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let type = try container.decode(String.self, forKey: .type)

        switch type {
        case "multiple-choice":
            let content = try MultipleChoiceQuestion(from: decoder)
            self = .multipleChoice(content)
        case "true-false":
            let content = try TrueFalseQuestion(from: decoder)
            self = .trueFalse(content)
        case "calculate":
            let content = try CalculateQuestion(from: decoder)
            self = .calculate(content)
        default:
            throw DecodingError.dataCorruptedError(
                forKey: .type,
                in: container,
                debugDescription: "Unknown question type: \(type)"
            )
        }
    }

    func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)

        switch self {
        case .multipleChoice(let content):
            try container.encode("multiple-choice", forKey: .type)
            try content.encode(to: encoder)
        case .trueFalse(let content):
            try container.encode("true-false", forKey: .type)
            try content.encode(to: encoder)
        case .calculate(let content):
            try container.encode("calculate", forKey: .type)
            try content.encode(to: encoder)
        }
    }

    var questionText: String {
        switch self {
        case .multipleChoice(let q): return q.question
        case .trueFalse(let q): return q.question
        case .calculate(let q): return q.question
        }
    }

    var explanation: String {
        switch self {
        case .multipleChoice(let q): return q.explanation
        case .trueFalse(let q): return q.explanation
        case .calculate(let q): return q.explanation
        }
    }
}

struct MultipleChoiceQuestion: Codable {
    let question: String
    let options: [String]
    let correct: Int
    let explanation: String
}

struct TrueFalseQuestion: Codable {
    let question: String
    let correct: Bool
    let explanation: String
}

struct CalculateQuestion: Codable {
    let question: String
    let answer: Double
    let tolerance: Double
    let unit: String
    let explanation: String
}
