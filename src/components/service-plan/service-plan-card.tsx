import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

import slideUpVariants from "../../motion/slide-up-variants";
import Button from "../button/button";
import styles from "./service-plan-card.module.css";

interface IServicePlanCardProps {
  id: string;
  name: string;
  text?: string;
  price?: number;
  billingFrequency?: "ano" | "mês";
  benefits: string[];
  buttonText: string;
  color?: "blue" | "white";
  recommended?: boolean;
  delay: number;
}

const ServicePlanCard = ({
  id,
  name,
  text,
  price,
  billingFrequency,
  benefits,
  buttonText,
  color = "white",
  recommended = false,
  delay,
}: IServicePlanCardProps) => {
  const navigate = useNavigate();
  const benefitsList = benefits.map((benefit) => {
    return (
      <li className={styles.servicePlanCardBenefitsListItem} key={benefit}>
        {benefit}
      </li>
    );
  });

  function handleClick(planId: string) {
    switch (planId) {
      case "enterprise":
        navigate("/contato");
        break;
    }
  }

  return (
    <motion.div
      id={id}
      data-recommended={recommended}
      data-color={color}
      className={styles.servicePlanCard}
      variants={slideUpVariants}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.2 }}
      custom={delay}
    >
      <h2 className={styles.servicePlanCardTitle}>{name}</h2>
      <h3 className={styles.servicePlanCardText}>
        {text ? (
          text
        ) : (
          <>
            <span className={styles.servicePlanCardPrice}>{price}</span>
            <span className={styles.servicePlanCardBillingFrequency}>
              por {billingFrequency}
            </span>
          </>
        )}
      </h3>
      <ul className={styles.servicePlanCardBenefitsList}>{benefitsList}</ul>
      <Button
        text={buttonText}
        styleType={text ? "gradient" : "flat"}
        onClick={() => handleClick(id)}
      />
    </motion.div>
  );
};

export default ServicePlanCard;
