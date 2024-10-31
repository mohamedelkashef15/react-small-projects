import styles from "./Navbar.module.scss";
import { socials, links } from "./data";
import { FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <nav>
        <h1>
          Mohamed <span className="text-primary">Elkashef</span>
        </h1>

        <ul className="list active">
          {links.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            );
          })}
        </ul>
        <div className={styles.bars}>
          <FaBars />
        </div>

        <div className={styles.social}>
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
