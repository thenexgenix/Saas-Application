import express from 'express';
import { signUp, login, logout } from '../controllers/AuthController.js';
import authenticate from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/signup', signUp);
router.post('/login', login);
router.post('/logout', authenticate, logout);

export default router;