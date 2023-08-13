import VideoModel from "../../infrastructure/database/models/videoModel.js"
import mongoose from "mongoose"

export const getProductsByVideoId = async (videoId) => {
  return VideoModel.find({ _id: videoId }, { products: 1 })
}

export const postProductByVideoId = async (videoId, linkProduct, title, price, urlImage) => {
  return VideoModel.updateOne({ _id: videoId }, { $push: { products: { linkProduct, title, price, urlImage } } })
}
