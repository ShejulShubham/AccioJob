import express from "express";
import { addBlog, deleteBlogById, getAllBlogs, getBlogById, toggleIsPublishById } from "../controllers/blogController.js";
import upload from "../middleware/multer.js";

const router = express.Router();

router.get('/all', getAllBlogs);
router.get('/:id', getBlogById);
router.post('/add', upload.single('image'), addBlog);
router.patch("/", toggleIsPublishById);
router.delete("/:id", deleteBlogById);


export default router;