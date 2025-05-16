import styles from "./feedback-card.module.css";
import FeedbackCardStars from "./feedback-card-stars";

interface IFeedbackCardProps {
  id: string;
  photo: string;
  name: string;
  stars: number;
  comment: string;
}

const FeedbackCard = ({
  id,
  photo,
  name,
  stars,
  comment,
}: IFeedbackCardProps) => {
  return (
    <div
      id={id}
      className={`${styles.feedbackCard} embla__slide`}
      tabIndex={0}
      role="tabpanel"
    >
      <div className={styles.feedbackCardHeader}>
        <img
          src={photo}
          className={styles.feedbackCardPhoto}
          alt="Foto do usuário"
          loading="lazy"
        />
        <h2 className={styles.feedbackCardName}>{name}</h2>
      </div>
      <FeedbackCardStars index={stars} />
      <div className={styles.feedbackCardComment}>
        <p>"{comment}"</p>
      </div>
    </div>
  );
};

export default FeedbackCard;
