//
// SymbolQuery.swift
//
// Generated by Konfig
// https://konfigthis.com
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

/** Symbol query for searching for symbols */
public struct SymbolQuery: Codable, JSONEncodable, Hashable {

    public var substring: String?

    public init(substring: String? = nil) {
        self.substring = substring
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case substring
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(substring, forKey: .substring)
    }
}

