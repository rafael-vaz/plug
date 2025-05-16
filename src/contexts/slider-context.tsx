import React, { ReactNode } from "react";

// context
interface ISliderContext {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

const SliderContext = React.createContext({} as ISliderContext);

// provider
interface ISliderContextProviderProps {
  children: ReactNode;
}

export const SliderContextProvider = ({
  children,
}: ISliderContextProviderProps) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <SliderContext.Provider
      value={{
        activeIndex,
        setActiveIndex,
      }}
    >
      {children}
    </SliderContext.Provider>
  );
};

export default SliderContext;
