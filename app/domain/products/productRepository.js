import VideoModel from "../../infrastructure/database/models/videoModel.js";
import mongoose from "mongoose";

export const getProductsByVideoId = async (videoId) => {
    return VideoModel.find({ _id: videoId}, { products: 1 })
}

export const postProductByVideoId = async (videoId, linkProduct, title, price) => {
    return VideoModel.updateOne({ _id: videoId }, { $push: { products : { _id: new mongoose.Types.ObjectId(), linkProduct, title, price } } })
}