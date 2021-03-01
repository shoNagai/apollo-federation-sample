import mockData from '../mocks/book.json';

export const resolvers = {
  Query: {
    books: () => mockData,
  },
  Book: {
    __resolveReference(book: any) {
      return mockData.find((u) => u.id === book.id);
    },
  },
};
