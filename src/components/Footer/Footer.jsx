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
    <footer className="footer">
      <div className="container">
        <div className="footer-nav">
          <div>
            <div>
              <NavLink to={"/"}>
                <img
                  src={rckaLogo}
                  className="league-logo"
                  alt="rckaLogo"
                ></img>
              </NavLink>
            </div>
            <div style={{ maxWidth: "500px" }}>
              사단법인 한국로보컵협회(이하 RCKA)는 로봇을 연구하는 학생들을 위해
              국가적 및 국제적 로봇 이벤트를 주최하는 프로젝트 중심의 교육 증진
              운동입니다.
            </div>
            <div className="league-logo--wrapper">
              <div>
                <a href="https://www.robocup.org/" target="_blank">
                  <img
                    src={robocupLogo}
                    className="league-logo"
                    alt="robocupLogo"
                  />
                </a>
              </div>
              <div>
                <a href="https://junior.robocup.org/" target="_blank">
                  <img
                    src={robocupJuniorLogo}
                    className="league-logo"
                    alt="robocupJuniorLogo"
                  />
                </a>
              </div>
              <div>
                <a href="https://robocupap.org/" target="_blank">
                  <img
                    src={robocupAsiaPacific}
                    className="league-logo"
                    alt="robocupAsiaPacific"
                  />
                </a>
              </div>
            </div>
            <div className="institute-logo--wrapper">
              <div>
                <img src={ministryLogo} className="institute-logo"></img>
              </div>
              <div>
                <img src={serviceLogo} className="institute-logo"></img>
              </div>
              <div>
                <img src={commissionLogo} className="institute-logo"></img>
              </div>
            </div>
            <div className="rcka-info">
              <div>
                <span className="rcka-info--bold">한국로보컵협회</span> | Tel :
                070-4247-7485
              </div>
              <div>주소: 서울시 서초구 서운로 13 중앙로얄 오피스텔 1308</div>
            </div>
          </div>
          <div>
            <div className="menu__group">
              <span className="menu__header">한국로보컵협회</span>
              <NavLink to="/association/about">
                <span className="menu__item">소개</span>
              </NavLink>
              <NavLink to="/association/committee">
                <span className="menu__item">운영위원</span>
              </NavLink>
            </div>
            <div className="menu__group">
              <span className="menu__header">로보컵 이벤트</span>
              <NavLink to="/">
                <span className="menu__item">2024 제 n회 창의코딩대회</span>
              </NavLink>
              <NavLink to="/">
                <span className="menu__item">기록</span>
              </NavLink>
            </div>
            <div className="menu__group">
              <span className="menu__header">공지사항</span>
              <NavLink to="/">
                <span className="menu__item">이벤트 일정</span>
              </NavLink>
              <NavLink to="/">
                <span className="menu__item">리그 규정</span>
              </NavLink>
            </div>
          </div>
          <div>
            <div className="menu__group">
              <span className="menu__header">로보컵 리그</span>
              <div className="menu__header--nested--wrapper">
                <div>
                  <span className="menu__header--nested">RoboCupSoccer</span>
                  <NavLink to="/">
                    <span className="menu__item">Humanoid</span>
                  </NavLink>
                  <NavLink to="/">
                    <span className="menu__item">Standard Platform</span>
                  </NavLink>
                  <NavLink to="/">
                    <span className="menu__item">Middle Size</span>
                  </NavLink>
                  <NavLink to="/">
                    <span className="menu__item">Small Size</span>
                  </NavLink>
                  <NavLink to="/">
                    <span className="menu__item">Simulation</span>
                  </NavLink>
                </div>
                <div>
                  <span className="menu__header--nested">RoboCupRescue</span>
                  <NavLink to="/">
                    <span className="menu__item">Robot</span>
                  </NavLink>
                  <NavLink to="/">
                    <span className="menu__item">Simulation</span>
                  </NavLink>
                </div>
                <div>
                  <span className="menu__header--nested">RoboCup@Home</span>
                  <NavLink to="/">
                    <span className="menu__item">Open Platform</span>
                  </NavLink>
                  <NavLink to="/">
                    <span className="menu__item">
                      Domestic Standard Platform
                    </span>
                  </NavLink>
                  <NavLink to="/">
                    <span className="menu__item">Social Standard Platform</span>
                  </NavLink>
                </div>
                <div>
                  <span className="menu__header--nested">
                    RoboCupIndustrial
                  </span>
                  <NavLink to="/">
                    <span className="menu__item">RoboCup@Work</span>
                  </NavLink>
                  <NavLink to="/">
                    <span className="menu__item">Logistics</span>
                  </NavLink>
                </div>
                <div>
                  <span className="menu__header--nested">RoboCupJunior</span>
                  <NavLink to="/">
                    <span className="menu__item">Soccer</span>
                  </NavLink>
                  <NavLink to="/">
                    <span className="menu__item">OnStage</span>
                  </NavLink>
                  <NavLink to="/">
                    <span className="menu__item">Rescue</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
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
    </footer>
  );
}
