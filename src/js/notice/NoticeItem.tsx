import React, { useContext } from "react";
import { Notice } from "../types/notice";
import { useNavigation } from "../hooks/utils/useNavigation";
import { UserWithImageParts } from "../components/parts/UserWithImageParts";
import { AuthContext } from "../contexts/AuthContext";

type Props = {
  notice: Notice;
};

export const NoticeItem = ({ notice }: Props) => {
  const { handleNavigate } = useNavigation();
  const { currentUser } = useContext(AuthContext)

  const handleNavClick = () => {
    if (notice.commentId) {
      handleNavigate(`/post-detail/${notice.postId}/#mention-${notice.commentId}`);
    } else {
      handleNavigate(`/post-detail/${notice.postId}`);
    }
  };

  const handleUserPage = () => {
    if (currentUser?.id === notice.senderId) {
      handleNavigate("/my-page");
    } else {
      handleNavigate(`/users/${notice.senderId}`);
    }
  };

  return (
    <li onClick={handleNavClick} className="article border cursor-pointer btn">
      <UserWithImageParts
        className="ml-2"
        userName={notice.senderName}
        userId={notice.senderUserName}
        src={notice.senderUserAvatarUrl}
        onClick={() => handleUserPage()}
      />
      <p className="mt-3">{notice.message}</p>
    </li>
  );
};
