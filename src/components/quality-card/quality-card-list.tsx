import Wrapper from "../wrapper/wrapper";
import QualityCard from "./quality-card";
import styles from "./quality-card-list.module.css";
import QualityCardsMap from "./quality-cards-map";

const QualityCardList = () => {
  const cards = QualityCardsMap.map((card, i) => {
    return (
      <QualityCard
        icon={card.icon}
        iconAlt={card.iconAlt}
        title={card.title}
        text={card.text}
        key={card.title}
        delay={i}
      />
    );
  });
  return (
    <section className={styles.qualityCardContainer}>
      <Wrapper>
        <ul className={styles.qualityCardList}>{cards}</ul>
      </Wrapper>
    </section>
  );
};

export default QualityCardList;
