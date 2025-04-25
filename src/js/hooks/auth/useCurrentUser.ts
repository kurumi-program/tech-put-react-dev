import { useEffect, useState } from "react";
import { User } from "../../types/auth";
import { getCurrentUser } from "../../services/authService";

export const useCurrentUser = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const handleGetCurrentUser = async () => {
    setIsLoading(true);
    try {
      const res = await getCurrentUser();
      if (res?.data.success) {
        setIsLoggedIn(true);
        setCurrentUser(res.data.data);
        console.log("サインイン中");
      } else {
        setIsLoggedIn(false);
        setCurrentUser(undefined);
        console.log("サインインしていません");
      }
    } catch (error) {
      console.log(error, "予期せぬエラー");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetCurrentUser();
  }, []);

  return {
    isLoading,
    setIsLoading,
    isLoggedIn,
    setIsLoggedIn,
    currentUser,
    setCurrentUser,
    handleGetCurrentUser,
  };
};
