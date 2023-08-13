import express from "express"
import cors from "cors"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import "dotenv/config"
import { createServer } from "http"
import { Server } from "socket.io"

import { db } from "./app/infrastructure/database/mongodb.js"
import routerVideos from "./app/interfaces/routes/videoRoutes.js"
import routerProducts from "./app/interfaces/routes/productRouter.js"
import routerComments from "./app/interfaces/routes/commentRouter.js"
import routerUsers from "./app/interfaces/routes/userRouter.js"

const app = express()
const port = process.env.port

const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: process.env.ALLOWED_ORIGIN,
  },
})

io.on("connection", (socket) => {
  console.log("Connection Ready")
  socket.on("from-client", (data) => {
    socket.broadcast.emit("from-server", data)
  })
  socket.on("disconnect", () => {
    console.log("user disconnected")
  })
})

const api = "/api/v1"
db()

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(cookieParser())

app.use(api, routerVideos)
app.use(api, routerProducts)
app.use(api, routerComments)
app.use(api, routerUsers)

app.get("/", (req, res) => {
  res.send({ message: "tokopedia play clone api" })
})

httpServer.listen(port, () => {
  console.log(`app listen on port ${port}`)
})
