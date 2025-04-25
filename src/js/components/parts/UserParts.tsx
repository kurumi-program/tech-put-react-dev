import React from "react";

type Props = {
  userName?: string;
  userId?: string;
  className?: string;
  userClassName?: string;
  userIdClassName?: string;
  classNameWrapper?: string;
};

export const UserParts = ({
  className,
  userName,
  userId,
  userClassName,
  userIdClassName,
  classNameWrapper,
}: Props) => {
  return (
    <div className={`${classNameWrapper} flex items-center`}>
      <div className={className}>
        <p className={`${userClassName} line-height-12 user-name`}>{userName}</p>
        <p className={`${userIdClassName} line-height-12 user-id`}>{userId}</p>
      </div>
    </div>
  );
};
