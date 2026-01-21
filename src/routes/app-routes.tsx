import { Route, Routes } from "react-router-dom";

import DefaultLayout from "../components/default-layout/default-layout";
import Contact from "../pages/contact";
import Home from "../pages/home";
import NotFound from "../pages/not-found";
import Services from "../pages/services";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
