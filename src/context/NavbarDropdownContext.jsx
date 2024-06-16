import { createContext } from "react";

export const NavbarDropdownContext = createContext(null);

export default function NavbarDropdownState({ children }) {
  const [toggleDropdown, setToggleDropdown] = useState(null);

  return <NavbarDropdownContext value={}>{children}</NavbarDropdownContext>;
}
