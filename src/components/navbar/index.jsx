import { NavLink } from "react-router-dom";

import rckaLogo from "../../assets/images/logo/robocup-korea-association.png";

export default function Navbar() {
  return (
    <nav className="bg-white navbar sticky top-0">
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
