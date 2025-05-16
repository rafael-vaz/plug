import { motion } from "motion/react";

import slideUpVariants from "../../motion/slide-up-variants";
import Decorative from "../decorative/decorative";
import Title from "../title/title";
import Wrapper from "../wrapper/wrapper";
import styles from "./contact-container.module.css";
import ContactForm from "./contact-form";
import ContactInfo from "./contact-info";

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
