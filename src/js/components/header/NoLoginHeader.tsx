import React from "react";

export const NoLoginHeader = () => {
  return (
    <header className="border-b">
      <div className="flex header-container justify-between">
        <h1 className="py-3 header-logo">TechPut</h1>
        <div className="flex items-center search-wrapper">
          <button className="border rounded p-2 login-btn">ログイン</button>
        </div>
      </div>
    </header>
  );
};
