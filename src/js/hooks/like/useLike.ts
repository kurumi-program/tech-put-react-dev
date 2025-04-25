import { useContext, useEffect } from "react";
import { PostContext } from "../../contexts/PostContext";
import { authHeaders } from "../../services/authService";
import { client } from "../../services/client";
import { ProfileContext } from "../../contexts/ProfileContext";

type Props = {
  postId: string;
};

export const useLike = ({ postId }: Props) => {
  const { postLikes, setPostLikes } = useContext(PostContext);
  const { profile, setProfile } = useContext(ProfileContext);

  // いいね状態とカウントを取得する関数
  const fetchLikes = async () => {
    try {
      const res = await client.get(`/posts/${postId}/like_status`, { headers: authHeaders() });
      setPostLikes((prevLikes) => ({
        ...prevLikes,
        [postId]: {
          liked: res.data.liked,
          count: res.data.count,
        },
      }));
    } catch (e) {
      console.error("データの取得に失敗しました", e);
    }
  };

  useEffect(() => {
    if (postId) {
      fetchLikes();
    } // コンポーネントがマウントされた際に状態を取得
  }, [postId]);

  // いいねを追加する関数
  const handleLikePost = async () => {
    try {
      const res = await client.post(`/posts/${postId}/like`, {}, { headers: authHeaders() });
      if (res.data.status === "ok") {
        setPostLikes((prevLikes) => ({
          ...prevLikes,
          [postId]: {
            liked: true,
            count: res.data.count,
          },
        }));

        if (profile) {
          const updatedLikedCount = profile.likedCount + 1;
          setProfile({ ...profile, likedCount: updatedLikedCount });
        }
      }
    } catch (e) {
      console.error("いいねできませんでした", e);
    }
  };

  // いいねを削除する関数
  const handleLikeDelete = async () => {
    try {
      const res = await client.delete(`/posts/${postId}/like`, { headers: authHeaders() });
      if (res.data.status === "ok") {
        setPostLikes((prevLikes) => ({
          ...prevLikes,
          [postId]: {
            liked: false,
            count: res.data.count,
          },
        }));
        if (profile) {
          const updatedLikedCount = profile.likedCount - 1;
          setProfile({ ...profile, likedCount: updatedLikedCount });
        }
      }
    } catch (e) {
      console.error("いいね削除できませんでした");
    }
  };

  return { postLikes, handleLikePost, handleLikeDelete, setPostLikes };
};
