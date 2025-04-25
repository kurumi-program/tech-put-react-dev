import { useEffect, useState } from "react";
import { client } from "../../services/client";
import { Post } from "../../types/post";

export const useTopPosts = () => {
  const [topPosts, setTopPosts] = useState<Post[]>([]);
  const fetchTopPostsData = async () => {
    try {
      const res = await client.get("/top_posts");
      if (res.data) {
        setTopPosts(res.data);
      }
    } catch (e) {
      console.error("トップのポストの取得に失敗しました", e);
    }
  };

  useEffect(() => {
    fetchTopPostsData();
  }, []);

  return { topPosts, setTopPosts };
};
