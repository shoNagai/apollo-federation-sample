import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    book: Book
  }

  type Query {
    users: [User!]!
  }

  extend type Book @key(fields: "id") {
    id: ID! @external
  }
`;
