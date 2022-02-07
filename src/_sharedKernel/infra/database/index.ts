import { createConnection } from 'typeorm';

const makeDatabase = ({ config: { database: databaseConfig }, userEntity }) => ({
  connect: () => createConnection({
    ...databaseConfig,
    entities: [userEntity],
  }),
});

export { makeDatabase };
