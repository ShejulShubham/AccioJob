import fs from "fs";
import imagekit from "../config/imageKit.js";
import Blog from "../models/Blog.js";

export async function addBlog(request, response) {
  try {
    const { title, subTitle, description, category, isPublished } = JSON.parse(
      request.body.blog,
    );

    const imageFile = request.file;

    if (!title || !description || !category || !imageFile) {
      return response
        .status(500)
        .json({ success: false, message: "Missing fields" });
    }

    const fileBuffer = fs.readFileSync(imageFile.path);

    const res = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/blogs",
    });

    const optimizedImageURL = imagekit.url({
      path: res.filePath,
      transformation: [
        { quality: "auto" },
        { format: "webp" },
        { width: "1200" },
      ],
    });

    const image = optimizedImageURL;

    const newBlog = await Blog.create({
      title,
      subTitle,
      description,
      category,
      image,
      isPublished,
    });

    response
      .status(201)
      .json({
        success: true,
        data: newBlog,
        message: "Blog created successfully",
      });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}

export async function getAllBlogs(request, response) {
  try {
    const blogs = await Blog.find({ isPublished: true });

    response.status(200).json({
      success: true,
      data: blogs,
      message: "list of blogs which are published",
    });
  } catch (error) {
    console.log(error);
    response.status(500).json({ success: false, message: error.message });
  }
}

export async function getBlogById(request, response) {
  try {
    const { id } = request.params;

    if (!id) {
      return response
        .status(500)
        .json({ success: false, message: "id is not provided" });
    }

    const blog = await Blog.findById(id);

    if (!blog) {
      return response
        .status(500)
        .json({ success: false, message: "blog not found!" });
    }

    response
      .status(200)
      .json({ success: true, message: "blog found!", data: blog });
  } catch (error) {
    console.log(error);
    response.status(500).json({ success: false, message: error.message });
  }
}

export async function toggleIsPublishById(request, response) {
  try {
    const { id } = request.body;

    if (!id) {
      return response
        .status(400)
        .json({ success: false, message: "id not provided!" });
    }

    const blog = await Blog.findById(id);

    if (!blog) {
      return response.status(400).json({ success: false, message: "blog not found!" });
    }

    blog.isPublished = !blog.isPublished;

    const updatedBlog = await blog.save();

    response.status(200).json({
      success: true,
      data: updatedBlog,
      message: `blog publish status updated: ${updatedBlog.isPublished}`,
    });
  } catch (error) {
    console.log(error);
    response.status(500).json({ success: false, message: error.message });
  }
}

export async function deleteBlogById(request, response) {
  try {
    const { id } = request.params;

    if (!id) {
      return response
        .status(400)
        .json({ success: false, message: "id not provided!" });
    }

    const doesBlogExist = await Blog.findById(id);
    
    if (!doesBlogExist) {
      return response.status(400).json({ success: false, message: "blog not found!" });
    }

    const deletedBlog = await Blog.findByIdAndDelete(id);

    response
      .status(200)
      .json({
        success: true,
        data: deletedBlog,
        message: `blog is deleted with id: ${deleteBlogById._id}`,
      });
  } catch (error) {
    console.log(error);
    response.status(500).json({ success: false, message: error.message });
  }
}
