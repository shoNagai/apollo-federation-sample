import { ApolloGateway } from '@apollo/gateway';
import { ApolloServer } from 'apollo-server-micro';

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'books', url: 'http://localhost:4001' },
    { name: 'users', url: 'http://localhost:4002' },
  ],
});

const apolloServer = new ApolloServer({ gateway, subscriptions: false });
export default apolloServer.createHandler({ path: '/' });
