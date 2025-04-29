import { Navigate, useParams } from "react-router-dom";
import React, { useContext } from "react";
import { UserProfile } from "../../pages/post/UserProfile";
import { AuthContext } from "../../contexts/AuthContext";

export const UserProfileRote = () => {
  const { id } = useParams();
  const { isLoading, currentUser } = useContext(AuthContext)

  if (isLoading || !currentUser) return null;

  // 自分自身のプロフィールなら /my-page にリダイレクト
  if (id === String(currentUser.id)) {
    return <Navigate to="/my-page" replace />;
  }

  return <UserProfile />;
};
