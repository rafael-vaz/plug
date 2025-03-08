import React from "react";

import SliderContext from "../../context/SliderContext";
import { validateContext } from "../../utils/validateContext";
import SliderButton from "./SliderButton";
import styles from "./SliderControls.module.css";
import SliderItemsMap from "./SliderItemsMap";

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
  return <div className={styles.sliderControls}>{buttons}</div>;
};

export default SliderControls;
