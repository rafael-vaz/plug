import ServicePlanCard from "./ServicePlanCard";
import ServicePlanCardMap from "./ServicePlanCardMap";
import styles from "./ServicePlanCardsList.module.css";

const ServicePlanCardsList = () => {
  const servicePlanCards = ServicePlanCardMap.map((card, i) => {
    return (
      <ServicePlanCard
        id={card.id}
        name={card.name}
        text={card.text}
        price={card.price}
        billingFrequency={card.billingFrequency}
        benefits={card.benefits}
        buttonText={card.buttonText}
        recommended={card.recommended}
        color={card.color}
        key={card.name}
        delay={i}
      />
    );
  });
  return <div className={styles.servicePlanCardsList}>{servicePlanCards}</div>;
};

export default ServicePlanCardsList;
