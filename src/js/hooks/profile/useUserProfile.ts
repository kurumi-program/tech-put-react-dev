import { useContext, useEffect } from "react";
import { client } from "../../services/client";
import { ProfileContext } from "../../contexts/ProfileContext";

export const useUserProfile = (userId: string) => {
  const {
    userProfile,
    setUserProfile,
    userPostList,
    setUserPostList,
    isUserProfileLoading,
    setIsUserProfileLoading,
  } = useContext(ProfileContext);
  const fetchUserProfile = async () => {
    try {
      const res = await client.get(`/users/${userId}`);
      if (res.data) {
        setUserProfile(res.data);
        setUserPostList(res.data.post);
      }
    } catch (e) {
      console.error("プロフィールの取得に失敗しました", e);
    } finally {
      setIsUserProfileLoading(false);
    }
  };

  return {
    fetchUserProfile,
    userProfile,
    setUserProfile,
    userPostList,
    setUserPostList,
    isUserProfileLoading,
  };
};
