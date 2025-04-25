import { useContext } from "react";
import { client } from "../../services/client";
import { RelationshipContext } from "../../contexts/RelationshipContext";
import { authHeaders } from "../../services/authService";

export const useRelationshipList = (userId: string) => {
  const { followList, setFollowList, followerList, setFollowerList } =
    useContext(RelationshipContext);
  const fetchFollowList = async () => {
    try {
      const res = await client.get(`/users/${userId}/followings`, { headers: authHeaders() });
      if (res.data) {
        setFollowList(res.data);
      }
    } catch (e) {
      console.error(e, "フォローのリストの取得に失敗しました");
    }
  };
  const fetchFollowerList = async () => {
    try {
      const res = await client.get(`/users/${userId}/followers`, { headers: authHeaders() });
      if (res.data) {
        setFollowerList(res.data);
      }
    } catch (e) {
      console.error(e, "フォローのリストの取得に失敗しました");
    }
  };

  return {
    followList,
    setFollowList,
    followerList,
    setFollowerList,
    fetchFollowList,
    fetchFollowerList,
  };
};
