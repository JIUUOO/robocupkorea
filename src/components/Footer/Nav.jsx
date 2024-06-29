import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="container">
      <div className="footer-nav">
        <div className="nav-grid">
          <div className="menu__wrapper">
            <div className="menu__header">한국로보컵협회</div>
            <NavLink to="/association/about" className="menu__item">
              소개
            </NavLink>
            <NavLink to="/association/about" className="menu__item">
              운영위원
            </NavLink>
          </div>
          <div className="menu__wrapper">
            <div className="menu__header">로보컵 이벤트</div>
            <NavLink to="/association/about" className="menu__item">
              2024 제 n회 창의코딩대회
            </NavLink>
            <NavLink to="/association/about" className="menu__item">
              기록
            </NavLink>
          </div>
          <div className="menu__wrapper">
            <div className="menu__header">공지사항</div>
            <NavLink to="/association/about" className="menu__item">
              이벤트 일정
            </NavLink>
            <NavLink to="/association/about" className="menu__item">
              리그
            </NavLink>
          </div>
        </div>
        <div className="menu__header" style={{ paddingTop: "16px" }}>
          로보컵 리그
        </div>
        <div className="nav-grid">
          <div className="menu__wrapper">
            <div className="menu__header--nested">RoboCupSoccer</div>
            <NavLink to="/" className="menu__item">
              Humanoid
            </NavLink>
            <NavLink to="/" className="menu__item">
              Standard Platform
            </NavLink>
            <NavLink to="/" className="menu__item">
              Middle Size
            </NavLink>
            <NavLink to="/" className="menu__item">
              Small Size
            </NavLink>
            <NavLink to="/" className="menu__item">
              Simulation
            </NavLink>
          </div>
          <div className="menu__wrapper">
            <div className="menu__header--nested">RoboCupRescue</div>
            <NavLink to="/" className="menu__item">
              Robot
            </NavLink>
            <NavLink to="/" className="menu__item">
              Simulation
            </NavLink>
          </div>
          <div className="menu__wrapper">
            <div className="menu__header--nested">RoboCup@Home</div>
            <NavLink to="/" className="menu__item">
              Open Platform
            </NavLink>
            <NavLink to="/" className="menu__item">
              Domestic Standard Platform
            </NavLink>
            <NavLink to="/" className="menu__item">
              Social Standard Platform
            </NavLink>
          </div>
          <div className="menu__wrapper">
            <div className="menu__header--nested">RoboCupIndustrial</div>
            <NavLink to="/" className="menu__item">
              RoboCup@Work
            </NavLink>
            <NavLink to="/" className="menu__item">
              Logistics
            </NavLink>
          </div>
          <div className="menu__wrapper">
            <div className="menu__header--nested">RoboCupJunior</div>
            <NavLink to="/" className="menu__item">
              Soccer
            </NavLink>
            <NavLink to="/" className="menu__item">
              OnStage
            </NavLink>
            <NavLink to="/" className="menu__item">
              Rescue
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
