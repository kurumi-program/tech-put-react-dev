import React, { useContext } from "react";
import { FollowButton } from "../parts/FollowButton";
import { UserParts } from "../parts/UserParts";
import { FormButton } from "../parts/FormButton";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigation } from "../../hooks/navigations/useNavigation";

export const SidebarRight = () => {
  const { currentUser } = useContext(AuthContext);
  const { handleNavigate } = useNavigation();

  if (currentUser === undefined) return null;

  return (
    <aside className="sidebar sidebar-r-w flex-item">
      <div className="sidebar-right sidebar-content">
        <div className="sidebar-b">
          {currentUser ? (
            <ul className="border sidebar-box">
              <h3>トレンド</h3>
              <li>
                <p className="title">タイトル</p>
                <p className="content">テキストテキストテキストテキストテキストテキスト</p>
              </li>
              <li>
                <p className="title">タイトル</p>
                <p className="content">テキストテキストテキストテキストテキストテキスト</p>
              </li>
              <li>
                <p className="title">タイトル</p>
                <p className="content">
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
              </li>
            </ul>
          ) : (
            <ul className="border sidebar-box">
              <h3>TechPutを使ってみよう</h3>
              <FormButton
                className="text-base rounded-full"
                onClick={() => handleNavigate("/signup")}
              >
                新規会員登録
              </FormButton>
              {/* <AuthSnsButton className="text-base rounded-full">Googleで登録</AuthSnsButton> */}
            </ul>
          )}

          <ul className="border sidebar-box">
            <h3>おすすめのユーザー</h3>
            <li className="sidebar-flex">
              <UserParts className="ml-2" userName="React" userId="@react24" />
              <FollowButton className="follow-btn">フォロー</FollowButton>
            </li>
            <li className="sidebar-flex">
              <UserParts className="ml-2" userName="React" userId="@react24" />
              <FollowButton className="follow-btn">フォロー</FollowButton>
            </li>
            <li className="sidebar-flex">
              <UserParts className="ml-2" userName="React" userId="@react24" />
              <FollowButton className="unfollow-btn">フォロー中</FollowButton>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};
