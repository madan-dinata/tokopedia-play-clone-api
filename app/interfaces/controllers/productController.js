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

export const postProductByVideoId = async (req, res) => {
    try {
        const { videoId } = req.params
        const { linkProduct, title, price } = req.body
        if (!linkProduct, !title, !price) return res.status(400).send({ message: "Link Product or title or price not be empty" })
        await productUsecase.postProductByVideoId(videoId, linkProduct, title, price)
        res.status(201).send({ message: "Successful Product" })
    } catch (error) {
        if (error.name === "CastError" && error.kind === "ObjectId") {
            return res.status(400).send({ message: "Id not found" })
        }
        res.status(500).send({ message: error.message })
    }
}