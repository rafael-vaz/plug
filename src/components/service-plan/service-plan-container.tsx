import Decorative from "../decorative/decorative";
import Title from "../title/title";
import Wrapper from "../wrapper/wrapper";
import ServicePlanCardsList from "./service-plan-cards-list";
import styles from "./service-plan-container.module.css";

const ServicePlanContainer = () => {
  return (
    <section className={styles.servicePlanContainer}>
      <Wrapper>
        <div className={styles.servicePlanContent}>
          <Title text="Planos de serviço" orientation="center" />
          <ServicePlanCardsList />
          <Decorative className={styles.servicePlanDecoArrow} type="arrow" />
          <Decorative
            className={styles.servicePlanDecoCircles}
            type="circles"
          />
        </div>
      </Wrapper>
    </section>
  );
};

export default ServicePlanContainer;
