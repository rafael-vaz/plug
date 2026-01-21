import { motion } from "motion/react";

import slideUpVariants from "../../motion/slide-up-variants";
import styles from "./quality-card.module.css";

interface IQualityCardProps {
  icon: string;
  iconAlt: string;
  title: string;
  text: string;
  delay: number;
}

const QualityCard = (props: IQualityCardProps) => {
  return (
    <motion.li
      className={styles.qualityCard}
      custom={props.delay}
      variants={slideUpVariants}
      tabIndex={0}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.2 }}
    >
      <img
        className={styles.qualityCardIcon}
        src={props.icon}
        alt={props.iconAlt}
        height={50}
        width={50}
        loading="lazy"
      />
      <h2 className={styles.qualityCardTitle}>{props.title}</h2>
      <p className={styles.qualityCardText}>{props.text}</p>
    </motion.li>
  );
};

export default QualityCard;
