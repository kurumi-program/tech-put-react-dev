import React, { useContext, useState } from "react";
import { IconList } from "../parts/IconList";
import { IconListSp } from "../parts/IconListSp";
import { AuthContext } from "../../contexts/AuthContext";
import { PostEditForm } from "../../pages/post/PostEditForm";
import { useNavigation } from "../../hooks/utils/useNavigation";
import { useNoticeSidebar } from "../../hooks/notification/useNoticeSidebar";
import { useHandleModal } from "../../hooks/utils/useHandleModal";

export const SidebarLeft = () => {
  const [isPostOpen, setIsPostOpen] = useState(false);
  const { currentUser, isLoading } = useContext(AuthContext);
  const { handleNavigate } = useNavigation();
  const { handleBellClick, bellActive } = useNoticeSidebar();
  const { scrollDisabledAndPostModalOpen } = useHandleModal({
    setIsPostOpen,
  });

  if (isLoading) return null;

  return (
    <>
      {currentUser ? (
        <>
          <aside className="sidebar sidebar-l-w flex-item border-r">
            <IconList
              className="sidebar-left sidebar-content"
              home="ホーム"
              onHomeClick={() => handleNavigate("/")}
              post="投稿する"
              onPostClick={scrollDisabledAndPostModalOpen}
              bell="通知"
              bellActive={bellActive}
              onNoticeClick={handleBellClick}
              stock="ストック"
              onStockClick={() => handleNavigate("/stocks")}
              myPage="マイページ"
              onProfileClick={() => handleNavigate("/my-page")}
            />
          </aside>
          <IconListSp
            onHomeClick={() => handleNavigate("/")}
            onPostClick={scrollDisabledAndPostModalOpen}
            onNoticeClick={() => handleNavigate("/notification")}
            onStockClick={() => handleNavigate("/stocks")}
            onProfileClick={() => handleNavigate("/my-page")}
            className="sidebar-sp border-t"
            bellActive={bellActive}
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
              onRegisterClick={() => handleNavigate("/signup")}
              login="ログイン"
              onLoginClick={() => handleNavigate("/signin")}
            />
          </aside>
          <IconListSp
            className="sidebar-sp border-t"
            home={false}
            post={false}
            bell={false}
            stock={false}
            myPage={false}
            onRegisterClick={() => handleNavigate("/signup")}
            onLoginClick={() => handleNavigate("/signin")}
          />
        </>
      )}
      {isPostOpen && <PostEditForm formTitle="新規作成" setIsOpen={setIsPostOpen} />}
    </>
  );
};
