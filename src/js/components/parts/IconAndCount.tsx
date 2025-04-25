import React from "react";

type Props = {
  className: "fa-heart" | "fa-comment" | "fa-heart fa-solid like-active";
  classHover?: string;
  count: number;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export const IconAndCount = ({ classHover, onClick, className, count }: Props) => {
  return (
    <div className={`flex items-center icon ${classHover}`} onClick={(e) => onClick?.(e)}>
      <i className={`fa-regular ${className}`}></i>
      <p className="count">{count}</p>
    </div>
  );
};
