import mongoose from "mongoose"
import { Schema } from "mongoose"

const products = new Schema({
  linkProduct: {
    type: String,
  },
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  urlImage: {
    type: String,
  },
})

const comments = new Schema(
  {
    comment: {
      type: String,
    },
    username: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps: true,
  }
)

const VideosSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  urlThumbnail: {
    type: String,
  },
  urlVideo: {
    type: String,
  },
  products: [products],
  comments: [comments],
})

const VideoModel = mongoose.model("videos", VideosSchema)

export default VideoModel
