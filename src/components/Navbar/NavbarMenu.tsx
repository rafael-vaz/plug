import React from "react";

import NavbarContext from "../../contexts/NavbarContext";
import { validateContext } from "../../utils/validateContext";
import styles from "./NavbarMenu.module.css";
import NavbarMenuButton from "./NavbarMenuButton";
import NavList from "./NavList";

const NavbarMenu = () => {
  const navbarContext = React.useContext(NavbarContext);
  const navbarMenu = React.useRef<HTMLDivElement>(null);

  validateContext(navbarContext, "NavbarContext");

  const { activeMenuMobile, setActiveMenuMobile, setActiveMenuList } =
    navbarContext;

  React.useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 900) {
      setActiveMenuMobile(true);
    }

    function handleNavbarMenuOutsideClick(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (navbarMenu.current && !navbarMenu.current.contains(target)) {
        setActiveMenuList(false);
      }
    }

    function handleResizePage() {
      const mql = window.matchMedia("(max-width: 56.25rem)");
      if (mql.matches) {
        setActiveMenuMobile(true);
      } else {
        setActiveMenuMobile(false);
      }
    }

    window.addEventListener("click", handleNavbarMenuOutsideClick);
    window.addEventListener("resize", handleResizePage);
    return () => {
      window.removeEventListener("resize", handleResizePage);
      window.removeEventListener("click", handleNavbarMenuOutsideClick);
    };
  }, [setActiveMenuMobile, setActiveMenuList]);

  return (
    <div
      className={styles.navbarMenu}
      ref={navbarMenu}
      data-mobile-nav={activeMenuMobile}
    >
      {activeMenuMobile && <NavbarMenuButton />}
      <NavList />
    </div>
  );
};

export default NavbarMenu;
