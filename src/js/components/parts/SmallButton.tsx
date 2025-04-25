import React from "react";

type Props = {
  className?: string;
  onClick: () => void;
  buttonTxt?: string;
};

export const SmallButton = ({buttonTxt, className, onClick}: Props) => {
  return (
    <button onClick={onClick} className={`add-comment-btn ${className}`}>
      {buttonTxt}
    </button>
  );
};
