const userMutationResolver = ({}) => ({
  createUser: (_, user) => user,
});

export { userMutationResolver };
