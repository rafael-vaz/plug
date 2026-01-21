import styles from "./contact-info.module.css";

const ContactInfo = () => {
  return (
    <div className={styles.contactInfo}>
      <h2 className={styles.contactInfoTitle}>Converse com um especialista</h2>
      <p className={styles.contactInfoText}>
        Se você deseja falar com um especialista sobre nossos serviços, entre em
        contato por telefone ou e-mail.
      </p>
      <ul className={styles.contactInfoList}>
        <li>
          <a href="mailto:" className={styles.emphasisText}>
            contato@pluginformatica.com.br
          </a>
        </li>
        <li>
          <a href="tel:+55813244-3723" className={styles.emphasisText}>
            +55 81 3244-3723
          </a>
        </li>
        <li>
          Recife/PE - Av. João de Barros, 1281 loja 02 - Empresarial Arcon CEP:
          52021-180
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
