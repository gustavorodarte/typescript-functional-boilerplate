import { Router, json } from "express";
import cors from 'cors';
import helmet from "helmet";
import { healthCheckHandler } from '@/_lib/http/healthCheckHandler';

const rootRouter = ({}) => Router()
  .use(helmet())
  .use(cors())
  .use(json())  
  .get('/status', healthCheckHandler);

  export { rootRouter };
  