import express from "express";
import { signin, signup } from "../Controllers/auth.js";

const router = express.Router();

// CREATE A USER
router.post("/signup",signup)

// SIGN IN
router.post("/signin", signin)

// SIGN GOOGLE
router.post("/google", )


export default router;  