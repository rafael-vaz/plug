import Title from "../title/title";
import styles from "./slider-item.module.css";

interface ISliderItemProps {
  id: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  isActive: boolean;
}

const SliderItem = ({
  id,
  title,
  text,
  image,
  imageAlt,
  isActive,
}: ISliderItemProps) => {
  return (
    <>
      <div
        id={id}
        className={styles.sliderItem}
        data-active={isActive}
        aria-hidden={!isActive}
        role="tabpanel"
      >
        <div className={styles.sliderItemText}>
          <Title text={title} />
          <p>{text}</p>
        </div>
        <div className={styles.sliderItemImg}>
          <img src={image} alt={imageAlt} height={260} width={570} />
        </div>
      </div>
    </>
  );
};

export default SliderItem;
