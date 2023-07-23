import VideoModel from "../../infrastructure/database/models/videoModel.js";

export const getVideos = async () => {
    return VideoModel.find()
}

export const getVideoById = async (id) => {
    return VideoModel.findById(id)
}