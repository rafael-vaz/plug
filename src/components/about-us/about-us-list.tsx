import AboutUsItem from "./about-us-item";
import AboutUsItemsMap from "./about-us-items-map";
import styles from "./about-us-list.module.css";

const AboutUsList = () => {
  const items = AboutUsItemsMap.map((item) => {
    return (
      <AboutUsItem
        key={item.title}
        icon={item.icon}
        title={item.title}
        text={item.text}
      />
    );
  });
  return <ul className={styles.aboutUsList}>{items}</ul>;
};

export default AboutUsList;
