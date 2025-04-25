type Props = {
  scrollRef: React.RefObject<HTMLElement | null>;
};

export const scrollToSection = ({ scrollRef }: Props) => {
  if (scrollRef.current) {
    const top = scrollRef.current.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({ top, behavior: "smooth" });
  }
};
