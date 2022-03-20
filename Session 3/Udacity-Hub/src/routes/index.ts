import express from 'express';
import leads_routes from './api/leads';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('Welcome to the Udacity Hub API');
});

routes.use('/leads', leads_routes);

export default routes;
