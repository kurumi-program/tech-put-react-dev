import React, { useContext, useRef, useState } from "react";
import { Post } from "../types/post";
import { useNavigation } from "../hooks/utils/useNavigation";
import { UserInfo } from "../user/UserInfo";
import { useLike } from "../hooks/like/useLike";
import { IconAndCount } from "../components/parts/IconAndCount";
import { getLikeStatus } from "../utils/getLikeStatus";
import { HandleDropDown } from "../components/parts/HandleDropDown";
import { useDeletePost } from "../hooks/post/useDeletePost";
import { useClickOutside } from "../hooks/utils/useClickOutside";
import { PostEditForm } from "../pages/post/PostEditForm";
import { AuthContext } from "../contexts/AuthContext";

type Props = {
  post: Post;
};

export const ProfilePostItem = ({ post }: Props) => {
  const { handleNavigate } = useNavigation();
  const { currentUser } = useContext(AuthContext);
  const { handleLikePost, handleLikeDelete, postLikes } = useLike({ postId: post.id });
  const { isLiked, likeCount } = getLikeStatus({ postId: post.id, postLikes });
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { deletePost } = useDeletePost();

  const editFormOpen = () => {
    /* 背景スクロール無効 */
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
      <li
        className="article border cursor-pointer btn"
        onClick={() => {
          currentUser ? handleNavigate(`/post-detail/${post.id}`) : handleNavigate("/signup");
        }}
      >
        <div className="flex items-center justify-between">
          {post && <UserInfo post={post} />}

          <HandleDropDown
            ref={dropdownRef}
            isOpen={openDropdownId === post?.id}
            remove="削除する"
            edit="編集する"
            onEditClick={editFormOpen}
            onDeleteClick={() => post && deletePost(post.id)}
            onPulldownClick={() => post && handlePullDown(post.id)}
          />
        </div>
        <div className="mt-3 post-item" dangerouslySetInnerHTML={{ __html: post.content }} />
        <div className="inline-block mt-3">
          <IconAndCount
            onClick={(e) => {
              e.stopPropagation();
              currentUser
                ? isLiked
                  ? handleLikeDelete()
                  : handleLikePost()
                : handleNavigate("/signup"); // 未ログインならサインアップへ
            }}
            className={isLiked ? "fa-heart fa-solid like-active" : "fa-heart"}
            classHover={isLiked ? "" : "like-hover"}
            count={likeCount}
          />
        </div>
      </li>
      {isModalOpen && (
        <PostEditForm
          formTitle="編集"
          setIsOpen={setIsModalOpen}
          postId={post.id}
          initialContent={post.content}
          initialLearn={post.learn}
        />
      )}
    </>
  );
};
