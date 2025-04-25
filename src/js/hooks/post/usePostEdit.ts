import { useContext, useEffect, useState } from "react";
import { EditorState, ContentState, convertFromHTML, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { PostContext } from "../../contexts/PostContext";
import { authHeaders } from "../../services/authService";
import { client } from "../../services/client";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../../contexts/ProfileContext";

export const usePostEdit = (postId?: string, initialContent?: string, closeModal?: () => void) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [errorText, setErrorText] = useState(false);
  const { postList, setPostList } = useContext(PostContext);
  const navigate = useNavigate();
  const { profilePostList, setProfilePostList } = useContext(ProfileContext);

  useEffect(() => {
    if (postId && initialContent) {
      const blocksFromHTML = convertFromHTML(initialContent);
      const contentState = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap,
      );
      setEditorState(EditorState.createWithContent(contentState));
    }
  }, [postId, initialContent]);

  const handlePost = async () => {
    const contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      setErrorText(true);
      return;
    }

    const rawContent = convertToRaw(contentState);
    const htmlContent = draftToHtml(rawContent);

    try {
      //更新
      if (postId) {
        const res = await client.put(
          `/posts/${postId}`,
          { content: htmlContent },
          { headers: authHeaders() },
        );
        const updatedPost = res.data;
        setPostList(
          postList.map((post) =>
            post.id === postId ? { ...post, content: updatedPost.content } : post,
          ),
        );
        //プロフィールにある記事の更新処理
        setProfilePostList(
          profilePostList.map((post) =>
            post.id === postId ? { ...post, content: updatedPost.content } : post,
          ),
        );
      } else {
        //新規作成
        const res = await client.post(
          "/posts",
          { content: htmlContent },
          { headers: authHeaders() },
        );
        setPostList((prev) => [res.data, ...prev]);
        navigate("/");
      }

      closeModal?.();
      document.body.classList.remove("over-hidden");
    } catch (err) {
      console.error("予期せぬエラーが発生しました", err);
    }
  };

  const handleImageUpload = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve({ data: { link: reader.result as string } });
      reader.onerror = () => reject("画像の読み込みに失敗しました。");
      reader.readAsDataURL(file);
    });
  };

  return {
    editorState,
    setEditorState,
    errorText,
    handlePost,
    handleImageUpload,
  };
};
