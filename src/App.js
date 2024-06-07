import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import ScrollToTop from "./hooks/scroll-to-top";
import Home from "./pages/home";
import About from "./pages/association/about";
import Committee from "./pages/association/committee";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/association/about" element={<About />} />
        <Route path="/association/committee" element={<Committee />} />
        <Route path="/leagues/robocup-soccer" element={<Committee />} />
        <Route path="/leagues/robocup-rescue" element={<Committee />} />
        <Route path="/leagues/robocup-athome" element={<Committee />} />
        <Route path="/leagues/robocup-industrial" element={<Committee />} />
        <Route path="/leagues/robocup-junior" element={<Committee />} />
        <Route path="/event/news" element={<Committee />} />
        <Route path="/event/archive" element={<Committee />} />
        <Route path="/notice/event" element={<Committee />} />
        <Route path="/notice/rules" element={<Committee />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
