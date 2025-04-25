import { useContext, useEffect } from "react";
import { client } from "../../services/client";
import { PostContext } from "../../contexts/PostContext";

export const usePostData = () => {
  const { setIsLoading, postList, setPostList } = useContext(PostContext);

  const fetchPosts = async () => {
    try {
      const res = await client.get("/posts");
      if (res.data) {
        setPostList(res.data);
      }
    } catch (e) {
      console.error("投稿の取得に失敗しました", e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return { postList, setPostList, fetchPosts };
};
