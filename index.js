import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'; // Para no requerir alguna propiedad de NODEJS, tal como "express"

// Types
import { typeDefs } from './schema.js'

// db
import db from './_db.js'

const resolvers = {
    Query: {
        games () {
            return db.games // Retornamos el ARRAY de GAMES
        },
        game (_, args, context) { 
            return db.games.find((game) => game.id === args.id)
        },
        authors () {
            return db.authors // Retornamos el ARRAY de AUTHORS
        },
        author (_, args, context) { 
            return db.authors.find((author) => author.id === args.id)
        },
        reviews () {
            return db.reviews // Retornamos el ARRAY de REVIEWS
        },
        review (_, args, context) { 
            // El primer parametro es el "parent", pero como no lo necesitamos ponemos un "underscore"
            // El segundo corresponde a los argumentos, que son los que va a recibir esta función para realizar la QUERY
            // Como tercer parametro, podría ser el "context", pero no lo necesitamos ahora mismo
            return db.reviews.find((review) => review.id === args.id) // Buscamos que coincidan las ID que le pasamos como parametro para despues retornar los datos que necesitemos de esa ID en particular
        }
    },
    Game: {
        // El argumento "parent" es la referencia del argumento PADRE, en este caso GAME
        // Validamos entre la ID del GAME en la REVIEW con la ID de la REVIEW
        reviews (parent) {
           return db.reviews.filter((r) => r.game_id === parent.id)
        }
    },
    Author: {
        reviews (parent) {
            return db.reviews.filter((r) => r.author_id === parent.id)
        }
    },
    // En el caso de los REVIEWS, estan relacionadas con con AUTHOR y un GAME
    // Son datos anidados los q nos va a retornar
    Review: {
       author (parent) {
         return db.authors.find((a) => a.id === parent.author_id) // Buscamos a un AUTHOR en singular para esa REVIEW
       },
       game (parent) {
         return db.games.find((g) => g.id === parent.game_id) // Buscamos a un GAME en singular para esa REVIEW
       }
    }
}

// server setup
const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log(`🚀 Server ready at port 4000`)