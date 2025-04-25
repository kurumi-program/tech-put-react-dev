import React from "react";
import { useProfileData } from "../hooks/profile/useProfileData";
import { ProfilePostItem } from "./ProfilePostItem";

export const ProfileLikedPostList = () => {
  const { profileLikedPostList } = useProfileData();

  return (
    <>
      {profileLikedPostList.map((post) => (
        <ProfilePostItem key={post.id} post={post} />
      ))}
    </>
  );
};
