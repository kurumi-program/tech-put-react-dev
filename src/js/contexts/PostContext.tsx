import * as React from "react";
import { createContext, PropsWithChildren, useState } from "react";

type PostContextType = {
  postList: string[];
  setPostList: React.Dispatch<React.SetStateAction<string[]>>;
};

export const PostContext = createContext<PostContextType>({
  postList: [],
  setPostList: () => {},
});

export const PostProvider = ({ children }: PropsWithChildren) => {
  const [postList, setPostList] = useState<string[]>([]);

  return <PostContext.Provider value={{ postList, setPostList }}>{children}</PostContext.Provider>;
};
