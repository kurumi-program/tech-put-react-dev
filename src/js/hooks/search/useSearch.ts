import { useContext } from "react";
import { PostContext } from "../../contexts/PostContext";
import { client } from "../../services/client";

export const useSearch = () => {
  const { searchList, setSearchList } = useContext(PostContext);

  const fetchSearchData = async (keyword: string) => {
    try {
      const res = await client.get("/search", {
        params: { q: keyword },
      });
      setSearchList(res.data); // 結果をContextに保存
    } catch (e) {
      console.error("検索の結果を取得できませんでした", e);
    }
  };

  return { searchList, fetchSearchData };
};
