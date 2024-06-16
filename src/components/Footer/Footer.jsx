import ministryLogo from "../../assets/images/institute/misintry-of-trade-industry-and-energy.jpg";
import serviceLogo from "../../assets/images/institute/national-tax-service.jpg";
import commissionLogo from "../../assets/images/institute/anti-corruption-and-civil-rights-commission.jpg";
import rckaLogo from "../../assets/images/logo/robocup-korea-association.png";
import robocupLogo from "../../assets/images/logo/robocup.png";
import robocupJuniorLogo from "../../assets/images/logo/robocup-junior.jpg";
import robocupAsiaPacific from "../../assets/images/logo/robocup-asia-pacific.png";

export default function Footer() {
  return (
    <div className="footer border-t">
      <div className="container my-4">
        <div className="flex">
          <div className="block">
            <div className="h-16">
              <img src={rckaLogo} className="max-h-16 py-1"></img>
            </div>
            <a href="https://www.robocup.org/" target="_blank">
              <img
                src={robocupLogo}
                className="max-h-14 py-1"
                alt="robocupLogo"
              />
            </a>
            <a href="https://junior.robocup.org/" target="_blank">
              <img
                src={robocupJuniorLogo}
                className="max-h-14 py-1"
                alt="robocupLogo"
              />
            </a>
            <a href="https://robocupap.org/" target="_blank">
              <img
                src={robocupAsiaPacific}
                className="max-h-14 py-1"
                alt="robocupLogo"
              />
            </a>
          </div>
          <div>
            <span className="block">한국로보컵협회</span>
            <span className="block">소개</span>
            <span className="block">운영위원</span>
          </div>
        </div>
      </div>
      <div className="container pb-10">
        <div className="flex flex-col lg:flex-row justify-end lg:justify-between lg:items-end my-4 mr-0 sm:w-auto">
          <div className="grid sm:grid-cols-3 mx-auto sm:mx-0">
            <img src={ministryLogo} className="h-9 sm:h-10 sm:mx-auto"></img>
            <img src={serviceLogo} className="h-9 sm:h-10 sm:mx-auto"></img>
            <img src={commissionLogo} className="h-9 sm:h-10 sm:mx-auto"></img>
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
              <span className="block pt-2">
                Copyright © 한국로보컵협회. All rights reserved.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
