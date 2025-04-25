import * as React from "react";
import { createContext, PropsWithChildren, useState } from "react";
import { Relationship } from "../types/relationship";

type RelationshipContextType = {
  follow: Relationship | null;
  setFollow: React.Dispatch<React.SetStateAction<Relationship | null>>;
  isRelationLoading: boolean;
  setIsRelationLoading: React.Dispatch<React.SetStateAction<boolean>>;
  followList: Relationship[];
  setFollowList: React.Dispatch<React.SetStateAction<Relationship[]>>;
  followerList: Relationship[];
  setFollowerList: React.Dispatch<React.SetStateAction<Relationship[]>>;
};

export const RelationshipContext = createContext<RelationshipContextType>({
  follow: null,
  setFollow: () => {},
  isRelationLoading: false,
  setIsRelationLoading: () => {},
  followList: [],
  setFollowList: () => {},
  followerList: [],
  setFollowerList: () => {},
});

export const RelationshipProvider = ({ children }: PropsWithChildren) => {
  const [follow, setFollow] = useState<Relationship | null>(null);
  const [isRelationLoading, setIsRelationLoading] = useState<boolean>(true);
  const [followList, setFollowList] = useState<Relationship[]>([]);
  const [followerList, setFollowerList] = useState<Relationship[]>([]);

  return (
    <RelationshipContext.Provider
      value={{
        follow,
        setFollow,
        isRelationLoading,
        setIsRelationLoading,
        followList,
        setFollowList,
        followerList,
        setFollowerList,
      }}
    >
      {children}
    </RelationshipContext.Provider>
  );
};
