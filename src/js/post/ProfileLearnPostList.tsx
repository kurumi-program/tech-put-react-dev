import React from "react";
import { useProfileData } from "../hooks/profile/useProfileData";
import { ProfilePostItem } from "./ProfilePostItem";

export const ProfileLearnPostList = () => {
  const { profileLearnPostList } = useProfileData();

  return (
    <>
      {profileLearnPostList.map((post) => (
        <ProfilePostItem key={post.id} post={post} />
      ))}
    </>
  );
};
