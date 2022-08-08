import { Router } from 'express';
import { createUser, loginUser } from '../controllers/authControllers.js';

const authRouter = Router();

authRouter.post('/signup', createUser); // Verificar se o nome da rota vai ficar "cadastro" mesmo, ou um "sign-up" ou coisa parecida
authRouter.post('/signin', loginUser);

export default authRouter;