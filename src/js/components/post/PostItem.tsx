import React from "react";

type Props = {
  index: number;
  post: string;
}

export const PostItem = ({index, post}: Props) => {
  return (
    <li className="article border">
      <div key={index} dangerouslySetInnerHTML={{ __html: post }} />
      <i className="fa-regular fa-heart mt-3"></i>
    </li>
  );
};
