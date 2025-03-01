import React from "react";

type Props = {
  className: "fa-heart" | "fa-comment";
  count: number;
};

export const IconAndCount = ({ className, count }: Props) => {
  return (
    <div className="flex items-center icon">
      <i className={`fa-regular ${className}`}></i>
      <p className="count">{count}</p>
    </div>
  );
};
