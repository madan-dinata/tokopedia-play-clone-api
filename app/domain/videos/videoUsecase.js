import * as videoRepository from "./videoRepository.js"
import { VideoEntity } from "./videoEntity.js"

export const getVideos = async () => {
    const videos = await videoRepository.getVideos()
    return videos.map((video) => VideoEntity(video._id, video.urlThumbnail, video.urlVideo))
}