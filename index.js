import express from "express"
import cors from "cors"
import morgan from "morgan"
import "dotenv/config"

import { db } from "./app/infrastructure/database/mongodb.js"
import routerVideos from "./app/interfaces/routes/videoRoutes.js"
import routerProducts from "./app/interfaces/routes/productRouter.js"
import routerComments from "./app/interfaces/routes/commentRouter.js"

const app = express()
const port = process.env.port
const api = "/api/v1"
db()

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use(api, routerVideos)
app.use(api, routerProducts)
app.use(api, routerComments)

app.get("/", (req, res) => {
    res.send({ message: "tokopedia play clone api" })
})

app.listen(port, () => {
    console.log(`app listen on port ${port}`)
})