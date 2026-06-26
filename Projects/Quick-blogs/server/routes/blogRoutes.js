import express from "express";
import { addBlog, getAllBlogs, getBlogById } from "../controllers/blogController.js";
import upload from "../middleware/multer.js";

const router = express.Router();

router.get('/all', getAllBlogs);
router.get('/:id', getBlogById);
router.post('/add', upload.single('image'), addBlog);


export default router;