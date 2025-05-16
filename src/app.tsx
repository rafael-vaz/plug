import "./styles/global.css";
import "./styles/toastify.css";
import "./styles/embla/embla.css";

import { BrowserRouter } from "react-router-dom";

import ScrollToTop from "./components/scroll-to-top/scroll-to-top";
import AppRoutes from "./routes/app-routes";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
