import React from "react";
import { PostEditInputForm } from "../../post/PostEditInputForm";
import { useHandleModal } from "../../hooks/utils/useHandleModal";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  formTitle?: string;
  postId?: string; // 省略可能 → あると編集、ないと新規作成
  initialContent?: string; // 編集時の初期コンテンツ
};

export const PostEditForm = ({ setIsOpen, formTitle, postId, initialContent }: Props) => {
  const { scrollValidAndEditModalClose } = useHandleModal({
    setIsEditOpen: setIsOpen,
  });

  return (
    <div className="form-bg" onClick={scrollValidAndEditModalClose}>
      <div className="form-container" onClick={(e) => e.stopPropagation()}>
        <i
          className="form-icon fa-solid fa-xmark"
          id="modal-close"
          onClick={scrollValidAndEditModalClose}
        ></i>
        <h2 className="form-head text-center border-b">{formTitle}</h2>
        <p className="error-message" id="error-message"></p>
        <div>
          <PostEditInputForm
            setIsOpen={setIsOpen}
            postId={postId}
            initialContent={initialContent}
          />
        </div>
      </div>
    </div>
  );
};
