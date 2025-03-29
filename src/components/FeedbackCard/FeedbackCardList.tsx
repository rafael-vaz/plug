import { EmblaOptionsType } from "embla-carousel";
import { motion } from "motion/react";

import slideUpVariants from "../../motion/slideUpVariants";
import EmblaCarousel from "../EmblaCarousel/EmblaCarousel";
import Title from "../Title/Title";
import FeedbackCard from "./FeedbackCard";
import styles from "./FeedbackCardList.module.css";
import FeedbackCardsMap from "./FeedbackCardsMap";

const FeedbackCardList = () => {
  const cards = FeedbackCardsMap.map((card) => {
    return (
      <FeedbackCard
        name={card.name}
        photo={card.photo}
        stars={card.stars}
        comment={card.comment}
        key={card.name}
      />
    );
  });

  const options: EmblaOptionsType = { align: "start", loop: true };
  return (
    <motion.section
      className={styles.feedbackCardList}
      custom={0}
      variants={slideUpVariants}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Title text="Feedback dos nossos clientes" orientation="center" />
      <EmblaCarousel
        slides={cards}
        options={options}
        controlButtons={true}
        viewportClass={styles.emblaViewport}
      />
    </motion.section>
  );
};

export default FeedbackCardList;
