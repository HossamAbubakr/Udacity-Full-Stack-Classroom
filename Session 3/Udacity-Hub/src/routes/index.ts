import { Router, Request, Response } from 'express';
import leads_routes from './api/leads';

const routes = Router();

routes.get('/', (_req: Request, res: Response) => {
  res.send('Welcome to the Udacity Hub API');
});

routes.use('/leads', leads_routes);

export default routes;
