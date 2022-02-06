import { createConnection } from 'typeorm';

const connection = ({ config: { database: databaseConfig } }) => createConnection(databaseConfig);

export { connection };
