import express from "express"
import cors from "cors"
import morgan from "morgan"
import "dotenv/config"

import { db } from "./app/infrastructure/database/mongodb.js"

const app = express()
const port = process.env.port
db()

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get("/", (req, res) => {
    res.send({ message: "tokopedia play clone api" })
})

app.listen(port, () => {
    console.log(`app listen on port ${port}`)
})