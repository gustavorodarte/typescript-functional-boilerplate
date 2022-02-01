import express from 'express';

const server = ({ config, rootRouter, apollo }) => {
  const app = express();

  const {
    express: { port },
    apollo: apolloConfig,
  } = config;

  return {
    start: async () => {
      await apollo.start();

      apollo.applyMiddleware({
        app: rootRouter,
        path: `/${apolloConfig.route}`,
      });
      return app.use(rootRouter).listen(port, () => console.info(`[PID ${process.pid}] Listening at port ${port}`));
    },
  };
};

export { server };
