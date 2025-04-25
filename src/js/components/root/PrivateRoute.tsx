import * as React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

export const PrivateRoute = () => {
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return null;
  }

  if (!isLoggedIn) {
    // ログインしていない場合は、/signin にリダイレクト
    return <Navigate to="/" />;
  }

  // ログインしている場合、Outlet（ページの内容）を表示
  return <Outlet />;
};
