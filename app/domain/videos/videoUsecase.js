import * as videoRepository from "./videoRepository.js"
import { VideoEntity } from "./videoEntity.js"

export const getVideos = async () => {
  const videos = await videoRepository.getVideos()
  return videos.map((video) => VideoEntity(video.id, video.title, video.description, video.urlThumbnail, video.urlVideo))
}

export const getVideoById = async (id) => {
  const video = await videoRepository.getVideoById(id)
  return VideoEntity(video.id, video.title, video.description, video.urlThumbnail, video.urlVideo)
}

export const getVideoByQuery = async (q) => {
  const videos = await videoRepository.getVideoByQuery(q)
  return videos.map((video) => VideoEntity(video.id, video.title, video.description, video.urlThumbnail, video.urlVideo))
}

export const postVideo = async (title, description, urlThumbnail, urlVideo) => {
  return await videoRepository.postVideo(title, description, urlThumbnail, urlVideo)
}
