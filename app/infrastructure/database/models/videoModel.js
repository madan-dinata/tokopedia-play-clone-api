import mongoose from "mongoose";
import { Schema } from "mongoose";

const products = {
  linkProduct: {
    type: String,
  },
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
};

const VideosSchema = new Schema({
  urlThumbnail: {
    type: String,
  },
  urlVideo: {
    type: String,
  },
  products: products,
});

VideosSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const VideoModel = mongoose.model("videos", VideosSchema);

export default VideoModel;
