import React from "react";
import { FormButton } from "../../components/parts/FormButton";
import { InputArea } from "../../components/header/InputArea";
import { AuthForm } from "../../components/layout/AuthForm";
import { AuthSubTextRight } from "../../components/parts/AuthSubTextRight";
import { AuthFooterButton } from "../../components/parts/AuthFooterButton";
import { useLogin } from "../../hooks/auth/useLogin";
import { useNavigation } from "../../hooks/utils/useNavigation";
import { Footer } from "../../components/footer/Footer";

export const Login = () => {
  const { signinErrors, handleSubmit, generalErrors, email, setEmail, password, setPassword } =
    useLogin();
  const { handleNavigate } = useNavigation();

  return (
    <>
      <AuthForm onSubmit={handleSubmit(false)}>
        <p className="text-red-600 text-sm">{generalErrors}</p>
        <InputArea placeholder="メールアドレス" value={email} onChange={setEmail} type="email" />
        {signinErrors.email.map((mail, index) => (
          <p className="text-red-600 text-sm" key={index}>
            メールアドレス{mail}
          </p>
        ))}
        <InputArea
          placeholder="パスワード"
          value={password}
          onChange={setPassword}
          type="password"
        />
        {signinErrors.password.map((pass, index) => (
          <p className="text-red-600 text-sm" key={index}>
            パスワード{pass}
          </p>
        ))}
        <AuthSubTextRight onClick={() => handleNavigate("/forgot-password")}>
          パスワードをお忘れですか？
        </AuthSubTextRight>
        <FormButton className="login-submit">ログイン</FormButton>
        <AuthFooterButton onClick={() => handleNavigate("/signup")}>新規会員登録</AuthFooterButton>
      </AuthForm>
      <Footer className="text-center height-50" />
    </>
  );
};
