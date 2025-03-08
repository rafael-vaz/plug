import styles from "./FeedbackCard.module.css";
import FeedbackCardStars from "./FeedbackCardStars";

interface IFeedbackCardProps {
  photo: string;
  name: string;
  stars: number;
  comment: string;
}

const FeedbackCard = ({ photo, name, stars, comment }: IFeedbackCardProps) => {
  return (
    <div className={`${styles.feedbackCard} embla__slide`}>
      <div className={styles.feedbackCardHeader}>
        <img src={photo} className={styles.feedbackCardPhoto}></img>
        <h3 className={styles.feedbackCardName}>{name}</h3>
      </div>
      <FeedbackCardStars index={stars} />
      <div className={styles.feedbackCardComment}>
        <p>"{comment}"</p>
      </div>
    </div>
  );
};

export default FeedbackCard;
