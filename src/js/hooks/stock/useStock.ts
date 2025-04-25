import { useContext, useEffect } from "react";
import { PostContext } from "../../contexts/PostContext";
import { authHeaders } from "../../services/authService";
import { client } from "../../services/client";

type Props = {
  postId: string;
};

export const useStock = ({ postId }: Props) => {
  const { stockList, postStocks, setPostStocks } = useContext(PostContext);

  // ストック状態とカウントを取得する関数
  const fetchStockStatus = async () => {
    try {
      const res = await client.get(`/posts/${postId}/stock_status`, { headers: authHeaders() });
      setPostStocks((prevStocks) => ({
        ...prevStocks,
        [postId]: {
          stocked: res.data.stocked,
          count: res.data.count,
        },
      }));
    } catch (e) {
      console.error("データの取得に失敗しました", e);
    }
  };

  useEffect(() => {
    if (postId) {
      fetchStockStatus();
    }
  }, [postId]);

  // 追加する関数
  const handleStockPost = async () => {
    try {
      const res = await client.post(`/posts/${postId}/stock`, {}, { headers: authHeaders() });
      if (res.data.status === "ok") {
        setPostStocks((prevStocks) => ({
          ...prevStocks,
          [postId]: {
            stocked: true,
            count: res.data.count,
          },
        }));
      }
    } catch (e) {
      console.error("ストックできませんでした", e);
    }
  };

  // 削除する関数
  const handleStockDelete = async () => {
    try {
      const res = await client.delete(`/posts/${postId}/stock`, { headers: authHeaders() });
      if (res.data.status === "ok") {
        setPostStocks((prevStocks) => ({
          ...prevStocks,
          [postId]: {
            stocked: false,
            count: res.data.count,
          },
        }));
      }
    } catch (e) {
      console.error("いいね削除できませんでした");
    }
  };

  return {
    stockList,
    postStocks,
    handleStockPost,
    handleStockDelete,
    setPostStocks,
    fetchStockStatus,
  };
};
