import express from 'express';
import leads_routes from './handlers/session_leads';
import students_routes from './handlers/students';
import sessions_routes from './handlers/sessions';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', async (_req, res) => {
  res.send('Welcome to the Udacity Hub Api');
});

leads_routes(app);
students_routes(app);
sessions_routes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
