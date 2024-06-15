import { NavLink } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { GlobalContext } from "../../context";

import rckaLogo from "../../assets/images/logo/robocup-korea-association.png";

export default function Navbar() {
  const [toggleDropdown, setToggleDropdown] = useState("leagues");
  const [toggleNestedDropdown, setToggleNestedDropdown] = useState("soccer");

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closePanel = () => setClick(false);

  const closeAll = () => {
    setToggleDropdown(null);
    closePanel();
  };

  //   console.log(location.pathname);
  return (
    <nav className="navbar">
      <div className="test_container">
        <div className="navbar__logo-wrapper">
          <NavLink to={"/"} onClick={closePanel}>
            <img src={rckaLogo} className="navbar__logo" alt="rckaLogo"></img>
          </NavLink>
        </div>
        <div
          className="h-12 flex justify-center items-center button-mobile text-2xl"
          onClick={handleClick}
        >
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul
          className={
            click
              ? "menu__panel menu__panel-is-active"
              : "menu__panel menu__panel-is-inactive"
          }
        >
          <div
            onMouseEnter={() => setToggleDropdown("rcka")}
            onMouseLeave={() => setToggleDropdown(null)}
          >
            <div className="dropdown__header">한국로보컵협회</div>
            <div
              className={
                toggleDropdown === "rcka"
                  ? "dropdown-is-active"
                  : "dropdown-is-inactive"
              }
            >
              <NavLink
                to={"/association/about"}
                className="dropdown__items"
                onClick={closeAll}
              >
                소개
              </NavLink>
              <NavLink
                to={"/association/committee"}
                className="dropdown__items"
                onClick={closeAll}
              >
                운영위원
              </NavLink>
            </div>
          </div>
          <div
            onMouseEnter={() => setToggleDropdown("leagues")}
            onMouseLeave={() => setToggleDropdown(null)}
          >
            <div className="dropdown__header">로보컵 리그</div>
            <div
              className={
                toggleDropdown === "leagues"
                  ? "dropdown-is-active"
                  : "dropdown-is-inactive"
              }
            >
              <div
                onMouseEnter={() => setToggleNestedDropdown("soccer")}
                onMouseLeave={() => setToggleNestedDropdown(null)}
                className="dropdown__items--nested"
              >
                RoboCupSoccer
                <div
                  className={
                    toggleNestedDropdown === "soccer"
                      ? "dropdown--nested-is-active"
                      : "dropdown--nested-is-inactive"
                  }
                >
                  <NavLink
                    to="/leagues/robocup-soccer"
                    className="dropdown__items"
                    onClick={closeAll}
                  >
                    Humanoid
                  </NavLink>
                  <NavLink
                    to="/leagues/robocup-soccer"
                    className="dropdown__items"
                    onClick={closeAll}
                  >
                    Standard Platform
                  </NavLink>
                  <NavLink
                    to="/leagues/robocup-soccer"
                    className="dropdown__items"
                    onClick={closeAll}
                  >
                    Middle Size
                  </NavLink>
                  <NavLink
                    to="/leagues/robocup-soccer"
                    className="dropdown__items"
                    onClick={closeAll}
                  >
                    Small Size
                  </NavLink>
                  <NavLink
                    to="/leagues/robocup-soccer"
                    className="dropdown__items"
                    onClick={closeAll}
                  >
                    Simulation
                  </NavLink>
                </div>
              </div>
              <NavLink
                to="/leagues/robocup-rescue"
                className="dropdown__items"
                onClick={closeAll}
              >
                RoboCupRescue
              </NavLink>
              <NavLink
                to="/leagues/robocup-athome"
                className="dropdown__items"
                onClick={closeAll}
              >
                RoboCup@Home
              </NavLink>
              <NavLink
                to="/leagues/robocup-industrial"
                className="dropdown__items"
                onClick={closeAll}
              >
                RoboCupIndustrial
              </NavLink>
              <NavLink
                to="/leagues/robocup-junior"
                className="dropdown__items"
                onClick={closeAll}
              >
                RoboCupJunior
              </NavLink>
            </div>
          </div>
          <div
            onMouseEnter={() => setToggleDropdown("events")}
            onMouseLeave={() => setToggleDropdown(null)}
          >
            <div className="dropdown__header">로보컵 이벤트</div>
            <div
              className={
                toggleDropdown === "events"
                  ? "dropdown-is-active"
                  : "dropdown-is-inactive"
              }
            >
              <NavLink
                to="/leagues"
                className="dropdown__items"
                onClick={closeAll}
              >
                창의코딩대회
              </NavLink>
              <NavLink
                to="/leagues"
                className="dropdown__items"
                onClick={closeAll}
              >
                기록
              </NavLink>
            </div>
          </div>
          <div
            onMouseEnter={() => setToggleDropdown("notice")}
            onMouseLeave={() => setToggleDropdown(null)}
          >
            <div className="dropdown__header">공지사항</div>
            <div
              className={
                toggleDropdown === "notice"
                  ? "dropdown-is-active"
                  : "dropdown-is-inactive"
              }
            >
              <div className="dropdown__items" onClick={closeAll}>
                대회 일정
              </div>
              <div className="dropdown__items" onClick={closeAll}>
                경기 규정
              </div>
            </div>
          </div>
          {/* <div className="inline-block">
              <NavLink
                to={"/assoc"}
                className="relative inline-flex items-center justify-center p-2"
              >
                <span>한국어</span>
              </NavLink>
              <NavLink
                to={"/assoc"}
                className="relative inline-flex items-center justify-center p-2"
              >
                <span>ENG</span>
              </NavLink>
            </div> */}
        </ul>
      </div>
    </nav>
  );
}
