import styles from "./sidebar.module.scss";

function Sidebar({ setIndex }) {
  return (
    <div className={styles.sidebar}>
      <button className={styles.btn} onClick={() => setIndex(0)}>
        Tommy
      </button>
      <button className={styles.btn} onClick={() => setIndex(1)}>
        BIGDROP
      </button>
      <button className={styles.btn} onClick={() => setIndex(2)}>
        CUKER
      </button>
    </div>
  );
}

export default Sidebar;
