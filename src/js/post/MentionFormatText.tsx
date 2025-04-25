import React from "react";
import { MentionUser } from "../types/mentionUser";

type Props = {
  text: string;
  mentionUsers: MentionUser[];
  onMentionClick: (value: string) => void;
};

export const MentionFormatText = ({text, mentionUsers, onMentionClick}: Props) => {
  const parts = text.split(/(@[\w.-_]+|\n)/g); // メンションと改行で分割

  return parts.map((part, index) => {
    if (part === "\n") {
      return <br key={index} />;
    }

    const match = part.match(/^@[\w.-_]+$/);
    if (match) {
      const user = mentionUsers.find((mentionUser) => mentionUser.username === part);
      if (user) {
        return (
          <span
            key={index}
            className="primary-color btn"
            onClick={() => onMentionClick(user.id)}
            style={{ cursor: "pointer" }}
          >
            {part}
          </span>
        );
      } else {
        return (
          <span key={index} className="primary-color">
            {part}
          </span>
        );
      }
    }

    return <span key={index}>{part}</span>;
  });
};
