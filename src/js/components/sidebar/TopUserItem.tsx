import React, { useContext } from "react";
import { UserWithImageParts } from "../parts/UserWithImageParts";
import { ProfileFollowButton } from "../parts/ProfileFollowButton";
import { User } from "../../types/auth";
import { FollowButton } from "../parts/FollowButton";
import { useRelationship } from "../../hooks/relationship/useRelationship";
import { useNavigation } from "../../hooks/utils/useNavigation";
import { TopCurrentUserParts } from "./TopCurrentUserParts";
import { AuthContext } from "../../contexts/AuthContext";
import { useHandleModal } from "../../hooks/utils/useHandleModal";

type Props = {
  user: User;
  currentUser: User | undefined;
};

export const TopUserItem = ({ user, currentUser }: Props) => {
  const { handleNavigate } = useNavigation();
  const { setIsLoginModalOpen } = useContext(AuthContext);
  const { scrollDisabledAndModalOpen } = useHandleModal({
    setIsOpen: setIsLoginModalOpen,
  });
  const handleUserPage = (userId: string) => {
    if (currentUser) {
      if (currentUser?.id === userId) {
        handleNavigate("/my-page");
      } else {
        handleNavigate(`/users/${userId}`);
      }
    } else {
      scrollDisabledAndModalOpen();
    }
  };
  return (
    <li className="sidebar-flex">
      <UserWithImageParts
        src={user.avatarUrl}
        className="ml-2"
        userName={user.name}
        userId={user.username}
        onClick={() => handleUserPage(user.id)}
      />
      {currentUser ? (
        currentUser.id !== user.id ? (
          <TopCurrentUserParts user={user} />
        ) : null
      ) : (
        <FollowButton onClick={scrollDisabledAndModalOpen} className="follow-btn">
          フォロー
        </FollowButton>
      )}
    </li>
  );
};
