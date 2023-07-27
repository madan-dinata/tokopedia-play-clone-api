import { Router } from "express";
import { getProductsByVideoId, postProductByVideoId, } from "../controllers/productController.js";
const router = Router()

router.get("/products/:videoId", getProductsByVideoId)
router.post("/products/:videoId", postProductByVideoId)

export default router