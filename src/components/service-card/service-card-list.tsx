import Title from "../title/title";
import Wrapper from "../wrapper/wrapper";
import ServiceCard from "./service-card";
import styles from "./service-card-list.module.css";
import ServiceCardsMap from "./service-cards-map";

const ServiceCardList = () => {
  const cards = ServiceCardsMap.map((card, i) => {
    return (
      <ServiceCard
        key={card.title}
        title={card.title}
        text={card.text}
        icon={card.icon}
        iconAlt={card.iconAlt}
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
