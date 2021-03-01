import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Character {
    id: ID!
    name: String!
    book: Book
  }

  type Query {
    characters: [Character!]!
  }

  extend type Book @key(fields: "id") {
    id: ID! @external
  }
`;
