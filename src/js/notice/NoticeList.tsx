import React from "react";
import { TitleHead } from "../components/parts/TitleHead";
import { NoticeItem } from "./NoticeItem";
import { useNoticeData } from "../hooks/notification/useNoticeData";

export const NoticeList = () => {
  const { noticeList } = useNoticeData();
  return (
    <ul className="main-container">
      <TitleHead>通知一覧</TitleHead>
      {noticeList.map((notice) => (
        <NoticeItem notice={notice} key={notice.id} />
      ))}
    </ul>
  );
};
