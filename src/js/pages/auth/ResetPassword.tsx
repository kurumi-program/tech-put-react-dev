import React from "react";
import { FormButton } from "../../components/parts/FormButton";
import { AuthForm } from "../../components/layout/AuthForm";
import { InputArea } from "../../components/header/InputArea";
import { AuthSubTextRight } from "../../components/parts/AuthSubTextRight";
import { useResetPassword } from "../../hooks/auth/useResetPassword";
import { Footer } from "../../components/footer/Footer";

export const ResetPassword = () => {
  const {
    handleResetPass,
    generalErrors,
    password,
    setPassword,
    resetPassErrors,
    passwordConfirmation,
    setPasswordConfirmation,
    handleNavigate,
  } = useResetPassword();
  return (
    <>
      <AuthForm onSubmit={handleResetPass}>
        <p className="text-red-600 text-sm">{generalErrors}</p>
        <InputArea
          placeholder="新しいパスワード"
          value={password}
          onChange={setPassword}
          type="password"
        />
        {resetPassErrors.password.map((pass, index) => (
          <p className="text-red-600 text-sm" key={index}>
            パスワード{pass}
          </p>
        ))}
        <InputArea
          placeholder="パスワードを確認"
          value={passwordConfirmation}
          onChange={setPasswordConfirmation}
          type="password"
        />
        {resetPassErrors.passwordConfirmation.map((passCon, index) => (
          <p className="text-red-600 text-sm" key={index}>
            パスワード確認{passCon}
          </p>
        ))}
        <AuthSubTextRight onClick={() => handleNavigate("/signin")}>
          ログイン画面に戻る
        </AuthSubTextRight>
        <FormButton className="login-submit">パスワードを変更する</FormButton>
      </AuthForm>
      <Footer className="text-center height-50" />
    </>
  );
};
