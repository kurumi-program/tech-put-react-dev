import { useEffect } from "react";

type ClickOutsideType = {
  ref: React.RefObject<HTMLElement | null>;
  callback: () => void;
};

export const useClickOutside = ({ ref, callback }: ClickOutsideType) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("click", handleClickOutside);

    //クリーンアップ関数
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [callback]);
};
