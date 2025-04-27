import React, { PropsWithChildren } from "react";

type Props = {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};

export const AuthForm = ({ onSubmit, children }: PropsWithChildren<Props>) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="login-form">
        <div className="login-form-wrapper border">
          <h1 translate="no" className="logo form-logo text-center">
            TechPut
          </h1>
          {children}
        </div>
      </div>
    </form>
  );
};
