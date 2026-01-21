import React, { ReactNode } from "react";

// context
interface IServiceInfoContext {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}
const ServicesInfoContext = React.createContext({} as IServiceInfoContext);

// provider
interface IServicesInfoContextProvider {
  children: ReactNode;
}
export const ServicesInfoContextProvider = ({
  children,
}: IServicesInfoContextProvider) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <ServicesInfoContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </ServicesInfoContext.Provider>
  );
};

export default ServicesInfoContext;
