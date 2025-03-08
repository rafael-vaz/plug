import { motion } from "motion/react";

import slideUpVariants from "../../motion/slideUpVariants";
import styles from "./ServiceCard.module.css";

interface IServiceCardProps {
  title: string;
  text: string;
  cover: string;
  coverAlt: string;
  icon: string;
  delay: number;
}

const ServiceCard = ({
  title,
  text,
  cover,
  coverAlt,
  icon,
  delay,
}: IServiceCardProps) => {
  return (
    <motion.li
      className={styles.serviceCard}
      variants={slideUpVariants}
      custom={delay}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.serviceCardHeader}>
        <img src={cover} alt={coverAlt} className={styles.serviceCardImg} />
        <img src={icon} alt="" className={styles.serviceCardIcon} />
        <div className={styles.serviceCardGradient}></div>
      </div>
      <div className={styles.serviceCardContent}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </motion.li>
  );
};

export default ServiceCard;
