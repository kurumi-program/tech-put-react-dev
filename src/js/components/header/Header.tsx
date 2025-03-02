import * as React from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { useNavigation } from "../../hooks/navigations/useNavigation";
import { useSignOut } from "../../hooks/auth/useSignOut";

export const Header = () => {
  const { handleSignOut } = useSignOut();
  const { currentUser } = useContext(AuthContext);
  const { handleNavigate } = useNavigation();

  if (currentUser === undefined) return null;

  if (currentUser) {
    return (
      <header className="border-b">
        <div className="flex header-container justify-between">
          <h1 className="py-3 header-logo btn" onClick={() => handleNavigate("/")}>
            TechPut
          </h1>
          <div className="search">
            <i className="search-icon fa-solid fa-magnifying-glass"></i>
            <input type="text" className="search-input" placeholder="検索" />
          </div>
          <div className="flex items-center search-wrapper">
            <div className="search-hover">
              <i className="search-sp mr-3 fa-solid fa-magnifying-glass"></i>
              <input type="text" className="search-input search-input-sp" placeholder="検索" />
            </div>
            <div className="user relative">
              <div className="circle user-icon"></div>
              <ul className="dropdown border btn">
                <li onClick={handleSignOut}>ログアウト</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  } else {
    return (
      <header className="border-b">
        <div className="flex header-container justify-between">
          <h1 className="py-3 header-logo">TechPut</h1>
          <div className="flex items-center search-wrapper">
            <button
              className="border rounded p-2 login-btn"
              onClick={() => handleNavigate("/signin")}
            >
              ログイン
            </button>
          </div>
        </div>
      </header>
    );
  }
};
