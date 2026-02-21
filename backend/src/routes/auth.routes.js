import express from "express"
const router=express.Router();
import { signup,login, checkAuth,logout} from "../controllers/auth.controllers.js";
import { protectRoute } from "../middleware/auth.protectRoute.js";
router.post("/login",login);
router.post("/signup",signup);

router.get("/",protectRoute);
router.get("/check",protectRoute,checkAuth)
router.post("/logout",logout)

export default router;