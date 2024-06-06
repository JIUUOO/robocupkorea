import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [scrollY, setScrollY] = useState(0);
  let { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <GlobalContext.Provider value={{ scrollY, pathname }}>
      {children}
    </GlobalContext.Provider>
  );
}
