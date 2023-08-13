import * as commentRepository from "./commentRepository.js"
import { CommentEntity } from "./commentEntity.js"

export const getCommentsByVideoId = async (videoId) => {
  const comments = await commentRepository.getCommentsByVideoId(videoId)
  return comments[0].comments.map((comment) => CommentEntity(comment.id, comment.username, comment.comment, comment.createdAt, comment.updatedAt))
}

export const postCommentByVideoId = async (videoId, username, comment) => {
  return await commentRepository.postCommentByVideoId(videoId, username, comment)
}
