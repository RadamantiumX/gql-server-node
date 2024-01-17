export const typeDefs = `#graphql
  type Game {
    id: ID!
    title: String!
    platform: [String!]!
    reviews: [Review!]! # Retornamos una LISTA DE REVIEWS
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
    game: Game! # Las reviews necesitan un Game que no debe ser NULL, 
    author: Author! # Las reviews necesitan un Game que no debe ser NULL, 
  }

  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]! #
  }

  type Query {
    reviews: [Review]
    review (id: ID!): Review # Tomamos solo un registro, esperamos que nos pase un ID de Type ID para poder encontrar el registro
    games: [Game]
    game(id: ID!): Game
    authors: [Author]
    author (id: ID!): Author 
  }
`

// Diferentes TYPES: Int, Float, string, boolean, ID
// La sintaxis de [String] indica una ARRAY element de String...
// Coloclar el "!" fuera del [String], singnifica que este ARRAY element, pero sus elementos internos si pueden serlo, 
// si queremos evitar valores NULL dentro, [String!]!

// El Query es el Type que todo SCHEMA debe contener, no es opcional
// aqui especificamos los types a retornar en los ENTRYPOINTS