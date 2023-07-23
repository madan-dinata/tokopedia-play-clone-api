import mongoose from "mongoose";
import { Schema } from "mongoose";

const products = new Schema({
  _id: mongoose.Types.ObjectId,
  linkProduct: {
    type: String,
  },
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const comments = new Schema(
  {
    _id: mongoose.Types.ObjectId,
    username: {
      type: String,
    },
    comment: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const VideosSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  urlThumbnail: {
    type: String,
  },
  urlVideo: {
    type: String,
  },
  products: [products],
  comments: [comments],
});

const VideoModel = mongoose.model("videos", VideosSchema);

export default VideoModel;
