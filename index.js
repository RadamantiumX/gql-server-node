import {ApolloServer} from '@apollo/server'
import { startStandAloneServer } from '@apollo/server/standalone' // Para no requerir alguna propiedad de NODEJS, tal como "exprss"

// Types
import { typeDefs } from './schema.js'

// server setup

const server = new ApolloServer({
    typeDefs
    // resolvers
})

const { url } = await startStandAloneServer(server, {
    listen: { port: 4000 }
})

console.log(`🚀 Server ready at port 4000`)