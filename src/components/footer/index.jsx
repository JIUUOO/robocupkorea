import ministryLogo from "../../assets/images/organization/misintry-of-trade-industry-and-energy.jpg";
import serviceLogo from "../../assets/images/organization/national-tax-service.jpg";
import commissionLogo from "../../assets/images/organization/anti-corruption-and-civil-rights-commission.jpg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container mx-auto mt-20 mb-4">
        <div className="grid sm:grid-cols-3 mx-auto w-56 sm:w-auto">
          <img
            src={ministryLogo}
            className="h-10 sm:h-9 md:h-11 sm:mx-auto"
          ></img>
          <img
            src={serviceLogo}
            className="h-10 sm:h-9 md:h-11 sm:mx-auto"
          ></img>
          <img
            src={commissionLogo}
            className="h-10 sm:h-9 md:h-11 sm:mx-auto"
          ></img>
        </div>
      </div>
      <div className="bg-zinc-900">
        <div className="container mx-auto p-5 pb-8">
          <p className="text-end text-xs text-white">
            <span className="block">
              <strong>한국로보컵협회</strong> | Tel : 070-4247-7485
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
