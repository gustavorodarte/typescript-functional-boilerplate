
import { mergeSchemas } from '@graphql-tools/schema';

const typeDefs = ({ userTypeDefs }) => {
  return mergeSchemas({
    schemas: [userTypeDefs],
  })
};

export { typeDefs };
