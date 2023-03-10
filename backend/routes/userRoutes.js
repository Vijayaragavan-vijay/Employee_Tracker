import express from 'express';
import { createUser, getAllUsers } from '../controllers/userController.js';
const router = express.Router();

router.post('/', createUser); //https://localhost/5000/users
router.get('/', getAllUsers);

export default router;