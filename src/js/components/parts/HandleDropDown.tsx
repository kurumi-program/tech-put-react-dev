import React from "react";

type Props = {
  remove: string;
};

export const HandleDropDown = ({ remove }: Props) => {
  return (
    <div className="handle-comment">
      <i className="point-three fa-solid fa-ellipsis-vertical"></i>
      <div className="handle-comment_dropdown border">
        <p>{remove}</p>
      </div>
    </div>
  );
};
