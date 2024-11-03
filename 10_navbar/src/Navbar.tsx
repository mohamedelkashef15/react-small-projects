import { useRef, useState } from "react";
import { socials, links } from "./data";
import { FaBars } from "react-icons/fa";
/*
  Toggle between active/notactive when click to current component
*/
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const refContainer = useRef<HTMLDivElement | null>(null);
  const refLinks = useRef<HTMLUListElement | null>(null);

  function handleToggleMenu() {
    setShowMenu(!showMenu);
    console.log(showMenu);
  }

  const linkStyle = {
    height: showMenu && refLinks.current ? `${refLinks.current.getBoundingClientRect().height}px ` : "0",
  };

  return (
    <div className="navbar">
      <nav>
        <h1>
          Mohamed <span className="text-primary">Elkashef</span>
        </h1>
        <div className="list-container" ref={refContainer} style={linkStyle}>
          <ul className="list" ref={refLinks}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="bars" onClick={handleToggleMenu}>
          <FaBars />
        </div>
        <div className="social">
          {socials.map((social) => {
            const { id, url, icon } = social;
            return (
              <a href={url} key={id}>
                {icon}
              </a>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
