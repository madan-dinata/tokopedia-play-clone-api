// userController.js
import * as UserUsecase from "../../domain/users/userUsecase.js"

export const getMe = async (req, res) => {
  try {
    const { username } = req
    const user = await UserUsecase.getMe(username)
    res.send(user)
    return
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

export const login = async (req, res) => {
  try {
    const { username, password } = req.body
    const accessToken = await UserUsecase.login(username, password)
    res.status(200).send(accessToken)
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
}

export const register = async (req, res) => {
  try {
    const { username, password } = req.body
    await UserUsecase.register(username, password)
    res.status(201).send({ message: "Account successfully created" })
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
}
