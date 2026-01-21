import React, { ComponentPropsWithRef } from "react";

interface PropType extends ComponentPropsWithRef<"button"> {
  isSelected: boolean;
  targetId: string;
  tabIndex: number;
}

export const DotButton: React.FC<PropType> = (props) => {
  const { children, isSelected, targetId, tabIndex, ...restProps } = props;

  return (
    <button
      {...restProps}
      role="tab"
      aria-label={`Ver slide ${tabIndex + 1}`}
      aria-selected={isSelected}
      aria-controls={targetId}
    >
      {children}
    </button>
  );
};
