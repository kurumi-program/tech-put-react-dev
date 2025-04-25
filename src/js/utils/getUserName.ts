import { Post } from "../types/post";
import { Comment } from "../types/comment";

type Props = {
  post?: Post;
  comment?: Comment;
};

export const getUserName = ({post, comment}: Props) => {
  if (post) {
    return post?.userName ?? post?.userEmail?.split("@")[0] ?? "unknown";
  } else {
    return comment?.userName ?? comment?.userEmail?.split("@")[0] ?? "unknown";
  }
};
