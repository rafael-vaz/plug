import React from "react";

import styles from "./Partner.module.css";

interface IPartnerProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  name: string;
  logo: string;
}

const Partner = ({ name, logo }: IPartnerProps) => {
  return (
    <div className={styles.partner}>
      <img
        className={styles.partnerLogo}
        title={name}
        src={logo}
        alt={`Logo ${name}`}
      />
    </div>
  );
};

export default Partner;
