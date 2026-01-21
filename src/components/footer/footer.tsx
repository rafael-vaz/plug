import { FacebookLogo, InstagramLogo, XLogo } from "@phosphor-icons/react";

import logoGrande from "/src/assets/img/logo/logo-grande.svg";

import Wrapper from "../wrapper/wrapper";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <Wrapper>
          <div className={styles.footerContent}>
            <img
              className={styles.footerLogo}
              src={logoGrande}
              alt="Logo Plug"
              height={120}
              width={150}
              loading="lazy"
            />
            <div className={styles.socialMedia}>
              <h2>Siga-nos nas redes sociais</h2>
              <ul className={styles.socialMediaList}>
                <li>
                  <button
                    aria-label="Acesse o nosso Facebook"
                    title="Acesse o nosso Facebook"
                  >
                    <FacebookLogo size="30" />
                  </button>
                </li>
                <li>
                  <button
                    aria-label="Acesse o nosso Instagram"
                    title="Acesse o nosso Instagram"
                  >
                    <InstagramLogo size="30" />
                  </button>
                </li>
                <li>
                  <button
                    araia-label="Acesse o nosso X"
                    title="Acesse o nosso X"
                  >
                    <XLogo size="30" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </Wrapper>
      </div>
      <div className={styles.footerCopyright}>
        <p>
          Desenvolvido com <span>♡</span> por <b>Rafael Vaz</b>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
