import { useContext, useEffect } from "react";
import { ProfileContext } from "../../contexts/ProfileContext";
import { client } from "../../services/client";
import { authHeaders } from "../../services/authService";

export const useProfileData = () => {
  const {
    profile,
    setProfile,
    profilePostList,
    setProfilePostList,
    profileLikedPostList,
    setProfileLikedPostList,
    isProfileLoading,
    setIsProfileLoading,
  } = useContext(ProfileContext);

  const fetchProfile = async () => {
    try {
      const res = await client.get(`/profile`, { headers: authHeaders() });
      if (res.data) {
        setProfile(res.data);
        setProfilePostList(res.data.post);
        setProfileLikedPostList(res.data.likedPost);
      }
    } catch (e) {
      console.error("プロフィールの取得に失敗しました", e);
    } finally {
      setIsProfileLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return {
    profile,
    setProfile,
    profilePostList,
    setProfilePostList,
    profileLikedPostList,
    setProfileLikedPostList,
    isProfileLoading,
  };
};
