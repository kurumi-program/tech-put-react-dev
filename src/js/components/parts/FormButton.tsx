import React from "react";
import { PropsWithChildren } from "react";

type Props = {
  className?: string;
  onClick?: () => void;
};

export const FormButton = ({ children, className, onClick }: PropsWithChildren<Props>) => {
  return (
    <button className={`form-button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
