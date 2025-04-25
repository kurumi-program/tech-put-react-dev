import React, { useState } from "react";

type Props = {
  isFollowed?: boolean;
  onFollowClick?: () => void;
  onUnfollowClick?: () => void;
  className?: string;
};

export const ProfileFollowButton = ({
  isFollowed,
  onFollowClick,
  onUnfollowClick,
  className,
}: Props) => {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      {isFollowed ? (
        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={(e) => {
            e.stopPropagation();
            onUnfollowClick?.();
          }}
          className={`unfollow-btn btn ${className} ${hovered && "text-red-600"}`}
        >
          {hovered ? "フォロー解除" : "フォロー中"}
        </button>
      ) : (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onFollowClick?.();
          }}
          className={`follow-btn btn ${className}`}
        >
          フォロー
        </button>
      )}
    </>
  );
};
