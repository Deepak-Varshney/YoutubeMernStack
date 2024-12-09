import express from "express"
import dotenv from "dotenv"
import { connectDb } from "./db.js";
import userRoutes from "./Routes/user.js"
import videoRoutes from "./Routes/video.js"
import commentsRoutes from "./Routes/comments.js"
import authRoutes from "./Routes/auth.js"
import cookieParser from "cookie-parser";

const app = express()
dotenv.config();

app.use(cookieParser())
app.use(express.json())
app.use("/api/users", userRoutes)
app.use("/api/videos", videoRoutes)
app.use("/api/comments", commentsRoutes)
app.use("/api/auth", authRoutes)

app.use((err, req, res, next)=>{
    const status = err.status || 500;
    const message = err.message || "Something went wrong"
    return res.status(status).json({
        success: false,
        status,
        message
    })
})
app.listen(8800,()=>{
    connectDb();
    console.log("Connected To Server")
})