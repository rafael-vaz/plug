import { List } from "@phosphor-icons/react";
import React from "react";

import NavbarContext from "../../contexts/NavbarContext";
import { validateContext } from "../../utils/validateContext";
import styles from "./NavbarMenuButton.module.css";

const NavbarMenuButton = () => {
  const navbarContext = React.useContext(NavbarContext);
  validateContext(navbarContext, "NavbarContext");

  const { activeMenuList, setActiveMenuList } = navbarContext;

  function handleClick() {
    setActiveMenuList((state) => !state);
  }

  return (
    <button
      aria-label="Abrir menu"
      aria-controls="nav-menu"
      aria-expanded={activeMenuList}
      className={styles.navbarMenuButton}
      data-active={activeMenuList}
      onClick={() => handleClick()}
    >
      <List size="1.5rem" />
    </button>
  );
};

export default NavbarMenuButton;
