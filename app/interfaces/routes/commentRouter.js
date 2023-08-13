import { Router } from "express"
import { getcommentsByVideoId, postCommentByVideoId } from "../controllers/commentController.js"
import { verifyToken } from "../../infrastructure/middlewares/auth.js"
const router = Router()

router.get("/comments/:videoId", getcommentsByVideoId)
router.post("/comments/:videoId", verifyToken, postCommentByVideoId)

export default router
