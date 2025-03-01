import React, { PropsWithChildren } from "react";

type Props = {
  className?: string;
};

export const SmallButton = ({ className, children}: PropsWithChildren<Props>) => {
  return <button className={`add-comment-btn ${className}`}>{children}</button>;
};
