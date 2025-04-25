type Props = {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  setIsPostOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEditOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const useHandleModal = ({ setIsOpen, setIsPostOpen, setIsEditOpen }: Props) => {
  const scrollDisabledAndModalOpen = () => {
    /* 背景スクロール無効 */
    document.body.classList.add("over-hidden");
    if (setIsOpen) setIsOpen(true);
  };

  const scrollValidAndModalClose = () => {
    /* 背景スクロール有効 */
    document.body.classList.remove("over-hidden");
    if (setIsOpen) setIsOpen(false);
  };

  const scrollDisabledAndPostModalOpen = () => {
    /* 背景スクロール無効 */
    document.body.classList.add("over-hidden");
    if (setIsPostOpen) setIsPostOpen(true);
  };

  const scrollValidAndPostModalClose = () => {
    /* 背景スクロール有効 */
    document.body.classList.remove("over-hidden");
    if (setIsPostOpen) setIsPostOpen(false);
  };

  const scrollDisabledAndEditModalOpen = () => {
    /* 背景スクロール無効 */
    document.body.classList.add("over-hidden");
    if (setIsEditOpen) setIsEditOpen(true);
  };

  const scrollValidAndEditModalClose = () => {
    /* 背景スクロール有効 */
    document.body.classList.remove("over-hidden");
    if (setIsEditOpen) setIsEditOpen(false);
  };

  return {
    scrollDisabledAndModalOpen,
    scrollValidAndModalClose,
    scrollDisabledAndPostModalOpen,
    scrollValidAndPostModalClose,
    scrollDisabledAndEditModalOpen,
    scrollValidAndEditModalClose,
  };
};
