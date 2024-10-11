import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../images/logo.svg";
import { faFacebook, faSquarespace, faTwitter } from "@fortawesome/free-brands-svg-icons";
import styles from "./Navbar.module.scss";
import { PageLinks } from "../../data";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <nav className={styles.nav}>
        <img src={Logo} alt="backroads" />
        <ul>
          {PageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href}>{link.text}</a>
              </li>
            );
          })}
        </ul>
        <div className={styles.social}>
          <a href="https://facebook.com" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://x.com" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://squarespace.com" rel="noreferrer">
            <FontAwesomeIcon icon={faSquarespace} />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
