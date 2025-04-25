import { Navigate, useParams } from "react-router-dom";
import { useCurrentUser } from "../../hooks/auth/useCurrentUser";
import React from "react";
import { UserProfile } from "../../pages/post/UserProfile";

export const UserProfileRote = () => {
  const { id } = useParams();
  const { isLoading, currentUser } = useCurrentUser();

  if (isLoading || !currentUser) return null;

  // 自分自身のプロフィールなら /my-page にリダイレクト
  if (id === String(currentUser.id)) {
    return <Navigate to="/my-page" replace />;
  }

  return <UserProfile />;
};
