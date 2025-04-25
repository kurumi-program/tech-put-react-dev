import { useEffect } from "react";
import { useNoticeData } from "./useNoticeData";
import { useNavigation } from "../utils/useNavigation";

export const useNoticeSidebar = () => {
  const { noticeList, marksAsRead, bellActive, setBellActive } = useNoticeData();
  const { handleNavigate } = useNavigation();
  // 未読通知がある場合に、bellActive を true にする
  useEffect(() => {
    if (noticeList.some((notice) => !notice.read)) {
      setBellActive(true);
    } else {
      setBellActive(false);
    }
  }, [noticeList, marksAsRead]);

  const handleBellClick = () => {
    setBellActive(false);
    handleNavigate("/notification");
    if (bellActive) {
      //未読を既読にする
      const unreadNotices = noticeList.filter((notice) => !notice.read);
      const unreadNoticeIds = unreadNotices.map((notice) => notice.id.toString());
      marksAsRead(unreadNoticeIds);
    }
  };

  return { handleBellClick, bellActive };
};
