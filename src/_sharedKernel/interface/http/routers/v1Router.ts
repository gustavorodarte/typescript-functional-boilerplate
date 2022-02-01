const { Router } = require('express');

const createV1Router = ({
  apollo,
  config: { apollo: apolloConfig },
  healthCheckHandler,
  userController,
}) => {
  const router = Router()
    .get('/status', healthCheckHandler);

  apollo.applyMiddleware({
    app: router,
    path: `/${apolloConfig.route}`,
  });

  return router
    .use('/user', userController.router);
};

export { createV1Router };

