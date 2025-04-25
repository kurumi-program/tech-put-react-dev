import React from "react";
import { UserParts } from "../components/parts/UserParts";
import { UserAvatarImage } from "../components/parts/UserAvatarImage";
import { ProfileFollowButton } from "../components/parts/ProfileFollowButton";
import { useRelationship } from "../hooks/relationship/useRelationship";
import { useCurrentUser } from "../hooks/auth/useCurrentUser";

type Props = {
  id?: string;
  userName?: string;
  userUserName?: string;
  userBio?: string;
  userAvatarUrl?: string | null;
  onNavigateClick?: () => void;
};

export const RelationItem = ({
  id,
  userName,
  userUserName,
  userBio,
  userAvatarUrl,
  onNavigateClick,
}: Props) => {
  const { follow, handleFollow, handleUnfollow, isRelationLoading } = useRelationship(id ?? "");
  const isFollowed = follow?.isFollowed;
  const { currentUser, isLoading } = useCurrentUser();

  if (isRelationLoading || isLoading) return null;

  return (
    <li className="sidebar-flex follow-container btn" onClick={onNavigateClick}>
      <div className="flex">
        <div>
          <UserAvatarImage src={userAvatarUrl} />
        </div>
        <div className="follow-user-wrapper ml-3">
          <UserParts userIdClassName="fsz-13" userName={userName} userId={userUserName} />
          <p className="mt-1">{userBio}</p>
        </div>
      </div>
      {currentUser?.id !== id && (
        <div className="text-center">
          <ProfileFollowButton
            isFollowed={isFollowed}
            onFollowClick={handleFollow}
            onUnfollowClick={handleUnfollow}
          />
        </div>
      )}
    </li>
  );
};
