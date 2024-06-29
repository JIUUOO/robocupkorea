import { NavLink } from "react-router-dom";

import rckaLogo from "../../assets/images/logo/robocup-korea-association.png";
import robocupLogo from "../../assets/images/logo/robocup.png";
import robocupJuniorLogo from "../../assets/images/logo/robocup-junior.jpg";
import robocupAsiaPacific from "../../assets/images/logo/robocup-asia-pacific.png";

export default function Intro() {
  return (
    <div className="container">
      <div className="footer__intro">
        <div className="logo--wrapper">
          <div>
            <NavLink to={"/"}>
              <img src={rckaLogo} className="league-logo" alt="rckaLogo"></img>
            </NavLink>
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
        </div>
        <div className="league-description">
          사단법인 한국로보컵협회(이하 RCKA)는 로봇을 연구하는 학생들을 위해
          국가적 및 국제적 로봇 이벤트를 주최하는 프로젝트 중심의 교육 증진
          운동입니다.
        </div>
      </div>
    </div>
  );
}
