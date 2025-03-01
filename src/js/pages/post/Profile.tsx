import * as React from "react";
import { IconList } from "../../components/parts/IconList";
import { SidebarLeft } from "../../components/sidebar/SidebarLeft";
import { SidebarRight } from "../../components/sidebar/SidebarRight";
import { UserParts } from "../../components/parts/UserParts";
import { FormButton } from "../../components/parts/FormButton";
import { IconListSp } from "../../components/parts/IconListSp";

export const Profile = () => {
  return (
    <div className="layout">
      <SidebarLeft />
      <main className="main flex-item">
        <div className="article border main-container">
          <div className="text-center">
            <div className="circle circle-profile"></div>
          </div>
          <UserParts
            classNameWrapper="justify-center"
            className="text-center"
            userClassName="profile-user-name font-bold"
            userIdClassName="profile-user-id"
            userName="React"
            userId="@react24"
            hasCircle={false}
          />
          <ul className="pt-4 mt-8 stat-item text-center border-t flex">
            <li>
              <p className="stat-number">4</p>
              <p className="stat-label">投稿数</p>
            </li>
            <li>
              <p className="stat-number">3</p>
              <p className="stat-label">フォロー</p>
            </li>
            <li>
              <p className="stat-number">4</p>
              <p className="stat-label">フォロワー</p>
            </li>
          </ul>
          <div className="profile-description">
            <p>
              テキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキスト
            </p>
          </div>
          <div className="text-center">
            <FormButton className="rounded edit-btn">プロフィールを編集する</FormButton>
          </div>
        </div>

        <ul className="main-container">
          <h2 className="font-bold articles-title ml-1">投稿した記事</h2>
          <li className="article border">
            <h1 className="font-bold">Main Content</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae urna
              lectus. Proin non nulla eros. Fusce et metus nec sapien ultricies faucibus.
            </p>
            <p>スクロールしても左右のサイドバーは固定されたままになります。</p>
            <p>...</p>
          </li>
          <li className="article border">
            <h1 className="font-bold">Main Content</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae urna
              lectus. Proin non nulla eros. Fusce et metus nec sapien ultricies faucibus.
            </p>
            <p>スクロールしても左右のサイドバーは固定されたままになります。</p>
            <p>...</p>
          </li>
          <li className="article border">
            <h1 className="font-bold">Main Content</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae urna
              lectus. Proin non nulla eros. Fusce et metus nec sapien ultricies faucibus.
            </p>
            <p>スクロールしても左右のサイドバーは固定されたままになります。</p>
            <p>...</p>
          </li>
          <li className="article border">
            <h1 className="font-bold">Main Content</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae urna
              lectus. Proin non nulla eros. Fusce et metus nec sapien ultricies faucibus.
            </p>
            <p>スクロールしても左右のサイドバーは固定されたままになります。</p>
            <p>...</p>
          </li>
        </ul>
      </main>
      <SidebarRight />
      <IconListSp className="sidebar-sp border-t" register={false} login={false} />
    </div>
  );
};
