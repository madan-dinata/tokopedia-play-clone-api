import * as commentRepository from "./commentRepository.js"
import { CommentEntity } from "./commentEntity.js"

export const getCommentsByVideoId = async (videoId) => {
    const comments = await commentRepository.getCommentsByVideoId(videoId)
    if (!comments) throw new Error("comments not found");
    return comments[0].comments.map((comment) => CommentEntity(comment.username, comment.comment, comment.updatedAt) )
}

export const postCommentByVideoId = async (videoId, username, comment) => {
    return commentRepository.postCommentByVideoId(videoId, username, comment)
}