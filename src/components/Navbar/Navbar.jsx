import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";
import DropdownToggler from "./DropdownToggler";
import DropdownItems from "./DropdownItems";
import rckaLogo from "../../assets/images/logo/robocup-korea-association.png";

export default function Navbar() {
  const [toggleDropdown, setToggleDropdown] = useState(null);
  const [toggleNestedDropdown, setToggleNestedDropdown] = useState(null);
  const [click, setClick] = useState(false);
  const menuPanelRef = useRef("menuPanelRef");

  const handleMobileButtonClick = () => {
    setClick(!click);
    menuPanelRef.current.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };

  const closePanel = () => setClick(false);

  const closeAll = () => {
    setToggleDropdown(null);
    setToggleNestedDropdown(null);
    closePanel();
  };

  //   console.log(location.pathname);
  return (
    <nav className={click ? "navbar navbar--fixed" : "navbar"}>
      <div className="container--custom">
        <div className="navbar-wrapper">
          <NavLink
            to={"/"}
            className="navbar__logo-wrapper"
            onClick={closePanel}
          >
            <img src={rckaLogo} className="navbar__logo" alt="rckaLogo"></img>
          </NavLink>
          <ul
            className={
              click
                ? "menu__panel menu__panel-is-active"
                : "menu__panel menu__panel-is-inactive"
            }
            ref={menuPanelRef}
          >
            <li
              onMouseEnter={() => setToggleDropdown("rcka")}
              onMouseLeave={() => setToggleDropdown(null)}
            >
              <DropdownToggler>한국로보컵협회</DropdownToggler>
              <div
                className={
                  toggleDropdown === "rcka"
                    ? "dropdown-is-active"
                    : "dropdown-is-inactive"
                }
              >
                <DropdownItems to="/association/about" onClick={closeAll}>
                  소개
                </DropdownItems>
                <DropdownItems to="/association/committee" onClick={closeAll}>
                  운영위원
                </DropdownItems>
              </div>
            </li>
            <li
              onMouseEnter={() => setToggleDropdown("leagues")}
              onMouseLeave={() => setToggleDropdown(null)}
            >
              <DropdownToggler>로보컵 리그</DropdownToggler>
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
                >
                  <DropdownToggler nested={true}>RoboCupSoccer</DropdownToggler>
                  <div
                    className={
                      toggleNestedDropdown === "soccer"
                        ? "dropdown--nested-is-active"
                        : "dropdown--nested-is-inactive"
                    }
                  >
                    <DropdownItems
                      to="/leagues/robocup-soccer"
                      onClick={closeAll}
                    >
                      Humanoid
                    </DropdownItems>
                    <DropdownItems
                      to="/leagues/robocup-soccer"
                      onClick={closeAll}
                    >
                      Standard Platform
                    </DropdownItems>
                    <DropdownItems
                      to="/leagues/robocup-soccer"
                      onClick={closeAll}
                    >
                      Middle Size
                    </DropdownItems>
                    <DropdownItems
                      to="/leagues/robocup-soccer"
                      onClick={closeAll}
                    >
                      Small Size
                    </DropdownItems>
                    <DropdownItems
                      to="/leagues/robocup-soccer"
                      onClick={closeAll}
                    >
                      Simulation
                    </DropdownItems>
                  </div>
                </div>
                <div
                  onMouseEnter={() => setToggleNestedDropdown("rescue")}
                  onMouseLeave={() => setToggleNestedDropdown(null)}
                >
                  <DropdownToggler nested={true}>RoboCupRescue</DropdownToggler>
                  <div
                    className={
                      toggleNestedDropdown === "rescue"
                        ? "dropdown--nested-is-active"
                        : "dropdown--nested-is-inactive"
                    }
                  >
                    <DropdownItems
                      to="/leagues/robocup-soccer"
                      onClick={closeAll}
                    >
                      Robot
                    </DropdownItems>
                    <DropdownItems
                      to="/leagues/robocup-soccer"
                      onClick={closeAll}
                    >
                      Simulation
                    </DropdownItems>
                  </div>
                </div>
                <div
                  onMouseEnter={() => setToggleNestedDropdown("athome")}
                  onMouseLeave={() => setToggleNestedDropdown(null)}
                >
                  <DropdownToggler nested={true}>RoboCup@Home</DropdownToggler>
                  <div
                    className={
                      toggleNestedDropdown === "athome"
                        ? "dropdown--nested-is-active"
                        : "dropdown--nested-is-inactive"
                    }
                  >
                    <DropdownItems
                      to="/leagues/robocup-athome"
                      onClick={closeAll}
                    >
                      Open Platform
                    </DropdownItems>
                    <DropdownItems
                      to="/leagues/robocup-athome"
                      onClick={closeAll}
                    >
                      Domestic Standard Platform
                    </DropdownItems>
                    <DropdownItems
                      to="/leagues/robocup-athome"
                      onClick={closeAll}
                    >
                      Social Standard Platform
                    </DropdownItems>
                  </div>
                </div>
                <div
                  onMouseEnter={() => setToggleNestedDropdown("industrial")}
                  onMouseLeave={() => setToggleNestedDropdown(null)}
                >
                  <DropdownToggler nested={true}>
                    RoboCupIndustrial
                  </DropdownToggler>
                  <div
                    className={
                      toggleNestedDropdown === "industrial"
                        ? "dropdown--nested-is-active"
                        : "dropdown--nested-is-inactive"
                    }
                  >
                    <DropdownItems
                      to="/leagues/robocup-industrial"
                      onClick={closeAll}
                    >
                      RoboCup@Work
                    </DropdownItems>
                    <DropdownItems
                      to="/leagues/robocup-industrial"
                      onClick={closeAll}
                    >
                      Logistics
                    </DropdownItems>
                  </div>
                </div>
                <div
                  onMouseEnter={() => setToggleNestedDropdown("junior")}
                  onMouseLeave={() => setToggleNestedDropdown(null)}
                >
                  <DropdownToggler nested={true}>RoboCupJunior</DropdownToggler>
                  <div
                    className={
                      toggleNestedDropdown === "junior"
                        ? "dropdown--nested-is-active"
                        : "dropdown--nested-is-inactive"
                    }
                  >
                    <DropdownItems
                      to="/leagues/robocup-junior"
                      onClick={closeAll}
                    >
                      Soccer
                    </DropdownItems>
                    <DropdownItems
                      to="/leagues/robocup-junior"
                      onClick={closeAll}
                    >
                      OnStage
                    </DropdownItems>
                    <DropdownItems
                      to="/leagues/robocup-junior"
                      onClick={closeAll}
                    >
                      Rescue
                    </DropdownItems>
                  </div>
                </div>
              </div>
            </li>
            <li
              onMouseEnter={() => setToggleDropdown("events")}
              onMouseLeave={() => setToggleDropdown(null)}
            >
              <DropdownToggler>로보컵 이벤트</DropdownToggler>
              <div
                className={
                  toggleDropdown === "events"
                    ? "dropdown-is-active"
                    : "dropdown-is-inactive"
                }
              >
                <DropdownItems to="/event/news" onClick={closeAll}>
                  2024 제 n회 창의코딩대회
                </DropdownItems>
                <DropdownItems to="/event/archive" onClick={closeAll}>
                  기록
                </DropdownItems>
              </div>
            </li>
            <li
              onMouseEnter={() => setToggleDropdown("notice")}
              onMouseLeave={() => setToggleDropdown(null)}
            >
              <DropdownToggler>공지사항</DropdownToggler>
              <div
                className={
                  toggleDropdown === "notice"
                    ? "dropdown-is-active"
                    : "dropdown-is-inactive"
                }
              >
                <DropdownItems to="/event/archive" onClick={closeAll}>
                  이벤트 일정
                </DropdownItems>
                <DropdownItems to="/event/archive" onClick={closeAll}>
                  리그 규정
                </DropdownItems>
              </div>
            </li>
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
        <div className="button-is-on-mobile" onClick={handleMobileButtonClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
      </div>
    </nav>
  );
}
