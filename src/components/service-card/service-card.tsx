import { motion } from "motion/react";

import slideUpVariants from "../../motion/slide-up-variants";
import styles from "./service-card.module.css";

interface IServiceCardProps {
  title: string;
  text: string;
  cover: string;
  coverAlt: string;
  icon: string;
  iconAlt: string;
  delay: number;
}

const ServiceCard = ({
  title,
  text,
  cover,
  coverAlt,
  icon,
  iconAlt,
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
        <img
          src={cover}
          alt={coverAlt}
          className={styles.serviceCardImg}
          height={160}
          width={280}
        />
        <img
          src={icon}
          alt={iconAlt}
          className={styles.serviceCardIcon}
          height={50}
          width={50}
        />
        <div className={styles.serviceCardGradient}></div>
      </div>
      <div className={styles.serviceCardContent}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </motion.li>
  );
};

export default ServiceCard;
