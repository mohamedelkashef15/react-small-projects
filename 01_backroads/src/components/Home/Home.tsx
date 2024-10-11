import styles from "./Home.module.scss";

function Home() {
  return (
    <div id="home" className={styles.headerContent}>
      <h1>BACKROADS APP</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae explicabo debitis est autem dicta.</p>
      <a href="#tours" className="btn btn-primary">
        EXPLORE TOURS
      </a>
    </div>
  );
}

export default Home;
