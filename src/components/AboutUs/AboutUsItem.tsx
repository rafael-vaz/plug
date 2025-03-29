import { IconProps } from "@phosphor-icons/react";

import styles from "./AboutUsItem.module.css";

interface IAboutUsItem {
  icon: React.ElementType<IconProps>;
  title: string;
  text: string;
}

const AboutUsItem = ({ icon: Icon, title, text }: IAboutUsItem) => {
  return (
    <li className={styles.aboutUsItem}>
      <h3 className={styles.aboutUsItemTitle}>
        <Icon size="1.625rem" />
        <span>{title}</span>
      </h3>
      <p className={styles.aboutUsItemText}>{text}</p>
    </li>
  );
};

export default AboutUsItem;
