import jwt from "jsonwebtoken"
const { TokenExpiredError } = jwt

export const catchError = (err, res) => {
  if (err instanceof TokenExpiredError) {
    return res.status(401).send({ message: "Unauthorized! Access Token was expired!" })
  }
  res.status(401).send({ message: "Unauthorized!" })
}

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"]
  const token = authHeader && authHeader.split(" ")[1]
  if (!token)
    return res.status(401).send({
      message: "No token provided!",
    })
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) return catchError(err, res)
    req.id = decoded.user.id
    req.username = decoded.user.username
    req.exp = decoded.exp
    next()
  })
}
