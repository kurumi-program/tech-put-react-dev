import React from "react";
import { PostItem } from "./PostItem";
import { useStockListData } from "../hooks/stock/useStockListData";

export const StockList = () => {
  const { stockList } = useStockListData();

  return (
    <>
      {stockList
        .slice()
        .reverse()
        .map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
    </>
  );
};
