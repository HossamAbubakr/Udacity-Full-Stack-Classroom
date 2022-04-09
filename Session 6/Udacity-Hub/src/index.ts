import express from 'express';
import leads_routes from './handlers/session_leads';

const app = express();
const port = 3000;

app.get('/', async (_req, res) => {
  res.send('Welcome to the Udacity Hub Api');
});

leads_routes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
