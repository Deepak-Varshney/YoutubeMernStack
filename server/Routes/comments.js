import express from "express";
import {addComment, getComments} from "../Controllers/comment.js";
import {verifyToken} from "../verifyToken.js";


const router = express.Router();
router.post("/", verifyToken, addComment)
router.delete("/:id", verifyToken, addComment)
router.get("/:videoId", getComments)

export default router;