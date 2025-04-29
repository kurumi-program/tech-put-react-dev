import React, { useContext, useRef, useState } from "react";
import { Comment } from "../types/comment";
import { useNavigation } from "../hooks/utils/useNavigation";
import { getUserName } from "../utils/getUserName";
import { getOwner } from "../utils/getOwner";
import { useClickOutside } from "../hooks/utils/useClickOutside";
import { HandleDropDown } from "../components/parts/HandleDropDown";
import { CommentAreaForm } from "./CommentAreaForm";
import { useCommentPostEdit } from "../hooks/comment/useCommentPostEdit";
import { useCommentDelete } from "../hooks/comment/useCommentDelete";
import { useSmoothScroll } from "../hooks/utils/useSmoothScroll";
import { UserAvatarImage } from "../components/parts/UserAvatarImage";
import { MentionFormatText } from "./MentionFormatText";
import { AuthContext } from "../contexts/AuthContext";

type Props = {
  comment: Comment;
  postId: string;
  id: string;
};

export const CommentItem = ({ id, comment, postId }: Props) => {
  const { handleNavigate } = useNavigation();
  const userName = getUserName({ comment });
  const isCommentOwner = getOwner({ comment });
  const dropdownRef = useRef<HTMLDivElement>(null);
  const editRef = useRef<HTMLDivElement>(null);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const { handleCommentEdit, content, setContent } = useCommentPostEdit({
    postId,
    commentId: comment.id,
    initialContent: comment.content,
  });
  const { handleCommentDelete } = useCommentDelete({ postId, commentId: comment.id });
  const { currentUser } = useContext(AuthContext)

  //ドロップダウンの表示の際の背景押した時にコンテンツを非表示
  useClickOutside({
    ref: dropdownRef,
    callback: () => setIsDropdownOpen(false),
  });
  //編集中の表示の際の背景押した時にコンテンツを非表示
  useClickOutside({
    ref: editRef,
    callback: () => setIsEdit(false),
  });

  //編集コメントの際の処理
  const handleEditClick = () => {
    setTimeout(() => {
      setIsEdit(true);
    }, 0);
    setIsDropdownOpen(false);
  };
  const handleEditSubmit = () => {
    handleCommentEdit();
    setIsEdit(false);
  };

  //スムーススクロール
  useSmoothScroll();

  const navigate = () => {
    if (currentUser?.id === comment.userId) {
      handleNavigate("/my-page");
    } else {
      handleNavigate(`/users/${comment.userId}`);
    }
  };

  const formattedValue = MentionFormatText({
    text: comment.content,
    mentionUsers: comment.mentionUsers.map((user) => ({
      ...user,
      id: user.id.toString(),
    })),
    onMentionClick: (userId) => {
      handleNavigate(`/users/${userId}`);
    },
  });

  return (
    <>
      {isEdit ? (
        <div ref={editRef}>
          <CommentAreaForm
            onChange={setContent}
            onClick={handleEditSubmit}
            value={content}
            buttonTxt="保存"
          />
        </div>
      ) : (
        <li id={`mention-${id}`} className="flex mt-5 justify-between">
          <div className="flex">
            <div className="btn" onClick={navigate}>
              <UserAvatarImage src={comment.userAvatarUrl} />
            </div>
            <div className="ml-2">
              <div className="flex">
                <p className="comment-user-name">{userName}</p>
                <p className="comment-date ml-1">{comment.createdAt}</p>
              </div>
              <p
                className="comment-txt"
                style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
              >
                {formattedValue}
              </p>
            </div>
          </div>
          {isCommentOwner && (
            <HandleDropDown
              classNameIcon="mt-2"
              ref={dropdownRef}
              isOpen={isDropdownOpen}
              onPulldownClick={() => setIsDropdownOpen(true)}
              onEditClick={handleEditClick}
              onDeleteClick={handleCommentDelete}
              remove="削除する"
              edit="編集する"
            />
          )}
        </li>
      )}
    </>
  );
};
