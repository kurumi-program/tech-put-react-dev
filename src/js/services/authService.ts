import Cookies from "js-cookie";
import { client } from "./client";
import { LoginParams, ResetPassParams } from "../types/auth";

// サインアップ（新規アカウント作成）
export const signUp = (params: LoginParams) => {
  return client.post("auth", params);
};

// サインイン（ログイン）
export const signIn = (params: LoginParams) => {
  return client.post("auth/sign_in", params);
};

// サインアウト（ログアウト）
export const signOut = () => {
  return client.delete("auth/sign_out", {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
};

//パスワードリセット
export const forgotPassword = (email: string) => {
  const redirectUrl = "http://localhost:3000/password-reset";
  return client.post("/auth/password", { email, redirect_url: redirectUrl });
};

//パスワード変更
export const resetPassword = (params: ResetPassParams) => {
  return client.put("/auth/password", params);
};

// 認証済みのユーザーを取得
export const getCurrentUser = () => {
  if (!Cookies.get("_access_token") || !Cookies.get("_client") || !Cookies.get("_uid")) return;
  return client.get("/auth/validate_token", {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
};

// //google認証
// export const googleLogin = (token: string) => {
//   return client.post("/omniauth/google_oauth2/callback", { token });
// };
