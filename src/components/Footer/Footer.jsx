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
        <div className="flex">
          <div className="block">
            <NavLink to={"/"}>
              <img src={rckaLogo} className="league__logo" alt="rckaLogo"></img>
            </NavLink>
            <a href="https://www.robocup.org/" target="_blank">
              <img
                src={robocupLogo}
                className="league__logo"
                alt="robocupLogo"
              />
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
        </div>
        <div className="">
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
