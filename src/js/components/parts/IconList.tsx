import * as React from "react";

type Props = {
  className?: string;
  home?: string;
  post?: string;
  bell?: string;
  favorite?: string;
  myPage?: string;
  register?: string;
  login?: string;
  onPostClick?: () => void;
};

export const IconList = ({
  className,
  home,
  post,
  bell,
  favorite,
  myPage,
  register,
  login,
  onPostClick,
}: Props) => {
  return (
    <>
      <ul className={className}>
        {home && (
          <li className="btn">
            <i className="fa-solid fa-house side-icon"></i>
            <p>{home}</p>
          </li>
        )}
        {post && (
          <li className="btn" onClick={onPostClick}>
            <i className="fa-solid fa-pen side-icon"></i>
            <p>{post}</p>
          </li>
        )}
        {bell && (
          <li className="btn">
            <i className="fa-solid fa-bell side-icon bell-active"></i>
            <p>{bell}</p>
          </li>
        )}
        {favorite && (
          <li className="btn">
            <i className="fa-solid fa-star side-icon"></i>
            <p>{favorite}</p>
          </li>
        )}
        {myPage && (
          <li className="btn">
            <i className="fa-solid fa-user side-icon"></i>
            <p>{myPage}</p>
          </li>
        )}
        {register && (
          <li className="btn">
            <i className="fa-solid fa-user-plus"></i>
            <p>{register}</p>
          </li>
        )}
        {login && (
          <li className="btn">
            <i className="fa-solid fa-unlock"></i>
            <p>{login}</p>
          </li>
        )}
      </ul>
    </>
  );
};
