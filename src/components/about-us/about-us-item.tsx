import { IconProps } from "@phosphor-icons/react";

import styles from "./about-us-item.module.css";

interface IAboutUsItem {
  icon: React.ElementType<IconProps>;
  title: string;
  text: string;
}

const AboutUsItem = ({ icon: Icon, title, text }: IAboutUsItem) => {
  return (
    <li className={styles.aboutUsItem}>
      <h2 className={styles.aboutUsItemTitle}>
        <Icon size="1.625rem" />
        <span>{title}</span>
      </h2>
      <p className={styles.aboutUsItemText}>{text}</p>
    </li>
  );
};

export default AboutUsItem;
