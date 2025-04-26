import React, { useRef, useState, useEffect } from "react";
import { IconAndCount } from "../components/parts/IconAndCount";
import { UserInfo } from "../user/UserInfo";
import { useDeletePost } from "../hooks/post/useDeletePost";
import { useClickOutside } from "../hooks/utils/useClickOutside";
import { PostEditForm } from "../pages/post/PostEditForm";
import { Post } from "../types/post";
import { StockIcon } from "../components/parts/StockIcon";
import { HandleDropDown } from "../components/parts/HandleDropDown";
import { useLike } from "../hooks/like/useLike";
import { getLikeStatus } from "../utils/getLikeStatus";
import { getStockStatus } from "../utils/getStockStatus";
import { useStock } from "../hooks/stock/useStock";
import { PostImageModal } from "./PostImageModal";

type Props = {
  post: Post | undefined;
  isOwner: boolean;
  scrollToSection?: () => void;
  count: number;
};

export const PostShow = ({ count, post, isOwner, scrollToSection }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { deletePost } = useDeletePost();
  const { handleLikePost, handleLikeDelete, postLikes } = useLike({ postId: post?.id ?? "" });
  const { isLiked, likeCount } = getLikeStatus({ postId: post?.id ?? "", postLikes });
  const { handleStockPost, handleStockDelete, postStocks } = useStock({
    postId: post?.id ?? "",
  });
  const { isStocked } = getStockStatus({ postId: post?.id ?? "", postStocks });

  const editFormOpen = () => {
    document.body.classList.add("over-hidden");
    setIsModalOpen(true);
    setOpenDropdownId(null);
  };

  const handlePullDown = (postId: string) => {
    setOpenDropdownId(openDropdownId === postId ? null : postId);
  };

  useClickOutside({
    ref: dropdownRef,
    callback: () => setOpenDropdownId(null),
  });

  return (
    <>
      <ul className="main-container">
        <li className="article border relative">
          <div className="flex items-center justify-between">
            {post && <UserInfo post={post} />}
            {isOwner && (
              <HandleDropDown
                ref={dropdownRef}
                isOpen={openDropdownId === post?.id}
                remove="削除する"
                edit="編集する"
                onEditClick={editFormOpen}
                onDeleteClick={() => post && deletePost(post.id)}
                onPulldownClick={() => post && handlePullDown(post.id)}
              />
            )}
          </div>
          <div
            className="mt-3 post-content"
            dangerouslySetInnerHTML={{ __html: post?.content || "" }}
          />
          <div className="icons flex items-center mt-3">
            <IconAndCount
              onClick={() => {
                isLiked ? handleLikeDelete() : handleLikePost();
              }}
              classHover="like-hover"
              className={isLiked ? "fa-heart fa-solid like-active" : "fa-heart"}
              count={likeCount}
            />
            <IconAndCount
              classHover="comment-hover"
              onClick={scrollToSection}
              className="fa-comment"
              count={count}
            />
          </div>
          <StockIcon
            onClick={() => {
              isStocked ? handleStockDelete() : handleStockPost();
            }}
            className={isStocked ? "fa-solid" : "fa-regular"}
            stock={isStocked ? "ストックを外す" : "ストックする"}
          />
        </li>
      </ul>
      {isModalOpen && (
        <PostEditForm
          formTitle="編集"
          setIsOpen={setIsModalOpen}
          postId={post?.id}
          initialContent={post?.content}
        />
      )}
      {post && <PostImageModal post={post} />}
    </>
  );
};
