import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./config/db.js";
import blogRouter from "./routes/blogRoutes.js";
import adminRouter from "./routes/adminRoutes.js";
const app = express();
await connectDb();

//Middleware
app.use(cors());
app.use(express.json());
app.use("/api/blog", blogRouter);
app.use("/api/admin", adminRouter);

const PORT = process.env.PORT || 5000;

app.get("/", (request, response) => {
  response.status(200).json({ message: "you have reached to right spot!" });
});

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});
