import { Router } from 'express';
import validateToken from '../middlewares/authCheckMiddleware.js';
import { shortenUrl } from '../controllers/urlControllers.js';

const urlRouter = Router();

urlRouter.post('/urls/shorten', validateToken, shortenUrl);


export default urlRouter;