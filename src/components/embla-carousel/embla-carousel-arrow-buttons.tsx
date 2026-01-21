import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react";
import React, { ComponentPropsWithRef } from "react";

type PropType = ComponentPropsWithRef<"button">;

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      aria-label="Voltar"
      className="embla__button embla__button--prev"
      type="button"
      {...restProps}
    >
      <ArrowCircleLeft size="30" />
      {children}
    </button>
  );
};

export const NextButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      aria-label="Avançar"
      className="embla__button embla__button--next"
      type="button"
      {...restProps}
    >
      <ArrowCircleRight size="30" />
      {children}
    </button>
  );
};
