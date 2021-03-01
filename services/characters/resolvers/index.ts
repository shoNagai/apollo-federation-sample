import mockData from '../mocks/character.json';

export const resolvers = {
  Query: {
    characters: () => mockData,
  },

  Character: {
    character(character: any) {
      return { __typename: 'Book', id: character.book.id };
    },
  },
};
