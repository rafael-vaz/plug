import { IconProps } from "@phosphor-icons/react";
import React from "react";
import { NavLink } from "react-router-dom";

import NavbarContext from "../../contexts/navbar-context";
import { validateContext } from "../../utils/validate-context";
import styles from "./nav-item.module.css";

interface INavItemProps {
  path: string;
  name: string;
  icon: React.ElementType<IconProps>;
}

const NavItem = ({ path, name, icon: Icon }: INavItemProps) => {
  const navbarContext = React.useContext(NavbarContext);

  validateContext(navbarContext, "NavbarContext");

  const { fixed, activeMenuMobile, setActiveMenuList } = navbarContext;

  return (
    <li
      className={`${styles.navItem} ${
        fixed && !activeMenuMobile ? styles.lightColor : styles.darkColor
      }`}
      data-mobile-item={activeMenuMobile}
    >
      <NavLink
        to={path}
        end
        className={styles.navLink}
        onClick={() => setActiveMenuList(false)}
      >
        {({ isActive }) => (
          <>
            <Icon size="1.25rem" />
            <span className={styles.navLinkText} data-active={isActive}>
              {name}
            </span>
          </>
        )}
      </NavLink>
    </li>
  );
};

export default NavItem;
