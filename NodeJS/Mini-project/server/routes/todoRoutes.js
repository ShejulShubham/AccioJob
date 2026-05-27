import express from "express";
import Todo from "../models/todoModel.js";

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const todo = await Todo.find().sort({ createdAt: -1 });
    response.json(todo);
  } catch (error) {
    console.log("ERROR in fetching data", error);
    response.status(500).json({ message: "Server Error" });
  }
});

router.post("/", async (request, response) => {
  try {
    const { title } = request.body;

    if (!title || !title.trim()) {
      return response.status(400).json({ message: "Title is empty" });
    }

    const todo = await Todo.create({ title: title.trim() });

    response.status(201).json(todo);
  } catch (error) {
    console.log("ERROR in creating todo", error);
    response.status(500).json({ message: "Server Error" });
  }
});

router.patch("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const { title, completed } = request.body;

    const todo = await Todo.findById(id);

    if (!todo) {
      return response.status(404).json({ message: "todo not found" });
    }

    if (typeof title == "string") {
      todo.title = title;
    }

    if (typeof completed == "boolean") {
      todo.completed = completed;
    }

    const updated = await todo.save();

    response.status(206).json(updated);
  } catch (error) {
    console.log("ERROR happens on update request", error);
    response.status(500).json({ message: "Server Error" });
  }
});

export default router;
