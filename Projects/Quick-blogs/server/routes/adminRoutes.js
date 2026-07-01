import express from "express";
import { adminLogin, approveCommentById, deleteCommentById, getAllBlogsAdmin, getDashboard } from "../controllers/adminController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/login", adminLogin);
router.get("/comments", getAllBlogsAdmin);
router.get("/blogs", getAllBlogsAdmin);
router.get("/dashboard", auth, getDashboard);
router.delete("/delete-comment", auth, deleteCommentById);
router.post("/approve-comment", auth, approveCommentById);

export default router;