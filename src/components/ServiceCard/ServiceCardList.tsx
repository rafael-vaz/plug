import Title from "../Title/Title";
import Wrapper from "../Wrapper/Wrapper";
import ServiceCard from "./ServiceCard";
import styles from "./ServiceCardList.module.css";
import ServiceCardsMap from "./ServiceCardsMap";

const ServiceCardList = () => {
  const cards = ServiceCardsMap.map((card, i) => {
    return (
      <ServiceCard
        key={card.title}
        title={card.title}
        text={card.text}
        icon={card.icon}
        cover={card.cover}
        coverAlt={card.coverAlt}
        delay={i}
      />
    );
  });
  return (
    <section className={styles.serviceCardContainer}>
      <Wrapper>
        <Title text="Nossos serviços" orientation="center" />
        <ul className={styles.serviceCardList}>{cards}</ul>
      </Wrapper>
    </section>
  );
};

export default ServiceCardList;
