import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { join } from 'path';

const userTypeDefs = () => {
  const schema = loadSchemaSync(join(__dirname, 'schemas', 'user.graphql'), { loaders: [new GraphQLFileLoader()] });

  return schema;
};

export { userTypeDefs };
