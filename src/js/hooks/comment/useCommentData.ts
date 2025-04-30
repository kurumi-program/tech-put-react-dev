import { useContext, useEffect } from "react";
import { PostContext } from "../../contexts/PostContext";
import { client } from "../../services/client";

export const useCommentData = (postId: string) => {
  const { setIsCommentLoading, commentList, setCommentList } = useContext(PostContext);

  const fetchComments = async () => {
    try {
      const res = await client.get(`/posts/${postId}/comments`);
      if (res.data) {
        setCommentList(res.data);
      }
    } catch (error) {
      console.error("投稿の取得に失敗しました", error);
    } finally {
      setIsCommentLoading(false);
    }
  };

  useEffect(() => {
    setCommentList([]);
    if (postId) {
      fetchComments();
    }
  }, [postId]);

  return { commentList, setCommentList, fetchComments };
};
