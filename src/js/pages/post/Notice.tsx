import * as React from "react";
import { SidebarLeft } from "../../components/sidebar/SidebarLeft";
import { SidebarRight } from "../../components/sidebar/SidebarRight";
import { IconListSp } from "../../components/parts/IconListSp";
import { NoticeList } from "../../notice/NoticeList";

export const Notice = () => {
  return (
    <div className="layout">
      <SidebarLeft />
      <main className="main flex-item">
        <NoticeList />
      </main>
      <SidebarRight />
      <IconListSp className="sidebar-sp border-t" register={false} login={false} />
    </div>
  );
};
