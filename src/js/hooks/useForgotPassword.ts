import axios from "axios";
import { forgotPassword } from "../services/authService";
import { useLogin } from "./useLogin";

export const useForgotPassword = () => {
  const { email, setEmail, generalErrors, setGeneralErrors } = useLogin();

  const requestPass = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await forgotPassword(email);
      if (res.status === 200) {
        alert("パスワードのリセットメールを送信しました");
        setEmail("");
        setGeneralErrors("");
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const errorData = error.response?.data.errors;
        if (errorData) {
          if (Array.isArray(errorData)) {
            setGeneralErrors(errorData.join("、"));
          }
        } else {
          setGeneralErrors("予期せぬエラーが発生しました");
        }
      }
    }
  };

  return { email, setEmail, generalErrors, requestPass };
};
