import { container } from "./container";

const app = container.resolve('app');

app.start()
  .then(() => console.info('Application successfully initialized!'))
  .catch((error) => console.error(`Application failed to initialize due to ${error.message}!`));