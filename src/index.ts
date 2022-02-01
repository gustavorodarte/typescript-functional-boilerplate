import { container } from "./container";

const server = container.resolve('server');

server.start()
  .then(() => console.info('Application successfully initialized!'))
  .catch((error) => console.error(`Application failed to initialize due to ${error.message}!`));