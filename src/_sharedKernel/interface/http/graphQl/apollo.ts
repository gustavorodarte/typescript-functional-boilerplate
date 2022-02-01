import { ApolloServer } from 'apollo-server-express';
import { context } from '@/_lib/http/graphQl/context';

const apollo = ({
  config: { apollo: config },
  resolvers,
  typeDefs,
}) => new ApolloServer({
  context,
  resolvers,
  typeDefs,
  introspection: config.introspection,
});

export { apollo };
