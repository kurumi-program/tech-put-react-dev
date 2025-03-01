import React, { useContext, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"; // スタイルをインポート
import { FormButton } from "../parts/FormButton";
import { PostContext } from "../../contexts/PostContext";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NewPostForm = ({ setIsOpen }: Props) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty()); // エディターの状態を管理
  const { postList, setPostList } = useContext(PostContext);
  //エラーの時
  const [errorText, setErrorText] = useState<boolean>(false);

  const addPost = () => {
    /* 何も入力していない時エラー表示 */
    const contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      setErrorText(true);
      return; // 何もせずに終了
    }

    const rawContent = convertToRaw(editorState.getCurrentContent()); // DraftJSのデータを取得
    const htmlContent = draftToHtml(rawContent); // HTMLに変換
    setPostList([...postList, htmlContent]); // 配列に追加

    setEditorState(EditorState.createEmpty()); // エディターをリセット
    setIsOpen(false);
    /* 背景スクロール有効 */
    document.body.classList.remove("over-hidden");
  };

  const handleImageUpload = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const imageUrl = reader.result as string;
        resolve({ data: { link: imageUrl } }); // Promiseを返し、アップロードされた画像のURLを返します
      };
      reader.onerror = () => {
        reject("画像の読み込みに失敗しました。");
      };
      reader.readAsDataURL(file); // 画像をData URLに変換
    });
  };

  return (
    <div className="form-editor">
      {errorText && <p className="text-red-600 text-base">テキストを入力してください</p>}
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        editorClassName="editorClassName"
        localization={{
          locale: "ja",
        }}
        toolbar={{
          options: ["inline", "fontSize", "image", "link"],
          image: {
            uploadCallback: handleImageUpload, // 画像アップロード時の処理
            previewImage: true,
          },
          localization: {
            locale: "ja",
          },
        }}
        placeholder="ここに入力してください"
      />
      <div className="form-submit">
        <FormButton className="form-btn-radius" onClick={addPost}>
          追加
        </FormButton>
      </div>
    </div>
  );
};
