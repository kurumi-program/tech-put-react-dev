import React, { useContext, useState } from "react";
import { IconList } from "../parts/IconList";
import { NewForm } from "../../pages/post/NewForm";
import { IconListSp } from "../parts/IconListSp";
import { AuthContext } from "../../contexts/AuthContext";

export const SidebarLeft = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const newFormOpen = () => {
    /* 背景スクロール無効 */
    document.body.classList.add("over-hidden");
    setIsOpen(true);
  };
  return (
    <>
      {currentUser ? (
        <>
          <aside className="sidebar sidebar-l-w flex-item border-r">
            <IconList
              className="sidebar-left sidebar-content"
              home="ホーム"
              post="投稿する"
              bell="通知"
              favorite="お気に入り"
              myPage="マイページ"
              onPostClick={newFormOpen}
            />
          </aside>
          <IconListSp
            onPostClick={newFormOpen}
            className="sidebar-sp border-t"
            register={false}
            login={false}
          />
        </>
      ) : (
        <>
          <aside className="sidebar sidebar-l-w flex-item border-r">
            <IconList
              className="sidebar-left sidebar-content"
              register="新規登録"
              login="ログイン"
            />
          </aside>
          <IconListSp
            className="sidebar-sp border-t"
            home={false}
            post={false}
            bell={false}
            favorite={false}
            myPage={false}
          />
        </>
      )}
      {isOpen && <NewForm setIsOpen={setIsOpen} />}
    </>
  );
};
