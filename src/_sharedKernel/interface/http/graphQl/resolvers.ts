const resolvers = ({ userMutationResolver, userQueryResolver }) => {
  const Query = { ...userQueryResolver };
  const Mutation = { ...userMutationResolver };

  return {
    Query,
    Mutation,
  };
};

export { resolvers };
