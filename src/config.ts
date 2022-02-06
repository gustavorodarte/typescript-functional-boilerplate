import * as env from 'env-var';

const config = {
  nodeEnv: env.get('NODE_ENV').required().asString(),
  express: {
    port: env.get('PORT').required().asPortNumber(),
  },
  apollo: {
    route: env.get('APOLLO_ROUTE').required().asString(),
    introspection: env.get('APOLLO_INTROSPECTION').required().asString(),
    playground: env.get('APOLLO_PLAYGROUND').required().asBool(),
  },
  database: {
    type: env.get('DATABASE_TYPE').required().asString(),
    host: env.get('DATABASE_HOST').required().asString(),
    port: env.get('DATABASE_PORT').required().asString(),
    username: env.get('DATABASE_USERNAME').required().asString(),
    password: env.get('DATABASE_PASSWORD').required().asString(),
    database: env.get('DATABASE_DB_NAME').required().asString(),
  },
};

export { config };
