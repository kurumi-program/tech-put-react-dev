import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigation } from "../../hooks/utils/useNavigation";
import React from "react";

type Props = {
  className?: string;
};

export const SearchBox = ({ className }: Props) => {
  const [keyword, setKeyword] = useState("");
  const { handleNavigate } = useNavigation();

  const location = useLocation();

  useEffect(() => {
    setKeyword("");
  }, [location.pathname]);

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && keyword.trim() !== "") {
      handleNavigate(`/search?q=${encodeURIComponent(keyword.trim())}`);
    }
  };
  return (
    <input
      type="text"
      className={`${className} search-input`}
      placeholder="検索"
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
      onKeyDown={handleSearch}
    />
  );
};
