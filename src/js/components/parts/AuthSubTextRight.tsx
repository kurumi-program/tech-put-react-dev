import React from "react";
import { PropsWithChildren } from "react";

type Props = {
  onClick?: () => void;
};

export const AuthSubTextRight = ({ children, onClick }: PropsWithChildren<Props>) => {
  return (
    <p className="text-right small-text mt-1 cursor-pointer btn" onClick={onClick}>
      {children}
    </p>
  );
};
