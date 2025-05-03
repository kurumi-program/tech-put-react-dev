import { useContext, useEffect, useState } from "react";
import { EditorState, ContentState, convertFromHTML, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { PostContext } from "../../contexts/PostContext";
import { authHeaders } from "../../services/authService";
import { client } from "../../services/client";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../../contexts/ProfileContext";
import { postLearnTemplate } from "../../post/postLearnTemplate";

export const usePostEdit = (
  postId?: string,
  initialContent?: string,
  closeModal?: () => void,
  initialLearn: boolean = false,
) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [errorText, setErrorText] = useState(false);
  const [isLearn, setIsLearn] = useState(initialLearn);

  const { postList, setPostList } = useContext(PostContext);
  const { profilePostList, setProfilePostList } = useContext(ProfileContext);
  const navigate = useNavigate();

  const createEditorStateFromHTML = (html: string) => {
    const blocksFromHTML = convertFromHTML(html);
    const contentState = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap,
    );
    return EditorState.createWithContent(contentState);
  };

  useEffect(() => {
    if (postId && initialContent) {
      setEditorState(createEditorStateFromHTML(initialContent));
      setIsLearn(initialLearn);
    }
  }, [postId, initialContent, initialLearn]);

  const handleLearnClick = () => {
    if (postId && initialContent) {
      // 編集モード
      if (initialLearn) {
        // 開いたときのisLearnがtrueの場合：
        // → 学習ボタンを押しても状態だけ切り替え。内容はそのまま！
        setIsLearn(!isLearn);
      } else {
        // 開いたときのisLearnがfalseの場合：
        if (!isLearn) {
          //isLearnがfalseの場合
          // 学習内容のテンプレに差し替えてisLearnをfalseにする
          setEditorState(createEditorStateFromHTML(postLearnTemplate));
          setIsLearn(true);
        } else {
          //isLearnがtrueの場合
          // isLearn を false にする（内容はそのまま）
          setEditorState(createEditorStateFromHTML(initialContent));
          setIsLearn(false);
        }
      }
    } else {
      // 新規作成時
      const newIsLearn = !isLearn;
      setIsLearn(newIsLearn);

      if (newIsLearn) {
        setEditorState(createEditorStateFromHTML(postLearnTemplate));
      } else {
        setEditorState(EditorState.createEmpty());
      }
    }
  };

  const handlePost = async () => {
    const contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      setErrorText(true);
      return;
    }

    const rawContent = convertToRaw(contentState);
    const htmlContent = draftToHtml(rawContent);

    try {
      if (postId) {
        // 編集
        const res = await client.put(
          `/posts/${postId}`,
          { content: htmlContent, learn: isLearn },
          { headers: authHeaders() },
        );
        const updatedPost = res.data;

        setPostList(
          postList.map((post) =>
            post.id === postId
              ? { ...post, content: updatedPost.content, learn: updatedPost.learn }
              : post,
          ),
        );

        setProfilePostList(
          profilePostList.map((post) =>
            post.id === postId
              ? { ...post, content: updatedPost.content, learn: updatedPost.learn }
              : post,
          ),
        );
      } else {
        // 新規投稿
        const res = await client.post(
          "/posts",
          { content: htmlContent, learn: isLearn },
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
    handleLearnClick,
    handleImageUpload,
    isLearn,
    setIsLearn,
  };
};
