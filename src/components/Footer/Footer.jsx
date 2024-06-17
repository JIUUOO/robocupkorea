import ministryLogo from "../../assets/images/institute/misintry-of-trade-industry-and-energy.jpg";
import serviceLogo from "../../assets/images/institute/national-tax-service.jpg";
import commissionLogo from "../../assets/images/institute/anti-corruption-and-civil-rights-commission.jpg";
import rckaLogo from "../../assets/images/logo/robocup-korea-association.png";
import robocupLogo from "../../assets/images/logo/robocup.png";
import robocupJuniorLogo from "../../assets/images/logo/robocup-junior.jpg";
import robocupAsiaPacific from "../../assets/images/logo/robocup-asia-pacific.png";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="league__logo--wrapper">
          <NavLink to={"/"}>
            <img src={rckaLogo} className="league__logo" alt="rckaLogo"></img>
          </NavLink>
          <a href="https://www.robocup.org/" target="_blank">
            <img src={robocupLogo} className="league__logo" alt="robocupLogo" />
          </a>
          <a href="https://junior.robocup.org/" target="_blank">
            <img
              src={robocupJuniorLogo}
              className="league__logo"
              alt="robocupLogo"
            />
          </a>
          <a href="https://robocupap.org/" target="_blank">
            <img
              src={robocupAsiaPacific}
              className="league__logo"
              alt="robocupLogo"
            />
          </a>
        </div>
        <ul className="footer-nav">
          <li>
            <span className="menu__header">한국로보컵협회</span>
            <NavLink to="/association/about">
              <span className="menu__item">소개</span>
            </NavLink>
            <NavLink to="/association/committee">
              <span className="menu__item">운영위원</span>
            </NavLink>
          </li>
          <li>
            <span className="menu__header">로보컵 리그</span>
            <div>
              <span className="menu__header--nested">RoboCupSoccer</span>
              <span className="menu__item">Humanoid</span>
              <span className="menu__item">Standard Platform</span>
              <span className="menu__item">Middle Size</span>
              <span className="menu__item">Small Size</span>
              <span className="menu__item">Simulation</span>
            </div>
            <div>
              <span className="menu__header--nested">RoboCupRescue</span>
              <span className="menu__item">Robot</span>
              <span className="menu__item">Simulation</span>
            </div>
            <div>
              <span className="menu__header--nested">RoboCup@Home</span>
              <span className="menu__item">Open Platform</span>
              <span className="menu__item">Domestic Standard Platform</span>
              <span className="menu__item">Social Standard Platform</span>
            </div>
            <div>
              <span className="menu__header--nested">RoboCupIndustrial</span>
              <span className="menu__item">RoboCup@Work</span>
              <span className="menu__item">Logistics</span>
            </div>
            <div>
              <span className="menu__header--nested">RoboCupJunior</span>
              <span className="menu__item">Soccer</span>
              <span className="menu__item">OnStage</span>
              <span className="menu__item">Rescue</span>
            </div>
          </li>
          <li>
            <span className="menu__header">로보컵 이벤트</span>
            <span className="menu__item">2024 제 n회 창의코딩대회</span>
            <span className="menu__item">기록</span>
          </li>
          <li>
            <span className="menu__header">공지사항</span>
            <span className="menu__item">이벤트 일정</span>
            <span className="menu__item">리그 규정</span>
          </li>
        </ul>

        <div className="institute__logo--wrapper">
          <img src={ministryLogo} className="institute__logo"></img>
          <img src={serviceLogo} className="institute__logo"></img>
          <img src={commissionLogo} className="institute__logo"></img>
        </div>
        <div>
          <p className="text-center lg:text-end text-xs">
            <span className="block">
              <span className="font-bold">한국로보컵협회</span> | Tel :
              070-4247-7485
            </span>
            <span className="block">
              주소: 서울시 서초구 서운로 13 중앙로얄 오피스텔 1308
            </span>
          </p>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <div>
            <NavLink to="https://github.com/JIUUOO" target="_blank">
              <i class="fa fa-github"></i>
            </NavLink>
          </div>
          <div>Copyright © 한국로보컵협회. All rights reserved.</div>
        </div>
      </div>
    </div>
  );
}
