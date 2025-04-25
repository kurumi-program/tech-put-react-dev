import React from "react";
import { ProfileFollowButton } from "../parts/ProfileFollowButton";
import { useRelationship } from "../../hooks/relationship/useRelationship";
import { User } from "../../types/auth";

type Props = {
  user: User;
};

export const TopCurrentUserParts = ({ user }: Props) => {
  const { follow, handleFollow, handleUnfollow } = useRelationship(user.id);
  const isFollowed = follow?.isFollowed;
  return (
    <ProfileFollowButton
      isFollowed={isFollowed}
      onFollowClick={handleFollow}
      onUnfollowClick={handleUnfollow}
    />
  );
};
