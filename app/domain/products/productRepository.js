import VideoModel from "../../infrastructure/database/models/videoModel.js";

export const getProductsByVideoId = async (videoId) => {
    return VideoModel.find({ _id: videoId}, { products: 1 })
}