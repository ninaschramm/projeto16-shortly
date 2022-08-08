import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const user = 'postgres';
const password = 'hojeedia14';
const host = 'localhost';
const port = 5432;
const database = 'shortly';

const connection = new Pool({
  user,
  password,
  host,
  port,
  database
});

// const connection = new Pool({
//     connectionString: process.env.DATABASE_URL,
//     ssl: {
//         rejectUnauthorized: false
//     }
//   });

export default connection