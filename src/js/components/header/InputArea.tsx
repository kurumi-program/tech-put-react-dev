import React from "react";

type Props = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type: string;
};

export const InputArea = ({ placeholder, onChange, value, type }: Props) => {
  return (
    <div className="input-area">
      <input
        type={type}
        value={value}
        className="border"
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
