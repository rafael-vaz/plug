import { motion } from "motion/react";

import slideUpVariants from "../../motion/slideUpVariants";
import Decorative from "../Decorative/Decorative";
import Title from "../Title/Title";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./ContactContainer.module.css";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactContainer = () => {
  return (
    <motion.section
      className={styles.contactContainer}
      custom={0}
      variants={slideUpVariants}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Wrapper>
        <Title text="Contate-nos" orientation="left" />
        <div className={styles.contactContent}>
          <ContactForm />
          <ContactInfo />
          <Decorative
            className={styles.contactContainerDecoArrow}
            type="arrow"
          />
        </div>
      </Wrapper>
    </motion.section>
  );
};

export default ContactContainer;
