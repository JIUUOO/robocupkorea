import Intro from "./Intro";
import Nav from "./Nav";
import Outro from "./Outro";
import Bottom from "./Bottom";

export default function Footer() {
  return (
    <footer className="footer">
      <Intro />
      <Nav />
      <Outro />
      <Bottom />
    </footer>
  );
}
