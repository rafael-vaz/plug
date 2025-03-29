import React, { ReactNode } from "react";

// context
interface INavbarContext {
  fixed: boolean;
  activeMenuMobile: boolean;
  activeMenuList: boolean;
  setFixed: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveMenuMobile: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveMenuList: React.Dispatch<React.SetStateAction<boolean>>;
}
const NavbarContext = React.createContext({} as INavbarContext);

// provider
interface INavbarContextProviderProps {
  children: ReactNode;
}
export const NavbarContextProvider = ({
  children,
}: INavbarContextProviderProps) => {
  const [fixed, setFixed] = React.useState(false);
  const [activeMenuMobile, setActiveMenuMobile] = React.useState(false);
  const [activeMenuList, setActiveMenuList] = React.useState(false);

  return (
    <NavbarContext.Provider
      value={{
        fixed,
        activeMenuMobile,
        activeMenuList,
        setActiveMenuMobile,
        setActiveMenuList,
        setFixed,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarContext;
