import React, { useContext } from "react";
import { useNavigation } from "../hooks/utils/useNavigation";
import { UserAvatarImage } from "../components/parts/UserAvatarImage";
import { useCurrentUser } from "../hooks/auth/useCurrentUser";
import { AuthContext } from "../contexts/AuthContext";
import { useHandleModal } from "../hooks/utils/useHandleModal";

type Props = {
  userId?: string;
  userName?: string;
  userUserName?: string;
  createdAt?: string;
  onClick?: (value: React.MouseEvent<HTMLDivElement>) => void;
  src?: string | null;
};

export const UserPost = ({ userId, userName, userUserName, createdAt, onClick, src }: Props) => {
  const { handleNavigate } = useNavigation();
  const { currentUser } = useCurrentUser();
  const { setIsLoginModalOpen } = useContext(AuthContext);
  const { scrollDisabledAndModalOpen } = useHandleModal({
    setIsOpen: setIsLoginModalOpen,
  });
  const navigate = () => {
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
    <div className="flex" onClick={onClick}>
      <div
        onClick={(e) => {
          e.stopPropagation();
          navigate();
        }}
        className="btn"
      >
        <UserAvatarImage src={src} />
      </div>
      <div>
        <div className="flex">
          <p
            onClick={(e) => {
              e.stopPropagation();
              navigate();
            }}
            className="hover-underline line-height-12 user-name ml-2"
          >
            {userName}
          </p>
          <p className="line-height-12 post-history ml-2">{createdAt}</p>
        </div>
        <p
          onClick={(e) => {
            e.stopPropagation();
            navigate();
          }}
          className="hover-underline line-height-12 user-id ml-2"
        >
          {userUserName}
        </p>
      </div>
    </div>
  );
};
