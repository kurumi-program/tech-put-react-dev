import React from "react";
import { ProfilePostList } from "./ProfilePostList";
import { ProfileLearnPostList } from "./ProfileLearnPostList";
import { ProfileLikedPostList } from "./ProfileLikedPostList";
import { Profile } from "../types/profile";

type Props = {
  activeTab: string;
  profile: Profile;
  scrollDisabledAndPostModalOpen: () => void;
};

export const ProfileTabContent = ({
  activeTab,
  profile,
  scrollDisabledAndPostModalOpen,
}: Props) => {
  if (!profile) return null;

  if (activeTab === "all") {
    return profile.postCount > 0 ? (
      <ProfilePostList />
    ) : (
      <p className="ml-1 mt-7 no-post-profile-title btn" onClick={scrollDisabledAndPostModalOpen}>
        記事を作成してみよう！
      </p>
    );
  }

  if (activeTab === "learn") {
    return profile.learnCount > 0 ? (
      <ProfileLearnPostList />
    ) : (
      <p className="mt-8">学習記録はありません</p>
    );
  }

  if (activeTab === "liked") {
    return profile.likedCount > 0 ? (
      <ProfileLikedPostList />
    ) : (
      <p className="mt-8">いいねはありません</p>
    );
  }

  return null;
};
