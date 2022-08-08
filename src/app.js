import express, {json} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRouter from './routes/authRoutes.js';
import urlRouter from './routes/urlRoutes.js';

const server = express();

dotenv.config();

server.use(
  express.urlencoded({
      extended: true,
  }),
  express.json(), cors()
);

server.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});



server.use(authRouter, urlRouter);

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
  });