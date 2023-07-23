import { Router } from "express";
import { getProductsByVideoId, } from "../controllers/productController.js";
const router = Router()

router.get("/products/:videoId", getProductsByVideoId)

export default router