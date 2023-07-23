import * as videoUsecase from "../../domain/videos/videoUsecase.js"

export const getVideos = async (req, res) => {
    try {
        const videos = await videoUsecase.getVideos()
        res.send(videos)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}