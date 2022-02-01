import env from 'env-var';

const config = {
  nodeEnv: 'development',
  express: {
    // port: env.get('PORT').required().asPortNumber(),
    port: 3000,
  },
  apollo: {
    // route: env.get('APOLLO_ROUTE').required().asString(),
    route: 'graphql',
    // introspection: env.get('APOLLO_INSTROSPECTION').required().asString(),
    introspection: '1',
    playground: true,
  },
};

export { config };
