import "./styles/Global.css";
import "./styles/Toastify.css";
import "./styles/embla/embla.css";

import { BrowserRouter } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
