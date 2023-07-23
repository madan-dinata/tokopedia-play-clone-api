import * as commentUsecase from "../../domain/comments/commentUsecase.js"

export const getcommentsByVideoId = async (req, res) => {
    try {
        const { videoId } = req.params
        const comments = await commentUsecase.getCommentsByVideoId(videoId)
        res.send(comments)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

export const postCommentByVideoId = async (req, res) => {
    try {
        const { videoId } = req.params
        const { username, comment } = req.body
        await commentUsecase.postCommentByVideoId(videoId, username, comment)
        res.send({ message: "Successful Comment" })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}