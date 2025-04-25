import React, { useContext, useRef } from "react";
import { SidebarLeft } from "../../components/sidebar/SidebarLeft";
import { SidebarRight } from "../../components/sidebar/SidebarRight";
import { useParams } from "react-router-dom";
import { usePostData } from "../../hooks/post/usePostData";
import { PostContext } from "../../contexts/PostContext";
import { PostShow } from "../../post/PostShow";
import { scrollToSection } from "../../utils/scrollToSection";
import { CommentList } from "../../post/CommentList";
import { getOwner } from "../../utils/getOwner";
import { CommentPost } from "../../post/CommentPost";
import { useCommentData } from "../../hooks/comment/useCommentData";

export const PostDetail = () => {
  let { id } = useParams();
  const { postList } = usePostData();
  const { isLoading } = useContext(PostContext);
  const post = postList.find((post) => String(post.id) === String(id));
  const isPostOwner = getOwner({ post });
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const { commentList } = useCommentData(id ?? "");
  const commentCount = commentList.length;

  if (isLoading) return null;

  return (
    <div className="layout">
      <SidebarLeft />
      <main className="main flex-item">
        <PostShow
          count={commentCount}
          scrollToSection={() => scrollToSection({ scrollRef })}
          post={post}
          isOwner={isPostOwner}
        />
        <div ref={scrollRef} className="comment main-container mb-20">
          <h2 className="font-bold">{commentCount}件のコメント</h2>
          <CommentPost postId={id ?? ""} />
          <CommentList postId={id ?? ""} />
        </div>
      </main>
      <SidebarRight />
    </div>
  );
};
