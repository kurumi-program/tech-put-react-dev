import React from "react";
import { UserPost } from "./UserPost";
import { Post } from "../types/post";
import { getUserName } from "../utils/getUserName";

type Props = {
  post?: Post;
};

export const UserInfo = ({ post }: Props) => {
  const userName = getUserName({ post });
  const userUserName = post?.userUserName;

  return (
    <UserPost
      src={post?.userAvatarUrl ?? null}
      userId={post?.userId}
      userUserName={userUserName}
      userName={userName}
      createdAt={post?.createdAt}
    />
  );
};
