import * as React from "react";
import { SidebarLeft } from "../../components/sidebar/SidebarLeft";
import { SidebarRight } from "../../components/sidebar/SidebarRight";
import { TitleHead } from "../../components/parts/TitleHead";
import { IconListSp } from "../../components/parts/IconListSp";
import { StockList } from "../../post/StockList";

export const PostStock = () => {
  return (
    <div className="layout">
      <SidebarLeft />
      <main className="main flex-item">
        <ul className="main-container">
          <TitleHead>ストックした記事</TitleHead>
          <StockList />
        </ul>
      </main>
      <SidebarRight />
      <IconListSp className="sidebar-sp border-t" register={false} login={false} />
    </div>
  );
};
