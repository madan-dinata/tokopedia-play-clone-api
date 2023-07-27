import { Router } from "express";
import { getVideos, getVideoById, postVideo } from "../controllers/videoController.js";
const router = Router();

router.get("/videos", getVideos);
router.get("/videos/:id", getVideoById);
router.post("/videos", postVideo);

export default router;
