import mongoose from "mongoose";
import { Schema } from "mongoose";

const VideosSchema = new Schema({
  urlThumbnail: {
    type: String
  },
  urlVideo: {
    type: String
  }
});

const VideoModel = mongoose.model("videos", VideosSchema);

export default VideoModel;
