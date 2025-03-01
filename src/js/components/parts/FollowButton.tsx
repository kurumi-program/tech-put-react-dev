import React, { PropsWithChildren } from "react";

type Props = {
  className: "follow-btn" | "unfollow-btn";
  tailWind?: "border";
};

export const FollowButton = ({ className, tailWind, children }: PropsWithChildren<Props>) => {
  return <button className={`btn ${className} ${tailWind}`}>{children}</button>;
};
