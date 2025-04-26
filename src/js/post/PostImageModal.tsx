import React, { useEffect, useState } from "react";
import { Post } from "../types/post";
import { useHandleModal } from "../hooks/utils/useHandleModal";

type Props = {
  post: Post;
};

export const PostImageModal = ({ post }: Props) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);
  const [images, setImages] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { scrollDisabledAndModalOpen, scrollValidAndModalClose } = useHandleModal({
    setIsOpen: setIsImageModalOpen,
  });

  // <img> タグにクリックイベントを追加
  useEffect(() => {
    const container = document.querySelector(".post-content");
    if (!container) return;

    const imgElements = Array.from(container.querySelectorAll("img"));
    const imgSrc = imgElements.map((img) => img.getAttribute("src") || "");
    setImages(imgSrc);

    imgElements.forEach((img, index) => {
      img.style.cursor = "pointer";
      img.onclick = () => {
        setSelectedIndex(index);
        scrollDisabledAndModalOpen();
      };
    });

    return () => {
      imgElements.forEach((img) => {
        img.onclick = null;
      });
    };
  }, [post?.content]);

  const handleCloseModal = () => {
    scrollValidAndModalClose();
    setSelectedIndex(null);
  };

  return (
    <>
      {isImageModalOpen && selectedIndex !== null && (
        <div className="form-bg image-max-bg" onClick={handleCloseModal}>
          <div className="image-max-bg-container">
            <div className="click-modal-icon icon-close" onClick={handleCloseModal}>
              <div className="click-modal-icon-wrapper">
                <i className="fa-solid fa-xmark" id="modal-close"></i>
              </div>
            </div>
            <div className="image-modal-content">
              <div className="image-max" onClick={(e) => e.stopPropagation()}>
                <img
                  src={images[selectedIndex]}
                  alt="拡大画像"
                  className="max-w-full max-h-[70vh] object-contain"
                />
              </div>
            </div>
            {selectedIndex > 0 && (
              <div className="click-modal-icon image-max-prev arrow-icon">
                <div
                  className="click-modal-icon-wrapper"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex(selectedIndex - 1);
                  }}
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </div>
              </div>
            )}
            {selectedIndex < images.length - 1 && (
              <div className="click-modal-icon image-max-next arrow-icon">
                <div
                  className="click-modal-icon-wrapper"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex(selectedIndex + 1);
                  }}
                >
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
