import { Outlet } from "react-router-dom";

import { NavbarContextProvider } from "../../contexts/navbar-context";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import PageContent from "../page-content/page-content";

const DefaultLayout = () => {
  return (
    <>
      <NavbarContextProvider>
        <Navbar />
      </NavbarContextProvider>
      <PageContent>
        <Outlet />
      </PageContent>
      <Footer />
    </>
  );
};

export default DefaultLayout;
