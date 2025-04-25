import React from "react";
import { useProfileData } from "../hooks/profile/useProfileData";
import { ProfilePostItem } from "./ProfilePostItem";

export const ProfilePostList = () => {
  const { profilePostList } = useProfileData();

  return (
    <>
      {profilePostList.map((post) => (
        <ProfilePostItem key={post.id} post={post} />
      ))}
    </>
  );
};
