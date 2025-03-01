import Cookies from "js-cookie";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { signOut } from "../services/authService";

export const useSignOut = () => {
  const { setIsLoggedIn, setCurrentUser } = useContext(AuthContext);
  const handleSignOut = async () => {
    try {
      const res = await signOut();

      if (res.data.success === true) {
        // サインアウト時には各Cookieを削除
        Cookies.remove("_access_token");
        Cookies.remove("_client");
        Cookies.remove("_uid");

        setIsLoggedIn(false);
        setCurrentUser(undefined);

        console.log("サインアウトに成功");
        window.location.reload();
      } else {
        console.log("サインアウトに失敗");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return { handleSignOut };
};
