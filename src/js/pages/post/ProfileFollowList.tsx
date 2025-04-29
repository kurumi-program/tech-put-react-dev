import * as React from "react";
import { SidebarLeft } from "../../components/sidebar/SidebarLeft";
import { SidebarRight } from "../../components/sidebar/SidebarRight";
import { TitleHead } from "../../components/parts/TitleHead";
import { useRelationshipList } from "../../hooks/relationship/useRelationshipList";
import { RelationItem } from "../../post/RelationItem";
import { useEffect } from "react";
import { useNavigation } from "../../hooks/utils/useNavigation";
import { useCurrentUser } from "../../hooks/auth/useCurrentUser";

export const ProfileFollowList = () => {
  const { currentUser } = useCurrentUser();
  const { handleNavigate } = useNavigation();
  const userId = currentUser?.id ?? "";

  const { followList, setFollowList, fetchFollowList } = useRelationshipList(userId);

  useEffect(() => {
    if (!userId) return;
    setFollowList([]);
    fetchFollowList();
  }, [userId]);

  return (
    <div className="layout">
      <SidebarLeft />
      <main className="main flex-item">
        <div className="main-container">
          <TitleHead>フォロー</TitleHead>
          {followList.length > 0 && (
            <div className="follow-article border">
              <ul>
                {followList.map((follow) => (
                  <RelationItem
                    key={follow.id}
                    id={follow.id}
                    onNavigateClick={() => handleNavigate(`/users/${follow.id}`)}
                    userName={follow.name}
                    userUserName={follow.username}
                    userBio={follow.bio}
                    userAvatarUrl={follow.avatarUrl}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      </main>
      <SidebarRight />
    </div>
  );
};
