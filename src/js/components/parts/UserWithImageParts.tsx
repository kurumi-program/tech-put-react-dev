import React from "react";
import { UserAvatarImage } from "./UserAvatarImage";

type Props = {
  userName: string;
  userId: string;
  className?: string;
  userClassName?: string;
  userIdClassName?: string;
  classNameWrapper?: string;
  src?: string | null;
  onClick?: () => void;
};

export const UserWithImageParts = ({
  className,
  userName,
  userId,
  userClassName,
  userIdClassName,
  classNameWrapper,
  src,
  onClick,
}: Props) => {
  return (
    <div className={`${classNameWrapper} flex items-center`}>
      <div>
        <UserAvatarImage
          onClick={(e) => {
            e.stopPropagation();
            onClick?.();
          }}
          src={src}
        />
      </div>
      <div className={className}>
        <p
          onClick={(e) => {
            e.stopPropagation();
            onClick?.();
          }}
          className={`${userClassName} hover-underline line-height-12 user-name`}
        >
          {userName}
        </p>
        <p
          onClick={(e) => {
            e.stopPropagation();
            onClick?.();
          }}
          className={`${userIdClassName} hover-underline line-height-12 user-id`}
        >
          {userId}
        </p>
      </div>
    </div>
  );
};
