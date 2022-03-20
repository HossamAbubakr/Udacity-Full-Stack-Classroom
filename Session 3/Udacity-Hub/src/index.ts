import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Udacity Hub API');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
