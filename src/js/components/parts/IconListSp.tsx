import * as React from "react";

type Props = {
  className?: string;
  home?: boolean;
  post?: boolean;
  bell?: boolean;
  stock?: boolean;
  myPage?: boolean;
  register?: boolean;
  login?: boolean;
  bellActive?: boolean;
  onPostClick?: () => void;
  onHomeClick?: () => void;
  onNoticeClick?: () => void;
  onStockClick?: () => void;
  onProfileClick?: () => void;
  onRegisterClick?: () => void;
  onLoginClick?: () => void;
};

export const IconListSp = ({
  className,
  home = true,
  post = true,
  bell = true,
  stock = true,
  myPage = true,
  register = true,
  login = true,
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
    <ul className={className}>
      {home && (
        <li onClick={onHomeClick}>
          <i className="fa-solid fa-house side-icon"></i>
        </li>
      )}
      {post && (
        <li onClick={onPostClick}>
          <i className="fa-solid fa-pen side-icon"></i>
        </li>
      )}
      {bell && (
        <li onClick={onNoticeClick}>
          <i className={`fa-solid fa-bell side-icon ${bellActive ? "bell-active" : ""}`}></i>
        </li>
      )}
      {stock && (
        <li onClick={onStockClick}>
          <i className="fa-solid fa-star side-icon"></i>
        </li>
      )}
      {myPage && (
        <li onClick={onProfileClick}>
          <i className="fa-solid fa-user side-icon"></i>
        </li>
      )}
      {register && (
        <li onClick={onRegisterClick}>
          <i className="fa-solid fa-user-plus"></i>
        </li>
      )}
      {login && (
        <li onClick={onLoginClick}>
          <i className="fa-solid fa-unlock"></i>
        </li>
      )}
    </ul>
  );
};
