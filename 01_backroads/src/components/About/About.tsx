import styles from "./About.module.scss";
import about from "../../images/about.jpeg";
import SectionTitle from "../SectionTitle";

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        {/* <h2 className="heading-2">
          ABOUT <span className="text-primary">US </span>
        </h2> */}
        <SectionTitle name1="ABOUT" name2="US" />
        <div className={styles.row}>
          <div className={styles.aboutImg}>
            <div className={styles.border}></div>
            <img src={about} alt="About" />
          </div>
          <div className={styles.aboutContent}>
            <h3>Explore The Difference</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus
              explicabo dolorum sapiente odio unde dolor?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus
              explicabo dolorum sapiente odio unde dolor?
            </p>
            <a href="#" className="btn btn-secondary">
              READ MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
