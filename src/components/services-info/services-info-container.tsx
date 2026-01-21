import { motion } from "motion/react";

import { ServicesInfoContextProvider } from "../../contexts/services-info-context";
import slideUpVariants from "../../motion/slide-up-variants";
import Wrapper from "../wrapper/wrapper";
import styles from "./services-info-container.module.css";
import ServicesInfoItemsButtonsContainer from "./services-info-items-buttons-container";
import ServicesInfoItemsContainer from "./services-info-items-container";

const ServicesInfoContainer = () => {
  return (
    <motion.section
      className={styles.servicesInfoContainer}
      custom={0}
      variants={slideUpVariants}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Wrapper>
        <ServicesInfoContextProvider>
          <ServicesInfoItemsContainer />
          <ServicesInfoItemsButtonsContainer />
        </ServicesInfoContextProvider>
      </Wrapper>
    </motion.section>
  );
};

export default ServicesInfoContainer;
