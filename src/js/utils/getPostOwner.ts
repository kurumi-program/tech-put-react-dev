import { useCurrentUser } from "../hooks/auth/useCurrentUser";
import { Post } from "../types/post";

export const getPostOwner = (post?: Post) => {
  const { currentUser } = useCurrentUser();

  return post && currentUser ? String(post.userId) === String(currentUser.id) : false;
};
