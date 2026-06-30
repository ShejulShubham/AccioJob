import jwt from "jsonwebtoken";
import Blog from "../models/Blog";
import Comment from "../models/Comment";

export async function adminLogin(request, response) {
  try {
    const { email, password } = request.body;
    if (!email || !password) {
      return response
        .status(400)
        .json({ success: false, message: "email or password cannot be empty" });
    }

    if (
      email != process.env.ADMIN_EMAIL ||
      password != process.env.ADMIN_PASSWORD
    ) {
      return response
        .status(400)
        .json({ success: false, message: "invalid login credentials" });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET);
    response.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    return response.status(200).json({ success: true, token });
  } catch (error) {
    console.log(error);
    response.status(500).json({ success: false, message: error.message });
  }
}

export async function getAllBlogsAdmin(request, response) {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });

    response
      .status(200)
      .json({ success: true, data: blogs, message: "all blogs fetched" });
  } catch (error) {
    console.log(error);
    response
      .status(500)
      .json({ success: false, message: "could not fetch blogs" });
  }
}

export async function getAllComments(request, response) {
  try {
    const comments = await Comment.find({})
      .populate("blog")
      .sort({ createdAt: -1 });

    response
      .status(200)
      .json({ success: true, data: comments, message: "all comments fetched" });
  } catch (error) {
    console.log(error);
    response
      .status(500)
      .json({ success: false, message: "could not fetch comments" });
  }
}

export async function getDashboard(request, response) {
  try {
    const recentBlogs = await Blog.find({}).sort({ createdAt: -1 }).limit(5);
    const blogs = await Blogs.countDocuments();
    const comments = await Comments.countDocuments();
    const draft = await Blogs.countDocuments({ isPublished: false });
    const dashboardData = {
      recentBlogs,
      blogs,
      comments,
      draft,
    };

    response
      .status(200)
      .json({
        success: true,
        data: dashboardData,
        message: "dashboard data fetched",
      });
  } catch (error) {
    console.log(error);
    response
      .status(500)
      .json({ success: false, message: "cannot get dashboard data" });
  }
}

export async function deleteCommentById(request, response) {
  try {
    const { id } = request.body;
    const deletedComment = await Comment.findByIdAndDelete(id);

    response
      .status(200)
      .json({ success: true, data: deleteComment, message: "comment deleted" });
  } catch (error) {
    console.log(error);
    response
      .status(500)
      .json({ success: false, message: "cannot delete comment" });
  }
}

export async function approveCommentById(request, response) {
    try {
    const { id } = request.body;
    const updatedComment = await Comment.findByIdAndUpdate(id, {isApproved: true});

    response
      .status(200)
      .json({ success: true, data: updatedComment, message: "comment deleted" });
  } catch (error) {
    console.log(error);
    response
      .status(500)
      .json({ success: false, message: "cannot delete comment" });
  }
}
