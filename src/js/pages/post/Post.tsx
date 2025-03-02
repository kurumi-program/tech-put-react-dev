import * as React from "react";
import { SidebarLeft } from "../../components/sidebar/SidebarLeft";
import { SidebarRight } from "../../components/sidebar/SidebarRight";
import { PostList } from "../../components/post/PostList";

export const Post = () => {
 
  return (
    <div className="layout">
      <SidebarLeft />
      <main className="main flex-item">
        <PostList />
      </main>
      <SidebarRight />
    </div>
  );
};
