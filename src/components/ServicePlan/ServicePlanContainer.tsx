import Decorative from "../Decorative/Decorative";
import Title from "../Title/Title";
import Wrapper from "../Wrapper/Wrapper";
import ServicePlanCardsList from "./ServicePlanCardsList";
import styles from "./ServicePlanContainer.module.css";

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
