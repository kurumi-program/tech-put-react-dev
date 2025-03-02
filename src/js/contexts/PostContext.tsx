import * as React from "react";
import { createContext, PropsWithChildren, useState } from "react";
import { Post } from "../types/post";

type PostContextType = {
  postList: Post[];
  setPostList: React.Dispatch<React.SetStateAction<Post[]>>;
};

export const PostContext = createContext<PostContextType>({
  postList: [],
  setPostList: () => {},
});

export const PostProvider = ({ children }: PropsWithChildren) => {
  const [postList, setPostList] = useState<Post[]>([]);

  return <PostContext.Provider value={{ postList, setPostList }}>{children}</PostContext.Provider>;
};
