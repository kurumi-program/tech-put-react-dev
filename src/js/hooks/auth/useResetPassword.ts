import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigation } from "../utils/useNavigation";
import { useLogin } from "./useLogin";
import { resetPassword } from "../../services/authService";
import { ResetPassParams } from "../../types/auth";

export const useResetPassword = () => {
  const { handleNavigate } = useNavigation();
  const {
    password,
    setPassword,
    passwordConfirmation,
    setPasswordConfirmation,
    generalErrors,
    setGeneralErrors,
  } = useLogin();
  const [resetPassErrors, setResetPassErrors] = useState({
    password: [],
    passwordConfirmation: [],
  });
  const [resetPasswordToken, setResetPasswordToken] = useState<string>("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("reset_password_token");
    if (token) {
      setResetPasswordToken(token);
    }
  }, []);

  const handleResetPass = async (e: React.FormEvent) => {
    e.preventDefault();
    setResetPassErrors({
      password: [],
      passwordConfirmation: [],
    });
    setGeneralErrors("");

    const params: ResetPassParams = {
      password,
      passwordConfirmation,
      resetPasswordToken,
    };
    try {
      const res = await resetPassword(params);
      if (res.status === 200) {
        alert("パスワードをリセットしました");
        handleNavigate("/signin");
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const errorData = error.response?.data.errors;
        if (errorData) {
          setResetPassErrors({
            password: errorData.password || [],
            passwordConfirmation: errorData.passwordConfirmation || [],
          });
          if (Array.isArray(errorData)) {
            setGeneralErrors(errorData.join("、"));
          }
        }
      } else {
        setGeneralErrors("予期せぬエラーが発生しました");
      }
    }
  };
  return {
    password,
    setPassword,
    passwordConfirmation,
    setPasswordConfirmation,
    generalErrors,
    setGeneralErrors,
    resetPassErrors,
    setResetPassErrors,
    handleResetPass,
    handleNavigate,
  };
};
