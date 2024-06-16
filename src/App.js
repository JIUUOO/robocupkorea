import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./hooks/ScrollToTop/ScrollToTop";
import Home from "./pages/home";
import About from "./pages/association/about";
import Committee from "./pages/association/committee";
import RoboCupSoccer from "./pages/leagues/robocup-soccer";
import RoboCupRescue from "./pages/leagues/robocup-rescue";
import RoboCupAthome from "./pages/leagues/robocup-athome";
import RoboCupIndustrial from "./pages/leagues/robocup-industrial";
import RoboCupJunior from "./pages/leagues/robocup-junior";

import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/association/about" element={<About />} />
        <Route path="/association/committee" element={<Committee />} />
        <Route path="/leagues/robocup-soccer" element={<RoboCupSoccer />} />
        <Route path="/leagues/robocup-rescue" element={<RoboCupRescue />} />
        <Route path="/leagues/robocup-athome" element={<RoboCupAthome />} />
        <Route
          path="/leagues/robocup-industrial"
          element={<RoboCupIndustrial />}
        />
        <Route path="/leagues/robocup-junior" element={<RoboCupJunior />} />
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
