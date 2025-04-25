import React from "react";

type Props = {
  remove: string;
  edit: string;
  onEditClick?: () => void;
  onDeleteClick?: () => void;
  onPulldownClick?: () => void;
  isOpen?: boolean;
  classNameIcon?: string;
};

export const HandleDropDown = React.forwardRef<HTMLDivElement, Props>(
  (
    { isOpen, onPulldownClick, remove, edit, onEditClick, onDeleteClick, classNameIcon }: Props,
    ref,
  ) => {
    return (
      <div onClick={(e) => e.stopPropagation()} className="handle-comment" ref={ref}>
        <i
          onClick={onPulldownClick}
          className={`${classNameIcon} point-three fa-solid fa-ellipsis-vertical cursor-pointer`}
        ></i>
        {isOpen && (
          <div className="handle-comment_dropdown">
            <p onClick={onDeleteClick}>{remove}</p>
            <p onClick={onEditClick}>{edit}</p>
          </div>
        )}
      </div>
    );
  },
);
