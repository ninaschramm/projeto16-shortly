import { Router } from 'express';
import validateToken from '../middlewares/authCheckMiddleware.js';
import { getUrl, redirectUser, shortenUrl } from '../controllers/urlControllers.js';

const urlRouter = Router();

urlRouter.post('/urls/shorten', validateToken, shortenUrl);
urlRouter.get('/urls/:id', getUrl);
urlRouter.get('/urls/open/:shortUrl', redirectUser)


export default urlRouter;