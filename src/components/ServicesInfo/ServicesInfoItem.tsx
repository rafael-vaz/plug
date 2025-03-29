import { IconProps } from "@phosphor-icons/react";
import React, { ReactNode } from "react";

import ServicesInfoContext from "../../contexts/ServicesInfoContext";
import styles from "./ServicesInfoItem.module.css";

interface IServicesInfoItemProps {
  id: string;
  cover: string;
  altCover: string;
  icon: React.ElementType<IconProps>;
  title: string;
  text: ReactNode;
  index: number;
}

const ServicesInfoItem = ({
  id,
  cover,
  altCover,
  icon: Icon,
  title,
  text,
  index,
}: IServicesInfoItemProps) => {
  const { activeIndex } = React.useContext(ServicesInfoContext);
  return (
    <div
      id={id}
      className={styles.servicesInfoItem}
      data-active={activeIndex === index}
      aria-hidden={!(activeIndex === index)}
    >
      <div className={styles.servicesInfoItemCover}>
        <img src={cover} alt={altCover} />
      </div>
      <div className={styles.servicesInfoItemContent}>
        <h3 className={styles.servicesInfoItemTitle}>
          <Icon />
          <span>{title}</span>
        </h3>
        <div className={styles.servicesInfoItemText}>{text}</div>
      </div>
    </div>
  );
};

export default ServicesInfoItem;
