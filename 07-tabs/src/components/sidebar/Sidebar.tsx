import { ISidebar } from "../../interfaces";
import styles from "./sidebar.module.scss";

function Sidebar({ jobs, currentIndex, setCurrentIndex }: ISidebar) {
  return (
    <div className={styles.sidebar}>
      {jobs.map((item, index) => {
        return (
          <button
            className={`btn ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            key={item.id}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
}

export default Sidebar;
