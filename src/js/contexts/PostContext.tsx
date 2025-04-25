import * as React from "react";
import { createContext, PropsWithChildren, useState } from "react";
import { Post } from "../types/post";
import { Comment } from "../types/comment";
import { PostLike } from "../types/postLike";
import { PostStock } from "../types/postStock";

// いいねの状態を格納する型

type PostContextType = {
  postList: Post[];
  setPostList: React.Dispatch<React.SetStateAction<Post[]>>;
  commentList: Comment[];
  setCommentList: React.Dispatch<React.SetStateAction<Comment[]>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isCommentLoading: boolean;
  setIsCommentLoading: React.Dispatch<React.SetStateAction<boolean>>;
  postLikes: Record<string, PostLike>;
  setPostLikes: React.Dispatch<React.SetStateAction<Record<string, PostLike>>>;
  postStocks: Record<string, PostStock>;
  setPostStocks: React.Dispatch<React.SetStateAction<Record<string, PostStock>>>;
  stockList: Post[];
  setStockList: React.Dispatch<React.SetStateAction<Post[]>>;
  searchList: Post[];
  setSearchList: React.Dispatch<React.SetStateAction<Post[]>>;
};

export const PostContext = createContext<PostContextType>({
  postList: [],
  setPostList: () => {},
  commentList: [],
  setCommentList: () => {},
  isLoading: false,
  setIsLoading: () => {},
  isCommentLoading: false,
  setIsCommentLoading: () => {},
  postLikes: {},
  setPostLikes: () => {},
  postStocks: {},
  setPostStocks: () => {},
  stockList: [],
  setStockList: () => {},
  searchList: [],
  setSearchList: () => {},
});

export const PostProvider = ({ children }: PropsWithChildren) => {
  const [postList, setPostList] = useState<Post[]>([]);
  const [commentList, setCommentList] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isCommentLoading, setIsCommentLoading] = useState<boolean>(true);
  const [postLikes, setPostLikes] = useState<Record<string, PostLike>>({});
  const [postStocks, setPostStocks] = useState<Record<string, PostStock>>({});
  const [stockList, setStockList] = useState<Post[]>([]);
  const [searchList, setSearchList] = useState<Post[]>([]);

  return (
    <PostContext.Provider
      value={{
        isCommentLoading,
        setIsCommentLoading,
        commentList,
        setCommentList,
        isLoading,
        setIsLoading,
        postList,
        setPostList,
        postLikes,
        setPostLikes,
        postStocks,
        setPostStocks,
        stockList,
        setStockList,
        searchList,
        setSearchList,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
