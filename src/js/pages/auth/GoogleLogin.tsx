import React, { useEffect } from "react";
import Cookies from "js-cookie";

export const GoogleLogin = () => {
  const handleGoogleLogin = () => {
    // RailsのGoogle OAuthエンドポイントにリダイレクト
    window.location.href = "http://localhost:3000/auth/google_oauth2";
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get("access-token");
    const client = params.get("client");
    const uid = params.get("uid");
    console.log({ accessToken, client, uid });

    if (accessToken && client && uid) {
      // Cookiesに保存（セキュアなオプションは環境に応じて調整してください）
      Cookies.set("_access_token", accessToken);
      Cookies.set("_client", client);
      Cookies.set("_uid", uid);

      alert("ログイン成功！");

      // ログイン後のページに遷移
      window.location.href = "/dashboard"; // 必要に応じて変更
    }
  }, []);

  return (
    <div className="layout">
      <button onClick={handleGoogleLogin}>Googleでログイン</button>
    </div>
  );
};
