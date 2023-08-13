import mongoose from "mongoose"
import { Schema } from "mongoose"

const UsersSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  urlImage: {
    type: String,
  },
})

const UserModel = mongoose.model("users", UsersSchema)

export default UserModel
