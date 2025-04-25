import React, { PropsWithChildren } from "react";

type Props = {
  className: "follow-btn" | "unfollow-btn";
  tailWind?: "border";
  onClick?: () => void;
};

export const FollowButton = ({
  className,
  tailWind,
  children,
  onClick,
}: PropsWithChildren<Props>) => {
  return (
    <button onClick={onClick} className={`btn ${className} ${tailWind}`}>
      {children}
    </button>
  );
};
