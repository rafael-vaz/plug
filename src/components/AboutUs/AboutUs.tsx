import { motion } from "motion/react";

import aboutUsImg from "/src/assets/img/home/sobre/sobre_nos.jpg";

import slideUpVariants from "../../motion/slideUpVariants";
import Decorative from "../Decorative/Decorative";
import Title from "../Title/Title";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./AboutUs.module.css";
import AboutUsList from "./AboutUsList";

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
