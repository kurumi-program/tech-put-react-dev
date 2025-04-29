import { useContext } from "react";
import { Post } from "../types/post";
import { AuthContext } from "../contexts/AuthContext";

export const getPostOwner = (post?: Post) => {
  const { currentUser } = useContext(AuthContext)

  return post && currentUser ? String(post.userId) === String(currentUser.id) : false;
};
