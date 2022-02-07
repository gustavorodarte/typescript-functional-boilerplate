const Application = ({ database, config, server }) => ({
  start: () => database.connect().then(server.start),
});

export { Application };
