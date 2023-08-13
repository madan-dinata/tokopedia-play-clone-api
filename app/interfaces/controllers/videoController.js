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
    const { id } = req.params
    const video = await videoUsecase.getVideoById(id)
    res.send(video)
  } catch (error) {
    if (error.name === "CastError" && error.kind === "ObjectId") {
      return res.status(400).send({ message: "Id not found" })
    }
    res.status(500).send({ message: error.message })
  }
}

export const getVideoBySearch = async (req, res) => {
  try {
    const { q } = req.query
    const videos = await videoUsecase.getVideoByQuery(q)
    res.send(videos)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

export const postVideo = async (req, res) => {
  try {
    const { title, description, urlThumbnail, urlVideo } = req.body
    if (!urlThumbnail || !urlVideo) return res.status(400).send({ message: "Url Thumbnail or Url Video not be empty" })
    await videoUsecase.postVideo(title, description, urlThumbnail, urlVideo)
    res.status(201).send({ message: "Successful create video" })
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}
