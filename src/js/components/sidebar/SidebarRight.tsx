import React, { useContext } from "react";
import { FormButton } from "../parts/FormButton";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigation } from "../../hooks/utils/useNavigation";
import { Footer } from "../footer/Footer";
import { useTopPosts } from "../../hooks/top/useTopPosts";
import { useTopUsers } from "../../hooks/top/useTopUsers";
import { TopUserItem } from "./TopUserItem";

export const SidebarRight = () => {
  const { currentUser, isLoading } = useContext(AuthContext);
  const { topPosts } = useTopPosts();
  const { topUsers } = useTopUsers();
  const { handleNavigate } = useNavigation();

  const removeHtmlTags = (html: string) => {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  if (isLoading) return null;

  return (
    <aside className="sidebar sidebar-r-w flex-item">
      <div className="sidebar-right sidebar-content-2">
        <div className="sidebar-b">
          {currentUser ? (
            <ul className="border sidebar-box sidebar-right-mt">
              <h3>トレンド</h3>
              {topPosts.map((post, index) => (
                <li
                  key={post.id}
                  className="cursor-pointe top-post"
                  onClick={() => handleNavigate(`/post-detail/${post.id}`)}
                >
                  <p className="title">{index + 1}位</p>
                  <p className="content">{removeHtmlTags(post.content)}</p>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="border sidebar-box">
              <h3>TechPutを使ってみよう</h3>
              <FormButton
                className="text-base rounded-full no-login-btn"
                onClick={() => handleNavigate("/signup")}
              >
                新規会員登録
              </FormButton>
              {/* <AuthSnsButton className="text-base rounded-full">Googleで登録</AuthSnsButton> */}
            </ul>
          )}

          <ul className="border sidebar-box">
            <h3>人気のユーザー</h3>
            {topUsers.map((user) => (
              <TopUserItem key={user.id} user={user} currentUser={currentUser} />
            ))}
          </ul>
          <Footer className="ml-3" />
        </div>
      </div>
    </aside>
  );
};
