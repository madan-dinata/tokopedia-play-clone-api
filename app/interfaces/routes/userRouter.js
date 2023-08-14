import { Router } from "express"
import { getMe, login, register } from "../controllers/userController.js"
import { verifyToken } from "../../infrastructure/middlewares/auth.js"
const router = Router()

router.get("/me", verifyToken, getMe)
router.post("/login", login)
router.post("/register", register)

export default router
