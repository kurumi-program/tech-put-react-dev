import React from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";
import { FormButton } from "../components/parts/FormButton";
import { usePostEdit } from "../hooks/post/usePostEdit";

type Props = {
  postId?: string; // ない場合は新規作成
  initialContent?: string; // 初期コンテンツ（編集時のみ渡す）
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PostEditInputForm = ({ postId, initialContent = "", setIsOpen }: Props) => {
  const {
    editorState,
    setEditorState,
    errorText,
    handlePost,
    handleLearnClick,
    handleImageUpload,
    isLearn,
  } = usePostEdit(postId, initialContent, () => setIsOpen(false));

  return (
    <div className="form-editor">
      {errorText && <p className="text-red-600 text-base">テキストを入力してください</p>}
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        editorClassName="editorClassName"
        toolbar={{
          options: ["inline", "fontSize", "image", "link"],
          image: {
            uploadCallback: handleImageUpload,
            previewImage: true,
          },
          localization: { locale: "ja" },
        }}
        placeholder="ここに入力してください"
      />
      <div className="form-submit">
        <button
          className={`learn-button form-btn-radius mr-2 ${isLearn && "learn-button-active"}`}
          onClick={handleLearnClick}
        >
          学習
        </button>
        <FormButton className="form-btn-radius" onClick={handlePost}>
          {postId ? "更新する" : "追加する"}
        </FormButton>
      </div>
    </div>
  );
};
