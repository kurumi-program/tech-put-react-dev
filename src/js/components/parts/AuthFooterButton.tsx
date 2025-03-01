import React, { PropsWithChildren } from "react";

type Props = {
  onClick?: () => void;
};

export const AuthFooterButton = ({ children, onClick }: PropsWithChildren<Props>) => {
  return (
    <div className="register-btn mt-4 text-center">
      <button type="button" className="mt-4" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
