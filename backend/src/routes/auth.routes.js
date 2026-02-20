import express from "express"
const router=express.Router();
import { signup,login, getme } from "../controllers/auth.controllers.js";
import { protectRoute } from "../middleware/auth.protectRoute.js";
router.post("/login",login);
router.post("/signup",signup);
router.get("/me",protectRoute,getme)

export default router;