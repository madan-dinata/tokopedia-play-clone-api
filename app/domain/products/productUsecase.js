import * as productRepository from "./productRepository.js"
import { ProductEntity } from "./productEntity.js"

export const getProductByVideoId = async (videoId) => {
    const product = await productRepository.getProductByVideoId(videoId)
    if (!product) throw new Error(`product not found`);
    return product[0].products.map((product) => ProductEntity(product._id, product.linkProduct, product.title, product.price) )
}