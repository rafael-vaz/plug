import styles from "./services-info-container.module.css";
import ServicesInfoItem from "./services-info-item";
import ServicesInfoItemsMap from "./services-info-items-map";

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
