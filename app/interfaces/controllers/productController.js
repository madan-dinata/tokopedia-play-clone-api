import * as productUsecase from "../../domain/products/productUsecase.js"

export const getProductsByVideoId = async (req, res) => {
    try {
        const { videoId } = req.params
        const product = await productUsecase.getProductsByVideoId(videoId)
        res.send(product)
    } catch (error) {
        if (error.name === "CastError" && error.kind === "ObjectId") {
            return res.status(400).send({ message: "Id not found" })
        }
        res.status(500).send({ message: error.message })
    }
}