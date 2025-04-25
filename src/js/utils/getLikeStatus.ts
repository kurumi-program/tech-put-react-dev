import { PostLike } from "../types/postLike";

type Props = {
  postId: string;
  postLikes: Record<string, PostLike>;
};

export const getLikeStatus = ({ postId, postLikes }: Props) => {
  const isLiked = postLikes[postId]?.liked || false;
  const likeCount = postLikes[postId]?.count ?? 0;

  return { isLiked, likeCount };
};
