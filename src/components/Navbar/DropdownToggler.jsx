export default function DropdownToggler({ nested = false, children }) {
  return (
    <a
      href="/"
      className={nested ? "dropdown__toggler--nested" : "dropdown__toggler"}
      onClick={(evt) => evt.preventDefault()}
    >
      {children}
    </a>
  );
}
