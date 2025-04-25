import React, { useContext, useState } from "react";
import { useHandleModal } from "../../hooks/utils/useHandleModal";
import { AuthContext } from "../../contexts/AuthContext";
import { useLogin } from "../../hooks/auth/useLogin";
import { useNavigation } from "../../hooks/utils/useNavigation";
import { InputArea } from "../../components/header/InputArea";
import { AuthFooterButton } from "../../components/parts/AuthFooterButton";
import { AuthSubTextRight } from "../../components/parts/AuthSubTextRight";
import { FormButton } from "../../components/parts/FormButton";

export const LoginModal = () => {
  const { setIsLoginModalOpen } = useContext(AuthContext);
  const { scrollValidAndModalClose } = useHandleModal({
    setIsOpen: setIsLoginModalOpen,
  });
  const { signinErrors, handleSubmit, generalErrors, email, setEmail, password, setPassword } =
    useLogin();
  const { handleNavigate } = useNavigation();

  return (
    <div className="form-bg" onClick={scrollValidAndModalClose}>
      <form
        className="login-form-container"
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit(false)}
      >
        <i
          className="form-icon fa-solid fa-xmark"
          id="modal-close"
          onClick={scrollValidAndModalClose}
        ></i>
        <h1 className="logo form-logo text-center">Login</h1>
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
      </form>
    </div>
  );
};
