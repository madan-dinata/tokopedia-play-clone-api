import { Router } from "express";
import { getcommentsByVideoId, postCommentByVideoId } from "../controllers/commentController.js";
const router = Router()

router.get("/comments/:videoId", getcommentsByVideoId)
router.post("/comments/:videoId", postCommentByVideoId)

export default router