import AboutUsItem from "./AboutUsItem";
import AboutUsItemsMap from "./AboutUsItemsMap";
import styles from "./AboutUsList.module.css";

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
