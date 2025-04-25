import React from "react";
import defaultAvatar from "../../../assets/images/default-avatar.png";

type Props = {
  src?: string | null;
  onClick?: React.MouseEventHandler<HTMLParagraphElement> | undefined;
  className?: string;
};

export const UserAvatarImage = ({ src, onClick, className }: Props) => {
  const avatarSrc = src ?? defaultAvatar;
  return (
    <div className="user-avatar" onClick={onClick}>
      <img className={`btn ${className}`} src={avatarSrc} alt="avatar preview" />
    </div>
  );
};
