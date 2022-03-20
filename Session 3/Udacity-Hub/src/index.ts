import express from 'express';

const app = express();
const port = 3000;

// Sample data which we will later get from a real database
const leads: string[] = ['Hossam', 'Zanaty', 'Amr', 'Ziyad'];

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
