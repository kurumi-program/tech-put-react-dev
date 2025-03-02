import React from "react";
import { Post } from "../../types/post";

type Props = {
  post: Post;
};

export const PostItem = ({ post }: Props) => {
  return (
    <li className="article border">
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <i className="fa-regular fa-heart mt-3"></i>
    </li>
  );
};
