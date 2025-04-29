import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Comment } from "../types/comment";
import { Post } from "../types/post";

type Props = {
  post?: Post;
  comment?: Comment;
};

export const getOwner = ({ post, comment }: Props) => {
  const { currentUser } = useContext(AuthContext)

  if (post) {
    return post && currentUser ? String(post.userId) === String(currentUser.id) : false;
  } else {
    return comment && currentUser ? String(comment.userId) === String(currentUser.id) : false;
  }
};
