import ServicesInfoItemButton from "./ServicesInfoItemButton";
import styles from "./ServicesInfoItemsButtonsContainer.module.css";
import ServicesInfoItemsMap from "./ServicesInfoItemsMap";

const ServicesInfoItemsButtonsContainer = () => {
  const servicesInfoItemsButtons = ServicesInfoItemsMap.map((item, index) => {
    return (
      <ServicesInfoItemButton
        id={item.id}
        title={item.title}
        icon={item.icon}
        text={item.buttonText}
        index={index}
        key={item.buttonText}
      />
    );
  });
  return (
    <div className={styles.servicesInfoItemsButtonsContainer}>
      {servicesInfoItemsButtons}
    </div>
  );
};

export default ServicesInfoItemsButtonsContainer;
