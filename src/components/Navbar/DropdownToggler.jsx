export default function DropdownToggler({ children }) {
  return (
    <a
      href="/"
      className="dropdown__toggler"
      onClick={(evt) => evt.preventDefault()}
    >
      {children}
    </a>
  );
}
