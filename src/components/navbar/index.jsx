import { NavLink, useLocation } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../../context";

import rckaLogo from "../../assets/images/logo/robocup-korea-association.png";

export default function Navbar() {
  const { scrollY, pathname } = useContext(GlobalContext);
  const navbarRef = useRef(null);

  const navbarPos = () => {
    if (scrollY > 0) {
      navbarRef.current.style.top = "0px";
    } else {
      navbarRef.current.style.top = "-64px";
    }
  };

  // hide navbar after 3 sec
  useEffect(() => {
    navbarPos();
  }, [scrollY]);

  useEffect(() => {
    navbarRef.current.style.top = "0px";
    const initTimer = setTimeout(() => {
      navbarRef.current.style.top = "-64px"; // navbar hidden
    }, 3700);

    return () => clearTimeout(initTimer);
  }, []);
  //   console.log(location.pathname);
  return (
    <nav
      className="bg-white navbar linear-draw w-screen z-10 linear-draw"
      ref={navbarRef}
      //   style={{ top: (scrollY > 0 ? 0 : -64) + "px" }}
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
