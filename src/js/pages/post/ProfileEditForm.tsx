import React, { useEffect, useState } from "react";
import { FormButton } from "../../components/parts/FormButton";
import defaultAvatar from "../../../assets/images/default-avatar.png";
import { useProfileEdit } from "../../hooks/profile/useProfileEdit";

type Props = {
  onClick: () => void;
  setIsEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ProfileEditForm = ({ onClick, setIsEditOpen }: Props) => {
  const [editName, setEditName] = useState("");
  const [editBio, setEditBio] = useState("");
  const [editAvatar, setEditAvatar] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [errorText, setErrorText] = useState<boolean>(false);

  const { profile, handleEditSubmit } = useProfileEdit({
    name: editName,
    bio: editBio,
    avatar: editAvatar,
  });

  useEffect(() => {
    if (profile) {
      setEditName(profile.userName || "");
      setEditBio(profile.bio || "");
      setPreviewUrl(profile.avatarUrl || null);
    }
  }, [profile]);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setEditAvatar(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    if (!editName.trim()) {
      e.preventDefault();
      setErrorText(true); // ← 名前が空欄ならエラー表示
      return;
    }
    setErrorText(false);
    e.preventDefault();
    handleEditSubmit();
    setIsEditOpen(false);
  };

  return (
    <div className="form-bg" onClick={onClick}>
      <div className="form-container profile-container" onClick={(e) => e.stopPropagation()}>
        <i onClick={onClick} className="form-icon fa-solid fa-xmark" id="modal-close"></i>
        <h2 className="form-head text-center border-b">プロフィールを編集</h2>
        <form className="form-edit profile-form" onSubmit={handleSubmit}>
          <div className="avatar-edit-img">
            <label className="avatar-upload btn" htmlFor="avatar-upload">
              <img src={previewUrl || defaultAvatar} alt="avatar preview" />
            </label>
            <input
              id="avatar-upload"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleAvatarChange}
            />
          </div>
          <div>
            <p className="profile-form-title">名前</p>
            <input
              className="border"
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
            {errorText && <p className="text-red-600 error-txt">ユーザー名を入力してください。</p>}
          </div>
          <div>
            <p className="profile-form-title">自己紹介</p>
            <textarea
              className="border"
              value={editBio}
              onChange={(e) => setEditBio(e.target.value)}
            />
          </div>
          <div className="form-submit">
            <FormButton className="form-btn-radius">保存</FormButton>
          </div>
        </form>
      </div>
    </div>
  );
};
