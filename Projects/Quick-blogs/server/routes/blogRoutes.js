import express from "express";
import { addBlog, addComment, deleteBlogById, getAllBlogs, getBlogById, getBlogComments, toggleIsPublishById } from "../controllers/blogController.js";
import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get('/all', getAllBlogs);
router.get('/:id', getBlogById);
router.post('/add', upload.single('image'), addBlog);
router.patch("/toggle-publish", auth, toggleIsPublishById);
router.delete("/:id", auth, deleteBlogById);

router.post('/add-comment', addComment);
router.post('/comments', getBlogComments);


export default router;