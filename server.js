import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./config/db.config.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// *Routes Middleware


// app.use("/api/v1/analytics") assignment 2

app.listen(PORT , ()=>{
    console.log(`Server is running on PORT http://localhost:${PORT}`);
    connectDB();
})