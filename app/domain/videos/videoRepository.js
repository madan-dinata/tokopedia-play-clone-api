import VideoModel from "../../infrastructure/database/models/videoModel.js";
import mongoose from "mongoose";

export const getVideos = async () => {
  return VideoModel.find();
};

export const getVideoById = async (id) => {
  return VideoModel.findById(id);
};

export const postVideo = async (urlThumbnail, urlVideo) => {
  return await VideoModel.create({ _id: new mongoose.Types.ObjectId(), urlThumbnail, urlVideo });
};
