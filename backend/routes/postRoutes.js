import express from "express";
import { getPost, updatePost, createPost, deletePost, getAllPost } from "../controllers/postControllers.js";
const router = express.Router();

router.post('/add', createPost); //http:localhost:5000/posts
router.get('/', getAllPost);
router.get('/:id', getPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;