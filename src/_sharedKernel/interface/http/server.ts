import express from 'express';

const createServer = ({ config, rootRouter}) => {
  const server = express();

  const {
    express: { port },
  } = config;

  return {
    start: () =>
      server.use(rootRouter).listen(port, () => console.info(`[PID ${process.pid}] Listening at port ${port}`)),
  };
};

export { createServer };
