import { EmblaOptionsType } from "embla-carousel";
import { motion } from "motion/react";

import slideUpVariants from "../../motion/slide-up-variants";
import EmblaCarousel from "../embla-carousel/embla-carousel";
import Title from "../title/title";
import Partner from "./partner";
import styles from "./partners-list.module.css";
import PartnersMap from "./partners-map";

const PartnersList = () => {
  const partners = PartnersMap.map(({ name, logo }) => {
    return <Partner name={name} logo={logo} key={name} />;
  });

  const options: EmblaOptionsType = { align: "start", loop: true };
  return (
    <section className={styles.partnersList}>
      <motion.div
        custom={0}
        variants={slideUpVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Title text="Nossos parceiros" orientation="center" />
        <EmblaCarousel
          slides={partners}
          options={options}
          containerClass={styles.emblaContainer}
          viewportClass={styles.emblaViewport}
        />
      </motion.div>
    </section>
  );
};

export default PartnersList;
