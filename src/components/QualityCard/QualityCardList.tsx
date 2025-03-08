import Wrapper from "../Wrapper/Wrapper";
import QualityCard from "./QualityCard";
import styles from "./QualityCardList.module.css";
import QualityCardsMap from "./QualityCardsMap";

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
