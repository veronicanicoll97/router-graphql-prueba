import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './typedef';
import resolvers from './resolvers';

const server = new ApolloServer({
    typeDefs,
    resolvers
});


const servidorEn = startStandaloneServer(
    server, 
    {
        listen: { port: 5000 }
    }
);
console.log(`🚀 Server listening at port 3000`);
servidorEn.then(ser => console.log(`🚀 ${ser.url}`))