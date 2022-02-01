import { ApolloServer } from 'apollo-server-express';

const apollo = ({
  config: { apollo: config },
  context,
  resolvers,
  typeDefs,
}) => new ApolloServer({
  context,
  resolvers,
  typeDefs,
  introspection: config.introspection,
});

export { apollo };
