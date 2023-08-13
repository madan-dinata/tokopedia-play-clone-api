import * as productRepository from "./productRepository.js"
import { ProductEntity } from "./productEntity.js"

export const getProductsByVideoId = async (videoId) => {
  const product = await productRepository.getProductsByVideoId(videoId)
  return product[0].products.map((product) => ProductEntity(product._id, product.linkProduct, product.title, product.price, product.urlImage))
}

export const postProductByVideoId = async (videoId, linkProduct, title, price, urlImage) => {
  return await productRepository.postProductByVideoId(videoId, linkProduct, title, price, urlImage)
}
