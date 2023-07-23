import VideoModel from "../../infrastructure/database/models/videoModel.js";

export const getCommentsByVideoId = async (videoId) => {
    return VideoModel.find({ _id: videoId}, { comments: 1 })
}

export const postCommentByVideoId = async (videoId, username, comment) => {
    return VideoModel.updateOne({ _id: videoId }, { $push: { comments : { username, comment } } })
}