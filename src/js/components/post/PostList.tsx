import React, { useContext } from "react";
import { PostContext } from "../../contexts/PostContext";
import { PostItem } from "./PostItem";

export const PostList = () => {
  const { postList } = useContext(PostContext);
  return (
    <ul className="main-container">
      {postList.map((post, index) => (
        <PostItem key={index} post={post} index={index} />
      ))}
    </ul>
  );
};
