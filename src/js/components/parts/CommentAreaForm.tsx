import React from "react";
import { SmallButton } from "./SmallButton";

export const CommentAreaForm = () => {
  return (
    <>
      <div className="flex items-center mt-5">
        <div>
          <div className="circle circle-comment"></div>
        </div>
        <input type="text" className="comment-input ml-2" placeholder="コメントする…" />
      </div>
      <div className="text-right">
        <SmallButton className="text-sm">追加</SmallButton>
      </div>
    </>
  );
};
