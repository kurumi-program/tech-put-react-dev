import React, { useContext, useEffect, useState } from "react";
import { client } from "../../services/client";
import { PostItem } from "./PostItem";
import { Post } from "../../types/post";
import { PostContext } from "../../contexts/PostContext";

export const PostList = () => {
  const { postList, setPostList } = useContext(PostContext);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await client.get("/posts");
        if (res.data) {
          const posts = res.data.map((post: any) => ({
            id: post.id,
            content: post.content,
          }));
          setPostList(posts);
        }
      } catch (error) {
        console.error("投稿の取得に失敗しました", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <ul className="main-container p-b-40-sp">
      {postList.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
};
