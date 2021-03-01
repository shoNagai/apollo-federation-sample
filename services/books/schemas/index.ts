import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Book @key(fields: "id") {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    books: [Book!]!
  }
`;
