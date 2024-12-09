import express from "express";
import { deleteUser, dislikeVideo, getUser, likeVideo, subscribeUser, unsubscribeUser, updateUser } from "../Controllers/user.js";
import {verifyToken} from "../verifyToken.js";
const router = express.Router();

// UPDATE A USER
router.put("/:id", verifyToken, updateUser)

// GET A USER
router.get("/find/:id", getUser)

// DELETE A USER
router.delete("/:id", deleteUser)

// SUBSCRIBE A USER
router.put("/sub/:id", subscribeUser)

// UNSUBSCRIBE A USER
router.put("/unsub/:id", unsubscribeUser)

// LIKE A VIDEO
router.put("/like/:videoId", likeVideo)

// DISLIKE A VIDEO
router.put("/dislike/:vidoeId", dislikeVideo)


export default router;