import * as React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

export const PublicRoute = () => {
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return null;
  }

  if (isLoggedIn && !isLoading) {
    // ログインしている場合は、トップページ（/）にリダイレクト
    return <Navigate to="/" />;
  }

  // 未ログインの場合、Outlet（ページの内容）を表示
  return <Outlet />;
};
