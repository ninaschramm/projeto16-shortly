import { Router } from 'express';
import { getMyUrls } from '../controllers/userControllers.js';
import validateToken from '../middlewares/authCheckMiddleware.js';

const userRouter = Router();

userRouter.get('/users/me', validateToken, getMyUrls)

export default userRouter;