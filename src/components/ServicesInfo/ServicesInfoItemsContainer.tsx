import styles from "./ServicesInfoContainer.module.css";
import ServicesInfoItem from "./ServicesInfoItem";
import ServicesInfoItemsMap from "./ServicesInfoItemsMap";

const ServicesInfoItemsContainer = () => {
  const serviceInfoItems = ServicesInfoItemsMap.map((item, index) => {
    return (
      <ServicesInfoItem
        id={item.id}
        cover={item.cover}
        altCover={item.altCover}
        icon={item.icon}
        title={item.title}
        text={item.text}
        index={index}
        key={item.title}
      />
    );
  });
  return (
    <div className={styles.servicesInfoItemsContainer}>{serviceInfoItems}</div>
  );
};

export default ServicesInfoItemsContainer;
