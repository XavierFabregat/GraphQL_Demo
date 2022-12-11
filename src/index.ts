import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schemas/index.js';
import { mockResolvers } from './resolvers/mock/index.js'
import { psqlResolvers } from './resolvers/postgres/index.js';
import { promiseDb } from './mocks/db.mocks.js'
import { db } from './Types.js';

const resolvers = process.env.NODE_ENV === 'test' ? mockResolvers : psqlResolvers;

const server = new ApolloServer({
    typeDefs,
    resolvers
});


const { url } = await startStandaloneServer(server, {
    context: () => (promiseDb as Promise<db>),
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);