import { Router } from "express";
import { getProductByVideoId, } from "../controllers/productController.js";
const router = Router()

router.get("/products/:videoId", getProductByVideoId)

export default router