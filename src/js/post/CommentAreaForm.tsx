import React, { useEffect, useRef, useState } from "react";
import { SmallButton } from "../components/parts/SmallButton";
import { UserAvatarImage } from "../components/parts/UserAvatarImage";
import { useProfileData } from "../hooks/profile/useProfileData";

type Props = {
  onChange: (value: string) => void;
  value: string;
  onClick: () => void;
  placeholder?: string;
  buttonTxt?: string;
};

export const CommentAreaForm = ({ buttonTxt, placeholder, onChange, value, onClick }: Props) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [formattedValue, setFormattedValue] = useState(value);
  const [preview, setPreview] = useState<boolean>(false);
  const { profile } = useProfileData();

  // テキストエリアの高さを自動調整
  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "25px";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  // @を含む部分を色変更する
  const formatTextWithColor = (text: string) => {
    return text.replace(/(@[\w.-_]+)/g, `<span class="primary-color">$1</span>`);
  };

  useEffect(() => {
    // 入力の度に高さと色を更新
    adjustHeight();
    setFormattedValue(formatTextWithColor(value));
  }, [value]);

  return (
    <>
      <div className="flex mt-5">
        <div>
          <UserAvatarImage className="btn-hover-disabled" src={profile?.avatarUrl} />
        </div>
        {preview ? (
          <div
            className="comment-area ml-2"
            style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
            dangerouslySetInnerHTML={{ __html: formattedValue }}
          ></div>
        ) : (
          <textarea
            ref={textareaRef}
            rows={1}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="comment-area ml-2"
            placeholder={placeholder}
            onInput={adjustHeight}
          />
        )}
      </div>
      <div className="text-right">
        {preview ? (
          <SmallButton
            onClick={() => setPreview(false)}
            className="text-sm comment-btn-red"
            buttonTxt="解除する"
          />
        ) : (
          <SmallButton
            onClick={() => setPreview(true)}
            className="text-sm comment-btn-white"
            buttonTxt="プレビュー"
          />
        )}
        <SmallButton
          onClick={onClick}
          className="text-sm ml-2 comment-btn-primary"
          buttonTxt={buttonTxt}
        />
      </div>
    </>
  );
};
