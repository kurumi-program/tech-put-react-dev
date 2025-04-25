import React from "react";

type Props = {
  className?: "fa-solid" | "fa-regular" | string;
  stock?: string;
  onClick?: () => void;
};
export const StockIcon = ({ onClick, stock, className }: Props) => {
  return (
    <div className="absolute stock-relative">
      <div className="relative leading-none">
        <i onClick={onClick} className={`stock-icon fa-star btn ${className}`}></i>
        <ul className="dropdown-hover">
          <li>{stock}</li>
        </ul>
      </div>
    </div>
  );
};
