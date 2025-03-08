import "./styles/Global.css";
import "./styles/Toastify.css";
import "./styles/embla/embla.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import DefaultLayout from "./components/DefaultLayout/DefaultLayout";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
