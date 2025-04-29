import * as React from "react";
import { SidebarLeft } from "../../components/sidebar/SidebarLeft";
import { SidebarRight } from "../../components/sidebar/SidebarRight";

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
    </div>
  );
};
