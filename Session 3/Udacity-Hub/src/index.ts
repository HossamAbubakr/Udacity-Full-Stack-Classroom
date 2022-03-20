import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

// Sample data which we will later get from a real database
const leads: string[] = ['Hossam', 'Zanaty', 'Amr', 'Ziyad'];

app.get('/leads', (req, res) => {
  const name = req.query.name as string;
  const imgLocation = path.resolve('./') + `/assets/${name}.jpg`;
  const lead = leads.includes(name);
  // If the name query wasn't provided return and end function
  if (name === undefined) {
    return res
      .status(400)
      .send('Bad request, query parameter (name) is required.');
  }
  // If the name doesn't exist in the array return and end function
  if (lead === false) {
    res
      .status(404)
      .send('Resource not found, this session lead does not exist!');
  }
  // Otherwise return the lead's avatar
  res.sendFile(imgLocation);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
