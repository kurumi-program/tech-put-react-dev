import { useContext, useEffect, useState } from "react";
import { RelationshipContext } from "../../contexts/RelationshipContext";
import { client } from "../../services/client";
import { authHeaders } from "../../services/authService";
import { Relationship } from "../../types/relationship";

export const useRelationship = (userId: string) => {
  const [follow, setFollow] = useState<Relationship | null>(null);
  const { isRelationLoading, setIsRelationLoading } = useContext(RelationshipContext);

  const fetchRelationStatus = async () => {
    try {
      const res = await client.get(`/users/${userId}/follow_status`, { headers: authHeaders() });
      if (res.data) {
        setFollow(res.data);
      }
    } catch (e) {
      console.error("フォローを取得できませんでした", e);
    } finally {
      setIsRelationLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      setFollow(null);
      fetchRelationStatus();
    }
  }, [userId]);

  const handleFollow = async () => {
    try {
      const res = await client.post(
        `/users/${userId}/relationship`,
        {},
        { headers: authHeaders() },
      );
      if (res.data) {
        setFollow(res.data);
      }
    } catch (e) {
      console.error("フォローできませんでした", e);
    }
  };

  const handleUnfollow = async () => {
    try {
      const res = await client.delete(`/users/${userId}/relationship`, { headers: authHeaders() });
      if (res.data) {
        setFollow(res.data);
      }
    } catch (e) {
      console.error("フォロー解除できませんでした", e);
    }
  };

  return { follow, setFollow, handleFollow, handleUnfollow, isRelationLoading };
};
