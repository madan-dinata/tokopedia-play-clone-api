import { Router } from "express";
import { getVideos, getVideoById } from "../controllers/videoController.js";
const router = Router()

router.get("/videos", getVideos)
router.get("/videos/:id", getVideoById)

export default router