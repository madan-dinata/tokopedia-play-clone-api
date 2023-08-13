import UserModel from "../../infrastructure/database/models/userModel.js"

export const findByUsername = async (username) => {
  const user = await UserModel.findOne({ username })
  return user
}

export const createUser = async (user) => {
  await UserModel.create({
    _id: user.id,
    username: user.username,
    password: user.password,
    urlImage: user.urlImage,
  })
}
