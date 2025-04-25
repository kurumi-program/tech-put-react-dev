import React, { useRef } from "react";
import { useClickOutside } from "../hooks/utils/useClickOutside";
import { useSignOut } from "../hooks/auth/useSignOut";
import { UserDropDown } from "../components/parts/UserDropDown";
import { getCurrentUserDisplayName } from "../utils/getCurrentUserDisplayName";
import { useCurrentUser } from "../hooks/auth/useCurrentUser";
import { UserAvatarImage } from "../components/parts/UserAvatarImage";
import { useProfileData } from "../hooks/profile/useProfileData";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const UserMenu = ({ isOpen, setIsOpen }: Props) => {
  const { handleSignOut } = useSignOut();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { currentUser } = useCurrentUser();
  const userName = getCurrentUserDisplayName({ currentUser: currentUser });
  const { profile } = useProfileData();
  const { isProfileLoading } = useProfileData();

  const handlePullDown = () => {
    setTimeout(() => setIsOpen(true), 0);
  };

  const handleCloseDropdown = () => {
    setIsOpen(false);
  };
  useClickOutside({
    ref: dropdownRef,
    callback: handleCloseDropdown,
  });

  if (isProfileLoading) return null;

  return (
    <div className="user relative">
      <UserAvatarImage src={profile?.avatarUrl} onClick={handlePullDown} />
      {isOpen && (
        <UserDropDown userName={userName} onSignOutClick={handleSignOut} ref={dropdownRef} />
      )}
    </div>
  );
};
