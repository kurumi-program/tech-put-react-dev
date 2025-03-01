import * as React from "react";
import { IconList } from "../../components/parts/IconList";
import { SidebarLeft } from "../../components/sidebar/SidebarLeft";
import { SidebarRight } from "../../components/sidebar/SidebarRight";
import { TitleHead } from "../../components/parts/TitleHead";
import { IconListSp } from "../../components/parts/IconListSp";

export const PostFavorite = () => {
  return (
    <div className="layout">
      <SidebarLeft />
      <main className="main flex-item">
        <ul className="main-container">
          <TitleHead>お気に入り記事</TitleHead>
          <li className="article border">
            <h1 className="font-bold">Main Content</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae urna
              lectus. Proin non nulla eros. Fusce et metus nec sapien ultricies faucibus.
            </p>
            <p>スクロールしても左右のサイドバーは固定されたままになります。</p>
            <p>...</p>
            <i className="fa-regular fa-heart mt-3"></i>
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
