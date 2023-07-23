import VideoModel from "../../infrastructure/database/models/videoModel.js";

export const getVideos = async () => {
    return VideoModel.find()
}