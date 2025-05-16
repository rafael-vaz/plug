import ServicesInfoItemButton from "./services-info-item-button";
import styles from "./services-info-items-buttons-container.module.css";
import ServicesInfoItemsMap from "./services-info-items-map";

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
    <div className={styles.servicesInfoItemsButtonsContainer} role="tablist">
      {servicesInfoItemsButtons}
    </div>
  );
};

export default ServicesInfoItemsButtonsContainer;
