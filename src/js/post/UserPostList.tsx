import React from "react";
import { PostItem } from "./PostItem";
import { useUserProfile } from "../hooks/profile/useUserProfile";

type Props = {
  userId: string;
};

export const UserPostList = ({ userId }: Props) => {
  const { userPostList } = useUserProfile(userId);

  return (
    <>
      {userPostList.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </>
  );
};
