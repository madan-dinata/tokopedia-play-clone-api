import * as videoUsecase from "../../domain/videos/videoUsecase.js";

export const getVideos = async (req, res) => {
  try {
    const videos = await videoUsecase.getVideos();
    res.send(videos);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getVideoById = async (req, res) => {
  try {
    const videoId = req.params.id;
    const video = await videoUsecase.getVideoById(videoId);
    res.send(video);
  } catch (error) {
    if (error.name === "CastError" && error.kind === "ObjectId") {
      return res.status(400).send({ message: "Id not found" });
    }
    res.status(500).send({ message: error.message });
  }
};

export const postVideo = async (req, res) => {
  try {
    const { urlThumbnail, urlVideo } = req.body;
    if (!urlThumbnail || !urlVideo) return res.status(400).send({ message: "Url Thumbnail or Url Video not be empty" });
    await videoUsecase.postVideo(urlThumbnail, urlVideo);
    res.status(201).send({ message: "Successful create video" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
