import { NavLink } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { GlobalContext } from "../../context";

import rckaLogo from "../../assets/images/logo/robocup-korea-association.png";

export default function Navbar() {
  const { scrollY, pathname } = useContext(GlobalContext);
  const navbarRef = useRef(null);

  // hide navbar after 3 sec
  //   useEffect(() => {
  //     if (pathname === "/") {
  //       navbarRef.current.style.top = "0px";
  //       const initTimer = setTimeout(() => {
  //         navbarRef.current.style.top = "-64px"; // navbar hidden
  //       }, 3700);

  //       return () => clearTimeout(initTimer);
  //     }
  //   }, [scrollY]);

  const [openDropdown, setOpenDropdown] = useState(null);
  const openMenu = (dropdown) => {
    setOpenDropdown(dropdown);
  };
  const closeMenu = () => {
    setOpenDropdown(null);
  };

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closePanel = () => setClick(false);

  const closeAll = () => {
    closeMenu();
    closePanel();
  };

  //   console.log(location.pathname);
  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="container mx-auto">
        <div className="flex h-14 justify-between items-center">
          <NavLink
            to={"/"}
            className="inline-flex items-center justify-center"
            onClick={closePanel}
          >
            <img src={rckaLogo} className="max-h-14 py-1" alt="RCKA"></img>
          </NavLink>
          <div
            className="h-12 flex justify-center items-center mobile-button text-2xl"
            onClick={handleClick}
          >
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul
            className={
              click ? "navbar-menu-panel--active" : "navbar-menu-panel"
            }
          >
            {/* menu start */}
            <div
              onMouseEnter={() => openMenu("association")}
              onMouseLeave={() => openMenu(null)}
            >
              <div className="navbar-dropdown--title">한국로보컵협회</div>
              <div
                className={
                  openDropdown === "association"
                    ? "navbar-dropdown--menu-open"
                    : "navbar-dropdown--menu-close"
                }
              >
                <NavLink
                  to={"/association/about"}
                  className="navbar-dropdown--list"
                  onClick={closeAll}
                >
                  소개
                </NavLink>
                <NavLink
                  to={"/association/committee"}
                  className="navbar-dropdown--list"
                  onClick={closeAll}
                >
                  운영위원
                </NavLink>
              </div>
            </div>
            <div
              onMouseEnter={() => openMenu("leagues")}
              onMouseLeave={() => openMenu(null)}
            >
              <div className="navbar-dropdown--title">로보컵 리그</div>
              <div
                className={
                  openDropdown === "leagues"
                    ? "navbar-dropdown--menu-open"
                    : "navbar-dropdown--menu-close"
                }
              >
                <NavLink
                  to="/leagues/robocup-soccer"
                  className="navbar-dropdown--list"
                  onClick={closeAll}
                >
                  RoboCupSoccer
                </NavLink>
                <NavLink
                  to="/leagues/robocup-rescue"
                  className="navbar-dropdown--list"
                  onClick={closeAll}
                >
                  RoboCupRescue
                </NavLink>
                <NavLink
                  to="/leagues/robocup-athome"
                  className="navbar-dropdown--list"
                  onClick={closeAll}
                >
                  RoboCup@Home
                </NavLink>
                <NavLink
                  to="/leagues/robocup-industrial"
                  className="navbar-dropdown--list"
                  onClick={closeAll}
                >
                  RoboCupIndustrial
                </NavLink>
                <NavLink
                  to="/leagues/robocup-junior"
                  className="navbar-dropdown--list"
                  onClick={closeAll}
                >
                  RoboCupJunior
                </NavLink>
              </div>
            </div>
            <div
              onMouseEnter={() => openMenu("event")}
              onMouseLeave={() => openMenu(null)}
            >
              <div className="navbar-dropdown--title">대회</div>
              <div
                className={
                  openDropdown === "event"
                    ? "navbar-dropdown--menu-open"
                    : "navbar-dropdown--menu-close"
                }
              >
                <NavLink
                  to="/leagues"
                  className="navbar-dropdown--list"
                  onClick={closeAll}
                >
                  창의코딩대회
                </NavLink>
                <NavLink
                  to="/leagues"
                  className="navbar-dropdown--list"
                  onClick={closeAll}
                >
                  기록
                </NavLink>
              </div>
            </div>
            <div
              onMouseEnter={() => openMenu("notice")}
              onMouseLeave={() => openMenu(null)}
            >
              <div className="navbar-dropdown--title">공지사항</div>
              <div
                className={
                  openDropdown === "notice"
                    ? "navbar-dropdown--menu-open"
                    : "navbar-dropdown--menu-close"
                }
              >
                <div className="navbar-dropdown--list" onClick={closeAll}>
                  대회 일정
                </div>
                <div className="navbar-dropdown--list" onClick={closeAll}>
                  경기 규정
                </div>
              </div>
            </div>
            {/* <div className="inline-block">
              <NavLink
                to={"/association"}
                className="relative inline-flex items-center justify-center p-2"
              >
                <span>한국어</span>
              </NavLink>
              <NavLink
                to={"/association"}
                className="relative inline-flex items-center justify-center p-2"
              >
                <span>ENG</span>
              </NavLink>
            </div> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
