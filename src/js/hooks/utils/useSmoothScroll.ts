import { useEffect } from "react";

export const useSmoothScroll = () => {
  const smoothScroll = () => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  useEffect(() => {
    smoothScroll();
  }, [location]);
};
