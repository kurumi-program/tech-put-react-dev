import React, { useState } from "react";

import { FormButton } from "../../components/parts/FormButton";
import { NewPostForm } from "../../components/post/NewPostForm";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NewForm = ({ setIsOpen }: Props) => {
  const newFormClose = () => {
    /* 背景スクロール有効 */
    document.body.classList.remove("over-hidden");
    setIsOpen(false);
  };
  return (
    <div className="form-bg">
      <div className="form-container">
        <i className="form-icon fa-solid fa-xmark" id="modal-close" onClick={newFormClose}></i>
        <h2 className="form-head text-center border-b">新規作成</h2>
        <p className="error-message" id="error-message"></p>
        <div>
          <NewPostForm setIsOpen={setIsOpen}></NewPostForm>
        </div>
      </div>
    </div>
  );
};
