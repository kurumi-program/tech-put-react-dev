import * as React from "react";
import { SidebarLeft } from "../../components/sidebar/SidebarLeft";
import { SidebarRight } from "../../components/sidebar/SidebarRight";
import { TitleHead } from "../../components/parts/TitleHead";
import { IconListSp } from "../../components/parts/IconListSp";

export const NotFound = () => {
  return (
    <div className="layout">
      <SidebarLeft />
      <main className="main flex-item">
        <ul className="main-container">
          <p className="title-404">
            <span>404</span> Not Found
          </p>
          <p className="subtitle-404">ページが見つからにゃいよ（ﾟ´ω`ﾟ）</p>
        </ul>
      </main>
      <SidebarRight />
      <IconListSp className="sidebar-sp border-t" register={false} login={false} />
    </div>
  );
};
