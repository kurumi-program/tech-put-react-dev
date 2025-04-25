import React from "react";
import { useNavigation } from "../../hooks/utils/useNavigation";

type Props = {
  onSignOutClick: () => Promise<void>;
  userName: string;
};

export const UserDropDown = React.forwardRef<HTMLDivElement, Props>(
  ({ onSignOutClick, userName }, ref) => {
    const { handleNavigate } = useNavigation();
    return (
      <div className="handle-comment_dropdown" ref={ref}>
        <p className="font-bold user-name-head">{userName}</p>
        <p onClick={() => handleNavigate("/my-page")}>マイページ</p>
        <p onClick={onSignOutClick}>ログアウト</p>
      </div>
    );
  },
);
