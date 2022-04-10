import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config(); // Load the .env file's content into the process.env object

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env; // Destructuring the process.env object

const client = new Pool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

export default client;
