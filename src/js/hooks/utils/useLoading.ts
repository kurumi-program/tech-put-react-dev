import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const useLoading = () => {
  const { currentUser, isLoading, setIsLoading } = useContext(AuthContext);

  useEffect(() => {
    if (currentUser !== undefined) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [currentUser]);

  return { isLoading };
};
