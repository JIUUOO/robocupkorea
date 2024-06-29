import ministryLogo from "../../assets/images/institute/misintry-of-trade-industry-and-energy.jpg";
import serviceLogo from "../../assets/images/institute/national-tax-service.jpg";
import commissionLogo from "../../assets/images/institute/anti-corruption-and-civil-rights-commission.jpg";

export default function Outro() {
  return (
    <div className="container">
      <div className="footer__outro">
        <div className="rcka-info">
          <div>
            <span className="rcka-info--bold">한국로보컵협회</span> | Tel :
            070-4247-7485
          </div>
          <div>주소: 서울시 서초구 서운로 13 중앙로얄 오피스텔 1308</div>
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
      </div>
    </div>
  );
}
