import { Router } from 'express';
import { getMyUrls, getRanking } from '../controllers/userControllers.js';
import validateToken from '../middlewares/authCheckMiddleware.js';

const userRouter = Router();

userRouter.get('/users/me', validateToken, getMyUrls)
userRouter.get('/ranking', getRanking)

export default userRouter;