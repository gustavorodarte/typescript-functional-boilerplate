import { Router, json } from "express";
import cors from 'cors';
import helmet from "helmet";

const createRootRouter= ({
  v1Router,
  errorHandler,
}) => Router()
  .use(helmet())
  .use(cors())
  .use(json())
  .use('/v1', v1Router)
  .use(errorHandler);


  export { createRootRouter };
  