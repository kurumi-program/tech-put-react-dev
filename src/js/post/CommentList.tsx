import React, { useContext } from "react";
import { useCommentData } from "../hooks/comment/useCommentData";
import { CommentItem } from "./CommentItem";
import { PostContext } from "../contexts/PostContext";

type Props = {
  postId: string;
};

export const CommentList = ({ postId }: Props) => {
  const { commentList } = useCommentData(postId);
  const { isCommentLoading } = useContext(PostContext);
  if (isCommentLoading) return null;
  return (
    <ul>
      {commentList.map((comment) => (
        <CommentItem id={comment.id} key={comment.id} postId={postId} comment={comment} />
      ))}
    </ul>
  );
};


