import * as productUsecase from "../../domain/products/productUsecase.js"

export const getProductsByVideoId = async (req, res) => {
    try {
        const { videoId } = req.params
        const product = await productUsecase.getProductsByVideoId(videoId)
        res.send(product)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}