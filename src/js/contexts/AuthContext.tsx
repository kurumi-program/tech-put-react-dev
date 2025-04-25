import * as React from "react";
import { createContext, PropsWithChildren, useState } from "react";
import { User } from "../types/auth";
import { useCurrentUser } from "../hooks/auth/useCurrentUser";

type AuthContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  currentUser: User | undefined;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  flashMessage: string;
  setFlashMessage: React.Dispatch<React.SetStateAction<string>>;
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleGetCurrentUser: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  currentUser: undefined,
  setCurrentUser: () => {},
  isLoading: false,
  setIsLoading: () => {},
  handleGetCurrentUser: async () => {},
  flashMessage: "",
  setFlashMessage: () => {},
  isLoginModalOpen: false,
  setIsLoginModalOpen: () => {},
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const {
    isLoading,
    setIsLoading,
    isLoggedIn,
    setIsLoggedIn,
    currentUser,
    setCurrentUser,
    handleGetCurrentUser,
  } = useCurrentUser();
  const [flashMessage, setFlashMessage] = useState("");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        currentUser,
        setCurrentUser,
        isLoading,
        setIsLoading,
        handleGetCurrentUser,
        flashMessage,
        setFlashMessage,
        isLoginModalOpen,
        setIsLoginModalOpen,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
