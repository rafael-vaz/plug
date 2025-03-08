import Title from "../Title/Title";
import styles from "./SliderItem.module.css";

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
      >
        <div className={styles.sliderItemText}>
          <Title text={title} />
          <p>{text}</p>
        </div>
        <div className={styles.sliderItemImg}>
          <img src={image} alt={imageAlt} />
        </div>
      </div>
    </>
  );
};

export default SliderItem;
