import * as React from "react";
import { createContext, PropsWithChildren } from "react";
import { User } from "../types/auth";
import { useCurrentUser } from "../hooks/auth/useCurrentUser";

type AuthContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  currentUser: User | undefined;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  handleGetCurrentUser: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  currentUser: undefined,
  setCurrentUser: () => {},
  handleGetCurrentUser: async () => {},
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const { isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser, handleGetCurrentUser } =
    useCurrentUser();
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser, handleGetCurrentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
