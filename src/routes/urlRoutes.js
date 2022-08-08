import { Router } from 'express';
import validateToken from '../middlewares/authCheckMiddleware.js';
import { getUrl, shortenUrl } from '../controllers/urlControllers.js';

const urlRouter = Router();

urlRouter.post('/urls/shorten', validateToken, shortenUrl);
urlRouter.get('/urls/:id', getUrl);


export default urlRouter;