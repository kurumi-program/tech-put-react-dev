import React, { useEffect, useState } from "react";

type Props = {
  message: string;
};

export const FlashMessage = ({ message }: Props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  if (!visible || !message) return null;

  return (
    <div className="flash-msg">
      <p>{message}</p>
    </div>
  );
};
