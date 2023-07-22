import express from "express"
import cors from "cors"
import morgan from "morgan"
import "dotenv/config"

const app = express()
const port = process.env.port

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