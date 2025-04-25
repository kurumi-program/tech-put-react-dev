import React from "react";
import { PostItem } from "./PostItem";
import { usePostData } from "../hooks/post/usePostData";

export const PostList = () => {
  const { postList } = usePostData();

  return (
    <ul className="main-container">
      {postList.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
};
