// userUseCase.js
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import * as UserRepository from "./userRepository.js"
import * as UserEntity from "./userEntity.js"

export const login = async (username, password) => {
  const user = await UserRepository.findByUsername(username)

  if (user) {
    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (isPasswordValid) {
      const accessToken = jwt.sign({ user: { id: user._id, username: user.username } }, process.env.SECRET_KEY, { expiresIn: "1d" })
      return accessToken
    } else {
      throw new Error("Invalid username or password")
    }
  } else {
    throw new Error("User not found")
  }
}

export const register = async (username, password) => {
  const existingUser = await UserRepository.findByUsername(username)
  if (existingUser) {
    throw new Error("Username already exists")
  }

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const urlImage = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"

  const newUser = UserEntity.createUser(null, username, passwordHash, urlImage)
  await UserRepository.createUser(newUser)
}
