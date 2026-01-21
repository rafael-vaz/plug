import { IconProps } from "@phosphor-icons/react";
import React from "react";

import ServicesInfoContext from "../../contexts/services-info-context";
import styles from "./services-info-item-button.module.css";

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
      role="tab"
    >
      <Icon />
      <span> {text}</span>
    </button>
  );
};

export default ServicesInfoItemButton;
