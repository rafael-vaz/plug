import { Outlet } from "react-router-dom";

import { NavbarContextProvider } from "../../contexts/NavbarContext";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import PageContent from "../PageContent/PageContent";

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
