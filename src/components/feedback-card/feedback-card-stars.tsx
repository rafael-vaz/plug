import { Star } from "@phosphor-icons/react";
import { ReactElement } from "react";

import styles from "./feedback-card-stars.module.css";

interface IFeedbackCardStarsProps {
  index: number;
}

const FeedbackCardStars = ({ index }: IFeedbackCardStarsProps) => {
  const stars: ReactElement[] = [];
  for (let i = 0; i < index; i++) {
    stars.push(<Star key={i} size="20" weight="fill" />);
  }
  return <div className={styles.feedbackCardStars}>{stars}</div>;
};

export default FeedbackCardStars;
