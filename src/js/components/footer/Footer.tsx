import React from "react";
import { Link } from "react-router-dom";

type Props = {
  className?: string;
};

export const Footer = ({ className }: Props) => {
  return (
    <div className={`footer-list ${className}`}>
      <Link className="hover-underline" to="/terms">
        利用規約
      </Link>
      <Link className="hover-underline" to="/privacy">
        プライバシーポリシー
      </Link>
      <p>© 2025 TechPut</p>
    </div>
  );
};
