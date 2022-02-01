const userMutationResolver = ({
    apolloErrorHandler,
  }) => ({
    crateUser: (_, user) => user
  });
  
  export { userMutationResolver };
