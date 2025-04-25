import { useContext } from "react";
import { PostContext } from "../../contexts/PostContext";
import { authHeaders } from "../../services/authService";
import { client } from "../../services/client";

type Props = {
  postId: string;
  commentId: string;
};

export const useCommentDelete = ({ postId, commentId }: Props) => {
  const { setCommentList } = useContext(PostContext);

  const handleCommentDelete = async () => {
    if (!window.confirm("この投稿を削除しますか？")) return;
    try {
      await client.delete(`/posts/${postId}/comments/${commentId}`, { headers: authHeaders() });

      // 削除成功後にコメントリストから該当コメントを削除
      setCommentList((prevCommentList) =>
        prevCommentList.filter((comment) => comment.id !== commentId),
      );
    } catch (e) {
      console.error("削除に失敗しました");
    }
  };

  return { handleCommentDelete };
};
