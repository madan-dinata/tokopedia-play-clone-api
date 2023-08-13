import UserModel from "../../infrastructure/database/models/userModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import mongoose from "mongoose"

export const login = async (req, res) => {
  try {
    const { username, password } = req.body

    if (!username || !password) {
      return res.status(400).json({ message: "All form fields must be input" })
    }

    const user = await UserModel.findOne({ username })

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password)

      if (isPasswordValid) {
        const accessToken = jwt.sign({ user: { id: user.id, username: user.username } }, process.env.SECRET_KEY, { expiresIn: "1d" })

        // Set cookies if needed
        // res.cookie("access_token", accessToken, {
        //   httpOnly: true,
        //   sameSite: "none",
        //   secure: true,
        //   maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
        //   path: "/",
        // });

        res.status(200).send(accessToken)
      } else {
        return res.status(400).send({ message: "Invalid username or password" })
      }
    } else {
      return res.status(400).send({ message: "User not found" })
    }
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

export const register = async (req, res) => {
  try {
    const { username, password } = req.body
    if (!username || !password) return res.status(400).send({ message: "username or comment not be empty" })
    const existingUser = await UserModel.findOne({ username })
    if (existingUser) return res.status(400).send({ message: "username existing" })

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    await UserModel.create({ _id: new mongoose.Types.ObjectId(), username, password: passwordHash })
    res.status(201).send({ message: "Berhasil membuat akun" })
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}
