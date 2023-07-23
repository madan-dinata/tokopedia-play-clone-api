import * as productRepository from "./productRepository.js"
import { ProductEntity } from "./productEntity.js"

export const getProductsByVideoId = async (videoId) => {
    const product = await productRepository.getProductsByVideoId(videoId)
    return product[0].products.map((product) => ProductEntity(product._id, product.linkProduct, product.title, product.price) )
}