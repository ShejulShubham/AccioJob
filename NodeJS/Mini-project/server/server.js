import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import todoRoutes from "./routes/todoRoutes.js"

dotenv.config();


const app = express();

app.use(express.json());
app.use(cors({origin: "http://localhost:5173"}));
app.use("/api/todos", todoRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGODB_URL;


mongoose.connect(MONGO_URL)
.then(()=>console.log("MongoDB connected"))
.catch((err)=>console.log("MongoDB not connected", err));

app.listen(PORT, ()=>{
    console.log("server running at PORT ", PORT);
})