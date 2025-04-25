import React from "react";
import { CommentAreaForm } from "./CommentAreaForm";
import { useCommentPostEdit } from "../hooks/comment/useCommentPostEdit";

type Props = {
  postId: string;
};

export const CommentPost = ({ postId }: Props) => {
  const { handleCommentPost, content, setContent } = useCommentPostEdit({ postId });
  return (
    <CommentAreaForm
      placeholder="コメントする…"
      onClick={handleCommentPost}
      onChange={setContent}
      value={content}
      buttonTxt="追加"
    />
  );
};
