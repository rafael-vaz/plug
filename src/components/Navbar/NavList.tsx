import { Briefcase, House, Link } from "@phosphor-icons/react";
import React from "react";

import NavbarContext from "../../contexts/NavbarContext";
import { validateContext } from "../../utils/validateContext";
import NavItem from "./NavItem";
import styles from "./NavList.module.css";

const NavList = () => {
  const navbarContext = React.useContext(NavbarContext);

  validateContext(navbarContext, "NavbarContext");

  const { activeMenuMobile, activeMenuList } = navbarContext;

  const navListMap = [
    {
      name: "Home",
      path: "/",
      icon: House,
    },
    {
      name: "Serviços",
      path: "/servicos",
      icon: Briefcase,
    },
    {
      name: "Contato",
      path: "/contato",
      icon: Link,
    },
  ];
  return (
    <ul
      id="nav-menu"
      aria-label="Menu de navegação"
      aria-hidden={activeMenuMobile && !activeMenuList}
      className={styles.navList}
      data-active={activeMenuList}
      data-mobile-list={activeMenuMobile}
    >
      {navListMap.map((item) => {
        return <NavItem {...item} key={item.name} />;
      })}
    </ul>
  );
};

export default NavList;
