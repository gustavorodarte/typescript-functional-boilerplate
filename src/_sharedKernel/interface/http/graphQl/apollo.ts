import { ApolloServer } from 'apollo-server-express';
import { context } from '@/_lib/http/graphQl/context';
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
} from 'apollo-server-core';

const apollo = ({ config: { apollo: config }, resolvers, typeDefs }) =>
  new ApolloServer({
    context,
    resolvers,
    typeDefs,
    introspection: config.introspection,
    plugins: [
      config.playground ? ApolloServerPluginLandingPageGraphQLPlayground() : ApolloServerPluginLandingPageDisabled(),
    ],
  });

export { apollo };
