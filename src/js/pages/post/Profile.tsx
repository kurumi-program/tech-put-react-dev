import * as React from "react";
import { SidebarLeft } from "../../components/sidebar/SidebarLeft";
import { SidebarRight } from "../../components/sidebar/SidebarRight";
import { IconListSp } from "../../components/parts/IconListSp";
import { useProfileData } from "../../hooks/profile/useProfileData";
import { useRef, useState } from "react";
import { useHandleModal } from "../../hooks/utils/useHandleModal";
import { ProfileEditForm } from "./ProfileEditForm";
import { ProfileLayout } from "../../post/ProfileLayout";
import { ProfilePostList } from "../../post/ProfilePostList";
import { PostEditForm } from "./PostEditForm";
import { ProfileLikedPostList } from "../../post/ProfileLikedPostList";
import { scrollToSection } from "../../utils/scrollToSection";
import { useNavigation } from "../../hooks/utils/useNavigation";

export const Profile = () => {
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [isPostOpen, setIsPostOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("all");
  const { profile, isProfileLoading } = useProfileData();
  const scrollRef = useRef<HTMLUListElement>(null);
  const {
    scrollDisabledAndPostModalOpen,
    scrollDisabledAndEditModalOpen,
    scrollValidAndEditModalClose,
  } = useHandleModal({
    setIsPostOpen: setIsPostOpen,
    setIsEditOpen: setIsEditOpen,
  });
  const { handleNavigate } = useNavigation();

  if (isProfileLoading) return null;

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div className="layout">
      <SidebarLeft />
      <ProfileLayout
        userAvatarUrl={profile?.avatarUrl}
        userName={profile?.userName}
        userEmail={profile?.email}
        userUserName={profile?.userUserName}
        userPostCount={profile?.postCount}
        userBio={profile?.bio}
        onModalClick={scrollDisabledAndEditModalOpen}
        myPage={true}
        onPostClick={() => scrollToSection({ scrollRef })}
        followingsCount={profile?.followingsCount}
        followersCount={profile?.followersCount}
        handleFollowingsClick={() => handleNavigate("/my-page/following")}
        handleFollowersClick={() => handleNavigate("/my-page/followers")}
      >
        <ul className="main-container" ref={scrollRef}>
          <div className="flex tab-pointer">
            <h2
              className={`font-bold articles-title ml-1 ${activeTab === "all" && "tab-active"}`}
              onClick={() => handleTabClick("all")}
            >
              All
            </h2>
            <h2
              className={`font-bold articles-title ml-4 ${activeTab === "liked" && "tab-active"}`}
              onClick={() => handleTabClick("liked")}
            >
              いいね
            </h2>
          </div>
          {activeTab === "all" ? (
            <>
              {profile && Number(profile.postCount) > 0 ? (
                <ProfilePostList />
              ) : (
                <p
                  className="ml-1 mt-7 no-post-profile-title btn"
                  onClick={scrollDisabledAndPostModalOpen}
                >
                  記事を作成してみよう！
                </p>
              )}
            </>
          ) : (
            <>
              {profile && profile?.likedCount > 0 ? (
                <ProfileLikedPostList />
              ) : (
                <p className="mt-8">いいねはありません</p>
              )}
            </>
          )}
        </ul>
      </ProfileLayout>
      <SidebarRight />
      <IconListSp className="sidebar-sp border-t" register={false} login={false} />
      {isEditOpen && (
        <ProfileEditForm setIsEditOpen={setIsEditOpen} onClick={scrollValidAndEditModalClose} />
      )}
      {isPostOpen && <PostEditForm formTitle="新規作成" setIsOpen={setIsPostOpen} />}
    </div>
  );
};
