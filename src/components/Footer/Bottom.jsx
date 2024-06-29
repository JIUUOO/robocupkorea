import { NavLink } from "react-router-dom";

export default function Bottom() {
  return (
    <div className="footer__bottom">
      <div className="container">
        <div>
          <NavLink to="https://github.com/JIUUOO" target="_blank">
            <i className="fa fa-github"></i>
          </NavLink>
        </div>
        <div>Copyright © 한국로보컵협회. All rights reserved.</div>
      </div>
    </div>
  );
}
