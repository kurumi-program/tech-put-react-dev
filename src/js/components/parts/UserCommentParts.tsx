import React, { PropsWithChildren } from "react";

type Props = {
  userId: string;
  comment: string;
};

export const UserCommentParts = ({ comment, userId, children }: PropsWithChildren<Props>) => {
  return (
    <li className="flex items-center mt-5 justify-between">
      <div className="flex items-center">
        <div>
          <div className="circle circle-comment mr-1"></div>
        </div>
        <div className="ml-2">
          <p className="user-id">{userId}</p>
          <p className="comment-txt">{comment}</p>
        </div>
      </div>
      {children}
    </li>
  );
};
