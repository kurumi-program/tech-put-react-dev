import { PostStock } from "../types/postStock";

type Props = {
  postId: string;
  postStocks: Record<string, PostStock>;
};

export const getStockStatus = ({ postId, postStocks }: Props) => {
  const isStocked = postStocks[postId]?.stocked || false;
  const stockCount = postStocks[postId]?.count ?? 0;

  return { isStocked, stockCount };
};
