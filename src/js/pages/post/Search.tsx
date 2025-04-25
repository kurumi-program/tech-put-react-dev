import * as React from "react";
import { SidebarLeft } from "../../components/sidebar/SidebarLeft";
import { SidebarRight } from "../../components/sidebar/SidebarRight";
import { TitleHead } from "../../components/parts/TitleHead";
import { IconListSp } from "../../components/parts/IconListSp";
import { useSearch } from "../../hooks/search/useSearch";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { PostItem } from "../../post/PostItem";

export const Search = () => {
  const { searchList, fetchSearchData } = useSearch();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    if (query) fetchSearchData(query);
  }, [query]);

  return (
    <div className="layout">
      <SidebarLeft />
      <main className="main flex-item">
        <ul className="main-container">
          <TitleHead>検索結果</TitleHead>
          {searchList.length > 0 ? (
            searchList.map((post) => <PostItem key={post.id} post={post} />)
          ) : (
            <p className="mt-2">該当する投稿は見つかりませんでした。</p>
          )}
        </ul>
      </main>
      <SidebarRight />
      <IconListSp className="sidebar-sp border-t" register={false} login={false} />
    </div>
  );
};
