import React, { useContext } from "react";
import { Post } from "../types/post";
import { useNavigation } from "../hooks/utils/useNavigation";
import { UserInfo } from "../user/UserInfo";
import { useCurrentUser } from "../hooks/auth/useCurrentUser";
import { useLike } from "../hooks/like/useLike";
import { IconAndCount } from "../components/parts/IconAndCount";
import { getLikeStatus } from "../utils/getLikeStatus";
import { AuthContext } from "../contexts/AuthContext";
import { useHandleModal } from "../hooks/utils/useHandleModal";

type Props = {
  post: Post;
};

export const PostItem = ({ post }: Props) => {
  const { handleNavigate } = useNavigation();
  const { currentUser } = useContext(AuthContext);
  const { handleLikePost, handleLikeDelete, postLikes } = useLike({ postId: post.id });
  const { isLiked, likeCount } = getLikeStatus({ postId: post.id, postLikes });
  const { setIsLoginModalOpen } = useContext(AuthContext);
  const { scrollDisabledAndModalOpen } = useHandleModal({
    setIsOpen: setIsLoginModalOpen,
  });

  return (
    <li
      className="article border cursor-pointer btn"
      onClick={() => {
        !currentUser ? scrollDisabledAndModalOpen() : handleNavigate(`/post-detail/${post.id}`);
      }}
    >
      {post && <UserInfo post={post} />}
      <div className="mt-3 post-item" dangerouslySetInnerHTML={{ __html: post.content }} />
      <div className="inline-block mt-3">
        <IconAndCount
          onClick={(e) => {
            e.stopPropagation();
            currentUser
              ? isLiked
                ? handleLikeDelete()
                : handleLikePost()
              : scrollDisabledAndModalOpen(); // 未ログインならサインアップへ
          }}
          className={isLiked ? "fa-heart fa-solid like-active" : "fa-heart"}
          classHover={isLiked ? "" : "like-hover"}
          count={likeCount}
        />
      </div>
    </li>
  );
};
