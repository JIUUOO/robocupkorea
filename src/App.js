import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import ScrollToTop from "./hooks/scroll-to-top";
import Home from "./pages/home";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
