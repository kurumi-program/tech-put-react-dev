import * as React from "react";

type Props = {
  className?: string;
  home?: string;
  post?: string;
  bell?: string;
  stock?: string;
  myPage?: string;
  register?: string;
  login?: string;
  bellActive?: boolean;
  onPostClick?: () => void;
  onHomeClick?: () => void;
  onNoticeClick?: () => void;
  onStockClick?: () => void;
  onProfileClick?: () => void;
  onRegisterClick?: () => void;
  onLoginClick?: () => void;
};

export const IconList = ({
  className,
  home,
  post,
  bell,
  stock,
  myPage,
  register,
  login,
  bellActive,
  onPostClick,
  onHomeClick,
  onNoticeClick,
  onStockClick,
  onProfileClick,
  onRegisterClick,
  onLoginClick,
}: Props) => {
  return (
    <>
      <ul className={className}>
        {home && (
          <li className="btn-light" onClick={onHomeClick}>
            <i className="fa-solid fa-house side-icon"></i>
            <p>{home}</p>
          </li>
        )}
        {post && (
          <li className="btn-light" onClick={onPostClick}>
            <i className="fa-solid fa-pen side-icon"></i>
            <p>{post}</p>
          </li>
        )}
        {bell && (
          <li className="btn-light" onClick={onNoticeClick}>
            <i className={`fa-solid fa-bell side-icon ${bellActive ? "bell-active" : ""}`}></i>
            <p>{bell}</p>
          </li>
        )}
        {stock && (
          <li className="btn-light" onClick={onStockClick}>
            <i className="fa-solid fa-star side-icon"></i>
            <p>{stock}</p>
          </li>
        )}
        {myPage && (
          <li className="btn-light" onClick={onProfileClick}>
            <i className="fa-solid fa-user side-icon"></i>
            <p>{myPage}</p>
          </li>
        )}
        {register && (
          <li className="btn-light" onClick={onRegisterClick}>
            <i className="fa-solid fa-user-plus"></i>
            <p>{register}</p>
          </li>
        )}
        {login && (
          <li className="btn-light" onClick={onLoginClick}>
            <i className="fa-solid fa-unlock"></i>
            <p>{login}</p>
          </li>
        )}
      </ul>
    </>
  );
};
