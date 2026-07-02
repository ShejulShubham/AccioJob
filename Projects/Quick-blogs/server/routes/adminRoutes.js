import express from "express";
import { adminLogin, approveCommentById, deleteCommentById, getAllBlogsAdmin, getAllComments, getDashboard } from "../controllers/adminController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/login", adminLogin);
router.get("/comments", getAllComments);
router.get("/blogs", getAllBlogsAdmin);
router.get("/dashboard", auth, getDashboard);
router.patch("/approve-comment", auth, approveCommentById);
router.post("/delete-comment", auth, deleteCommentById);

export default router;