import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/usersRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());    
app.use(cors({
    origin: "http://localhost:5173"
}));
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGODB_URL;

mongoose.connect(MONGO_URL)
.then(()=>console.log("CONNECTED TO MONGODB"))
.catch(()=>console.log("Could not connect to mongoDB"));


app.listen(PORT, ()=>{
    console.log(`Server listening at http://localhost:${PORT}`);
})