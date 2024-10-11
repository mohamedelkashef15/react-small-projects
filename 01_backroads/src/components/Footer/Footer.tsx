import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faSquarespace } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#Services">Services</a>
          </li>
          <li>
            <a href="#Tours">Tours</a>
          </li>
        </ul>
        <div className={styles.social}>
          <a href="https://facebook.com">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://x.com">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://squarespace.com">
            <FontAwesomeIcon icon={faSquarespace} />
          </a>
        </div>
        <p>
          copyright © Backroads travel tours company {new Date().getFullYear()}. Made by
          <a href="https://mohamedelkashef.com"> Mohamed Elkashef</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
