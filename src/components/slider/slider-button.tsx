import React from "react";

import SliderContext from "../../contexts/slider-context";
import styles from "./slider-button.module.css";

interface ISliderButtonProps {
  id: string;
  title: string;
  isActive: boolean;
  index: number;
}

const SliderButton = ({ id, title, isActive, index }: ISliderButtonProps) => {
  const sliderContext = React.useContext(SliderContext);
  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    const targetButton = event.currentTarget as HTMLButtonElement;
    if (targetButton) sliderContext.setActiveIndex(index);
  }

  return (
    <button
      className={styles.sliderButton}
      onClick={handleClick}
      data-active={isActive}
      role="tab"
      aria-selected={isActive}
      aria-label={`Ver ${title}`}
      aria-controls={`${id}`}
    ></button>
  );
};

export default SliderButton;
