import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";

import { NextButton,PrevButton } from "./EmblaCarouselArrowButtons.tsx";
import { useAutoplay } from "./EmblaCarouselAutoplay";
import { DotButton } from "./EmblaCarouselDotButton.tsx";
import { useDotButton } from "./useDotButton.tsx";
import { usePrevNextButtons } from "./usePrevNextButtons.tsx";

type PropType = {
  slides: JSX.Element[];
  options?: EmblaOptionsType;
  containerClass?: string;
  viewportClass?: string;
  controlButtons?: boolean;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const {
    slides,
    options,
    controlButtons,
    containerClass = "",
    viewportClass = "",
  } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({
      playOnInit: true,
      delay: 3000,
      stopOnFocusIn: false,
      stopOnInteraction: false,
    }),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { onAutoplayButtonClick } = useAutoplay(emblaApi);

  return (
    <section className="embla">
      <div className={`embla__viewport ${viewportClass}`} ref={emblaRef}>
        <div className={`embla__container ${containerClass}`}>{slides}</div>
      </div>

      {controlButtons && (
        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton
              onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={() => onAutoplayButtonClick(onNextButtonClick)}
              disabled={nextBtnDisabled}
            />
          </div>

          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={"embla__dot".concat(
                  index === selectedIndex ? " embla__dot--selected" : ""
                )}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default EmblaCarousel;
