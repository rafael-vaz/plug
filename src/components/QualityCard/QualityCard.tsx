import { motion } from "motion/react";

import slideUpVariants from "../../motion/slideUpVariants";
import styles from "./QualityCard.module.css";

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
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.2 }}
    >
      <img className={styles.qualityCardIcon} src={props.icon} alt="" />
      <h3 className={styles.qualityCardTitle}>{props.title}</h3>
      <p className={styles.qualityCardText}>{props.text}</p>
    </motion.li>
  );
};

export default QualityCard;
