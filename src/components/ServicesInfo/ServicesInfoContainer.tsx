import { motion } from "motion/react";

import { ServicesInfoContextProvider } from "../../context/ServicesInfoContext";
import slideUpVariants from "../../motion/slideUpVariants";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./ServicesInfoContainer.module.css";
import ServicesInfoItemsButtonsContainer from "./ServicesInfoItemsButtonsContainer";
import ServicesInfoItemsContainer from "./ServicesInfoItemsContainer";

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
