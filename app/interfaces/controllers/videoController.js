import * as videoUsecase from "../../domain/videos/videoUsecase.js"

export const getVideos = async (req, res) => {
    try {
        const videos = await videoUsecase.getVideos()
        res.send(videos)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

export const getVideoById = async (req, res) => {
    try {
        const videoId = req.params.id
        const video = await videoUsecase.getVideoById(videoId)
        res.send(video)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}