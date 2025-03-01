import * as React from "react";

type Props = {
  className?: string;
  home?: boolean;
  post?: boolean;
  bell?: boolean;
  favorite?: boolean;
  myPage?: boolean;
  register?: boolean;
  login?: boolean;
  onPostClick?: () => void;
};

export const IconListSp = ({
  className,
  home = true,
  post = true,
  bell = true,
  favorite = true,
  myPage = true,
  register = true,
  login = true,
  onPostClick,
}: Props) => {
  return (
    <ul className={className}>
      {home && (
        <li>
          <i className="fa-solid fa-house side-icon"></i>
        </li>
      )}
      {post && (
        <li>
          <i className="fa-solid fa-pen side-icon" onClick={onPostClick}></i>
        </li>
      )}
      {bell && (
        <li>
          <i className="fa-solid fa-bell side-icon bell-active"></i>
        </li>
      )}
      {favorite && (
        <li>
          <i className="fa-solid fa-star side-icon"></i>
        </li>
      )}
      {myPage && (
        <li>
          <i className="fa-solid fa-user side-icon"></i>
        </li>
      )}
      {register && (
        <li>
          <i className="fa-solid fa-user-plus"></i>
        </li>
      )}
      {login && (
        <li>
          <i className="fa-solid fa-unlock"></i>
        </li>
      )}
    </ul>
  );
};
