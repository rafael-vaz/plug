import orcamento from "../../assets/img/servicos/orcamento/orcamento.webp";
import Wrapper from "../wrapper/wrapper";
import styles from "./price-estimate-container.module.css";
import PriceEstimateForm from "./price-estimate-form";

const PriceEstimateContainer = () => {
  return (
    <section className={styles.priceEstimateContainer}>
      <Wrapper>
        <div className={styles.priceEstimateContent}>
          <img
            className={styles.priceEstimateImg}
            src={orcamento}
            alt="Casal sorrindo enquanto observa a tela de um notebook."
          />
          <PriceEstimateForm />
        </div>
      </Wrapper>
    </section>
  );
};

export default PriceEstimateContainer;
