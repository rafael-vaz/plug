import { motion } from "motion/react";
import React from "react";

import SliderContext from "../../contexts/slider-context";
import slideUpVariants from "../../motion/slide-up-variants";
import Wrapper from "../wrapper/wrapper";
import styles from "./slider.module.css";
import SliderControls from "./slider-controls";
import SliderItem from "./slider-item";
import SliderItemsMap from "./slider-items-map";

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
