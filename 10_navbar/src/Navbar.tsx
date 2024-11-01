import { socials, links } from "./data";
import { FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <h1>
          Mohamed <span className="text-primary">Elkashef</span>
        </h1>

        <ul className="list ">
          {links.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            );
          })}
        </ul>
        <div className="bars">
          <FaBars />
        </div>

        <div className="social">
          {socials.map((social) => {
            return (
              <a href={social.url} key={social.id}>
                {social.icon}
              </a>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
