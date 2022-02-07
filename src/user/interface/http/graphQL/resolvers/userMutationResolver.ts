const userMutationResolver = ({ createUser }) => ({
  createUser: (_, user) => createUser(user),
});

export { userMutationResolver };
