import { useEffect, useState } from "react";
import { User } from "../../types/auth";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../services/authService";

export const useCurrentUser = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | undefined>();
  const navigate = useNavigate();
  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser();
      if (res?.data.success) {
        setIsLoggedIn(true);
        setCurrentUser(res.data.data);
        navigate("/");
        console.log("サインイン中");
      } else {
        setIsLoggedIn(false);
        setCurrentUser(undefined);
        console.log("サインインしていません");
      }
    } catch (error) {
      console.log(error, "予期せぬエラー");
    }
  };

  useEffect(() => {
    handleGetCurrentUser();
  }, []);

  return { isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser, handleGetCurrentUser };
};
