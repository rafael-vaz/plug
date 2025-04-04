import { IconProps } from "@phosphor-icons/react";
import React from "react";

import ServicesInfoContext from "../../contexts/ServicesInfoContext";
import styles from "./ServicesInfoItemButton.module.css";

interface IServicesInfoItemButtonProps {
  id: string;
  title: string;
  text: string;
  icon: React.ElementType<IconProps>;
  index: number;
}

const ServicesInfoItemButton = ({
  id,
  title,
  text,
  icon: Icon,
  index,
}: IServicesInfoItemButtonProps) => {
  const { setActiveIndex, activeIndex } = React.useContext(ServicesInfoContext);
  return (
    <button
      className={styles.servicesInfoItemButton}
      data-active={activeIndex === index}
      data-index={index}
      onClick={() => setActiveIndex(index)}
      aria-controls={id}
      aria-label={`Ver ${title}`}
    >
      <Icon />
      <span> {text}</span>
    </button>
  );
};

export default ServicesInfoItemButton;
