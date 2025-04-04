import express from "express";
import { loginUser, registerUser } from "../controllers/authController.js";

const router = express.Router();

// Signup Route
router.post("/signup", registerUser);

// Login Route
router.post("/login", loginUser);

export default router;
