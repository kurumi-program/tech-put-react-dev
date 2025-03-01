import React from "react";
import { IconList } from "../../components/parts/IconList";
import { SidebarLeft } from "../../components/sidebar/SidebarLeft";
import { SidebarRight } from "../../components/sidebar/SidebarRight";
import { IconAndCount } from "../../components/parts/IconAndCount";
import { UserCommentParts } from "../../components/parts/UserCommentParts";
import { CommentAreaForm } from "../../components/parts/CommentAreaForm";
import { HandleDropDown } from "../../components/parts/HandleDropDown";
import { IconListSp } from "../../components/parts/IconListSp";

export const PostDetail = () => {
  const comment =
    "テキストテキストテキストテキストテキストテキストトテキストテキストテキストテキスト";
  return (
    <div className="layout">
      <SidebarLeft />
      <main className="main flex-item">
        <ul className="main-container">
          <li className="article border">
            <h1 className="font-bold">Main Content</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae urna
              lectus. Proin non nulla eros. Fusce et metus nec sapien ultricies faucibus.
            </p>
            <p>スクロールしても左右のサイドバーは固定されたままになります。</p>
            <p>スクロールしても左右のサイドバーは固定されたままになります。</p>
            <p>スクロールしても左右のサイドバーは固定されたままになります。</p>
            <p>スクロールしても左右のサイドバーは固定されたままになります。</p>
            <p>スクロールしても左右のサイドバーは固定されたままになります。</p>
            <p>スクロールしても左右のサイドバーは固定されたままになります。</p>
            <p>スクロールしても左右のサイドバーは固定されたままになります。</p>
            <p>...</p>
            <div className="icons flex items-center mt-3">
              <IconAndCount className="fa-heart" count={10} />
              <IconAndCount className="fa-comment" count={12} />
            </div>
          </li>
        </ul>
        <div className="comment main-container">
          <h2 className="font-bold">12件のコメント</h2>
          <CommentAreaForm />
          <ul>
            <UserCommentParts userId="@react" comment={comment}>
              <HandleDropDown remove="削除する" />
            </UserCommentParts>
            <UserCommentParts userId="@react" comment={comment} />
          </ul>
        </div>
      </main>
      <SidebarRight />
      <IconListSp className="sidebar-sp border-t" register={false} login={false} />
    </div>
  );
};
