import * as React from "react";
import { SidebarLeft } from "../../components/sidebar/SidebarLeft";
import { SidebarRight } from "../../components/sidebar/SidebarRight";
import { TitleHead } from "../../components/parts/TitleHead";
import { IconListSp } from "../../components/parts/IconListSp";
import { useRelationshipList } from "../../hooks/relationship/useRelationshipList";
import { useParams } from "react-router-dom";
import { RelationItem } from "../../post/RelationItem";
import { useEffect } from "react";
import { useNavigation } from "../../hooks/utils/useNavigation";

export const FollowList = () => {
  let { id } = useParams();
  const { followList, setFollowList, fetchFollowList } = useRelationshipList(id ?? "");
  const { handleNavigate } = useNavigation();

  useEffect(() => {
    setFollowList([]);
    fetchFollowList();
  }, [id]);
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
      <IconListSp className="sidebar-sp border-t" register={false} login={false} />
    </div>
  );
};
