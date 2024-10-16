import styles from "./Tours.module.scss";

function NoTours({ fetchData }: { fetchData: () => void }) {
  return (
    <section className={styles.tours}>
      <div className="container">
        <h1>No Tours Left</h1>
        <div className={styles.lineThrough}></div>
        <button className="btn" onClick={() => fetchData()}>
          Refresh
        </button>
      </div>
    </section>
  );
}

export default NoTours;
