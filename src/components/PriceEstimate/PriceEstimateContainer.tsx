import orcamento from "../../assets/img/servicos/orcamento/orcamento.jpg";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./PriceEstimateContainer.module.css";
import PriceEstimateForm from "./PriceEstimateForm";

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
