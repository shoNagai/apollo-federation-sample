import mockData from '../mocks/user.json';

export const resolvers = {
  Query: {
    users: () => mockData,
  },

  User: {
    user(user: any) {
      return { __typename: 'Book', id: user.book.id };
    },
  },
};
