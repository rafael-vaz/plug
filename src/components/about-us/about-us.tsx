import { motion } from "motion/react";

import aboutUsImg from "/src/assets/img/home/sobre/sobre_nos.webp";

import slideUpVariants from "../../motion/slide-up-variants";
import Decorative from "../decorative/decorative";
import Title from "../title/title";
import Wrapper from "../wrapper/wrapper";
import styles from "./about-us.module.css";
import AboutUsList from "./about-us-list";

const AboutUs = () => {
  return (
    <section className={styles.aboutUsContainer}>
      <Wrapper>
        <motion.div
          className={styles.aboutUsContent}
          custom={0}
          variants={slideUpVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={styles.aboutUsImgContainer}>
            <Decorative className={styles.aboutUsDecoWaves} type="waves" />
            <img
              src={aboutUsImg}
              className={styles.aboutUsImg}
              height={563}
              width={570}
              loading="lazy"
              alt="Dois indivíduos trocando um aperto de mãos."
            />
          </div>
          <div>
            <Title text="Saiba mais sobre nós" />
            <p className={styles.aboutUsText}>
              Trabalhamos com profissionais qualificados para atender as mais
              diversas marcas de equipamentos no mercado. Tudo isso com rapidez
              e qualidade de atendimento, garantindo a sua satisfação.
            </p>
            <AboutUsList />
          </div>
          <Decorative className={styles.aboutUsDecoArrow} type="arrow" />
        </motion.div>
      </Wrapper>
    </section>
  );
};

export default AboutUs;
