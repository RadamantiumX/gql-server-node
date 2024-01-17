export const typeDefs = `#graphql
  type Game {
    id: ID!,
    title: String!,
    platform: [String]!,
  }
  type Review {
    id: ID!,
    rating: Int!,
    content: String!
  }

  type Author {
    id: ID!,
    name: String!,
    verified: Boolean!
  }

  type Query {
    reviews: [Review],
    games: [Game],
    authors: [Author]
  }
`

// Diferentes TYPES: Int, Float, string, boolean, ID
// La sintaxis de [String] indica una ARRAY element de String...
// Coloclar el "!" fuera del [String], singnifica que este ARRAY element, pero sus elementos internos si pueden serlo, 
// si queremos evitar valores NULL dentro, [String!]!

// El Query es el Type que todo SCHEMA debe contener, no es opcional
// aqui especificamos los types a retornar en los ENTRYPOINTS