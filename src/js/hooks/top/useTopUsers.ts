import { useEffect, useState } from "react";
import { client } from "../../services/client";
import { User } from "../../types/auth";

export const useTopUsers = () => {
  const [topUsers, setTopUsers] = useState<User[]>([]);
  const fetchTopUsersData = async () => {
    try {
      const res = await client.get("/top_users");
      if (res.data) {
        setTopUsers(res.data);
      }
    } catch (e) {
      console.error("トップのユーザーの取得に失敗しました", e);
    }
  };

  useEffect(() => {
    fetchTopUsersData();
  }, []);

  return { topUsers, setTopUsers };
};
