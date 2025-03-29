import { motion } from "motion/react";
import React from "react";

import SliderContext from "../../contexts/SliderContext";
import slideUpVariants from "../../motion/slideUpVariants";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./Slider.module.css";
import SliderControls from "./SliderControls";
import SliderItem from "./SliderItem";
import SliderItemsMap from "./SliderItemsMap";

const Slider = () => {
  const sliderContext = React.useContext(SliderContext);
  const activeIndex = sliderContext.activeIndex;

  function changeSliderActiveItem() {
    if (activeIndex < SliderItemsMap.length - 1) {
      sliderContext.setActiveIndex((index) => index + 1);
    } else {
      sliderContext.setActiveIndex(0);
    }
  }

  React.useEffect(() => {
    const changeSlider = setInterval(changeSliderActiveItem, 4000);
    return () => clearInterval(changeSlider);
  });

  const slides = SliderItemsMap.map((item, index) => {
    return (
      <SliderItem
        id={item.id}
        key={item.id}
        title={item.title}
        text={item.text}
        image={item.image}
        imageAlt={item.imageAlt}
        isActive={activeIndex === index}
      />
    );
  });

  return (
    <motion.section
      className={styles.slider}
      custom={0}
      variants={slideUpVariants}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Wrapper>
        <div className={styles.sliderItems}>{slides}</div>
        <SliderControls />
      </Wrapper>
    </motion.section>
  );
};

export default Slider;
