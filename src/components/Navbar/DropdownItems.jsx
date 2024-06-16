import { NavLink } from "react-router-dom";
import { children } from "react";

export default function DropdownItems({ to, onClick, children }) {
  return (
    <NavLink to={to} className="dropdown__items" onClick={onClick}>
      {children}
    </NavLink>
  );
}
