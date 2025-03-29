import React from "react";
import { Link } from "react-router-dom";

import logo from "/src/assets/img/logo/logo.svg";

import NavbarContext from "../../contexts/NavbarContext";
import { debounce } from "../../utils/debounce";
import { validateContext } from "../../utils/validateContext";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./Navbar.module.css";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  const navbarContext = React.useContext(NavbarContext);

  validateContext(navbarContext, "NavbarContext");

  function handlePageScroll() {
    if (window.scrollY > 100) {
      navbarContext.setFixed(true);
    } else {
      navbarContext.setFixed(false);
    }
  }
  const debouncedHandlePageScroll = debounce(handlePageScroll, 200);

  React.useEffect(() => {
    window.addEventListener("scroll", debouncedHandlePageScroll);
    return () => {
      window.removeEventListener("scroll", debouncedHandlePageScroll);
    };
  }, [debouncedHandlePageScroll]);

  return (
    <nav id={styles.navbar} data-nav-fixed={navbarContext.fixed}>
      <Wrapper>
        <div className={styles.navContent}>
          <Link to="/">
            <img
              src={logo}
              className={styles.navLogo}
              alt="Logo Plug"
              aria-label="Página inicial"
            />
          </Link>
          <NavbarMenu />
        </div>
      </Wrapper>
    </nav>
  );
};

export default Navbar;
