import React from "react";

import SliderContext from "../../contexts/slider-context";
import { validateContext } from "../../utils/validate-context";
import SliderButton from "./slider-button";
import styles from "./slider-controls.module.css";
import SliderItemsMap from "./slider-items-map";

const SliderControls = () => {
  const sliderContext = React.useContext(SliderContext);
  validateContext(sliderContext, "SliderContext");
  const activeIndex = sliderContext.activeIndex;
  const buttons = SliderItemsMap.map((item, i) => {
    return (
      <SliderButton
        key={i}
        isActive={activeIndex === i}
        index={i}
        id={item.id}
        title={item.title}
      />
    );
  });
  return (
    <div className={styles.sliderControls} role="tablist">
      {buttons}
    </div>
  );
};

export default SliderControls;
