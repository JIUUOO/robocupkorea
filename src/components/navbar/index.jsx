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

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closePanel = () => setClick(false);

  //   console.log(location.pathname);
  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="container mx-auto">
        <div className="flex h-16 justify-between items-center px-3">
          <NavLink
            to={"/"}
            className="inline-flex items-center justify-center"
            onClick={closePanel}
          >
            <img src={rckaLogo} className="max-h-14" alt="RCKA"></img>
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
              <div className="navbar-dropdown--toggle">한국로보컵협회</div>
              <div
                className={
                  openDropdown === "association"
                    ? "navbar-dropdown--menu-active"
                    : "navbar-dropdown--menu"
                }
              >
                <NavLink
                  to={"/association/about"}
                  className="navbar-dropdown--list"
                  onClick={closePanel}
                >
                  소개
                </NavLink>
                <NavLink
                  to={"/association/committee"}
                  className="navbar-dropdown--list"
                  onClick={closePanel}
                >
                  운영위원
                </NavLink>
              </div>
            </div>
            <div
              onMouseEnter={() => openMenu("leagues")}
              onMouseLeave={() => openMenu(null)}
            >
              <div className="navbar-dropdown--toggle">로보컵 리그</div>
              <div
                className={
                  openDropdown === "leagues"
                    ? "navbar-dropdown--menu-active"
                    : "navbar-dropdown--menu"
                }
              >
                <NavLink
                  to="/association/about"
                  className="navbar-dropdown--list"
                  onClick={closePanel}
                >
                  RoboCupSoccer
                </NavLink>
                <NavLink
                  to="/association/committee"
                  className="navbar-dropdown--list"
                  onClick={closePanel}
                >
                  RoboCupRescue
                </NavLink>
                <NavLink
                  to="/association/archive"
                  className="navbar-dropdown--list"
                  onClick={closePanel}
                >
                  RoboCup@Home
                </NavLink>
                <NavLink
                  to="/association/archive"
                  className="navbar-dropdown--list"
                  onClick={closePanel}
                >
                  RoboCupIndustrial
                </NavLink>
                <NavLink
                  to="/association/archive"
                  className="navbar-dropdown--list"
                  onClick={closePanel}
                >
                  RoboCupJunior
                </NavLink>
              </div>
            </div>
            <div
              onMouseEnter={() => openMenu("event")}
              onMouseLeave={() => openMenu(null)}
            >
              <div className="navbar-dropdown--toggle">대회</div>
              <div
                className={
                  openDropdown === "event"
                    ? "navbar-dropdown--menu-active"
                    : "navbar-dropdown--menu"
                }
              >
                <NavLink
                  to="/leagues"
                  className="navbar-dropdown--list"
                  onClick={closePanel}
                >
                  창의코딩대회
                </NavLink>
                <NavLink
                  to="/leagues"
                  className="navbar-dropdown--list"
                  onClick={closePanel}
                >
                  기록
                </NavLink>
              </div>
            </div>
            <div
              onMouseEnter={() => openMenu("notice")}
              onMouseLeave={() => openMenu(null)}
            >
              <div className="navbar-dropdown--toggle">공지사항</div>
              <div
                className={
                  openDropdown === "notice"
                    ? "navbar-dropdown--menu-active"
                    : "navbar-dropdown--menu"
                }
              >
                <div className="navbar-dropdown--list" onClick={closePanel}>
                  대회 일정
                </div>
                <div className="navbar-dropdown--list" onClick={closePanel}>
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
