import React, { PropsWithChildren } from "react";

type Props = {
  className?: string;
  buttonClassName?: string;
  onClick?: () => void;
};

export const AuthSnsButton = ({
  buttonClassName,
  children,
  className,
  onClick,
}: PropsWithChildren<Props>) => {
  return (
    <div className={`sns-btn border ${className} cursor-pointer`}>
      <i className="fa-brands fa-google"></i>
      <p onClick={onClick} className={`ml-2 ${buttonClassName}`}>
        {children}
      </p>
    </div>
  );
};
