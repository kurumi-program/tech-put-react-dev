import * as React from "react";
import { createContext, PropsWithChildren, useState } from "react";
import { Notice } from "../types/notice";

type PostContextType = {
  noticeList: Notice[];
  setNoticeList: React.Dispatch<React.SetStateAction<Notice[]>>;
  bellActive: boolean;
  setBellActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NoticeContext = createContext<PostContextType>({
  noticeList: [],
  setNoticeList: () => {},
  bellActive: false,
  setBellActive: () => {},
});

export const NoticeProvider = ({ children }: PropsWithChildren) => {
  const [noticeList, setNoticeList] = useState<Notice[]>([]);
  const [bellActive, setBellActive] = useState<boolean>(false);

  return (
    <NoticeContext.Provider
      value={{
        noticeList,
        setNoticeList,
        bellActive,
        setBellActive,
      }}
    >
      {children}
    </NoticeContext.Provider>
  );
};
