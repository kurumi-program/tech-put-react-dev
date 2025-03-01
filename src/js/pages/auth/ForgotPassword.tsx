import React from "react";
import { InputArea } from "../../components/header/InputArea";
import { FormButton } from "../../components/parts/FormButton";
import { AuthForm } from "../../components/layout/AuthForm";
import { AuthSubTextRight } from "../../components/parts/AuthSubTextRight";
import { useNavigation } from "../../hooks/useNavigation";
import { useForgotPassword } from "../../hooks/useForgotPassword";

export const ForgotPassword = () => {
  const { handleNavigate } = useNavigation();
  const { requestPass, generalErrors, email, setEmail } = useForgotPassword();
  return (
    <AuthForm onSubmit={requestPass}>
      <p className="text-red-600 text-sm">{generalErrors}</p>
      <InputArea
        placeholder="メールアドレスを入力"
        value={email}
        onChange={setEmail}
        type="email"
      />
      <AuthSubTextRight onClick={() => handleNavigate("/signin")}>
        ログイン画面に戻る
      </AuthSubTextRight>
      <FormButton>リセット手順を送信</FormButton>
    </AuthForm>
  );
};
