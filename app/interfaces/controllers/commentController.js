import * as commentUsecase from "../../domain/comments/commentUsecase.js"

export const getcommentsByVideoId = async (req, res) => {
    try {
        const { videoId } = req.params
        const comments = await commentUsecase.getCommentsByVideoId(videoId)
        res.send(comments)
    } catch (error) {
        if (error.name === "CastError" && error.kind === "ObjectId") {
            return res.status(400).send({ message: "Id not found" })
        }
        res.status(500).send({ message: error.message })
    }
}

export const postCommentByVideoId = async (req, res) => {
    try {
        const { videoId } = req.params
        const { username, comment } = req.body
        if (!username || !comment) return res.status(400).send({ message: "username or comment not be empty" })
        await commentUsecase.postCommentByVideoId(videoId, username, comment)
        res.status(201).send({ message: "Successful Comment" })
    } catch (error) {
        if (error.name === "CastError" && error.kind === "ObjectId") {
            return res.status(400).send({ message: "Id not found" })
        }
        res.status(500).send({ message: error.message })
    }
}