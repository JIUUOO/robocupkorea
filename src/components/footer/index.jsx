import ministryLogo from "../../assets/images/organization/misintry-of-trade-industry-and-energy.jpg";
import serviceLogo from "../../assets/images/organization/national-tax-service.jpg";
import commissionLogo from "../../assets/images/organization/anti-corruption-and-civil-rights-commission.jpg";
import robocupLogo from "../../assets/images/logo/robocup.png";
import robocupJuniorLogo from "../../assets/images/logo/robocup-junior.jpg";
import robocupAsiaPacific from "../../assets/images/logo/robocup-asia-pacific.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container my-4">
        <div className="flex justify-end flex-col">
          <div className="flex mx-auto sm:m-0">
            <a href="https://www.robocup.org/" target="_blank">
              <img
                src={robocupLogo}
                className="league-logo"
                alt="robocupLogo"
              />
            </a>
            <a href="https://junior.robocup.org/" target="_blank">
              <img
                src={robocupJuniorLogo}
                className="league-logo"
                alt="robocupLogo"
              />
            </a>
            <a href="https://robocupap.org/" target="_blank">
              <img
                src={robocupAsiaPacific}
                className="league-logo"
                alt="robocupLogo"
              />
            </a>
          </div>
          <div className="sm:flex mx-auto sm:m-0">
            <img src={ministryLogo} className="institute-logo"></img>
            <img src={serviceLogo} className="institute-logo"></img>
            <img src={commissionLogo} className="institute-logo"></img>
          </div>
        </div>
      </div>
      <div className="bg-zinc-900">
        <div className="container p-5 pb-8">
          <p className="text-end text-xs text-white">
            <span className="block">
              <span className="font-bold">한국로보컵협회</span> | Tel :
              070-4247-7485
            </span>
            <span className="block">
              주소: 서울시 서초구 서운로 13 중앙로얄 오피스텔 1308
            </span>
            <span className="block pt-2">
              Copyright © 한국로보컵협회. All rights reserved.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
