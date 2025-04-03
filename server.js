import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./config/db.config.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(express.json());

import authRoutes from "./routes/auth.routes.js"

app.use("/api/auth", authRoutes);

app.listen(PORT , ()=>{
    console.log(`Server is running on PORT http://localhost:${PORT}`);
    connectDB();
})