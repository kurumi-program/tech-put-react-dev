import React from "react";

type Props = {
  userName: string;
  userId: string;
  hasCircle?: boolean;
  className?: string;
  userClassName?: string;
  userIdClassName?: string;
  classNameWrapper?: string;
};

export const UserParts = ({
  className,
  userName,
  userId,
  hasCircle = true,
  userClassName,
  userIdClassName,
  classNameWrapper,
}: Props) => {
  return (
    <div className={`${classNameWrapper} flex items-center`}>
      {hasCircle && (
        <div>
          <div className="circle"></div>
        </div>
      )}
      <div className={className}>
        <p className={`${userClassName} user-name`}>{userName}</p>
        <p className={`${userIdClassName} user-id`}>{userId}</p>
      </div>
    </div>
  );
};
