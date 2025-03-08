import { FacebookLogo, InstagramLogo, XLogo } from "@phosphor-icons/react";

import logoGrande from "/src/assets/img/logo/logo-grande.svg";

import Wrapper from "../Wrapper/Wrapper";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <Wrapper>
          <div className={styles.footerContent}>
            <img className={styles.footerLogo} src={logoGrande} alt="" />
            <div className={styles.socialMedia}>
              <h3>Siga-nos nas redes sociais</h3>
              <ul className={styles.socialMediaList}>
                <li>
                  <button>
                    <FacebookLogo size="30" />
                  </button>
                </li>
                <li>
                  <button>
                    <InstagramLogo size="30" />
                  </button>
                </li>
                <li>
                  <button>
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
