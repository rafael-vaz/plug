import { SmileySad } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

import Title from "../title/title";
import Wrapper from "../wrapper/wrapper";
import styles from "./not-found-content.module.css";

const NotFoundContent = () => {
  return (
    <section className={styles.notFoundContainer}>
      <Wrapper>
        <div className={styles.notFoundContent}>
          <header className={styles.notFoundContentHeader}>
            <SmileySad />
            <Title text="Oops! Página não encontrada." orientation="left" />
          </header>
          <div className={styles.notFoundContentText}>
            <p>
              Parece que você se perdeu pelo caminho... A página que você
              procura pode ter sido removida, renomeada ou talvez nunca tenha
              existido. Enquanto isso, que tal voltar para a{" "}
              <Link to="/">página inicial</Link> ou explorar outros conteúdos do
              site?
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default NotFoundContent;
