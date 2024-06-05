import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../context";

import rckaLogo from "../../assets/images/logo/robocup-korea-association.png";

export default function Navbar() {
  const { scrollY } = useContext(GlobalContext);

  return (
    <nav
      className="bg-white navbar linear-draw w-screen"
      style={{ top: (scrollY > 0 ? 0 : -5) + "rem" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative flex h-16 justify-between items-center">
          <NavLink
            to={"/"}
            className="relative inline-flex items-center justify-center p-2"
          >
            <img src={rckaLogo} className="h-14" alt="RCKA"></img>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
