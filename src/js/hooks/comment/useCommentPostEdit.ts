import { useContext, useEffect, useState } from "react";
import { PostContext } from "../../contexts/PostContext";
import { authHeaders } from "../../services/authService";
import { client } from "../../services/client";
import { useNoticeData } from "../notification/useNoticeData";

type Props = {
  postId: string;
  commentId?: string;
  initialContent?: string;
};

export const useCommentPostEdit = ({ postId, commentId, initialContent = "" }: Props) => {
  const { setCommentList } = useContext(PostContext);
  const [content, setContent] = useState("");
  const { setBellActive } = useNoticeData();

  // 初期コンテンツをセット（編集モードのみ）
  useEffect(() => {
    if (initialContent) {
      setContent(initialContent);
    }
  }, [initialContent]);

  // 新規コメントの投稿
  const handleCommentPost = async () => {
    try {
      const res = await client.post(
        `/posts/${postId}/comments`,
        { content },
        { headers: authHeaders() },
      );
      const newComment = res.data;
      setCommentList((prevCommentList) => [...prevCommentList, newComment]);
      setContent(""); // 新規投稿後にコンテンツをリセット
      if (newComment.mention) {
        setBellActive(true);
      }
    } catch (e) {
      console.error("コメントの投稿に失敗しました", e);
    }
  };

  // 既存コメントの編集
  const handleCommentEdit = async () => {
    if (!commentId) {
      console.error("コメントIDが存在しません");
      return;
    }

    try {
      const res = await client.put(
        `/posts/${postId}/comments/${commentId}`,
        { content },
        { headers: authHeaders() },
      );
      const updatedComment = res.data;

      // 編集したコメントをリスト内で置き換え
      setCommentList((prevCommentList) =>
        prevCommentList.map((comment) => (comment.id === commentId ? updatedComment : comment)),
      );
      if (updatedComment.mention) {
        setBellActive(true);
      }
    } catch (e) {
      console.error("コメントの編集に失敗しました", e);
    }
  };

  return {
    handleCommentPost,
    handleCommentEdit,
    content,
    setContent,
  };
};
