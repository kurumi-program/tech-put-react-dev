import * as React from "react";
import { SidebarLeft } from "../../components/sidebar/SidebarLeft";
import { SidebarRight } from "../../components/sidebar/SidebarRight";
import { TitleHead } from "../../components/parts/TitleHead";
import { IconListSp } from "../../components/parts/IconListSp";
import { FollowButton } from "../../components/parts/FollowButton";
import { UserParts } from "../../components/parts/UserParts";

export const Follow = () => {
  return (
    <div className="layout">
      <SidebarLeft />
      <main className="main flex-item">
        <div className="main-container">
          <TitleHead>フォロー</TitleHead>
          <div className="follow-article border">
            <ul>
              <li className="sidebar-flex follow-container">
                <div className="flex">
                  <div>
                    <div className="circle follow-circle"></div>
                  </div>
                  <div className="follow-user-wrapper ml-4">
                    <UserParts hasCircle={false} userName="React" userId="@react24" />
                    <p className="mt-1">
                      テキストテキストテキストテキストテキストテキストテキストテキスト
                    </p>
                  </div>
                </div>
                <div className="follow-btn-wrapper">
                  <FollowButton className="unfollow-btn">フォロー中</FollowButton>
                </div>
              </li>
              <li className="sidebar-flex follow-container">
                <div className="flex">
                  <div>
                    <div className="circle follow-circle"></div>
                  </div>
                  <div className="follow-user-wrapper ml-4">
                    <UserParts hasCircle={false} userName="React" userId="@react24" />
                    <p className="mt-1">
                      テキストテキストテキストテキストテキストテキストテキストテキスト
                    </p>
                  </div>
                </div>
                <div className="follow-btn-wrapper">
                  <FollowButton className="unfollow-btn">フォロー中</FollowButton>
                </div>
              </li>
              <li className="sidebar-flex follow-container">
                <div className="flex">
                  <div>
                    <div className="circle follow-circle"></div>
                  </div>
                  <div className="follow-user-wrapper ml-4">
                    <UserParts hasCircle={false} userName="React" userId="@react24" />
                    <p className="mt-1">
                      テキストテキストテキストテキストテキストテキストテキストテキスト
                    </p>
                  </div>
                </div>
                <div className="follow-btn-wrapper">
                  <FollowButton className="unfollow-btn">フォロー中</FollowButton>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <SidebarRight />
      <IconListSp className="sidebar-sp border-t" register={false} login={false} />
    </div>
  );
};
