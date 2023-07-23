import * as videoRepository from "./videoRepository.js"
import { VideoEntity } from "./videoEntity.js"

export const getVideos = async () => {
    const videos = await videoRepository.getVideos()
    return videos.map((video) => VideoEntity(video.id, video.urlThumbnail, video.urlVideo))
}

export const getVideoById = async (id) => {
    const video = await videoRepository.getVideoById(id)
    if (!video) throw new Error(`Video not found`);
    return VideoEntity(video.id, video.urlThumbnail, video.urlVideo)
}