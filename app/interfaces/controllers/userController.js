// userController.js
import * as UserUsecase from "../../domain/users/userUsecase.js"

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
