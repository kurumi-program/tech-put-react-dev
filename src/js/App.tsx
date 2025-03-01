import * as React from "react";
import { Login } from "./pages/auth/Login";
import { Post } from "./pages/post/Post";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./pages/auth/Signup";
import { HeaderLayout } from "./components/layout/HeaderLayout";
import { ForgotPassword } from "./pages/auth/ForgotPassword";
import { ResetPassword } from "./pages/auth/ResetPassword";
import { AuthProvider } from "./contexts/AuthContext";

export const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <HeaderLayout />
        <Routes>
          <Route path="/" element={<Post />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
