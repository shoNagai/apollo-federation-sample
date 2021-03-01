import { buildFederatedSchema } from '@apollo/federation';
import { ApolloServer } from 'apollo-server';
import { resolvers } from './resolvers';
import { typeDefs } from './schemas';

const schema = buildFederatedSchema({
  typeDefs,
  resolvers,
});

const apolloServer = new ApolloServer({ schema });
apolloServer.listen({ port: 4002 }).then(({ url }) => {
  console.log(`🚀 Characters Server ready at ${url}`);
});
